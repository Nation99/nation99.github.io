import { site } from "../../site.config.mjs";
import {
  renderPage,
  renderBreadcrumbs,
  renderFaq,
  adSlot,
  faqNode,
  breadcrumbNode,
  esc,
} from "../../lib/layout.mjs";
import { pageHeader, renderPredictor, responsibleNotice } from "./shared.mjs";

const predictorFaq = [
  {
    q: "How accurate is the model?",
    a: "There is no single accuracy figure, and we do not publish an invented win rate. Accuracy depends on the quality of your inputs, the match, and the assumptions. The model is a teaching tool, not a forecasting product.",
  },
  {
    q: "Why use a Poisson distribution?",
    a: "Poisson is a simple way to model counts such as goals. It assumes each side scores at a steady average rate and that the two totals are independent. Those assumptions are imperfect, which is why the output is an estimate rather than a prediction.",
  },
  {
    q: "What does model confidence mean?",
    a: "It summarises how concentrated the home, draw, and away distribution is after a small adjustment for sample size. It is not the probability that the estimate is correct, and it cannot account for missing team news.",
  },
  {
    q: "Can I enter real team data?",
    a: "Yes. Use per-match xG and xGA averages from a source you trust, then enter the sample size behind those averages. The tool does not fetch live data and does not verify your numbers.",
  },
  {
    q: "Why show a lower-variance option?",
    a: "It is an educational comparison, not a recommendation. The tool identifies the highest-probability option among a small set of combined or total-goals outcomes, then leaves the decision and the risk with you.",
  },
];

