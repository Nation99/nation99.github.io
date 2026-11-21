export default {
  slug: "expected-points-xp",
  title: "Expected Points (xP): A Better League Table",
  metaTitle: "Expected Points (xP): A Better League Table",
  description: "Expected points turns match probabilities into a league table of performance. Learn how xP works, how to calculate it, and what it cannot tell you.",
  category: "xG and Stats",
  tags: ["expected points", "xP", "league table", "match probabilities"],
  published: "2026-11-21",
  updated: "2026-11-21",
  author: "Nyasha",
  dek: "A league table records what happened. Expected points estimates what the performances deserved, using the same probabilities that drive a match model.",
  takeaways: [
    "Expected points converts win, draw, and loss probabilities into a points estimate.",
    "The formula is 3 times the win probability plus the draw probability.",
    "xP describes the chances a team created and conceded, not the points it will win.",
    "A gap between xP and actual points is a question about finishing, goalkeeping, or model error, not proof of luck.",
    "xP is only as good as the model and the sample behind it, so use it with clear limits."
  ],
  intro: `<p>Football's league table is a record of outcomes. It tells you which teams won, drew, and lost, and it rewards the teams that converted their chances. It does not tell you whether those results were built on repeatable performances or on a short run of finishing that may not last.</p>
<p>Expected points, usually shortened to xP, describes the table in a different currency. Instead of counting the points a team actually won, it adds the points implied by its match probabilities. A team that created the better chances but lost still earns xP for the performance. A team that was outplayed but won does not.</p>
<p>xP is not a moral score and it is not a prediction of the final table. It is a summary of a model's view of each match, expressed in the unit fans already understand.</p>`,
  sections: [
    {
      id: "what-expected-points-means",
      heading: "What expected points means",
      html: `<p>Expected points is the average number of points a team would collect if the same match probabilities were repeated many times. The calculation is simple:</p>
<p><strong>xP = 3 x P(win) + 1 x P(draw) + 0 x P(loss)</strong></p>
<p>A team with a 60 per cent chance of winning, a 25 per cent chance of drawing, and a 15 per cent chance of losing has an xP of 2.05. A team with the reverse probabilities has an xP of 0.70. The underdog can still win, but the model says that outcome is less likely.</p>
<p>The probabilities can come from different sources. A Poisson model built from expected goals is one option, and our guide to the <a href="/articles/poisson-distribution-football.html">Poisson distribution</a> explains how scoreline probabilities are produced. A model based on shot quality, a market-implied model, or a blend of inputs can also supply them. The important rule is consistency. A table that mixes models is a table of different currencies.</p>
<p>xP is sometimes called deserved points. That phrase is misleading. The number does not measure effort, justice, or entertainment. It measures the points implied by a particular set of probabilities. If the model is poor, the xP table will be poor in the same way.</p>`
    },
    {
      id: "from-probabilities-to-points",
      heading: "From probabilities to points",
      html: `<p>The range of xP is zero to three. A certain win is worth three points, a certain draw is worth one, and a certain loss is worth zero. Most matches sit somewhere in between.</p>
<p>Consider a match with a 45 per cent home win chance, a 27 per cent draw chance, and a 28 per cent away win chance. The home xP is 1.35 plus 0.27, which equals 1.62. The away xP is 0.84 plus 0.27, which equals 1.11. The two values sum to 2.73, not three.</p>
<p>That gap is not an error. A draw awards one point to each side, so the total number of points distributed in a match depends on the draw probability. The sum of the two xP values is three minus the draw probability. In this example, three minus 0.27 is 2.73, which matches the calculation. The lesson is that xP is not a conserved quantity like actual points.</p>
<p>This matters when you build a table. You cannot assume that the xP totals across a league will match the number of points actually awarded. They describe probabilities, not a fixed pot of points.</p>`
    },
    {
      id: "building-an-xp-table",
      heading: "Building an xP table",
      html: `<p>A useful xP table needs a clear method. The first step is to choose one model and freeze it for the period you want to study. Switching models halfway through a season creates a break in the series that is hard to interpret.</p>
<p>The second step is to record the pre-match probabilities for every match. Pre-match numbers are the honest choice for a performance table because they are available before the result. A post-match xG model can also be used, but it is retrospective and should be labelled as such. Our explanation of <a href="/articles/what-is-xg-football.html">expected goals</a> covers the difference between chance quality and outcome.</p>
<p>The third step is to calculate xP for each team in each match. Multiply the win probability by three, add the draw probability, and ignore the loss probability because it contributes zero. Sum the match values across the season.</p>
<p>The fourth step is to compare xP with actual points. Do not stop at the gap. Ask what is driving it. A team that beats xP may be finishing well, defending well, or benefiting from a small sample. A team that trails xP may be creating good chances but conceding at bad moments. The table is a starting point for questions, not the answer.</p>
<p>Finally, decide how to handle penalties, red cards, and extra time. A league table normally excludes cup matches and extra time, so keep the xP table consistent with the competition you are studying. If a model includes penalty shootouts, say so. Mixtures of rules produce mixtures of stories.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows one team's five matches, with pre-match probabilities and the resulting xP. The numbers are rounded, so the totals may differ by a hundredth.</p>
<table>
<caption>Expected points across five illustrative matches</caption>
<thead><tr><th>Match</th><th>Win</th><th>Draw</th><th>Loss</th><th>xP</th></tr></thead>
<tbody>
<tr><td>1</td><td>50%</td><td>25%</td><td>25%</td><td>1.75</td></tr>
<tr><td>2</td><td>40%</td><td>30%</td><td>30%</td><td>1.50</td></tr>
<tr><td>3</td><td>60%</td><td>20%</td><td>20%</td><td>2.00</td></tr>
<tr><td>4</td><td>30%</td><td>30%</td><td>40%</td><td>1.20</td></tr>
<tr><td>5</td><td>45%</td><td>25%</td><td>30%</td><td>1.60</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td></td><td><strong>8.05</strong></td></tr>
</tbody>
</table>
<p>The team actually won three matches, drew one, and lost one, for ten points. The gap between ten actual points and 8.05 xP is 1.95. Over five matches, that gap is not proof of luck or skill. It is one realization of a probabilistic process.</p>
<p>Now compare four illustrative teams over the same five matches:</p>
<table>
<caption>Illustrative xP and actual points</caption>
<thead><tr><th>Team</th><th>xP</th><th>Actual points</th><th>Difference</th></tr></thead>
<tbody>
<tr><td>Club A</td><td>8.05</td><td>10</td><td>+1.95</td></tr>
<tr><td>Club B</td><td>7.40</td><td>6</td><td>-1.40</td></tr>
<tr><td>Club C</td><td>5.25</td><td>7</td><td>+1.75</td></tr>
<tr><td>Club D</td><td>3.30</td><td>2</td><td>-1.30</td></tr>
</tbody>
</table>
<p>The differences do not need to sum to zero, because xP is not a conserved quantity. The table is a set of descriptions, not a closed accounting system. If these were real teams, the next step would be to watch the matches and ask why the gaps exist.</p>`
    },
    {
      id: "xp-vs-actual-points",
      heading: "xP versus actual points",
      html: `<p>A team that finishes above its xP is often described as lucky. That is too quick. The gap can come from repeatable skills. A side with an excellent finisher may convert chances at a higher rate than the model expects. A goalkeeper may save more than an average keeper would. A team may be especially good at set pieces, or at protecting a lead late in matches.</p>
<p>The gap can also come from model error. If the model underestimates a team's chance creation, the xP total will be too low. If it overrates long shots or ignores defensive pressure, the table will drift. A single number cannot separate skill from misspecification.</p>
<p>The honest use of xP is to ask better questions. Is the gap driven by shooting, saving, or schedule? Does it persist across seasons? Does it survive a change of manager or personnel? A gap that lasts is more interesting than a gap that disappears. Our guide to <a href="/articles/league-table-beyond-points.html">reading a league table beyond points</a> covers related table habits.</p>
<p>xP is not a betting signal. It does not know the price, the team news, or the motivation for the next match. It is a descriptive tool for understanding what a team's performances implied in points.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Using post-match numbers and calling them pre-match.</strong> A retrospective xP table can be useful, but it is not a forecast and should not be presented as one.</li>
<li><strong>Mixing models.</strong> A table built from two different probability sources is not a consistent ranking.</li>
<li><strong>Ignoring sample size.</strong> Five matches tell you very little. A full season is a better start, and even then the uncertainty is real.</li>
<li><strong>Treating xP as a prediction.</strong> The number describes the probabilities in the model, not the points a team will win.</li>
<li><strong>Forgetting how draws work.</strong> The sum of xP in a match is not always three, and league totals are not a fixed pot.</li>
<li><strong>Assuming every gap is luck.</strong> Finishing, goalkeeping, set pieces, and model error can all explain a difference.</li>
</ul>
<p>The common thread is a search for certainty. xP is most useful when it is treated as one description among several, with a clear method and a clear set of limits.</p>`
    },
    {
      id: "limits",
      heading: "What xP cannot tell you",
      html: `<p>Expected points inherits every assumption of the model behind it. If the model does not know about injuries, travel, weather, or motivation, the xP table does not either. It describes the inputs it was given, not the full context of a season.</p>
<p>It also cannot tell you which team will win the next match. The probabilities may be well calibrated over a long run, but any single result is uncertain. A high xP total is not a promise, and a low one is not a sentence.</p>
<p>Use xP as a bridge between match analysis and the league table. It can show that a team's results are running ahead of its performances, or that a slow start is not as bad as the table suggests. It cannot tell you why without watching the matches, checking the data, and asking what the model might have missed.</p>
<p>For a wider view of how probabilities become a table, pair xP with a match model and a clear record of its accuracy. The value is not in the single number. It is in the habit of separating process from outcome.</p>`
    }
  ],
  faq: [
    {
      q: "Is expected points the same as expected goals?",
      a: "No. Expected goals measures the quality of chances. Expected points converts win, draw, and loss probabilities into a points estimate. A match model can use xG as an input, but the two numbers answer different questions."
    },
    {
      q: "Can expected points predict the final league table?",
      a: "It can describe which teams have performed well in probability terms, but it does not predict future results. A team with a high xP can still finish lower because finishing, injuries, and random variation matter."
    },
    {
      q: "Why do expected points totals not match actual points?",
      a: "xP is an average over probabilities, not a record of awarded points. Draws distribute two points rather than three, and different models can produce different totals. The two quantities are related but not the same."
    }
  ],
  related: ["league-table-beyond-points", "poisson-distribution-football", "track-prediction-accuracy"]
};
