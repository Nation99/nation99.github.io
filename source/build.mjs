import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { site } from "./site.config.mjs";
import { plan, planBySlug, categories } from "./content/articles/plan.mjs";
import { articleWordCount, articlePath, stripTags, renderArticlePage } from "./lib/layout.mjs";
import {
  renderHomePage,
  renderPredictorPage,
  renderArticlesPage,
  renderAboutPage,
  renderContactPage,
  renderEditorialPolicyPage,
  renderPrivacyPage,
  renderTermsPage,
  renderDisclaimerPage,
  renderResponsibleGamblingPage,
  renderGlossaryPage,
  renderNotFoundPage,
} from "./content/pages/index.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
const articleDir = path.join(root, "content", "articles");

function currentCatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Harare",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

const publishDate = process.env.PUBLISH_DATE || currentCatDate();
if (!/^\d{4}-\d{2}-\d{2}$/.test(publishDate)) {
  throw new Error(`PUBLISH_DATE must use YYYY-MM-DD, received "${publishDate}"`);
}
const buildDate = publishDate;

const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function normaliseUrl(urlPath) {
  if (urlPath === "/") return "/";
  return urlPath.replace(/\/index\.html$/, "/");
}

function absolute(pagePath) {
  return `${site.url.replace(/\/$/, "")}${normaliseUrl(pagePath)}`;
}

function publicPathPrefix() {
  try {
    return new URL(site.url).pathname.replace(/\/$/, "");
  } catch (error) {
    return "";
  }
}

