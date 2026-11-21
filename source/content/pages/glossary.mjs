import { site } from "../../site.config.mjs";
import {
  absoluteUrl,
  breadcrumbNode,
  stripTags,
} from "../../lib/layout.mjs";
import { prosePage } from "./shared.mjs";

const terms = [
  {
    id: "expected-goals",
    term: "Expected goals (xG)",
    definition: `A shot-quality model that estimates the probability that a given shot becomes a goal, then sums those probabilities across a match or season. xG describes the chances a team created, not the goals it actually scored. Read the full <a href="/articles/what-is-xg-football.html">xG guide</a>.`,
  },
  {
    id: "expected-goals-against",
    term: "Expected goals against (xGA)",
    definition: `The xG a team allows its opponents to accumulate. It measures the quality of chances conceded before the goalkeeper acts. Read the <a href="/articles/what-is-xga.html">xGA guide</a>.`,
  },
  {
    id: "expected-goals-on-target",
    term: "Expected goals on target (xGOT)",
    definition: "A post-shot model that accounts for where a shot on target crosses the goal line, not only where it was struck. It is useful for evaluating finishing and goalkeeper shot-stopping.",
  },
  {
    id: "post-shot-xg",
    term: "Post-shot xG",
    definition: "The expected-goal value of a shot after it has been taken, including placement and trajectory. Comparing goals conceded with post-shot xG helps separate a goalkeeper's saves from the defence in front of him.",
  },
  {
    id: "expected-threats",
    term: "Expected threats (xT)",
    definition: `A possession-value model that estimates how much a pass or carry increases the chance of a future goal, based on the start and end location of the ball. It measures progression rather than the shot itself. Read the <a href="/articles/expected-threats-xt.html">xT guide</a>.`,
  },
  {
    id: "expected-assists",
    term: "Expected assists (xA)",
    definition: "The xG value of the shots that follow a player's passes. It credits chance creation rather than the final pass alone, and it is not a complete measure of creativity.",
  },
  {
    id: "expected-goal-difference",
    term: "Expected goal difference (xGD)",
    definition: `A team's xG for minus xG against. It is a process measure, not a league table. Compare it with actual goal difference to see which teams may be overperforming or underperforming. See <a href="/articles/goal-difference-vs-xg-difference.html">goal difference vs xG difference</a>.`,
  },
  {
    id: "goal-difference",
    term: "Goal difference (GD)",
    definition: "Goals scored minus goals conceded. It is a real outcome and a tiebreaker in many leagues, but it is noisy over short samples because a single match can move it sharply.",
  },
  {
    id: "shot-map",
    term: "Shot map",
    definition: "A visual plot of every shot in a match or season, usually sized or coloured by xG. It shows whether a team creates central, close-range chances or relies on low-value attempts. See <a href=\"/articles/data-visualization-football.html\">data visualisation</a>.",
  },
  {
    id: "progressive-pass",
    term: "Progressive pass",
    definition: "A pass that moves the ball substantially closer to the opponent's goal, usually measured against a threshold based on distance and direction. Definitions vary by provider, so compare like with like.",
  },
  {
    id: "final-third",
    term: "Final third",
    definition: "The attacking third of the pitch. Entries into the final third are a useful measure of progression, but they say little about the quality of the chance eventually created.",
  },
  {
    id: "box-entry",
    term: "Box entry",
    definition: "A pass, carry, or cross that moves the ball into the penalty area. Box entries correlate with chance creation, but a high count can hide poor shot quality.",
  },
  {
    id: "ppda",
    term: "PPDA (passes allowed per defensive action)",
    definition: `A pressing metric that divides the number of passes an opponent completes in a defined zone by the number of defensive actions the pressing team makes. Lower values generally mean more aggressive pressing. Read <a href="/articles/pressing-intensity-ppda.html">PPDA explained</a>.`,
  },
  {
    id: "pressing",
    term: "Pressing",
    definition: "The coordinated attempt to win the ball back quickly by closing down opponents. Effective pressing needs triggers, compactness, and cover behind the press, not just effort.",
  },
  {
    id: "high-press",
    term: "High press",
    definition: "A defensive approach that starts near the opponent's penalty area, aiming to force turnovers in dangerous areas. It carries a physical cost and leaves space behind if the first line is beaten.",
  },
  {
    id: "low-block",
    term: "Low block",
    definition: "A deep, compact defensive shape that concedes territory and protects the penalty area. It can be effective against possession-heavy teams but invites sustained pressure.",
  },
  {
    id: "high-line",
    term: "High defensive line",
    definition: "A defensive line positioned far from its own goal. It compresses space and supports pressing, but it is vulnerable to through balls and fast runners.",
  },
  {
    id: "transition",
    term: "Transition",
    definition: "The moment a team wins or loses possession. Transition quality often decides matches because both teams are temporarily disorganised.",
  },
  {
    id: "game-state",
    term: "Game state",
    definition: "The score, time, and match situation that shapes how a team behaves. A side leading 1-0 may press less and defend deeper, which changes possession and shot numbers. See <a href=\"/articles/possession-data-football.html\">possession data</a>.",
  },
  {
    id: "set-piece",
    term: "Set piece",
    definition: "A dead-ball situation such as a corner, free kick, throw-in, or penalty. Set-piece quality is partly repeatable and partly dependent on the opponent's defensive structure. Read <a href=\"/articles/set-pieces-football-prediction.html\">set pieces in analysis</a>.",
  },
  {
    id: "clean-sheet",
    term: "Clean sheet",
    definition: "A match in which a team concedes no goals. It is a useful outcome but a blunt measure of defensive quality because it depends heavily on goalkeeper performance and opponent finishing.",
  },
  {
    id: "btts",
    term: "Both teams to score (BTTS)",
    definition: "A market or summary measure that asks whether each side scores at least once. The model on this site derives it from the scoreline grid. It is an estimate, not a recommendation.",
  },
  {
    id: "over-under",
    term: "Over/under goals",
    definition: "A total-goals line such as 2.5. Over 2.5 means three or more goals; under 2.5 means two or fewer. The half-goal line avoids a push. See the <a href=\"/predictor.html\">model</a>.",
  },
  {
    id: "double-chance",
    term: "Double chance",
    definition: "A combined outcome covering two of the three 1X2 results: home or draw, draw or away, or home or away. It raises the probability of the combined outcome but usually lowers the price.",
  },
  {
    id: "dnb",
    term: "Draw no bet (DNB)",
    definition: "A market in which the stake is returned if the match is drawn. It removes the draw from the result but does not remove the risk of losing. It is a betting term, not a recommendation.",
  },
  {
    id: "asian-handicap",
    term: "Asian handicap",
    definition: "A handicap market that gives one side a goal start or deficit, often with quarter-goal lines that split the stake. It is used to balance prices between uneven teams.",
  },
  {
    id: "implied-probability",
    term: "Implied probability",
    definition: `The probability suggested by a set of odds, calculated before removing the bookmaker's margin. Decimal odds of 2.50 imply 40%. Read <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a>.`,
  },
  {
    id: "overround",
    term: "Overround",
    definition: "The amount by which the implied probabilities of all outcomes in a market exceed 100%. It is the bookmaker's built-in margin. A larger overround makes the market more expensive for the customer.",
  },
  {
    id: "market-price",
    term: "Market price",
    definition: "The odds available for an outcome at a given moment. A price reflects the market's assessment plus its margin; it is not a statement of truth. Read <a href=\"/articles/reading-football-odds.html\">how to read odds</a>.",
  },
  {
    id: "expected-value",
    term: "Expected value (EV)",
    definition: "The long-run average result of a repeated decision, calculated by weighting each outcome by its probability. A positive EV estimate is not a guarantee, and a single result says little about whether the estimate was good.",
  },
  {
    id: "poisson",
    term: "Poisson distribution",
    definition: `A probability model for counts, often used for goals. It assumes a steady average rate and independence between events. Real matches violate both assumptions in small ways. Read the <a href="/articles/poisson-distribution-football.html">Poisson guide</a>.`,
  },
  {
    id: "sample-size",
    term: "Sample size",
    definition: "The number of observations behind a statistic. Small samples are noisy, so a five-match xG run is weaker evidence than a twenty-match run. See <a href=\"/articles/form-streaks-misleading.html\">form streaks</a>.",
  },
  {
    id: "regression-to-the-mean",
    term: "Regression to the mean",
    definition: "The tendency of extreme results to move closer to average over time. A team scoring on every rare chance is likely to cool down; a team missing everything is likely to improve. It is a statistical effect, not a moral judgement.",
  },
  {
    id: "calibration",
    term: "Calibration",
    definition: `How closely predicted probabilities match observed frequencies. If forecasts labelled 60% happen about 60% of the time over a large sample, the forecasts are well calibrated. Read <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a>.`,
  },
  {
    id: "brier-score",
    term: "Brier score",
    definition: "A scoring rule for probabilistic forecasts. It is the average squared difference between the predicted probability and the actual outcome. Lower is better. It rewards both confidence and correctness.",
  },
  {
    id: "log-loss",
    term: "Log loss",
    definition: "A scoring rule that penalises confident wrong predictions heavily. It is useful for comparing probability models, but it is less intuitive than accuracy or Brier score.",
  },
  {
    id: "closing-line",
    term: "Closing line",
    definition: "The final price before an event starts. It is often used as a benchmark because it incorporates late information. Beating the closing line is not proof of skill over a small sample. See <a href=\"/articles/odds-movement-football.html\">odds movement</a>.",
  },
  {
    id: "opening-line",
    term: "Opening line",
    definition: "The first price offered when a market opens. Comparing it with the closing line shows how information and money moved the market.",
  },
  {
    id: "bankroll",
    term: "Bankroll",
    definition: `The amount a person has set aside for betting. This site does not recommend a staking system. The concept matters because losing a large share of a bankroll can make recovery mathematically harder. Read <a href="/articles/bankroll-basics.html">bankroll basics</a>.`,
  },
  {
    id: "roi",
    term: "Return on investment (ROI)",
    definition: "Profit or loss divided by the amount staked, usually expressed as a percentage. Small samples produce wild ROI figures, and a positive ROI over a short run is not evidence of a sustainable edge. This site does not publish an ROI record.",
  },
  {
    id: "home-advantage",
    term: "Home advantage",
    definition: `The performance benefit associated with playing at home, driven by crowd effects, travel, familiarity, and referee tendencies. It is not a fixed number and varies by club, competition, and context. Read <a href="/articles/home-advantage-modern-football.html">home advantage</a>.`,
  },
  {
    id: "possession",
    term: "Possession percentage",
    definition: "The share of time or passes a team controls the ball. It is not the same as control of the match. A team can have less possession and create better chances. See <a href=\"/articles/possession-data-football.html\">possession data</a>.",
  },
  {
    id: "fixture-congestion",
    term: "Fixture congestion",
    definition: "A period with matches close together, reducing recovery time and increasing rotation. It is a context variable, not a guarantee of a poor performance.",
  },
  {
    id: "squad-depth",
    term: "Squad depth",
    definition: `The quality and fit of options beyond the first eleven. Depth matters during injuries, suspensions, and congestion. Read <a href="/articles/squad-depth-football-prediction.html">squad depth</a>.`,
  },
];

