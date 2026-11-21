export default {
  slug: "winning-predictions-vs-profit",
  title: "Winning Predictions vs Sound Analysis",
  metaTitle: "Winning Predictions vs Sound Analysis",
  description: "Why a good hit rate can hide poor calibration, how expected value works in plain arithmetic, and what analysis can and cannot deliver.",
  category: "Betting Education",
  tags: ["calibration", "expected value", "accuracy"],
  published: "2026-08-04",
  updated: "2026-08-04",
  author: "Nyasha",
  dek: "Being right often is not the same as being well calibrated. A prediction record can look impressive and still tell you almost nothing about the quality of the reasoning behind it.",
  takeaways: [
    "Accuracy counts outcomes; calibration checks the probabilities attached to them.",
    "A forecast can be right and still be overconfident.",
    "Expected value is an average over many repetitions, not a promise for one match.",
    "A small error in the probability estimate can turn a positive calculation negative.",
    "Sound analysis is judged by process and record, not by a highlight reel of correct calls."
  ],
  intro: `<p>A forecast can be right and still be badly made. A 90 per cent claim that lands is not evidence of good calibration, and a 55 per cent claim that fails is not evidence of a broken method. The only way to tell the difference is to look at the probabilities across a batch of forecasts, not at the result of one match.</p>
<p>Accuracy is a count of outcomes. Calibration is a check on the probabilities attached to them. The two are related, but they answer different questions, and a record that reports only the first can make a weak process look strong. This article explains the gap, works through the arithmetic of expected value, and sets out what a sound process can and cannot deliver.</p>`,
  sections: [
    {
      id: "accuracy-count",
      heading: "Accuracy is a count, not a quality",
      html: `<p>Accuracy is the proportion of forecasts that were correct. It is easy to calculate, easy to report, and easy to mislead with. A forecaster who predicts the favourite in every match can achieve a respectable accuracy in a league where favourites usually win. That does not mean the forecast is well calibrated or that the reasoning adds anything.</p>
<p>Accuracy also throws away the difference between a cautious call and a reckless one. Saying a team has a 55 per cent chance and saying it has a 95 per cent chance are both counted as a win if the team wins. The first is a modest claim. The second is a strong claim that happened to be right. A count cannot tell them apart, which is why a record of wins and losses is not enough.</p>`
    },
    {
      id: "calibration-shape",
      heading: "Calibration and the shape of confidence",
      html: `<p>Calibration asks whether the probabilities match the outcomes. Among forecasts made at 70 per cent, about 70 per cent should come true. Among forecasts made at 30 per cent, about 30 per cent should come true. Calibration is a property of a group of forecasts, not of an individual call.</p>
<p>Overconfidence is the most common failure. Forecasts cluster near 0 and near 1, but the outcomes are more mixed than the probabilities suggest. Underconfidence is also a calibration error, though it is less discussed: a model that says 60 per cent when the true rate is 80 per cent is leaving information on the table. Both errors are invisible in a simple hit rate. Our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a> shows how to measure them.</p>`
    },
    {
      id: "expected-value-plain",
      heading: "Expected value in plain language",
      html: `<p>Expected value is the long-run average of a calculation repeated under the same conditions. It is not a prediction for a single match. In a betting context, it compares the probability of an outcome with the price on offer, scaled to a common unit such as 100 units of turnover.</p>
<p>Suppose a hypothetical price of 2.20 implies a 45.5 per cent chance, because 1 divided by 2.20 is 0.4545. If your estimate is 50 per cent, the expected return per 100 units of turnover is 0.50 multiplied by 220, which equals 110. That is 10 units above the 100 units turned over. If your estimate is 42 per cent, the expected return is 0.42 multiplied by 220, which equals 92.4, or 7.6 units below. The arithmetic is neutral. It does not tell anyone to take the price, and it is only as good as the estimate.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The sensitivity is the important part. A small change in the probability estimate can change the sign of the calculation. The table uses the same hypothetical price of 2.20 and four estimates. The break-even probability is 100 divided by 220, or 45.45 per cent.</p>
<table>
<thead><tr><th>Estimated probability</th><th>Expected return per 100 units</th><th>Difference from 100</th></tr></thead>
<tbody>
<tr><td>55%</td><td>121.0</td><td>+21.0</td></tr>
<tr><td>50%</td><td>110.0</td><td>+10.0</td></tr>
<tr><td>45%</td><td>99.0</td><td>-1.0</td></tr>
<tr><td>40%</td><td>88.0</td><td>-12.0</td></tr>
</tbody>
</table>
<p>At 50 per cent, the calculation looks favourable. At 45 per cent, it is almost exactly break-even. At 40 per cent, it is clearly negative. The gap between 50 and 40 is ten percentage points, which is well within the error of many football models. A forecast that looks strong at one estimate can look weak at another, and the person doing the calculation may not know which estimate is closer to the truth.</p>
<p>The break-even probability is a useful reference because it shows how much confidence the price requires. It does not show whether the estimate is right. A model can clear the break-even line in its own arithmetic and still be wrong about the match, because the arithmetic inherits every assumption in the model.</p>`
    },
    {
      id: "positive-estimate-lose",
      heading: "Why a positive estimate can still lose",
      html: `<p>Even if the estimate is right on average, a single season can produce a loss. Variance is not a flaw in the calculation; it is the reason the calculation is an average. A 55 per cent event that pays 2.20 will lose 45 per cent of the time. Over 20 repetitions, losing 12 is entirely possible, and the order of those losses can make the run feel like evidence of a broken method.</p>
<p>The calculation describes a long-run average under repeated conditions. Football matches are not repeated under identical conditions, and the model may be stale by the time the sample is large enough to judge. That is why a positive estimate is not a promise, and why a negative run is not proof that the process is wrong. Both statements cut in the same direction: single outcomes are weak evidence.</p>`
    },
    {
      id: "sound-analysis",
      heading: "What sound analysis looks like",
      html: `<p>A sound process starts with a defined question and a written forecast. It compares the forecast with a baseline, records the result, and reviews a batch of decisions rather than a single match. It states its uncertainty and separates the model from the outcome. It also distinguishes between a forecast that was wrong and a forecast that was unreasonable given the information available.</p>
<p>None of that makes a better result certain. It does make the analysis easier to learn from, and it makes it harder to claim credit for luck. The aim is a process that would look sensible to another analyst who saw the record, not a highlight reel that looks impressive to a casual reader. Our article on <a href="/articles/risk-management-football-analysis.html">risk management for football analysis</a> explains how sample size and selectivity affect that judgement.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a forecast only by whether it won.</strong> The probability is part of the forecast, not decoration.</li>
<li><strong>Changing the probability after the result.</strong> A forecast that is edited after the event cannot be scored.</li>
<li><strong>Comparing hit rates across different event types.</strong> A 60 per cent rate on one question is not the same as 60 per cent on another.</li>
<li><strong>Ignoring the price when judging a forecast.</strong> Accuracy without a price says nothing about the terms on offer.</li>
<li><strong>Treating a short run as proof of a method.</strong> Variance can make a weak process look strong for a while.</li>
<li><strong>Confusing a confident manner with a calibrated one.</strong> Certainty is not evidence.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>This is not a staking guide, and expected value arithmetic is not a promise. The estimate can be wrong, the market can be right, and the margin is always there. A calculation that looks favourable on paper can still produce a losing sequence, and a calculation that looks unfavourable can produce a winning one by chance.</p>
<p>The wider point is simple. Most people who gamble over time end up with less money than they started, because prices embed a margin and variance ensures that even good estimates have bad runs. Analysis can improve understanding. It cannot make the underlying uncertainty disappear, and it cannot repeal the arithmetic of the margin. Our guide to <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a> goes deeper into the price side of the calculation.</p>`
    }
  ],
  faq: [
    {
      q: "Can a prediction be accurate but poorly calibrated?",
      a: "Yes. A forecaster can be right often while attaching probabilities that are too extreme. The hit rate looks good, but the confidence attached to each call does not match the outcomes."
    },
    {
      q: "Is expected value a prediction for a single match?",
      a: "No. Expected value is an average over many repetitions. A single match can go either way, and a favourable calculation can still produce a losing run."
    },
    {
      q: "Why do most bettors lose money over time?",
      a: "Because prices include a margin and variance creates long losing stretches. A good forecast can still lose over a season, and the margin is paid whether the forecast is good or bad."
    }
  ],
  related: ["implied-probability-expected-value", "track-prediction-accuracy", "risk-management-football-analysis"]
};