export function renderPredictorPage() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Predictor tool" },
  ];

  const body = `
  <main id="main">
    <div class="wrap">
      ${renderBreadcrumbs(crumbs)}
      ${pageHeader({
        eyebrow: "Model and method",
        title: "Football match outcome model",
        intro: "A transparent Poisson model for exploring match estimates. Enter recent averages, inspect the scoreline distribution, and read the limits before you read the result.",
        meta: "Educational tool. No live data. No bookmaker links. 18+.",
      })}
    </div>

    ${adSlot({ variant: "hero", slot: site.adsenseSlots.hero })}

    <section class="section-sm" aria-labelledby="tool-heading">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Interactive model</p>
            <h2 id="tool-heading">Run the estimate</h2>
            <p>The form uses per-match averages, not season totals. A ten-match sample is the default because five matches is noisy and twenty is not always available.</p>
          </div>
        </div>
        ${renderPredictor({ idPrefix: "tool", compact: false })}
      </div>
    </section>

    ${adSlot({ variant: "inline", slot: site.adsenseSlots.inline })}

    <section class="section" aria-labelledby="explainer-title">
      <div class="narrow">
        <p class="eyebrow">How it works</p>
        <h2 id="explainer-title">The model in plain language</h2>
        <div class="prose">
          <p>The model is a small, transparent calculation. It does not use a neural network, a secret formula, or a database of tips. It takes the numbers you enter, converts them into an expected-goals pair, and then uses the Poisson distribution to spread probability across possible scorelines.</p>

          <h3>Step 1: estimate each side's attacking strength</h3>
          <p>For the home side, the model averages the home team's xG created with the away team's xGA conceded. For the away side, it averages the away team's xG created with the home team's xGA conceded. This is a simple way to combine attack and defence without pretending that a single number captures a team's style.</p>

          <h3>Step 2: adjust for context</h3>
          <p>The home estimate receives a venue adjustment. A normal home match uses a modest home advantage, a neutral venue removes it, and a behind-closed-doors match reduces it. Form adds or subtracts a small amount. Each key absence reduces the estimate slightly. Rest days add or subtract a small amount, capped so that a long break cannot create an unrealistic swing.</p>

          <h3>Step 3: build a scoreline grid</h3>
          <p>The model calculates the probability of 0, 1, 2, 3, and further goals for each team using the Poisson formula. It multiplies the two sets of probabilities to produce a grid. The chance of a home win is the sum of every grid cell where the home score is higher. The draw is the diagonal. The away win is the remaining cells.</p>

          <h3>Step 4: derive the secondary outputs</h3>
          <p>Over 2.5 goals is the sum of cells with three or more total goals. Under 2.5 is the complement. Both teams to score is the sum of cells where each side scores at least once. The most likely scoreline is the single cell with the largest probability, which is usually a low-scoring result even when both sides are expected to score.</p>

          <h3>Step 5: describe confidence carefully</h3>
          <p>Model confidence is a summary of how clearly the distribution separates the leading outcome from the second. A larger sample behind the averages nudges confidence up. A smaller sample nudges it down. Confidence is not a win probability, and it does not mean the estimate is correct. It only describes the shape of the model output.</p>

          <h3>Step 6: show the lower-variance comparison</h3>
          <p>The tool compares a small set of combined outcomes: double chance in each direction and the two total-goals sides of 2.5, plus both teams to score. It labels the highest-probability option as a lower-variance market estimate. That label describes the shape of the probability, not the safety of a bet. Every option can lose.</p>
        </div>
      </div>
    </section>

    <section class="section" aria-labelledby="inputs-title">
      <div class="wrap">
        <div class="section-head">
          <div>
            <p class="eyebrow">Reference</p>
            <h2 id="inputs-title">Inputs and outputs</h2>
            <p>Use the table to check that you understand what each field does before trusting a result.</p>
          </div>
        </div>
        <div class="table-wrap">
          <table>
            <caption class="visually-hidden">Model inputs, what they do, and what to watch for</caption>
            <thead>
              <tr><th scope="col">Input</th><th scope="col">What it does</th><th scope="col">Watch for</th></tr>
            </thead>
            <tbody>
              <tr><td>xG created</td><td>Sets the attacking baseline.</td><td>Use per-match averages from a consistent competition and sample.</td></tr>
              <tr><td>xGA conceded</td><td>Adjusts the opponent's baseline.</td><td>Goalkeeper overperformance can hide a leaky defence.</td></tr>
              <tr><td>Form score</td><td>Adds a small recent-performance adjustment.</td><td>It is subjective. Do not use it to double-count the xG numbers.</td></tr>
              <tr><td>Key absences</td><td>Reduces the estimate for each missing regular starter.</td><td>Not every absence matters equally. A backup striker is not a backup goalkeeper.</td></tr>
              <tr><td>Rest days</td><td>Adds or subtracts a small fatigue adjustment.</td><td>Rest is a proxy. Travel, congestion, and minutes played matter too.</td></tr>
              <tr><td>Venue</td><td>Changes the home advantage assumption.</td><td>Home advantage varies by club, crowd, and competition.</td></tr>
              <tr><td>Sample size</td><td>Adjusts model confidence only.</td><td>A large sample of the wrong data is still wrong.</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section-sm">
      <div class="narrow">
        <div class="callout warn">
          <h2>Model limitations</h2>
          <ul>
            <li>Goals are treated as independent Poisson counts. Real matches have score effects, red cards, and tactical changes.</li>
            <li>The model ignores lineups, injuries beyond your absence count, weather, referee, travel, and set-piece profiles.</li>
            <li>It uses your inputs without verification. A precise output from rough inputs is false precision.</li>
            <li>It does not know the market price, and it does not tell you whether a price is good or bad.</li>
            <li>It cannot guarantee an outcome, and it should not be used as the sole basis for a financial decision.</li>
          </ul>
        </div>
        ${responsibleNotice({ compact: true })}
      </div>
    </section>

    <section class="section" aria-labelledby="tool-faq-title">
      <div class="narrow">
        <div class="section-head">
          <div>
            <p class="eyebrow">Questions</p>
            <h2 id="tool-faq-title">Predictor questions</h2>
          </div>
        </div>
        ${renderFaq(predictorFaq, "predictor-faq-body")}
      </div>
    </section>

    ${adSlot({ variant: "footer", slot: site.adsenseSlots.end })}
  </main>`;

  const schema = [
    breadcrumbNode(crumbs, "/predictor.html"),
    faqNode(predictorFaq),
    {
      "@type": "WebApplication",
      name: "Elite Football Predictor match outcome model",
      applicationCategory: "SportsApplication",
      operatingSystem: "Any",
      url: `${site.url}/predictor.html`,
      description: "A transparent Poisson model for educational football match estimates.",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
      },
      featureList: [
        "Poisson scoreline distribution",
        "Home, draw, and away estimates",
        "Over and under 2.5 goals",
        "Both teams to score",
        "Lower-variance comparison",
      ],
    },
  ];

  return renderPage({
    title: "Football Match Outcome Model | Elite Football Predictor",
    description:
      "Try a transparent Poisson model for football match estimates, with scoreline probabilities, over/under 2.5, and both-teams-to-score outputs.",
    canonicalPath: "/predictor.html",
    body,
    currentPath: "/predictor.html",
    schema,
  });
}