function renderTerms(list) {
  return `
  <dl class="glossary">
    ${list.map((item) => `
    <dt id="${item.id}">${item.term}</dt>
    <dd>${item.definition}</dd>`).join("")}
  </dl>`;
}

export function renderGlossaryPage() {
  const title = "Football Analytics Glossary | Elite Football Predictor";
  const description =
    "Clear definitions of xG, xGA, xT, PPDA, Poisson, implied probability, DNB, and more football analytics terms.";
  const aToD = terms.slice(0, 12);
  const eToP = terms.slice(12, 26);
  const qToZ = terms.slice(26);

  const body = `
  <p class="lead">A working glossary of the terms used across the site. Definitions are written for readers who want to understand the idea, not memorise a slogan. Where a term is contested or provider-specific, the definition says so.</p>
  <p>Use the jump links to move between groups, or search the page with your browser. Each entry links to a longer guide where one exists.</p>
  <nav class="glossary-jump" aria-label="Glossary sections">
    <a href="#a-to-d">A to D</a>
    <a href="#e-to-p">E to P</a>
    <a href="#q-to-z">Q to Z</a>
  </nav>

  <h2 id="a-to-d">A to D</h2>
  ${renderTerms(aToD)}

  <h2 id="e-to-p">E to P</h2>
  ${renderTerms(eToP)}

  <h2 id="q-to-z">Q to Z</h2>
  ${renderTerms(qToZ)}

  <h2>How to use the glossary</h2>
  <p>Definitions are starting points, not substitutes for context. A metric can be useful in one question and misleading in another. For example, xG is a good summary of chance quality but a poor description of defensive structure; PPDA is a useful pressing indicator but a poor measure of pressing effectiveness on its own.</p>
  <p>If a term is missing, send a suggestion through the <a href="/contact.html">contact page</a>. If a definition is unclear or contested, tell us and include a source. We update entries when the explanation can be made more accurate.</p>

  <h2>Related reading</h2>
  <ul>
    <li><a href="/articles/what-is-xg-football.html">What is xG in football?</a></li>
    <li><a href="/articles/poisson-distribution-football.html">Poisson distribution for football</a></li>
    <li><a href="/articles/reading-football-odds.html">How to read football odds</a></li>
    <li><a href="/articles/track-prediction-accuracy.html">How to track prediction accuracy</a></li>
    <li><a href="/predictor.html">Try the transparent match model</a></li>
  </ul>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Glossary" }], "/glossary.html"),
    {
      "@type": "DefinedTermSet",
      name: "Football analytics glossary",
      url: absoluteUrl("/glossary.html"),
      description,
      hasDefinedTerm: terms.map((item) => ({
        "@type": "DefinedTerm",
        name: item.term,
        description: stripTags(item.definition),
        url: `${absoluteUrl("/glossary.html")}#${item.id}`,
      })),
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/glossary.html",
    eyebrow: "Reference",
    intro: "The language of football analytics, defined without the jargon.",
    body,
    schema,
  });
}