async function loadArticles() {
  const files = (await fs.readdir(articleDir))
    .filter((file) => file.endsWith(".mjs") && !["plan.mjs", "_template.mjs"].includes(file))
    .sort();
  const articles = [];
  const fileSlugs = new Set();

  for (const file of files) {
    const url = pathToFileURL(path.join(articleDir, file)).href;
    let mod;
    try {
      mod = await import(url);
    } catch (error) {
      fail(`Article failed to load: ${file}: ${error.message}`);
      continue;
    }
    const article = mod.default;
    if (!article || typeof article !== "object") {
      fail(`Article has no default export: ${file}`);
      continue;
    }
    const expected = planBySlug[article.slug];
    if (!expected) {
      fail(`Article slug is not in plan.mjs: ${file} (${article.slug})`);
      continue;
    }
    if (fileSlugs.has(article.slug)) fail(`Duplicate article slug: ${article.slug}`);
    fileSlugs.add(article.slug);
    if (article.category !== expected.category) {
      fail(`${article.slug}: category ${article.category} does not match plan ${expected.category}`);
    }
    if (!categories.includes(article.category)) {
      fail(`${article.slug}: unknown category ${article.category}`);
    }
    if (article.author !== site.author) fail(`${article.slug}: author must be ${site.author}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(article.published || "")) fail(`${article.slug}: invalid published date`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(article.updated || "")) fail(`${article.slug}: invalid updated date`);
    if ((article.published || "") > (article.updated || "")) fail(`${article.slug}: published after updated`);
    if ((article.metaTitle || "").length > 60) fail(`${article.slug}: metaTitle is ${article.metaTitle.length} characters`);
    if ((article.description || "").length > 155) fail(`${article.slug}: description is ${article.description.length} characters`);
    if ((article.faq || []).length !== 3) fail(`${article.slug}: needs exactly 3 FAQ entries`);
    if ((article.related || []).length !== 3) fail(`${article.slug}: needs exactly 3 related slugs`);
    for (const related of article.related || []) {
      if (!planBySlug[related]) fail(`${article.slug}: related slug missing from plan: ${related}`);
    }
    const words = articleWordCount(article);
    if (words < 1200) fail(`${article.slug}: only ${words} words (minimum 1200)`);
    if (words > 1800) fail(`${article.slug}: ${words} words (maximum 1800)`);
    const sections = article.sections || [];
    if (!sections.some((section) => section.id === "worked-example")) fail(`${article.slug}: missing worked-example section`);
    if (!sections.some((section) => section.id === "common-mistakes")) fail(`${article.slug}: missing common-mistakes section`);
    if (new Set(sections.map((section) => section.id)).size !== sections.length) fail(`${article.slug}: duplicate section ids`);
    if (new Set(sections.map((section) => section.heading)).size !== sections.length) fail(`${article.slug}: duplicate section headings`);
    if (sections.some((section) => /<h1[\s>]/i.test(section.html))) fail(`${article.slug}: h1 inside section html`);
    if (/<h1[\s>]/i.test(article.intro || "")) fail(`${article.slug}: h1 inside intro`);
    const inlineLinks = ((article.intro || "") + sections.map((section) => section.html).join(" "))
      .match(/href="\/articles\/[^"#?]+/g) || [];
    if (inlineLinks.length < 2) fail(`${article.slug}: needs at least 2 inline internal article links`);
    if (inlineLinks.length > 3) warn(`${article.slug}: has ${inlineLinks.length} inline internal article links (recommended 2 to 3)`);
    articles.push(article);
  }

  for (const item of plan) {
    if (!fileSlugs.has(item.slug)) fail(`Missing planned article module: ${item.slug}`);
  }

  articles.sort((a, b) => {
    if (a.updated !== b.updated) return a.updated < b.updated ? 1 : -1;
    return a.title.localeCompare(b.title);
  });

  return articles;
}

function scanHtml(route, html) {
  if ((html.match(/<html[\s>]/gi) || []).length !== 1) fail(`${route}: expected exactly one <html>`);
  if ((html.match(/<head[\s>]/gi) || []).length !== 1) fail(`${route}: expected exactly one <head>`);
  if ((html.match(/<body[\s>]/gi) || []).length !== 1) fail(`${route}: expected exactly one <body>`);
  if ((html.match(/<h1[\s>]/gi) || []).length !== 1) fail(`${route}: expected exactly one h1, found ${(html.match(/<h1[\s>]/gi) || []).length}`);
  if (/<\/header>\s*<head>/i.test(html)) fail(`${route}: stray </header> before head`);
  if (/<amp-embed[\s>]/i.test(html)) fail(`${route}: amp-embed is not allowed`);
  if (/cdn\.ampproject\.org\/v0\.js/i.test(html)) fail(`${route}: AMP runtime is not allowed`);
  if (/[\u2014\u2013]/.test(html)) fail(`${route}: contains an em dash or en dash`);

  const banned = [
    "high-probability selections",
    "institutional-grade",
    "ai-powered",
    "safe prediction",
    "safest bet",
    "value bet",
    "guaranteed",
    "sure win",
    "risk-free",
    "beat the bookmaker",
    "easy money",
    "winning system",
    "banker",
  ];
  const text = String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " \u0001 ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
  for (const phrase of banned) {
    if (text.includes(phrase)) fail(`${route}: contains banned phrase "${phrase}"`);
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length) fail(`${route}: duplicate id(s): ${[...new Set(duplicateIds)].join(", ")}`);

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      fail(`${route}: invalid JSON-LD: ${error.message}`);
    }
  }

  const title = html.match(/<title>([^<]*)<\/title>/);
  if (!title) fail(`${route}: missing title`);
  else if (title[1].length > 60) fail(`${route}: title is ${title[1].length} characters`);
  const description = html.match(/<meta name="description" content="([^"]*)"/);
  if (!description) fail(`${route}: missing meta description`);
  else if (description[1].length > 155) fail(`${route}: meta description is ${description[1].length} characters`);
  if (!/<meta name="google-adsense-account" content="ca-pub-XXXXXXXXXXXXXXXX">/.test(html)) {
    warn(`${route}: AdSense account meta placeholder not found`);
  }
  if (!/class="skip-link"/.test(html)) fail(`${route}: missing skip link`);
  if (!/aria-label="Primary"/.test(html)) fail(`${route}: missing primary navigation landmark`);
  if ((html.match(/class="ad-slot/g) || []).length) {
    const adBlocks = html.match(/<aside class="ad-slot[\s\S]*?<\/aside>/g) || [];
    for (const block of adBlocks) {
      if (!/Advertisement/.test(block)) fail(`${route}: ad slot without Advertisement label`);
    }
  }
}

function localReferences(html) {
  const withoutBase = String(html).replace(/<base\b[^>]*>/gi, " ");
  return [...withoutBase.matchAll(/\s(?:href|src)="([^"]*)"/g)].map((match) => match[1]);
}

function resolveRouteReference(route, reference) {
  const pathOnly = reference.split("#")[0].split("?")[0];
  if (!pathOnly) return route;
  const base = path.posix.dirname(route);
  let resolved = pathOnly.startsWith("/")
    ? path.posix.normalize(pathOnly)
    : path.posix.normalize(path.posix.join(base, pathOnly));
  if (pathOnly.endsWith("/") && !resolved.endsWith("/")) resolved += "/";
  return resolved;
}

function distTargetForRoute(routePath) {
  const parts = routePath.split("/").filter(Boolean);
  if (!parts.length) return path.join(dist, "index.html");
  if (routePath.endsWith("/")) return path.join(dist, ...parts, "index.html");
  return path.join(dist, ...parts);
}

function isExternalReference(reference) {
  return /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(reference);
}

function checkInternalLinks(route, html) {
  for (const reference of localReferences(html)) {
    if (!reference || isExternalReference(reference) || reference.startsWith("#")) continue;
    const target = distTargetForRoute(resolveRouteReference(route, reference));
    const relative = path.relative(dist, target);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      fail(`${route}: link escapes dist: ${reference}`);
    }
  }
}

async function write(relativePath, contents) {
  const target = path.join(dist, relativePath);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, contents, "utf8");
}

async function exists(target) {
  try {
    await fs.access(target);
    return true;
  } catch (error) {
    return false;
  }
}

async function verifyInternalLinks(files) {
  for (const [route, html] of files) {
    for (const reference of localReferences(html)) {
      if (!reference || isExternalReference(reference) || reference.startsWith("#")) continue;
      const target = distTargetForRoute(resolveRouteReference(route, reference));
      if (!(await exists(target))) fail(`${route}: broken internal link ${reference}`);
    }
  }
}

async function main() {
  await fs.rm(dist, { recursive: true, force: true });
  await fs.mkdir(dist, { recursive: true });

  const allArticles = await loadArticles();
  const articles = allArticles.filter((article) => article.published <= publishDate);
  const rendered = new Map();

  const staticPages = [
    { route: "/index.html", html: renderHomePage(articles), lastmod: articles[0]?.updated || buildDate },
    { route: "/predictor.html", html: renderPredictorPage(), lastmod: "2026-11-18" },
    { route: "/articles/index.html", html: renderArticlesPage(articles), lastmod: articles[0]?.updated || buildDate },
    { route: "/about.html", html: renderAboutPage(), lastmod: "2026-11-18" },
    { route: "/contact.html", html: renderContactPage(), lastmod: "2026-11-18" },
    { route: "/editorial-policy.html", html: renderEditorialPolicyPage(), lastmod: "2026-11-18" },
    { route: "/privacy.html", html: renderPrivacyPage(), lastmod: "2026-11-18" },
    { route: "/terms.html", html: renderTermsPage(), lastmod: "2026-11-18" },
    { route: "/disclaimer.html", html: renderDisclaimerPage(), lastmod: "2026-11-18" },
    { route: "/responsible-gambling.html", html: renderResponsibleGamblingPage(), lastmod: "2026-11-18" },
    { route: "/glossary.html", html: renderGlossaryPage(), lastmod: "2026-11-18" },
    { route: "/404.html", html: renderNotFoundPage(), lastmod: buildDate, noindex: true },
  ];

  for (const page of staticPages) {
    rendered.set(page.route, page.html);
    await write(page.route.replace(/^\//, ""), page.html);
  }

  for (const article of articles) {
    const related = (article.related || [])
      .map((slug) => articles.find((item) => item.slug === slug))
      .filter(Boolean);
    const html = renderArticlePage(article, related);
    const route = articlePath(article);
    rendered.set(route, html);
    await write(route.replace(/^\//, ""), html);
  }

  for (const [route, html] of rendered) {
    scanHtml(route, html);
    checkInternalLinks(route, html);
  }

  const titles = new Map();
  for (const [route, html] of rendered) {
    const title = html.match(/<title>([^<]*)<\/title>/)?.[1] || "";
    if (titles.has(title)) fail(`Duplicate title on ${route} and ${titles.get(title)}: ${title}`);
    titles.set(title, route);
  }

  await fs.cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });

  const sitemapRoutes = staticPages
    .filter((page) => !page.noindex)
    .map((page) => ({ route: page.route, lastmod: page.lastmod }))
    .concat(articles.map((article) => ({ route: articlePath(article), lastmod: article.updated })));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map((item) => `  <url>
    <loc>${escapeXml(absolute(item.route))}</loc>
    <lastmod>${escapeXml(item.lastmod)}</lastmod>
  </url>`).join("\n")}
</urlset>
`;
  await write("sitemap.xml", sitemap);

  await write("robots.txt", `User-agent: *
Allow: ${publicPathPrefix() || ""}/
Disallow: ${publicPathPrefix()}/404.html
Disallow: ${publicPathPrefix()}/source/

User-agent: Mediapartners-Google
Allow: /

Sitemap: ${site.url.replace(/\/$/, "")}/sitemap.xml
`);

  await write(
    "ads.txt",
    `google.com, ${site.adsensePublisher}, DIRECT, f08c47fec0942fa0\n`,
  );

  await write(
    "site.webmanifest",
    `${JSON.stringify({
      name: site.name,
      short_name: site.shortName,
      description: site.description,
      start_url: "./",
      scope: "./",
      display: "standalone",
      background_color: "#0b1b33",
      theme_color: "#0b1b33",
      icons: [
        { src: "./assets/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
        { src: "./assets/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
        { src: "./assets/favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" },
      ],
    }, null, 2)}\n`,
  );

  await write(".nojekyll", "");

  for (const asset of [
    "favicon.svg",
    "apple-touch-icon.png",
    "icon-192.png",
    "icon-512.png",
    "logo.png",
    "og-default.png",
  ]) {
    if (!(await exists(path.join(dist, "assets", asset)))) fail(`Missing required asset: /assets/${asset}`);
  }

  await verifyInternalLinks(rendered);

  const articleCount = articles.length;
  const totalWords = articles.reduce((sum, article) => sum + articleWordCount(article), 0);

  if (warnings.length) {
    console.warn(`\n${warnings.length} warning(s):`);
    for (const message of warnings) console.warn(`  ! ${message}`);
  }

  if (errors.length) {
    console.error(`\nBuild failed with ${errors.length} error(s):`);
    for (const message of errors) console.error(`  x ${message}`);
    process.exitCode = 1;
    return;
  }

  console.log(`Built ${rendered.size} HTML pages.`);
  console.log(`Publish date: ${publishDate} (Africa/Harare).`);
  console.log(`Articles: ${articleCount} due, ${allArticles.length - articleCount} queued (${totalWords.toLocaleString("en-GB")} words live).`);
  console.log(`Sitemap URLs: ${sitemapRoutes.length}.`);
  console.log(`Output: ${dist}`);
}

await main();
