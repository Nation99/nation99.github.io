export default {
  slug: "home-away-splits",
  title: "Home and Away Splits in Football Data",
  metaTitle: "Home and Away Splits in Football Data",
  description: "Home and away splits can look revealing but are often small samples. Learn how venue, game state, and schedule shape them, and how to use them.",
  category: "xG and Stats",
  tags: ["home advantage", "away form", "splits", "sample size"],
  published: "2026-06-16",
  updated: "2026-06-16",
  author: "Nyasha",
  dek: "Home and away splits look like a clean way to separate a team's strengths, but a venue label is not an explanation. The useful question is what changed, and how much of it is noise.",
  takeaways: [
    "A home or away split is a small sample, often six to ten matches, so single results can dominate it.",
    "Venue effects are real but vary by team, opponent, competition, and game state.",
    "Raw splits mix schedule strength with performance, which makes a simple home versus away comparison misleading.",
    "Compare each split with the quality of the opponents faced before drawing conclusions.",
    "Use splits to generate questions, then test them against longer windows and match context."
  ],
  intro: `<p>The fixture list is not a neutral backdrop. Every match arrives with a venue, a crowd, a travel plan, and a particular moment in the season. It is natural to wonder whether a team's home form is a genuine strength or simply a kinder schedule.</p>
<p>Home and away splits promise to answer that question by separating the two. In practice, the split is only the beginning. A venue label tells you where a match was played; it does not tell you who the opponent was, what happened early, or how much of the difference is likely to persist.</p>`,
  sections: [
    {
      id: "why-splits-tempt",
      heading: "Why splits tempt analysts",
      html: `<p>A split is easy to read. A team has 13 points at home and seven away, or 1.9 xG per home match and 1.1 away, and a story appears. The home crowd, the travel, the familiar pitch, the referee: all of these are plausible explanations. The human mind likes a clean contrast, and the split supplies one.</p>
<p>There is also a practical use. Coaches and analysts genuinely want to know whether a side performs differently in different environments. The problem is not the question. It is the confidence with which a small, unadjusted split is often answered.</p>`
    },
    {
      id: "what-a-split-contains",
      heading: "What a split actually contains",
      html: `<p>A home split contains every home match in the sample, regardless of opponent, game state, or availability. If two of those matches came against the strongest teams in the league, the home numbers carry that difficulty. If an away split includes a red card in the first ten minutes, the away numbers carry that too.</p>
<p>The split also mixes attack and defence. A team can have a strong home xG difference because it creates more, because it allows less, or both. Looking only at points or goal difference hides the mechanism. Breaking the split into xG for and xG against per match is the minimum useful level of detail.</p>
<p>Finally, the venue effect is not a single fixed quantity. It can differ by team, by opponent, by competition, and by season. A club with a loud, tight ground may have a larger home effect than a club whose stadium is less intimidating. Treating "home" as a universal bonus misses that variation.</p>`
    },
    {
      id: "sample-size",
      heading: "The sample size problem",
      html: `<p>Six home matches is 540 minutes. One early goal, one red card, or one penalty can shape the entire split. Suppose Club A has created 11.4 xG at home across six matches, an average of 1.90. Remove a single match in which it created 3.0 xG and the remaining five produce 8.4 xG, or 1.68 per match. The difference between 1.90 and 1.68 is not trivial, and it comes from one afternoon.</p>
<p>The same arithmetic applies to defence. A 0-3 defeat with 3.0 xGA can make an otherwise solid home record look poor. Over a full season, these swings partially cancel. Over a six-match split, they can be the story.</p>
<p>This is why splits are more informative when they cover a full season or multiple seasons, and why a split from the first two months should be described as early evidence rather than a settled pattern.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. Club A has played 12 matches, six at home and six away. All values are hypothetical and rounded.</p>
<table>
<thead><tr><th>Split</th><th>Matches</th><th>xG for</th><th>xG for per match</th><th>xGA</th><th>xGA per match</th><th>xGD per match</th><th>Points</th></tr></thead>
<tbody>
<tr><td>Home</td><td>6</td><td>11.4</td><td>1.90</td><td>6.0</td><td>1.00</td><td>+0.90</td><td>13</td></tr>
<tr><td>Away</td><td>6</td><td>6.6</td><td>1.10</td><td>9.0</td><td>1.50</td><td>-0.40</td><td>7</td></tr>
<tr><td><strong>Total</strong></td><td><strong>12</strong></td><td><strong>18.0</strong></td><td><strong>1.50</strong></td><td><strong>15.0</strong></td><td><strong>1.25</strong></td><td><strong>+0.25</strong></td><td><strong>20</strong></td></tr>
</tbody>
</table>
<p>The raw split is dramatic. At home, Club A creates 0.90 xG per match more than it allows; away, it is out-created by 0.40 per match. The overall profile is mildly positive at +0.25 per match. A careless reading would call this a strong home team and a weak away team.</p>
<p>Now suppose two of the six away matches came against top-three opponents, and those two matches account for 1.2 xG for and 4.0 xGA. The remaining four away matches produced 5.4 xG for and 5.0 xGA, or 1.35 and 1.25 per match. The away xGD moves from -0.40 to +0.10. The home advantage has not disappeared, but the away weakness looks much smaller once the schedule is visible.</p>
<p>Removing matches is not a recommended method; it is a demonstration of sensitivity. A better approach is to compare each match with the opponent's typical numbers, which keeps the sample intact while adjusting for difficulty.</p>`
    },
    {
      id: "game-state",
      heading: "Game state and venue effects",
      html: `<p>Venue and game state are tangled together. A home team that falls behind may push more aggressively, creating chances but also leaving space. A home team that leads may sit deeper and invite pressure. The same crowd that is said to lift the side can also make the players more anxious when the score is level late on.</p>
<p>Away teams often start cautiously, especially against stronger opponents. That can suppress both teams' attacking numbers and make the away split look more defensive than it is. If a team spends more time protecting a draw on the road, its away xG will fall and its away xGA may rise or fall depending on how well it defends the box.</p>
<p>Referee tendencies, pitch dimensions, and weather can add further venue-specific effects. None of these is captured by the word "home" on its own.</p>`
    },
    {
      id: "opponent-adjustment",
      heading: "Adjusting for the opponent",
      html: `<p>A simple adjustment compares each split with the opponents' average numbers. If Club A's six home opponents concede 1.30 xG per match on average, and Club A creates 1.90 at home, the home attack is 0.60 above that baseline. If its six away opponents concede 1.40 on average, and Club A creates 1.10, the away attack is 0.30 below baseline.</p>
<p>The defensive side works the same way. If home opponents average 1.20 xG and Club A allows 1.00, the home defence is 0.20 better than the baseline. If away opponents average 1.45 and Club A allows 1.50, the away defence is roughly at baseline. These adjusted differences are still crude, but they are more honest than comparing raw home and away totals as if the schedules were identical.</p>
<p>The adjustment is not a full model. It ignores the interaction between styles, the venue of the opponents' own matches, and the fact that averages are themselves noisy. It is a way to ask a better question, not a way to produce a precise answer.</p>`
    },
    {
      id: "when-splits-useful",
      heading: "When splits are useful",
      html: `<p>Splits are most useful when they are large, persistent, and supported by a mechanism. A team that has shown the same home and away pattern for two seasons, with a plausible tactical explanation, is a more interesting case than a team with a six-match swing. Even then, the split should be checked against opponent quality and game state.</p>
<p>They are also useful for generating hypotheses. If a side creates far more from wide areas at home, maybe the pitch dimensions or the crowd's influence on the referee is worth investigating. If its away defence collapses late in matches, maybe fatigue or substitutions are the issue. The split points to the question; the video and the data answer it.</p>
<p>For the broader venue effect, see our piece on <a href="/articles/home-advantage-modern-football.html">home advantage in modern football</a>. The way short result runs can mislead is covered in <a href="/articles/form-streaks-misleading.html">why form streaks mislead</a>. And for the shot metric behind the numbers, see <a href="/articles/what-is-xg-football.html">what xG measures</a>.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li>Treating a six-match split as a settled team trait.</li>
<li>Comparing home and away totals without adjusting for opponent strength.</li>
<li>Reading points or goal difference as the whole story instead of separating xG for and xG against.</li>
<li>Ignoring game state, especially early red cards and late leads.</li>
<li>Assuming every team has the same home advantage, or that it is constant across seasons.</li>
</ul>
<p>These mistakes share a common cause: the split is treated as an explanation when it is only a description. The venue label organises the data; it does not interpret it.</p>`
    },
    {
      id: "limits",
      heading: "What a split cannot tell you",
      html: `<p>A split cannot tell you whether a difference is caused by the crowd, the travel, the pitch, the referee, or the schedule. It cannot tell you how a team would perform at a neutral venue, because that counterfactual is rarely observed. And it cannot solve the small-sample problem that comes with dividing a season into two halves.</p>
<p>Use splits as one view of a team's season, not as a verdict on its character. The longer the window and the better the opponent adjustment, the more useful the view becomes.</p>`
    }
  ],
  faq: [
    { q: "Are home and away splits reliable?", a: "They become more reliable with a full season or more of matches and with opponent adjustment. A six-match split is mostly a description of a small sample and should not be treated as a stable trait." },
    { q: "Why do home and away xG numbers differ?", a: "The difference can come from crowd effects, travel, pitch conditions, referee tendencies, tactical choices, game state, and the quality of opponents. A split alone cannot separate those causes." },
    { q: "Should I ignore home advantage entirely?", a: "No. It is a real and persistent effect in many leagues, but its size varies. The mistake is treating it as a fixed bonus rather than a context-dependent factor." }
  ],
  related: ["home-advantage-modern-football", "form-streaks-misleading", "what-is-xg-football"]
};
