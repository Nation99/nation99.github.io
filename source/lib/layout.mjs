import { site } from "../site.config.mjs";
import path from "node:path";

/* -------------------------------------------------------------------------
   Small helpers
   ---------------------------------------------------------------------- */

export function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function stripTags(html = "") {
  return String(html)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function articleWordCount(article) {
  const parts = [
    article.dek,
    article.intro,
    ...(article.takeaways || []),
    ...(article.sections || []).flatMap((section) => [section.heading, section.html]),
    ...(article.faq || []).flatMap((item) => [item.q, item.a]),
  ];
  const text = stripTags(parts.join(" "));
  return text ? text.split(/\s+/).filter(Boolean).length : 0;
}

export function readingTime(article) {
  return `${Math.max(1, Math.ceil(articleWordCount(article) / 220))} min read`;
}

export function formatDate(iso) {
  if (!iso) return "";
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function absoluteUrl(pathname = "/") {
  if (/^https?:\/\//i.test(pathname)) return pathname;
  return `${site.url}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export function articlePath(article) {
  return `/articles/${article.slug}.html`;
}

export function articleUrl(article) {
  return absoluteUrl(articlePath(article));
}

/* -------------------------------------------------------------------------
   Navigation
   ---------------------------------------------------------------------- */

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/predictor.html", label: "Predictor" },
  { href: "/articles/", label: "Articles" },
  { href: "/glossary.html", label: "Glossary" },
  { href: "/about.html", label: "About" },
  { href: "/contact.html", label: "Contact" },
];

export const moreNav = [
  { href: "/editorial-policy.html", label: "Editorial policy" },
  { href: "/privacy.html", label: "Privacy policy" },
  { href: "/terms.html", label: "Terms of use" },
  { href: "/disclaimer.html", label: "Disclaimer" },
  { href: "/responsible-gambling.html", label: "Responsible gambling" },
];

function isCurrent(path, href) {
  if (href === "/") return path === "/" || path === "/index.html";
  if (href === "/articles/") return path === "/articles/" || path.startsWith("/articles/");
  return path === href || path === href.replace(/\.html$/, "");
}

function navLink(item, currentPath, className = "") {
  const current = isCurrent(currentPath, item.href);
  return `<a href="${item.href}"${current ? ' aria-current="page"' : ""}${className ? ` class="${className}"` : ""}>${esc(item.label)}</a>`;
}

/* -------------------------------------------------------------------------
   Structured data
   ---------------------------------------------------------------------- */

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: site.language,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.url}/articles/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function organizationNode() {
  const node = {
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: `${site.url}/`,
    description: site.description,
    email: site.email,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/assets/logo.png"),
      width: 512,
      height: 512,
    },
    founder: {
      "@type": "Person",
      name: site.author,
      url: absoluteUrl("/about.html"),
    },
    publishingPrinciples: absoluteUrl("/editorial-policy.html"),
    contactPoint: {
      "@type": "ContactPoint",
      email: site.email,
      contactType: "editorial",
    },
  };
  const sameAs = Object.values(site.social || {}).filter(Boolean);
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}

function webPageNode({ title, description, canonicalPath }) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(canonicalPath)}#webpage`,
    url: absoluteUrl(canonicalPath),
    name: title,
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    inLanguage: site.language,
    about: { "@id": `${site.url}/#organization` },
  };
}

export function breadcrumbNode(items, canonicalPath = "/") {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(canonicalPath)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function faqNode(faq = []) {
  return {
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleNode(article) {
  const url = articleUrl(article);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.updated,
    author: {
      "@type": "Person",
      name: article.author,
      url: absoluteUrl("/about.html"),
    },
    publisher: { "@id": `${site.url}/#organization` },
    mainEntityOfPage: { "@id": `${url}#webpage` },
    articleSection: article.category,
    keywords: (article.tags || []).join(", "),
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(site.ogImage),
      width: 1200,
      height: 630,
    },
    inLanguage: site.language,
    isAccessibleForFree: true,
  };
}

function jsonLdScript(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`;
}

/* -------------------------------------------------------------------------
   Head
   ---------------------------------------------------------------------- */

export function renderHead({
  title,
  description,
  canonicalPath = "/",
  image = site.ogImage,
  noindex = false,
  article = null,
  schema = [],
  extraHead = "",
}) {
  const canonical = absoluteUrl(canonicalPath);
  const imageUrl = absoluteUrl(image);
  const ogType = article ? "article" : "website";
  const robots = noindex
    ? "noindex, nofollow"
    : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

  const graph = [
    websiteNode(),
    organizationNode(),
    webPageNode({ title, description, canonicalPath }),
    ...schema,
  ];

  const articleMeta = article
    ? `
  <meta property="article:published_time" content="${esc(article.published)}">
  <meta property="article:modified_time" content="${esc(article.updated)}">
  <meta property="article:section" content="${esc(article.category)}">
  ${(article.tags || []).map((tag) => `<meta property="article:tag" content="${esc(tag)}">`).join("\n  ")}`
    : "";

  const adsenseScript = /X{4,}/i.test(site.adsenseClient)
    ? "<!-- AdSense: replace site.adsenseClient with your approved publisher ID and rebuild. -->"
    : `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(site.adsenseClient)}" crossorigin="anonymous"></script>`;

  return `
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <meta name="author" content="${esc(site.author)}">
  <meta name="robots" content="${robots}">
  <meta name="theme-color" content="${esc(site.themeColor)}">
  <meta name="format-detection" content="telephone=no">
  <link rel="canonical" href="${esc(canonical)}">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <link rel="preconnect" href="https://www.googletagmanager.com" crossorigin>
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:type" content="${ogType}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${esc(canonical)}">
  <meta property="og:image" content="${esc(imageUrl)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="Elite Football Predictor, football analytics and education">
  <meta property="og:locale" content="${esc(site.locale)}">${articleMeta}
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${esc(imageUrl)}">
  <meta name="twitter:image:alt" content="Elite Football Predictor, football analytics and education">
  <meta name="google-adsense-account" content="${esc(site.adsenseClient)}">
  <meta name="adsense-client" content="${esc(site.adsenseClient)}">
  <script>
    (function () {
      try {
        var saved = localStorage.getItem("efp-theme");
        var theme = saved === "dark" || saved === "light"
          ? saved
          : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        document.documentElement.setAttribute("data-theme", theme);
      } catch (error) {
        document.documentElement.setAttribute("data-theme", "light");
      }
    }());
  </script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'granted',
      security_storage: 'granted',
      wait_for_update: 500
    });
    gtag('set', 'ads_data_redaction', true);
    gtag('js', new Date());
    gtag('config', '${esc(site.gaId)}', { anonymize_ip: true });
  </script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=${esc(site.gaId)}"></script>
  ${adsenseScript}
  ${jsonLdScript({ "@context": "https://schema.org", "@graph": graph })}
  ${extraHead}`;
}

/* -------------------------------------------------------------------------
   Header and footer
   ---------------------------------------------------------------------- */

export function renderHeader(currentPath = "/") {
  const moreCurrent = moreNav.some((item) => isCurrent(currentPath, item.href));
  return `
  <header class="site-header">
    <div class="wrap inner">
      <a class="brand" href="/" aria-label="${esc(site.name)} home">
        <span class="brand-mark" aria-hidden="true">EFP</span>
        <span class="brand-text">
          <span>${esc(site.name)}</span>
          <small>Analytics and education</small>
        </span>
      </a>
      <nav class="nav" aria-label="Primary">
        ${primaryNav.map((item) => navLink(item, currentPath)).join("")}
        <details class="nav-more"${moreCurrent ? ' data-current="true"' : ""}>
          <summary${moreCurrent ? ' aria-current="page"' : ""}>More</summary>
          <div class="nav-menu">
            ${moreNav.map((item) => navLink(item, currentPath)).join("")}
          </div>
        </details>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" id="themeToggle" type="button" aria-label="Switch to dark theme" aria-pressed="false" title="Switch colour theme">
          <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path>
          </svg>
        </button>
        <button class="icon-btn nav-toggle" id="navToggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu">
          <svg class="menu-open" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
            <path d="M4 7h16M4 12h16M4 17h16"></path>
          </svg>
          <svg class="menu-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true" focusable="false">
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="mobile-nav" id="mobileNav" hidden>
      <div class="wrap">
        <p class="mobile-label">Explore</p>
        <ul>
          ${primaryNav.map((item) => `<li>${navLink(item, currentPath)}</li>`).join("")}
        </ul>
        <p class="mobile-label">Policies and standards</p>
        <ul>
          ${moreNav.map((item) => `<li>${navLink(item, currentPath)}</li>`).join("")}
        </ul>
        <p class="mobile-note">Estimates are not advice. 18+. <a href="/responsible-gambling.html">Support and responsible gambling</a>.</p>
      </div>
    </div>
  </header>`;
}

export function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-about">
          <div class="footer-brand">
            <span class="brand-mark" aria-hidden="true">EFP</span>
            <strong>${esc(site.name)}</strong>
          </div>
          <p>Football analytics explained in plain language. We publish original guides, a transparent statistical model, and honest notes on uncertainty.</p>
          <p class="footer-age"><span class="age-badge">18+</span> Estimates are not advice. If gambling is affecting your life, stop and seek support.</p>
        </div>
        <nav aria-labelledby="footer-explore">
          <h2 id="footer-explore">Explore</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/predictor.html">Predictor tool</a></li>
            <li><a href="/articles/">Articles</a></li>
            <li><a href="/articles/?category=xG%20and%20Stats">xG and stats</a></li>
            <li><a href="/articles/?category=Tactics">Tactics</a></li>
            <li><a href="/glossary.html">Glossary</a></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-company">
          <h2 id="footer-company">Company</h2>
          <ul>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/editorial-policy.html">Editorial policy</a></li>
            <li><a href="/articles/?category=Beginner%20Guides">Beginner guides</a></li>
            <li><a href="/articles/?category=Leagues">League guides</a></li>
          </ul>
        </nav>
        <nav aria-labelledby="footer-legal">
          <h2 id="footer-legal">Legal</h2>
          <ul>
            <li><a href="/privacy.html">Privacy policy</a></li>
            <li><a href="/terms.html">Terms of use</a></li>
            <li><a href="/disclaimer.html">Disclaimer</a></li>
            <li><a href="/responsible-gambling.html">Responsible gambling</a></li>
            <li><button class="link-button" type="button" data-open-consent>Manage cookie settings</button></li>
          </ul>
        </nav>
      </div>
      <div class="footer-help">
        <p><strong>Need support?</strong> GambleAware, BeGambleAware and Gamblers Anonymous offer free, independent help.</p>
        <div class="footer-help-links">
          <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">GambleAware</a>
          <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware</a>
          <a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener noreferrer">Gamblers Anonymous</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} ${esc(site.name)}. All rights reserved.</p>
        <p>Estimates are not advice. No bookmaker links. No betting transactions. 18+.</p>
      </div>
    </div>
  </footer>`;
}

export function renderCookieBanner() {
  return `
  <section class="cookie-banner" id="cookieBanner" role="dialog" aria-labelledby="cookieTitle" aria-describedby="cookieText" hidden>
    <h2 id="cookieTitle">Cookies and your choice</h2>
    <p id="cookieText">We use essential cookies to run the site. With your permission, we also use analytics and advertising cookies to understand traffic and fund the site. You can change your choice at any time. Read our <a href="/privacy.html">privacy policy</a>.</p>
    <div class="cookie-actions">
      <button class="btn btn-ghost btn-sm" type="button" data-consent="reject">Reject non-essential</button>
      <button class="btn btn-primary btn-sm" type="button" data-consent="accept">Accept all</button>
    </div>
    <p class="cookie-note">Essential storage is always on. Advertising and analytics stay off until you accept.</p>
  </section>`;
}

/* -------------------------------------------------------------------------
   Advertising
   ---------------------------------------------------------------------- */

export function adsenseIsPlaceholder() {
  return /X{4,}/i.test(site.adsenseClient) || /X{4,}/i.test(site.adsensePublisher);
}

export function adSlot({ variant = "inline", slot = site.adsenseSlots.inline, label = "Advertisement" } = {}) {
  const active = !adsenseIsPlaceholder() && !/^0+$/.test(slot);
  return `
  <aside class="ad-slot ad-slot--${esc(variant)}" aria-label="${esc(label)}" data-ad-slot="${esc(slot)}">
    <span class="ad-label">${esc(label)}</span>
    ${active
      ? `<ins class="adsbygoogle" style="display:block;width:100%;min-height:250px" data-ad-client="${esc(site.adsenseClient)}" data-ad-slot="${esc(slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins>`
      : `<p class="ad-placeholder">Reserved advertising space. Add your AdSense publisher and slot IDs to activate.</p>`}
  </aside>`;
}

/* -------------------------------------------------------------------------
   Reusable page pieces
   ---------------------------------------------------------------------- */

export function renderBreadcrumbs(items) {
  return `
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol>
      ${items.map((item, index) => {
        const last = index === items.length - 1;
        const content = last || !item.path
          ? `<span aria-current="page">${esc(item.name)}</span>`
          : `<a href="${item.path}">${esc(item.name)}</a>`;
        return `<li>${content}</li>`;
      }).join("")}
    </ol>
  </nav>`;
}

export function renderTakeaways(items = []) {
  if (!items.length) return "";
  return `
  <aside class="takeaways" aria-labelledby="takeaways-title">
    <h2 id="takeaways-title">Key takeaways</h2>
    <ul>${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>
  </aside>`;
}

export function renderFaq(faq = [], idPrefix = "faq") {
  if (!faq.length) return "";
  return `
  <section class="article-faq" aria-labelledby="${esc(idPrefix)}-title">
    <h2 id="${esc(idPrefix)}-title">Frequently asked questions</h2>
    ${faq.map((item) => `
    <details class="faq-item">
      <summary>${esc(item.q)}</summary>
      <div class="faq-answer"><p>${esc(item.a)}</p></div>
    </details>`).join("")}
  </section>`;
}

export function renderArticleCard(article, headingLevel = 3) {
  const tag = `h${headingLevel}`;
  return `
  <article class="article-card" data-category="${esc(article.category)}" data-title="${esc(article.title.toLowerCase())}" data-slug="${esc(article.slug)}">
    <span class="cat">${esc(article.category)}</span>
    <${tag}><a href="${articlePath(article)}">${esc(article.title)}</a></${tag}>
    <p>${esc(article.description)}</p>
    <div class="meta">
      <span>${esc(readingTime(article))}</span>
      <span>${esc(formatDate(article.updated))}</span>
    </div>
  </article>`;
}

export function renderRelated(article, related = []) {
  if (!related.length) return "";
  return `
  <aside class="related" aria-labelledby="related-title">
    <h2 id="related-title">Related reading</h2>
    <div class="related-grid">
      ${related.map((item) => `
      <a class="related-card" href="${articlePath(item)}">
        <span class="cat">${esc(item.category)}</span>
        <strong>${esc(item.title)}</strong>
      </a>`).join("")}
    </div>
  </aside>`;
}

export function renderAuthorBox() {
  return `
  <div class="author-box">
    <div class="avatar" aria-hidden="true">N</div>
    <div>
      <strong>${esc(site.author)}</strong>
      <p>Founder and editor of ${esc(site.name)}. Writes about football data, tactical structure, and the limits of prediction. No tips, no bookmaker links, no invented track record.</p>
      <p><a href="/about.html">About the author</a> &middot; <a href="/editorial-policy.html">Editorial policy</a> &middot; <a href="/contact.html">Contact</a></p>
    </div>
  </div>`;
}

/* -------------------------------------------------------------------------
   Article page
   ---------------------------------------------------------------------- */

export function renderArticlePage(article, related = []) {
  const canonicalPath = articlePath(article);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles", path: "/articles/" },
    { name: article.category, path: `/articles/?category=${encodeURIComponent(article.category)}` },
    { name: article.title },
  ];

  const toc = `
  <nav class="toc" aria-labelledby="toc-title">
    <h2 id="toc-title">On this page</h2>
    <ol>
      ${article.sections.map((section) => `<li><a href="#${esc(section.id)}">${esc(section.heading)}</a></li>`).join("")}
    </ol>
  </nav>`;

  const midAd = adSlot({ variant: "inline", slot: site.adsenseSlots.inline });
  const endAd = adSlot({ variant: "end", slot: site.adsenseSlots.end });
  const heroAd = adSlot({ variant: "hero", slot: site.adsenseSlots.hero });
  const sidebarAd = adSlot({ variant: "sidebar", slot: site.adsenseSlots.sidebar });

  const sections = article.sections.map((section, index) => `
      <section aria-labelledby="${esc(section.id)}">
        <h2 id="${esc(section.id)}">${esc(section.heading)}</h2>
        ${section.html}
      </section>${index === 2 ? midAd : ""}`).join("");

  const body = `
  <main id="main">
    <div class="wrap">
      ${renderBreadcrumbs(crumbs)}
      <header class="article-header">
        <p class="eyebrow">${esc(article.category)}</p>
        <h1>${esc(article.title)}</h1>
        <p class="article-dek">${esc(article.dek)}</p>
        <div class="byline">
          <span>By <strong>${esc(article.author)}</strong></span>
          <span>Published <time datetime="${esc(article.published)}">${esc(formatDate(article.published))}</time></span>
          <span>Last updated <time datetime="${esc(article.updated)}">${esc(formatDate(article.updated))}</time></span>
          <span>${esc(readingTime(article))}</span>
        </div>
      </header>
    </div>
    <div class="wrap">${heroAd}</div>
    <div class="wrap article-layout">
      <article class="article-body">
        ${article.intro}
        ${renderTakeaways(article.takeaways)}
        ${sections}
        ${renderFaq(article.faq, "article-faq")}
        ${renderAuthorBox()}
        ${endAd}
      </article>
      <aside class="article-side" aria-label="Article contents and advertising">
        ${toc}
        ${sidebarAd}
        <div class="side-note">
          <strong>How to read this site</strong>
          <p>Every number here is an estimate. We explain the method, show the uncertainty, and never present a model output as advice.</p>
          <p><a href="/editorial-policy.html">Our editorial policy</a></p>
        </div>
      </aside>
    </div>
    <div class="wrap">${renderRelated(article, related)}</div>
  </main>`;

  const schema = [
    breadcrumbNode(crumbs, canonicalPath),
    articleNode(article),
    faqNode(article.faq),
  ];

  return renderPage({
    title: article.metaTitle || article.title,
    description: article.description,
    canonicalPath,
    body,
    currentPath: canonicalPath,
    article,
    schema,
    showProgress: true,
    extraScripts: "",
  });
}

/* -------------------------------------------------------------------------
   Generic page wrapper
   ---------------------------------------------------------------------- */

function relativeHref(fromRoute, target) {
  const splitAt = target.search(/[?#]/);
  const pathPart = splitAt === -1 ? target : target.slice(0, splitAt);
  const suffix = splitAt === -1 ? "" : target.slice(splitAt);
  const fromDir = path.posix.dirname(fromRoute);
  let relative = path.posix.relative(fromDir, pathPart);
  if (!relative || relative === ".") relative = "./";
  else if (pathPart.endsWith("/") && !relative.endsWith("/")) relative += "/";
  return `${relative}${suffix}`;
}

function withRelativeLinks(html, route) {
  return html.replace(/(\s(?:href|src)=")(\/[^"]*)"/g, (match, prefix, value) => {
    if (value.startsWith("//")) return match;
    return `${prefix}${relativeHref(route, value)}"`;
  });
}

export function renderPage({
  title,
  description,
  canonicalPath = "/",
  body = "",
  currentPath = canonicalPath,
  bodyClass = "",
  extraHead = "",
  schema = [],
  noindex = false,
  showProgress = false,
  extraScripts = "",
  article = null,
  baseHref = "",
  skipHref = "#main",
}) {
  const route = currentPath.endsWith("/") ? `${currentPath}index.html` : currentPath;
  const html = `<!DOCTYPE html>
<html lang="${esc(site.language)}">
<head>${renderHead({ title, description, canonicalPath, noindex, schema, extraHead, article })}
</head>
<body${bodyClass ? ` class="${esc(bodyClass)}"` : ""}>
  <a class="skip-link" href="${esc(skipHref)}">Skip to main content</a>
  ${showProgress ? '<div class="progress" aria-hidden="true"><span id="readingProgress"></span></div>' : ""}
  ${renderHeader(currentPath)}
  ${body}
  ${renderFooter()}
  ${renderCookieBanner()}
  ${extraScripts}
  <script src="/assets/js/predictor.js" defer></script>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>`;
  const linked = withRelativeLinks(html, route);
  if (!baseHref) return linked;
  return linked.replace("<head>", `<head><base href="${esc(baseHref)}">`);
}
