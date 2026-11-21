export default {
  slug: "over-under-goals-guide",
  title: "Over/Under Goals Analysis for Beginners",
  metaTitle: "Over/Under Goals Analysis for Beginners",
  description: "A beginner's guide to over/under goals markets: totals lines, expected goal rates, Poisson arithmetic, and the limits of a simple model.",
  category: "Beginner Guides",
  tags: ["over/under", "totals", "Poisson", "beginner"],
  published: "2026-10-25",
  updated: "2026-10-25",
  author: "Nyasha",
  dek: "An over/under market asks a simple question: will the match produce more or fewer goals than a stated line? The arithmetic is simple, but the estimate is not.",
  takeaways: [
    "An over/under market sets a goal line and offers two sides around it.",
    "The total expected goal rate is the starting point for a Poisson estimate.",
    "A 2.5 line avoids pushes, while whole lines can push.",
    "Team style, game state and the opponent affect the total, not just the average.",
    "A probability estimate is not a prediction that a particular match will go over or under."
  ],
  intro: `<p>Not every match question is about the winner. Sometimes the more interesting question is how many goals the match will produce. Over/under markets, also called totals markets, turn that question into a line and a pair of prices.</p>
<p>For a beginner, the format is straightforward: a line such as 2.5 goals, and two outcomes, over or under. The hard part is estimating the probability, which requires an expected goal rate for the match rather than a hunch about whether it will be entertaining.</p>`,
  sections: [
    {
      id: "what-the-market-is",
      heading: "What an over/under market is",
      html: `<p>An over/under market sets a total goal line for the match. If the line is 2.5, the over side succeeds when three or more goals are scored, and the under side succeeds when two or fewer are scored. Because the line is not a whole number, there is no push.</p>
<p>Whole lines, such as 3, introduce the possibility of a push when exactly three goals are scored. That changes the settlement and the price. A 3.0 line and a 3.25 line are not the same market, even though they look similar.</p>
<p>The line is chosen by the market to balance the two sides. A high line implies that goals are expected; a low line implies the opposite. The line is information, just like the price.</p>`
    },
    {
      id: "start-with-goal-rates",
      heading: "Start with expected goal rates",
      html: `<p>The first input is the expected number of goals for each team. A simple approach uses each team's attacking and defensive averages, adjusts for the opponent and the venue, and adds the two rates together. If Club A is expected to score 1.55 and Club B is expected to score 1.05, the match total is 2.60.</p>
<p>Expected goals can be a better input than actual goals because it is less noisy over a short run. Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains the logic and the caveats. The total rate is still an estimate, and it carries the uncertainty of both team estimates.</p>
<p>It is worth separating the sources of goals. A team that creates chances in open play may have a more stable total than a team that relies on set pieces or penalties. The same average can hide different distributions, and the distribution affects the probability of extreme totals.</p>`
    },
    {
      id: "poisson-totals",
      heading: "Turning a rate into over/under probabilities",
      html: `<p>If total goals are modelled as a Poisson count with rate lambda, the probability of exactly k goals is given by the Poisson formula. The probability of under 2.5 is the sum of the probabilities of 0, 1 and 2 goals. The probability of over 2.5 is one minus that sum.</p>
<p>The Poisson model assumes a constant rate and independent events. Football violates both assumptions to some degree, especially when the score changes. A team that leads may slow the game down; a team that trails may push forward. Those effects can raise or lower the late goal rate.</p>
<p>Even with those limits, the Poisson model is a useful baseline. It forces the analyst to state an expected rate and to show how the probability changes when that rate changes. Our guide to <a href="/articles/poisson-distribution-football.html">the Poisson model</a> sets out the full arithmetic.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The example below is illustrative. The match total is 2.60 goals. We calculate the probability of 0, 1 and 2 goals, then sum them to get the under 2.5 probability.</p>
<table>
<caption>Illustrative Poisson totals with lambda 2.60</caption>
<thead><tr><th>Goals</th><th>Probability</th></tr></thead>
<tbody>
<tr><td>0</td><td>7.43%</td></tr>
<tr><td>1</td><td>19.31%</td></tr>
<tr><td>2</td><td>25.10%</td></tr>
<tr><td>3</td><td>21.75%</td></tr>
<tr><td>4</td><td>14.14%</td></tr>
<tr><td>5 or more</td><td>12.27%</td></tr>
</tbody>
</table>
<p>The under 2.5 probability is 7.43 plus 19.31 plus 25.10, which equals 51.84 per cent. The over 2.5 probability is the remaining 48.16 per cent. With a total rate of 2.60, the under side is slightly more likely than the over side on this model.</p>
<p>Now raise the total rate to 3.10. The probability of 0 goals is about 4.50 per cent, 1 goal is about 13.97 per cent, and 2 goals is about 21.65 per cent. The under 2.5 probability falls to about 40.12 per cent, and the over rises to about 59.88 per cent. A half-goal increase in the expected total moves the market by roughly 12 percentage points.</p>
<p>That sensitivity is the main lesson. The estimate of the total rate matters more than the elegance of the formula. A model that is precise about the Poisson arithmetic but careless about the input rate is not giving a precise answer.</p>`
    },
    {
      id: "reading-lines",
      heading: "Reading the line and the price",
      html: `<p>A 2.5 line is not inherently high or low. It depends on the match. A league with an average total of 2.7 goals makes 2.5 a slightly low line; a defensive league with an average of 2.3 makes it a high line. The line only becomes meaningful when compared with a baseline.</p>
<p>The price adds another layer. Convert the decimal price to an implied probability, normalise for the margin, and compare the result with your own estimate. The difference is a question, not an answer. It may reflect information you do not have, or it may reflect a market inefficiency. The only way to know is to keep a record and evaluate the process over time.</p>
<p>Our guide to <a href="/articles/draw-prediction-football.html">draw probabilities</a> shows how the same scoreline grid produces the draw estimate. The totals market and the match market are related views of the same underlying distribution.</p>`
    },
    {
      id: "team-style",
      heading: "Team style changes the total",
      html: `<p>Two teams with the same average goals can produce different totals. A high-pressing team may create more turnovers and more shots, raising the ceiling of the distribution. A low-block team may reduce the number of chances for both sides, lowering the total and increasing the chance of a 0-0 or 1-0.</p>
<p>The opponent matters too. A team that usually scores 1.6 may struggle against a defence that concedes 0.8. A simple average ignores that interaction. A better estimate adjusts each team's rate for the quality of the opposition, the venue and the players available.</p>
<p>Game state adds another layer. A team that takes an early lead may manage the match rather than chase more goals. A team that falls behind may open up. The pre-match total is an average over many possible scripts, not a description of the one that will unfold.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Using league average goals without adjusting for the teams.</strong> The match total is not the league total.</li>
<li><strong>Forgetting that whole lines can push.</strong> A 3.0 line behaves differently from a 2.5 line when exactly three goals are scored.</li>
<li><strong>Treating a high line as an over signal.</strong> The line reflects the market's expectation, not a free opportunity.</li>
<li><strong>Ignoring the distribution.</strong> Two teams with the same average can have very different probabilities of a 0-0 or a 4-3.</li>
<li><strong>Reporting more precision than the inputs allow.</strong> A rate estimated from a handful of matches cannot support a probability quoted to two decimal places.</li>
</ul>
<p>The fix is usually to slow down and state the assumptions. A simple model with clear inputs is more useful than a complex model with hidden ones.</p>`
    },
    {
      id: "limits",
      heading: "Limits and responsible use",
      html: `<p>The Poisson totals model is a teaching tool. It does not know about injuries, weather, referee tendencies or tactical changes. It assumes a constant rate, which is a simplification of a match that may have distinct phases.</p>
<p>It also treats the two teams' goals as independent. In reality, the score affects behaviour. A red card, an early goal or a late equaliser can change the rate for the remaining minutes. More elaborate models adjust for these effects, but they add complexity and their own assumptions.</p>
<p>The responsible conclusion is modest. Over/under analysis is a way to structure a question about goals, not a way to remove uncertainty. Estimate the total, state the range, compare with the line, and keep a record of the results. For a wider view of how probabilities and prices fit together, see the implied probability guide.</p>`
    }
  ],
  faq: [
    {
      q: "What does over 2.5 goals mean?",
      a: "It means the match must produce three or more goals for the over side to succeed. Two or fewer goals means the under side succeeds. The half line removes the possibility of a push."
    },
    {
      q: "How is the expected total calculated?",
      a: "A simple approach adds each team's expected goals for the match after adjusting for attack, defence, venue and opponent. The result is an estimate, not a promise of the actual total."
    },
    {
      q: "Why does the same total rate produce different over/under probabilities in different models?",
      a: "Models differ in their assumptions about how goals are distributed. A basic Poisson model uses one rate, while adjusted models may account for dependence, game state or overdispersion."
    }
  ],
  related: ["poisson-distribution-football", "what-is-xg-football", "draw-prediction-football"]
};
