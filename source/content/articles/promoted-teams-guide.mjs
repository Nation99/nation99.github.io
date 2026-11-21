export default {
  slug: "promoted-teams-guide",
  title: "Promoted Teams: A Season Analysis Guide",
  metaTitle: "Promoted Teams: A Season Analysis Guide",
  description: "How to analyse newly promoted football teams: squad turnover, early variance, second-season effects, and the limits of a small sample.",
  category: "Leagues",
  tags: ["promoted teams", "league analysis", "squad turnover", "variance"],
  published: "2026-11-14",
  updated: "2026-11-14",
  author: "Nyasha",
  dek: "A promoted team is not a smaller version of an established one. It is a squad in transition, playing a different level of opponent with a short track record.",
  takeaways: [
    "Promoted teams face a step up in opponent quality, squad turnover and schedule demands.",
    "Early-season results are a weak guide because the sample is small and the fixture list is uneven.",
    "Underlying performance and squad adaptation are more informative than the first table.",
    "Second-season effects are real but often overstated as a universal rule.",
    "Promotion and relegation probabilities should be treated as uncertain estimates."
  ],
  intro: `<p>Every promoted team arrives with a story. One is the well-drilled side that dominated the second tier. Another is the surprise package that found form at the right time. A third is the club with money to spend and a squad that looks ready for the step up.</p>
<p>The stories are useful for context, but they can crowd out the analysis. A promoted team is defined less by its old table position than by the gap it must close: a new level of opponent, a new squad, a new schedule and a much smaller margin for error.</p>`,
  sections: [
    {
      id: "why-different",
      heading: "Why promoted teams are different",
      html: `<p>The standard of the league above is higher in almost every dimension. The opponents are faster, the pressing is more organised, and the chances that were available in the second tier are often closed. A team that created 1.6 xG per match in the lower division may find that the same approach produces 1.0 in the higher one.</p>
<p>The step up is not uniform. Some promoted teams are financially strong and can improve the squad quickly. Others rely on the group that earned promotion. Some play a style that translates well; others depend on physical dominance that is less effective against better athletes.</p>
<p>The key analytical question is not whether the team was good last season. It is how much of that performance will survive the change in level. That requires an assessment of the squad, the style and the club's resources, not just the final table.</p>`
    },
    {
      id: "squad-turnover",
      heading: "Squad turnover and adaptation",
      html: `<p>Promoted squads often turn over heavily. Players who were adequate in the lower division may be replaced by new signings, while some of the promotion heroes stay as squad players. The result is a team that has less shared history than its rivals.</p>
<p>Turnover is not automatically bad. A club may need new quality to compete. But it takes time for new players to learn the system, the league and each other. Early performances can reflect that learning curve rather than the team's eventual level.</p>
<p>Our guide to <a href="/articles/squad-depth-football-prediction.html">squad depth</a> explains why the drop-off beyond the starting eleven matters. Promoted teams often have a smaller margin between their best and worst available lineups, which becomes important when injuries and congestion arrive.</p>`
    },
    {
      id: "early-variance",
      heading: "Early-season variance",
      html: `<p>The first ten matches of a promoted team's season are a noisy sample. The fixture list may be unusually difficult or unusually kind. A team that plays three of the top six in its first five matches may look worse than it is; a team that plays three of the bottom six may look better.</p>
<p>Results also carry a large amount of randomness. A promoted side can win a match with a low xG total or lose one with a higher total. The table after ten matches is a description of outcomes, not a stable estimate of quality.</p>
<p>The same caution applies to the promoted team's opponents. Early-season tables are compressed, and a single win can move a team several places. The <a href="/articles/league-table-beyond-points.html">league table</a> becomes more informative as the sample grows, but it is never a pure measure of performance.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It follows three promoted clubs across their first ten matches. The xG difference is the team's expected goals minus its expected goals against, per match. The points total is the actual return.</p>
<table>
<caption>Illustrative first-ten-match profiles for three promoted clubs</caption>
<thead><tr><th>Club</th><th>Points</th><th>xG per match</th><th>xGA per match</th><th>xG difference</th></tr></thead>
<tbody>
<tr><td>Club A</td><td>16</td><td>1.45</td><td>1.20</td><td>+0.25</td></tr>
<tr><td>Club B</td><td>11</td><td>1.10</td><td>1.55</td><td>-0.45</td></tr>
<tr><td>Club C</td><td>8</td><td>1.25</td><td>1.30</td><td>-0.05</td></tr>
</tbody>
</table>
<p>Club A has the best points total and the best xG difference. The two measures agree, which makes the start look convincing. Club B has fewer points and a negative xG difference, so the results and the underlying performance both point to a struggle. Club C is the interesting case: eight points, but an xG difference close to zero. The results have been poor, while the chance data suggests the performances are closer to average.</p>
<p>None of these profiles is conclusive after ten matches. Club C's xG difference could be a sign of better results to come, or it could be noise. Club A's strong start could reflect an easy fixture list. The table is a set of questions, not a set of answers.</p>
<p>A useful next step is to compare each club's first ten matches with its next ten. If Club C's xG difference stays near zero while its points improve, the early results look like variance. If the xG difference falls, the performances were weaker than the table suggested. The split sample is more informative than either period alone.</p>`
    },
    {
      id: "second-season",
      heading: "The second-season question",
      html: `<p>There is a common belief that promoted teams perform better in their second season, once they have adapted to the league. The evidence is mixed. Some clubs improve, some decline, and some are relegated after a strong first season.</p>
<p>The second-season effect is not a law. It depends on squad turnover, managerial stability, recruitment and the quality of the teams around them. A club that survives narrowly in year one may be weaker in year two if key players leave or if the promoted class is stronger.</p>
<p>The right approach is to treat the second season as a new sample with new context. The previous season is useful evidence, but it is not a forecast. The squad may have changed, the tactics may have changed, and the league may have changed around them.</p>`
    },
    {
      id: "schedule-and-depth",
      heading: "Schedule, depth and the long run",
      html: `<p>Promoted teams often face a congested schedule in the cups and league. A smaller squad may struggle to maintain intensity across three competitions. Rotation becomes a necessity, and the drop-off in quality can be decisive.</p>
<p>Travel and recovery also matter. A promoted club may have a less established performance department, fewer recovery resources or a smaller medical staff. Those disadvantages are difficult to measure from match data, but they can affect the second half of the season.</p>
<p>Our guide to <a href="/articles/premier-league-guide.html">the Premier League</a> discusses the specific demands of one of the most competitive leagues. The general principle applies elsewhere: the step up is not just about the starting eleven, but about the whole club's capacity to compete over a season.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Projecting the lower-division table directly onto the higher league.</strong> The opponent quality and the available space are different.</li>
<li><strong>Overreacting to the first ten matches.</strong> The sample is small and the fixture list is uneven.</li>
<li><strong>Assuming a strong start ensures survival.</strong> Early points are valuable, but the season is long and the squad will be tested.</li>
<li><strong>Treating the second-season effect as a rule.</strong> It is a tendency in some cases, not a universal pattern.</li>
<li><strong>Ignoring squad turnover.</strong> A promoted team's performance depends on how quickly new players adapt.</li>
</ul>
<p>The common thread is the temptation to treat a short, unusual sample as a stable truth. Promoted teams are especially vulnerable to that error because their context changes so quickly.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Promoted-team analysis is limited by the small number of comparable seasons. Every promotion is a unique combination of squad, finances, manager and league context. A model trained on past promotions can offer a baseline, but it cannot capture every case.</p>
<p>The data is also uneven. Lower-division xG models may use different inputs from top-division models, which makes direct comparison difficult. The step up in data quality does not ensure a step up in predictive power.</p>
<p>The honest approach is to combine the numbers with a structured assessment of the squad and the club. The table and the xG difference are starting points. The questions about adaptation, depth and resources are what turn them into an analysis.</p>`
    }
  ],
  faq: [
    {
      q: "Do promoted teams usually struggle in their first season?",
      a: "Many do, because the step up in opponent quality and squad demands is significant. The variation is large, though, and some promoted teams adapt quickly. The first ten matches are a weak guide on their own."
    },
    {
      q: "Is the second-season syndrome real?",
      a: "It is a tendency in some cases, not a universal rule. Squad turnover, managerial changes and the strength of the league can all affect a promoted team's second season."
    },
    {
      q: "What data should I use to analyse a promoted team?",
      a: "Use the same data as for any other team, but pay extra attention to sample size, fixture difficulty, squad turnover and the difference between lower-division and top-division data."
    }
  ],
  related: ["league-table-beyond-points", "squad-depth-football-prediction", "premier-league-guide"]
};
