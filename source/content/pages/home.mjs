import { site } from "../../site.config.mjs";
import {
  renderPage,
  renderArticleCard,
  renderFaq,
  adSlot,
  faqNode,
  esc,
} from "../../lib/layout.mjs";
import { renderPredictor, responsibleNotice } from "./shared.mjs";

const homeFaq = [
  {
    q: "Is Elite Football Predictor a betting site?",
    a: "No. We do not accept bets, process payments, link to bookmakers, or sell tips. The site is an independent football analytics education project with a transparent statistical model.",
  },
  {
    q: "Does the model guarantee a result?",
    a: "No. The model produces a probability distribution from the inputs you provide. Football is uncertain, and the model does not know lineups, injuries, weather, or tactical surprises.",
  },
  {
    q: "Where does the data come from?",
    a: "The interactive tool uses numbers you enter. Articles use clearly labelled illustrative examples. We do not scrape live match data or present invented records as fact.",
  },
  {
    q: "Is the site free to use?",
    a: "Yes. The guides and model are free. If advertising is added later, every slot will be labelled and kept separate from editorial content.",
  },
  {
    q: "Can I use the estimates for betting?",
    a: "The site is for education and entertainment, not advice. If you choose to gamble, only risk money you can afford to lose, and seek support if it stops being fun. See our responsible gambling page.",
  },
];

function pick(articles, slugs) {
  return slugs.map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean);
}

