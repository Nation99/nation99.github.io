import { site } from "../../site.config.mjs";
import {
  renderPage,
  renderBreadcrumbs,
  renderArticleCard,
  adSlot,
  breadcrumbNode,
  articleUrl,
  esc,
} from "../../lib/layout.mjs";
import { categories } from "../articles/plan.mjs";
import { pageHeader, responsibleNotice } from "./shared.mjs";

function pick(articles, slugs) {
  return slugs.map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean);
}

export function renderArticlesPage(articles = []) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Articles" },
  ];
  const featured = pick(articles, [
    "what-is-xg-football",
    "reading-football-odds",
    "poisson-distribution-football",
  ]);
  const counts = Object.fromEntries(
    categories.map((category) => [category, articles.filter((article) => article.category === category).length]),
  );

  const body = `
  <main id="main">
    <div class="wrap">
      ${renderBreadcrumbs(crumbs)}
      ${pageHeader({
        eyebrow: "The library",
        title: "Football analytics, one idea at a time",
        intro: "Original guides to chance quality, tactical structure, league context, probability, and the limits of prediction. No tips, no affiliate links, no invented track record.",
        meta: `${articles.length} articles. Every guide includes a worked example, common mistakes, and a short list of limits.`,
      })}
    </div>

    ${adSlot({ variant: "hero", slot: site.adsenseSlots.hero })}

    <section class="section-sm" aria-labelledby="start-here-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Start here</p>
            <h2 id="start-here-title">The three-article foundation</h2>
            <p>If you only read three pieces, make them these. They cover chance quality, price as probability, and the scoreline model used on this site.</p>
          </div>
        </div>
        <div class="grid-3">
          ${featured.map((article) => renderArticleCard(article, 3)).join("")}
        </div>
      </div>
    </section>

    ${adSlot({ variant: "inline", slot: site.adsenseSlots.inline })}

    <section class="section" aria-labelledby="all-articles-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Browse</p>
            <h2 id="all-articles-title">All articles</h2>
            <p>Filter by category or search the library. The count updates as you type.</p>
          </div>
          <p class="small muted" id="articleCount" aria-live="polite">${articles.length} articles</p>
        </div>

        <div class="filters" role="group" aria-label="Filter articles by category">
          <button class="filter-btn" type="button" data-filter="all" aria-pressed="true">All (${articles.length})</button>
          ${categories.map((category) => `
          <button class="filter-btn" type="button" data-filter="${esc(category)}" aria-pressed="false">${esc(category)} (${counts[category] || 0})</button>`).join("")}
        </div>

        <div class="search-row">
          <label for="articleSearch">Search articles</label>
          <input id="articleSearch" type="search" placeholder="Try xG, pressing, or La Liga" autocomplete="off">
        </div>

        <div class="grid-3" id="articleGrid">
          ${articles.map((article) => renderArticleCard(article, 2)).join("")}
        </div>

        <div class="empty-state" data-empty-state hidden>
          <p>No articles match that filter yet. Try another category or clear the search.</p>
          <button class="btn btn-ghost btn-sm" type="button" data-clear-filters>Clear filters</button>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="narrow">
        ${responsibleNotice({ compact: true })}
      </div>
    </section>

    ${adSlot({ variant: "footer", slot: site.adsenseSlots.end })}
  </main>`;

  const schema = [
    breadcrumbNode(crumbs, "/articles/"),
    {
      "@type": "CollectionPage",
      "@id": `${site.url}/articles/#collection`,
      name: "Football analytics articles",
      description: "Original football analytics guides, tactical explainers, league notes, and betting education.",
      url: `${site.url}/articles/`,
      isPartOf: { "@id": `${site.url}/#website` },
      inLanguage: site.language,
      hasPart: articles.map((article) => ({
        "@type": "Article",
        headline: article.title,
        url: articleUrl(article),
        articleSection: article.category,
      })),
    },
  ];

  return renderPage({
    title: "Football Analytics Articles | Elite Football Predictor",
    description:
      "Original guides to xG, tactics, league analysis, odds, and prediction methods. Filter by category and read at your own pace.",
    canonicalPath: "/articles/",
    body,
    currentPath: "/articles/",
    schema,
  });
}
