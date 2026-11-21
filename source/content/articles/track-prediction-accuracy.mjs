export default {
  slug: "track-prediction-accuracy",
  title: "How to Track Prediction Accuracy in Football",
  metaTitle: "How to Track Prediction Accuracy in Football",
  description: "A practical method for recording forecasts, reading calibration, and using Brier score without pretending that a small sample proves anything.",
  category: "Betting Education",
  tags: ["calibration", "Brier score", "record keeping"],
  published: "2026-05-12",
  updated: "2026-05-12",
  author: "Nyasha",
  dek: "A notebook full of ticks and crosses feels like evidence. It is not, until the forecasts behind the ticks are written down in a form that can be checked.",
  takeaways: [
    "Record a probability before the match, not a verdict after it.",
    "Calibration asks whether forecasts at 30 per cent happen about 30 per cent of the time.",
    "Brier score combines calibration and confidence into one number, but it needs a reasonable sample.",
    "A tracking sheet is a tool for honest reflection, not a certificate of skill."
  ],
  intro: `<p>Most prediction records are diaries of outcomes. They say who was right, rarely how confident they were or what question they were answering. That makes them almost impossible to audit. A record that cannot be audited cannot teach you much, beyond the fact that you remember the good days.</p>
<p>This guide describes a simple process for recording forecasts, checking calibration, and scoring results with the Brier score. The emphasis is on measurement rather than self-congratulation. A tracking sheet will not make a forecast better. It can stop an analyst from fooling themselves about how good the forecast was.</p>`,
  sections: [
    {
      id: "forecast-not-verdict",
      heading: "Start with a forecast, not a verdict",
      html: `<p>A forecast is a probability attached to a defined event, recorded before the event. "Club A will win" is a verdict. "Club A has a 62 per cent chance of winning" is a forecast. The second version can be scored, compared with a baseline, and combined with other forecasts. The first can only be counted.</p>
<p>The event needs a clear boundary. A forecast about the winner of a match is not the same as a forecast about the winner after 90 minutes, or the winner including extra time. A forecast about a team scoring is not the same as a forecast about a team winning. Write the question down exactly as it will be judged, before kick-off. If the question changes later, the record should show the change. Our article on <a href="/articles/risk-management-football-analysis.html">risk management for football analysis</a> explains why the sample matters more than a hit rate.</p>`
    },
    {
      id: "calibration",
      heading: "Calibration: the question accuracy hides",
      html: `<p>Accuracy collapses a probability into a yes or no. Calibration keeps the probability. A model is calibrated if events forecast at 30 per cent happen about 30 per cent of the time, events forecast at 60 per cent happen about 60 per cent of the time, and so on. Calibration is a property of the whole set of forecasts, not of a single result.</p>
<p>A model that says 90 per cent and is right 70 per cent of the time is overconfident, even if it wins most of those matches. A model that says 55 per cent and is right 55 per cent of the time is better calibrated, even if it looks less impressive in a highlights package. Accuracy rewards bold calls that happen to land. Calibration rewards a truthful relationship between confidence and outcomes.</p>`
    },
    {
      id: "brier-score",
      heading: "Brier score in plain arithmetic",
      html: `<p>The Brier score turns calibration and confidence into one number. For each forecast, take the difference between the forecast probability and the outcome, where the outcome is 1 if the event happened and 0 if it did not. Square the difference. Average the squared differences across forecasts. Lower is better.</p>
<p>A forecast of 0.70 that comes true contributes 0.09, because 0.70 minus 1 is negative 0.30, and the square is 0.09. The same forecast that fails contributes 0.49. A forecast of 0.50 contributes 0.25 either way. The score is not a percentage, and it has no universal pass mark. It is most useful when compared with a simple baseline, such as always predicting the base rate or always predicting 0.50.</p>`
    },
    {
      id: "log-loss",
      heading: "Log loss and why it punishes confidence",
      html: `<p>Log loss is another scoring rule, and it punishes confident mistakes more sharply. For the outcome that happened, take the negative natural logarithm of the forecast probability. A forecast of 0.90 that fails receives a penalty of about 2.30, while a forecast of 0.60 that fails receives about 0.92. A forecast of 0.99 that fails receives about 4.61.</p>
<p>The choice between Brier score and log loss depends on what you want to emphasise. Brier score is easier to explain and bounded between 0 and 1. Log loss is harsher on overconfidence and is common in forecasting research. Neither rule can tell you whether your model will be useful in the future. They only describe how well it described the past.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>Four hypothetical forecasts are enough to show the arithmetic, though not enough to judge an analyst. The table records the event, the forecast, the outcome, and the Brier contribution.</p>
<table>
<thead><tr><th>Match</th><th>Event</th><th>Forecast</th><th>Outcome</th><th>Calculation</th><th>Contribution</th></tr></thead>
<tbody>
<tr><td>1</td><td>Club A win</td><td>0.70</td><td>1</td><td>(0.70 - 1) squared</td><td>0.0900</td></tr>
<tr><td>2</td><td>Club A win</td><td>0.55</td><td>0</td><td>(0.55 - 0) squared</td><td>0.3025</td></tr>
<tr><td>3</td><td>Draw</td><td>0.30</td><td>0</td><td>(0.30 - 0) squared</td><td>0.0900</td></tr>
<tr><td>4</td><td>Club B win</td><td>0.20</td><td>1</td><td>(0.20 - 1) squared</td><td>0.6400</td></tr>
</tbody>
</table>
<p>The mean is (0.0900 + 0.3025 + 0.0900 + 0.6400) divided by 4, which equals 1.1225 divided by 4, or 0.2806. On this tiny sample, the forecasts score worse than a flat 50 per cent baseline, which would score 0.25. That does not prove the analyst is bad. Four forecasts is far too few, and the events are different. It does show why a handful of remembered wins is not a score.</p>
<p>Now group a larger set by confidence band. If 100 forecasts in the 60 to 70 per cent band produce 65 correct outcomes, the band is roughly calibrated. If they produce 85, the band is overconfident. If they produce 45, it is underconfident. The same check can be done for every band, and the pattern is more informative than a single overall hit rate.</p>`
    },
    {
      id: "sample-size-temptation",
      heading: "Sample size and the temptation to conclude",
      html: `<p>Four forecasts, forty, four hundred. The score becomes more stable as the sample grows, but independence also matters. A hundred forecasts about the same club are not a hundred independent tests. They share a team, a manager, a tactical style, and a market. The effective sample is smaller than the raw count, sometimes much smaller.</p>
<p>There is also a selection problem. Forecasts are easier to remember when they are interesting, and interesting forecasts are often the ones that went wrong or spectacularly right. A record that includes every forecast, including the boring ones, is more trustworthy than a record built from memory. The aim is not a perfect sample. It is a sample that was not chosen by the outcome.</p>`
    },
    {
      id: "simple-record",
      heading: "A simple record that survives scrutiny",
      html: `<p>A simple spreadsheet is enough. One row per forecast, with columns for the date, competition, event, probability, model version, closing price, outcome, and a short note. Keep the original forecast; do not edit it after the result. If the model changes, start a new version rather than rewriting history.</p>
<p>The closing price is useful because it gives a second opinion on the probability, not because it is always right. The note is useful because it records what the analyst believed at the time. Together, they make it possible to review a batch of decisions rather than arguing about a single memorable match. Our article on <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a> explains how to convert prices into a comparable form, and our guide to the <a href="/articles/poisson-distribution-football.html">Poisson distribution</a> shows where some of those probabilities come from.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Recording only the forecasts you remember.</strong> Memory is a biased sampling method.</li>
<li><strong>Changing the event after the match.</strong> A forecast that is redefined after the result cannot be scored.</li>
<li><strong>Reporting accuracy without a baseline.</strong> A hit rate means little without a comparison point.</li>
<li><strong>Treating a lucky run as calibration.</strong> A short run of correct calls is not a stable pattern.</li>
<li><strong>Mixing forecasts from different model versions.</strong> A changed model is a changed question.</li>
<li><strong>Scoring with hindsight.</strong> The forecast must be judged as it was written, not as it could have been.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits of accuracy tracking",
      html: `<p>Tracking tells you about your past forecasts, not your future ones. It cannot remove variance or the bookmaker margin. A well-calibrated forecast can still lose over a season, and a poorly calibrated one can still win. The score is a description, not a promise.</p>
<p>The broader arithmetic is worth stating plainly. Most people who gamble over time end up behind, because the prices they accept already include a margin, and variance ensures that even a good process has bad runs. A tracking sheet can make an analyst more honest. It cannot change that arithmetic, and this article does not claim it can.</p>`
    }
  ],
  faq: [
    {
      q: "What is a good Brier score?",
      a: "There is no universal threshold. It depends on the base rate and the difficulty of the events. Compare the score with a naive baseline, such as always predicting the base rate, and with earlier versions of the same model."
    },
    {
      q: "How many forecasts should I track?",
      a: "Enough to see stable patterns across confidence bands, with independence in mind. There is no fixed number, and a large set of correlated forecasts can be less informative than a smaller set of varied ones."
    },
    {
      q: "Should I track only correct predictions?",
      a: "No. A record of correct predictions is a highlight reel, not a sample. Track every forecast, including the misses, because the misses are where the assumptions are tested."
    }
  ],
  related: ["winning-predictions-vs-profit", "cognitive-biases-football-prediction", "poisson-distribution-football"]
};
