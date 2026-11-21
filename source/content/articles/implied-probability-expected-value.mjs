export default {
  slug: "implied-probability-expected-value",
  title: "Implied Probability and Expected Value",
  metaTitle: "Implied Probability and Expected Value",
  description: "Turn odds into implied probability, remove the margin to estimate fair odds, and calculate expected value without mistaking an average for a promise.",
  category: "Betting Education",
  tags: ["implied probability", "expected value", "overround"],
  published: "2026-04-13",
  updated: "2026-04-13",
  author: "Nyasha",
  dek: "Two calculations separate a price from a claim. Both are simple, and both are easy to misuse.",
  takeaways: [
    "Implied probability is one divided by decimal odds.",
    "Normalising implied probabilities removes the market margin for comparison.",
    "Expected value compares a model probability with the price, not with the outcome.",
    "A positive expected value can still produce long losing runs.",
    "Model error is usually larger than the edge being measured."
  ],
  intro: `<p>Expected value is often presented as a single number that settles an argument. The number is useful, but only if you know what went into it. A positive result can come from a sound model, a careless model, or a price that has moved since the calculation. The arithmetic does not distinguish between those cases.</p>
<p>This guide builds the calculation from the beginning. Implied probability asks what a price says; expected value asks what a model says about that price. Keeping the two separate is the first defence against false confidence. The emphasis throughout is on uncertainty, because the uncertain part is usually the largest part.</p>`,
  sections: [
    {
      id: "implied-probability",
      heading: "Implied probability from a market price",
      html: `<p>For decimal odds, implied probability is 1 divided by the price. A price of 2.50 implies 40 per cent, a price of 3.40 implies 29.41 per cent, and a price of 4.00 implies 25 per cent. The calculation is exact, and it is the same for every market.</p>
<p>The result is called implied because it is contained in the price, not because it is true. A price of 4.00 implies a 25 per cent chance under the market's arithmetic, not in reality.</p>
<p>For a three-way football market, the three implied probabilities usually add to more than 100 per cent. The excess is the margin. A market with prices of 2.10, 3.40 and 4.00 has implied probabilities of 47.62, 29.41 and 25.00 per cent, which add to 102.03 per cent.</p>
<p>That total is the starting point for the next step, and a reminder that the raw numbers cannot be treated as a clean probability distribution.</p>`
    },
    {
      id: "fair-odds",
      heading: "Removing the margin to estimate fair odds",
      html: `<p>To remove the margin, divide each implied probability by the total. In the example above, Club A's 47.62 is divided by 1.0203, which gives 46.67 per cent. The draw's 29.41 becomes 28.83 per cent, and Club B's 25.00 becomes 24.50 per cent. The three now add to 100 per cent.</p>
<p>Fair decimal odds can be reconstructed by dividing 1 by each normalised probability. Club A's fair price is about 2.14, the draw about 3.47 and Club B about 4.08. These are fair relative to the market's prices, not in any absolute sense.</p>
<p>The word fair needs care. Here it means a price with no margin, given the market's implied probabilities. It does not mean a price that will produce a positive expected value against a better model.</p>
<p>Normalisation is most useful for comparing markets with different margins, or for reading a market's relative ordering. It is less useful for calculating expected value, where the actual price, margin included, is the number that determines the return.</p>`
    },
    {
      id: "expected-value",
      heading: "Expected value in plain arithmetic",
      html: `<p>Expected value, usually shortened to EV, is the average return per unit staked if the same situation were repeated many times. For a single outcome with decimal odds d and model probability p, the formula for one unit is:</p>
<p><strong>EV = (p multiplied by (d minus 1)) minus (1 minus p)</strong></p>
<p>The first term is the return above the stake when the outcome happens, weighted by its probability. The second is the stake lost when it does not. Zero means the price is fair against the model; positive means the model thinks the price is generous on average; negative means it looks short.</p>
<p>The formula assumes a binary outcome and a fixed stake. Football markets with three outcomes need the calculation repeated for each outcome, with the probabilities summing to 100 per cent across the market.</p>
<p>A positive EV is not a prediction that the outcome will happen. A 27 per cent chance at 4.00 can have a positive EV if the model is right, but the outcome is still unlikely in that single match.</p>`
    },
    {
      id: "positive-edge-losing-runs",
      heading: "Why a positive edge still loses often",
      html: `<p>Take an illustrative outcome with a 27 per cent model probability and decimal odds of 4.00. The break-even probability is 25 per cent, so the model sees a two percentage point edge. The EV per unit is 0.27 multiplied by 3.00, minus 0.73, which is 0.08.</p>
<p>That positive number does not make the outcome likely. A 27 per cent event fails 73 per cent of the time. Over five independent repetitions, the chance of no success is 0.73 to the fifth power, about 21 per cent. Losing runs are not evidence that the calculation was wrong; they are part of the distribution.</p>
<p>Over many repetitions, the average return may approach the expected value if the probability is accurate and the trials are independent. Football matches are not independent in every respect: form, injuries and tactical changes create correlation over time, which makes the real distribution wider than a coin-toss analogy suggests.</p>
<p>The practical point is that a small edge is difficult to detect. A model that claims a two percentage point advantage is claiming a difference that could easily come from estimation error. The edge and the error are the same order of magnitude.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table is illustrative. Club A and Club B are hypothetical, and the prices and model probabilities are invented for the calculation.</p>
<table>
<caption>Comparing a hypothetical model with a hypothetical market</caption>
<thead>
<tr><th>Outcome</th><th>Decimal odds</th><th>Break-even probability</th><th>Model probability</th><th>Difference</th><th>EV per unit</th></tr>
</thead>
<tbody>
<tr><td>Club A win</td><td>2.10</td><td>47.62%</td><td>46.00%</td><td>-1.62 points</td><td>-0.034</td></tr>
<tr><td>Draw</td><td>3.40</td><td>29.41%</td><td>27.00%</td><td>-2.41 points</td><td>-0.082</td></tr>
<tr><td>Club B win</td><td>4.00</td><td>25.00%</td><td>27.00%</td><td>+2.00 points</td><td>+0.080</td></tr>
</tbody>
</table>
<p>The break-even probability is 1 divided by the decimal odds. For Club A, 1 divided by 2.10 is 0.4762, or 47.62 per cent. The model gives Club A 46 per cent, which is below the break-even point, so the EV is negative.</p>
<p>The EV arithmetic for Club A is 0.46 multiplied by 1.10, which is 0.506, minus 0.54, which is -0.034. For the draw, 0.27 multiplied by 2.40 is 0.648, minus 0.73, which is -0.082. For Club B, 0.27 multiplied by 3.00 is 0.81, minus 0.73, which is +0.08.</p>
<p>Club B shows a positive EV of 0.08 units per unit staked. That sounds impressive until the sensitivity is examined. At a model probability of 24 per cent, the EV becomes 0.24 multiplied by 3.00, minus 0.76, which is -0.04. A three point error flips the sign.</p>
<p>The market's raw probabilities add to 102.03 per cent. Normalising them gives roughly 46.67, 28.83 and 24.50 per cent. The market's view of Club B is close to the 24 per cent that would make the EV negative, so the apparent edge is small relative to the uncertainty.</p>`
    },
    {
      id: "model-probabilities",
      heading: "Where the model probability comes from",
      html: `<p>The calculation is only as good as the probability behind it. That probability can come from a ratings system, a Poisson model, a machine learning pipeline or structured judgement, and each source has its own failure modes.</p>
<p>A Poisson model, for example, turns estimated goal rates into a scoreline distribution. Our guide to the <a href="/articles/poisson-distribution-football.html">Poisson distribution in football</a> explains the mechanics and the assumptions. A rating system may be simpler but harder to audit. A judgement call may capture context that a model misses, but it is difficult to calibrate.</p>
<p>Whatever the source, the probability should be tested over a large sample. Calibration asks whether events assigned a 30 per cent chance happen about 30 per cent of the time. A model can be accurate on average and badly calibrated in the tails, where football markets often live.</p>
<p>Comparing the model with the market's normalised probabilities also helps. A large disagreement is not automatically an opportunity; it may mean the model is missing team news, or that the market knows something the model does not.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<p><strong>Comparing a model with the wrong baseline.</strong> Use raw implied probability for EV, because that is the price actually available. Use normalised probability when comparing the market's relative view. Mixing the two produces false edges.</p>
<p><strong>Forgetting the stake in the formula.</strong> The return above the stake is d minus 1, not d. Using d in the first term overstates the EV by the stake on every calculation.</p>
<p><strong>Treating EV as a property of one match.</strong> Expected value is an average over repetitions. A single result can contradict it without disproving it.</p>
<p><strong>Ignoring uncertainty in the probability.</strong> A point estimate without an error range encourages false precision. If the edge is two points and the error is five, the edge is not established.</p>
<p><strong>Leaving out the draw.</strong> In a three-way market, the draw is an outcome with its own price. A model that only compares two teams is incomplete.</p>
<p><strong>Overfitting a small sample.</strong> A model tuned to twenty matches may describe those matches well and predict the next twenty poorly. Keep a holdout sample and update slowly.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Expected value is a simplification. It assumes that the probability estimate is meaningful, that the price is available in the size you need, and that the situation can be repeated under similar conditions. None of those assumptions is perfectly true in football.</p>
<p>The largest source of error is usually the model, not the arithmetic. A perfect calculation built on a poorly calibrated probability is still a poor guide. The market's margin also varies between competitions and between early and late prices.</p>
<p>The calculation also says nothing about whether an outcome is likely. It compares a price with a probability. A positive result can sit on a 10 per cent event, and a negative result can sit on an 80 per cent event.</p>
<p>For the price formats that feed these calculations, see <a href="/articles/reading-football-odds.html">how to read football odds</a>. For the wider question of what a good prediction record looks like, see <a href="/articles/winning-predictions-vs-profit.html">winning predictions versus sound analysis</a>. Both are useful companions to the arithmetic, and neither turns it into a promise.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between implied probability and expected value?",
      a: "Implied probability comes from the price: it is 1 divided by decimal odds. Expected value compares that price with an independent probability estimate. The first describes the market; the second compares the market with a model."
    },
    {
      q: "Should I remove the margin before calculating expected value?",
      a: "No. Expected value uses the actual decimal price, margin included. Normalisation helps compare the market's relative view, but it is not the price you would be paid."
    },
    {
      q: "Can a positive expected value still lose?",
      a: "Yes. Expected value is an average over many repetitions. A single outcome, or a short run, can lose even when the calculation is sound. A small edge also sits within the error of most models."
    }
  ],
  related: ["reading-football-odds", "winning-predictions-vs-profit", "poisson-distribution-football"]
};