export function renderHomePage(articles = []) {
  const featured = pick(articles, [
    "what-is-xg-football",
    "reading-football-odds",
    "poisson-distribution-football",
  ]);
  const latest = articles.slice(0, 6);
  const categoryLinks = [
    ["xG and Stats", "Chance quality, expected goals, and the numbers behind performance."],
    ["Tactics", "Shape, pressing, set pieces, and the matchups that reputation hides."],
    ["Betting Education", "Probability, market prices, bias, and uncertainty. No tips."],
    ["Leagues", "How competition context changes the way a match should be read."],
    ["Beginner Guides", "Plain-language starting points for football data and analysis."],
  ];

  const body = `
  <main id="main">
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <p class="eyebrow">Independent football analytics</p>
          <h1>Football analytics and match estimates, without the hype</h1>
          <p class="lede">Learn how xG, xGA, Poisson models, and tactical context fit together. Use a transparent model to explore match outcome estimates, not to chase certainties.</p>
          <div class="hero-actions">
            <a class="btn btn-amber" href="#home-model">Try the model</a>
            <a class="btn btn-ghost" href="/articles/">Read the guides</a>
          </div>
          <p class="hero-note">No bookmaker links. No tipster claims. No invented track record. Estimates are for education and entertainment, and every model has limits.</p>
          <div class="trust-row">
            <span class="trust-chip">Transparent Poisson model</span>
            <span class="trust-chip">Original, human-written guides</span>
            <span class="trust-chip">18+ and responsible use</span>
          </div>
        </div>
        <aside class="hero-panel" aria-label="Illustrative model output">
          <h2>Illustrative output</h2>
          <p class="small" style="color: rgba(238, 245, 255, 0.72); margin-bottom: 8px;">Club A vs Club B. Static example, not a live prediction.</p>
          <div class="mini-row"><span>Home win</span><strong>46%</strong></div>
          <div class="bar"><i style="width: 46%"></i></div>
          <div class="mini-row"><span>Draw</span><strong>26%</strong></div>
          <div class="bar"><i style="width: 26%"></i></div>
          <div class="mini-row"><span>Away win</span><strong>28%</strong></div>
          <div class="bar"><i style="width: 28%"></i></div>
          <div class="mini-row"><span>Expected goals</span><strong>1.6 - 1.1</strong></div>
          <div class="mini-row"><span>Both teams score</span><strong>51%</strong></div>
          <p class="disclaimer">These numbers come from a simple teaching model. They are not a forecast, a recommendation, or a promise.</p>
        </aside>
      </div>
    </section>

    ${adSlot({ variant: "hero", slot: site.adsenseSlots.hero })}

    <section class="section" id="home-model" aria-labelledby="home-model-heading">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Interactive</p>
            <h2 id="home-model-heading">A match estimate you can inspect</h2>
            <p>Change the inputs and watch the distribution move. The model is intentionally small enough to understand, including its flaws.</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="/predictor.html">Full explainer</a>
        </div>
        ${renderPredictor({ idPrefix: "home-model", compact: true })}
      </div>
    </section>

    <section class="section" aria-labelledby="featured-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Start here</p>
            <h2 id="featured-title">Three ideas that make football data readable</h2>
            <p>Begin with chance quality, then learn how prices express probability, then see how a scoreline model is built.</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="/articles/">All articles</a>
        </div>
        <div class="grid-3">
          ${featured.map((article) => renderArticleCard(article, 3)).join("")}
        </div>
      </div>
    </section>

    ${adSlot({ variant: "inline", slot: site.adsenseSlots.inline })}

    <section class="section" aria-labelledby="latest-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Latest analysis</p>
            <h2 id="latest-title">New guides and league notes</h2>
            <p>Every article includes a worked example, common mistakes, and a short list of limits.</p>
          </div>
          <a class="btn btn-ghost btn-sm" href="/articles/">Browse by category</a>
        </div>
        <div class="grid-3">
          ${latest.map((article) => renderArticleCard(article, 3)).join("")}
        </div>
      </div>
    </section>

    <section class="section-sm" aria-labelledby="method-title">
      <div class="wrap">
        <div class="grid-3">
          <div class="card">
            <p class="eyebrow">01</p>
            <h2 id="method-title" style="font-size: 1.15rem;">Turn inputs into expected goals</h2>
            <p class="muted">The model blends each side's attacking and defensive averages, then adjusts for venue, form, availability, and rest. Every adjustment is visible in the explainer.</p>
          </div>
          <div class="card">
            <p class="eyebrow">02</p>
            <h2 style="font-size: 1.15rem;">Build a scoreline distribution</h2>
            <p class="muted">Two Poisson distributions produce a grid of scorelines. The grid gives home, draw, away, over/under, both-teams-to-score, and a most likely score.</p>
          </div>
          <div class="card">
            <p class="eyebrow">03</p>
            <h2 style="font-size: 1.15rem;">Read the output with caution</h2>
            <p class="muted">A probability is not a prediction of what will happen. It is a summary of what the model believes, given simplified assumptions and the numbers you supplied.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="categories-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Browse</p>
            <h2 id="categories-title">Five ways into the library</h2>
            <p>Pick the question you want to answer, not the conclusion you want to hear.</p>
          </div>
        </div>
        <div class="grid-3">
          ${categoryLinks.map(([category, description]) => `
          <a class="article-card" href="/articles/?category=${encodeURIComponent(category)}" style="text-decoration: none;">
            <span class="cat">Category</span>
            <h3>${esc(category)}</h3>
            <p>${esc(description)}</p>
            <div class="meta"><span>Open category</span><span>Articles</span></div>
          </a>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="home-faq-heading">
      <div class="narrow">
        <div class="section-head">
          <div>
            <p class="eyebrow">Questions</p>
            <h2 id="home-faq-heading">What this site is, and what it is not</h2>
          </div>
        </div>
        ${renderFaq(homeFaq, "home-faq")}
      </div>
    </section>

    <section class="section-sm">
      <div class="narrow">
        ${responsibleNotice()}
      </div>
    </section>

    ${adSlot({ variant: "footer", slot: site.adsenseSlots.end })}
  </main>`;

  const schema = [faqNode(homeFaq)];

  return renderPage({
    title: "Football Analytics and Education | Elite Football Predictor",
    description:
      "Learn football analytics with clear guides to xG, xGA, Poisson models, odds, and match analysis. Try a transparent match outcome estimate tool.",
    canonicalPath: "/",
    body,
    currentPath: "/",
    schema,
  });
}
