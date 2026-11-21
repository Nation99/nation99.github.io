export default {
  slug: "poisson-distribution-football",
  title: "Poisson Distribution for Football",
  metaTitle: "Poisson Distribution for Football: A Guide",
  description: "How the Poisson model turns expected goals into scoreline probabilities, with a worked example and a clear account of its limits.",
  category: "Betting Education",
  tags: ["Poisson", "scoreline model", "probability"],
  published: "2026-05-26",
  updated: "2026-05-26",
  author: "Nyasha",
  dek: "A Poisson model is a machine for turning an average into a spread. The output is only as good as the average you feed it.",
  takeaways: [
    "A Poisson model treats each team's goals as a count with its own average rate.",
    "The scoreline grid multiplies the two teams' independent goal probabilities.",
    "The model's assumptions are strong, and football breaks several of them.",
    "A worked grid is a useful teaching tool, not a forecast.",
    "The biggest error usually comes from the estimated goal rates, not the formula."
  ],
  intro: `<p>A Poisson model turns an average into a spread. Give it an expected goal rate for each team, and it returns a probability for every scoreline. Add the cells together and you have match outcome estimates, over and under totals, and anything else the grid can express.</p>
<p>The appeal is that the arithmetic is transparent. Every scoreline can be traced back to two rates and a formula. The danger is that the transparency creates an illusion of precision. The rates are estimates, the assumptions are strong, and football does not always behave like a counting process.</p>`,
  sections: [
    {
      id: "why-counts",
      heading: "Why goals can be modelled as counts",
      html: `<p>Goals are discrete events. A team scores zero, one, two or more in a match, and the count is bounded by time. That makes a count distribution a natural starting point, even before anyone mentions football's low scoring rate.</p>
<p>The Poisson distribution describes the number of events in a fixed interval when events occur independently at a constant average rate. It needs one parameter, lambda, which is the expected number of events in the interval. In football, lambda is the expected goals for a team in a match.</p>
<p>The model implies that the variance of the count equals its mean. A team with a lambda of 1.6 has a variance of 1.6. That property is convenient, but it is also a strong claim about how goals arrive. Real football often shows more variance than the Poisson model allows, especially when teams differ in quality or when game state changes the rate. None of this makes the model useless. It makes it a baseline: simple, auditable, and easy to improve.</p>`
    },
    {
      id: "the-formula",
      heading: "The Poisson formula without the scare tactics",
      html: `<p>The probability of a team scoring exactly k goals is given by the formula:</p>
<p><strong>P(k) = e to the power of minus lambda, multiplied by lambda to the power of k, divided by k factorial</strong></p>
<p>Here e is a mathematical constant, roughly 2.718. Lambda is the expected goal rate. The factorial term, written k!, is the product of all positive integers up to k, so 3! is 3 multiplied by 2 multiplied by 1, which is 6. By convention, 0! is 1.</p>
<p>Take a team with a lambda of 1.60. The probability of zero goals is e to the power of minus 1.60, which is about 0.2019, or 20.19 per cent. The probability of one goal is 0.2019 multiplied by 1.60, which is about 0.3230, or 32.30 per cent. For two goals, the calculation is 0.2019 multiplied by 1.60 squared, which is 2.56, divided by 2. That gives 0.2584, or 25.84 per cent. Three goals gives 0.1378, or 13.78 per cent.</p>`
    },
    {
      id: "estimating-lambda",
      heading: "Estimating each team's goal rate",
      html: `<p>The formula is the easy part. Lambda is where the judgement enters. A simple approach starts with a league average and adjusts it for each team's attacking and defensive strength, then adds a home or away factor.</p>
<p>Suppose a hypothetical league averages 1.40 goals per team per match. Club A's attack is estimated at 15 per cent above average, and Club B's defence at 10 per cent weaker than average. Multiplying 1.40 by 1.15 and then by 1.10 gives about 1.77 expected goals for Club A before any venue adjustment.</p>
<p>Expected goals can be a better input than actual goals because it is less noisy over a short run. Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains the trade-offs. Even xG is an estimate from a model, so the lambda that comes out of it carries model error as well as sampling error.</p>`
    },
    {
      id: "scoreline-grid",
      heading: "Building a scoreline grid",
      html: `<p>Once each team has a lambda, the scoreline grid follows from independence. The probability of Club A scoring two and Club B scoring one is the probability of Club A scoring two multiplied by the probability of Club B scoring one.</p>
<p>With lambdas of 1.60 and 1.10, the probability of Club A scoring two is 0.2584, and the probability of Club B scoring one is 0.3662. Multiplying them gives 0.0946, or 9.46 per cent. That is one cell in the grid.</p>
<p>The same calculation is repeated for every combination of goals. Summing rows, columns or diagonals gives the outcomes you want. The independence assumption is the important one: the model treats Club A's goals as unrelated to Club B's goals, while in a real match the score affects how both teams play.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The grid below is illustrative. Club A and Club B are hypothetical, with lambda values of 1.60 and 1.10. The cells show the probability of each scoreline as a percentage.</p>
<table>
<caption>Illustrative Poisson scoreline grid</caption>
<thead>
<tr><th>Club A goals</th><th>Club B 0</th><th>Club B 1</th><th>Club B 2</th><th>Club B 3</th><th>Club B 4</th></tr>
</thead>
<tbody>
<tr><td><strong>0</strong></td><td>6.72</td><td>7.39</td><td>4.07</td><td>1.49</td><td>0.41</td></tr>
<tr><td><strong>1</strong></td><td>10.75</td><td>11.83</td><td>6.51</td><td>2.39</td><td>0.66</td></tr>
<tr><td><strong>2</strong></td><td>8.60</td><td>9.46</td><td>5.20</td><td>1.91</td><td>0.52</td></tr>
<tr><td><strong>3</strong></td><td>4.59</td><td>5.05</td><td>2.78</td><td>1.02</td><td>0.28</td></tr>
<tr><td><strong>4</strong></td><td>1.84</td><td>2.02</td><td>1.11</td><td>0.41</td><td>0.11</td></tr>
</tbody>
</table>
<p>Check one cell in full. Club A's probability of two goals is 0.2584. Club B's probability of one goal is 0.3662. The product is 0.2584 multiplied by 0.3662, which is 0.0946, or 9.46 per cent. That is the figure in the row for two goals and the column for one goal.</p>
<p>Now sum the cells. Club A wins in the cells below the diagonal: 10.75 + 8.60 + 9.46 + 4.59 + 5.05 + 2.78 + 1.84 + 2.02 + 1.11 + 0.41 = 46.61 per cent. The draw sits on the diagonal: 6.72 + 11.83 + 5.20 + 1.02 + 0.11 = 24.88 per cent. Club B wins above the diagonal: 7.39 + 4.07 + 1.49 + 0.41 + 6.51 + 2.39 + 0.66 + 1.91 + 0.52 + 0.28 = 25.63 per cent.</p>
<p>Those three figures add to 97.12 per cent. The missing 2.88 per cent sits in scorelines with five or more goals for either team; with the full distribution, Club A's win probability is about 48.8 per cent, the draw about 24.9 per cent and Club B about 26.1 per cent.</p>`
    },
    {
      id: "assumptions",
      heading: "Assumptions that football breaks",
      html: `<p>The Poisson model assumes a constant rate and independent events. Football violates both in ways that matter.</p>
<p><strong>Game state changes the rate.</strong> A team leading 2-0 may reduce its attacking intent, while the trailing team pushes forward. The goals are not generated by a constant lambda for 90 minutes.</p>
<p><strong>The teams are not independent.</strong> One team's goals change the other team's behaviour. A red card changes both rates at once. The independence assumption is a convenience, not a fact about the match.</p>
<p><strong>Goals are correlated at low scores.</strong> Real football often shows fewer 1-1 and 2-2 draws than independent Poisson predicts, and more 0-0 and 1-0 results. The Dixon-Coles adjustment is one common fix, though it adds parameters and its own assumptions.</p>`
    },
    {
      id: "improving-the-model",
      heading: "Improving the basic model",
      html: `<p>The first improvement is to estimate lambda from better inputs. Use expected goals rather than raw goals, adjust for the strength of the opponent and separate home and away performance. Shrink small samples towards a league average so that a team with three good matches does not receive an extreme rating.</p>
<p>The second is to calibrate the output. A model is calibrated if events assigned a 30 per cent chance happen about 30 per cent of the time. Calibration is more useful than a single accuracy score, because it tests the probabilities rather than just the favourite.</p>
<p>The third is to allow for dependence. Bivariate Poisson models and Dixon-Coles adjustments change the low-score cells to better match observed football, though they remain simplifications. Finally, compare the model with the market. The market's normalised probabilities are a useful benchmark, as explained in our guide to <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a>. A large disagreement is a question to investigate, not an answer.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Using a season average as if it were a match-specific rate.</strong> A team's overall attacking average ignores the opponent, the venue and the players available.</li>
<li><strong>Forgetting home advantage.</strong> The same team can have different goal rates at home and away. A single average hides that difference.</li>
<li><strong>Building the grid from too few matches.</strong> Three or four matches produce a rate with a wide error range. Shrinking towards a baseline is usually wiser than trusting the raw average.</li>
<li><strong>Stopping the grid too early.</strong> A cut-off at three goals can omit several percentage points of probability, especially for the stronger team.</li>
<li><strong>Reporting too many decimal places.</strong> A model with uncertain inputs does not produce probabilities to four decimal places. Rounding to one decimal is usually enough.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>The Poisson model is a simplification of a complex game. It cannot capture injuries, weather, referee decisions, tactical changes or the psychology of a specific match, and it cannot know that a team is playing its third match in six days.</p>
<p>The output is sensitive to lambda. A small change in the estimated goal rate can move the match probabilities by several percentage points, which is a reminder that the arithmetic is only one part of the analysis.</p>
<p>Used well, the model provides a structured way to translate expected goals into scoreline probabilities. Used badly, it provides a false sense of precision. The difference is whether the assumptions, the inputs and the uncertainty are stated alongside the result. For a wider view of how probabilities and prices fit together, see our guide to expected value, linked above, and our note on <a href="/articles/winning-predictions-vs-profit.html">sound analysis versus a lucky record</a>.</p>`
    }
  ],
  faq: [
    {
      q: "What does lambda mean in a football Poisson model?",
      a: "Lambda is the expected number of goals for a team in a match. It is the single input the Poisson formula needs, and it is usually estimated from league averages, team strength and venue."
    },
    {
      q: "Why do the scoreline probabilities not add up to 100 per cent?",
      a: "A grid is usually cut off at a maximum number of goals. The cells inside the cut-off add to less than 100 per cent, and the remainder sits in higher scorelines. A full model runs the grid far enough for the tail to be negligible, or reports the tail separately."
    },
    {
      q: "Is the Poisson model accurate enough to predict football matches?",
      a: "It is a useful baseline, not a definitive forecast. Its accuracy depends on the goal rates, the assumptions and the calibration of the output. More elaborate models can improve on it, but they do not remove the uncertainty."
    }
  ],
  related: ["what-is-xg-football", "implied-probability-expected-value", "winning-predictions-vs-profit"]
};
