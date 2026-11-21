export default {
  slug: "game-state-analysis",
  title: "Game State and Tactical Change",
  metaTitle: "Game State and Tactical Change",
  description: "Score effects change how teams play. Learn how game state alters possession, pressing and chance creation, and why raw match totals can mislead.",
  category: "Tactics",
  tags: ["game state", "tactics", "possession", "analysis"],
  published: "2026-11-02",
  updated: "2026-11-02",
  author: "Nyasha",
  dek: "A match is not one game. It is a series of games defined by the score, and the same team can look completely different in each one.",
  takeaways: [
    "Game state refers to the score, time and context that shape a team's decisions.",
    "Teams that lead often concede possession and territory while protecting a result.",
    "Raw possession and shot totals can therefore misdescribe the balance of a match.",
    "Splitting performance by game state gives a clearer view of intent and execution.",
    "Game state effects are real but difficult to isolate without detailed data."
  ],
  intro: `<p>Two teams can play the same formation and still produce completely different matches depending on the score. A side that leads after 20 minutes may sit deeper, concede possession and look to counter. The same side that trails after 20 minutes may push its full-backs forward, press higher and take more risks.</p>
<p>Game state is the idea that the score and the clock change behaviour. It is one of the most important context variables in football analysis, and one of the easiest to ignore when looking at a full-match total.</p>`,
  sections: [
    {
      id: "what-game-state-means",
      heading: "What game state means",
      html: `<p>Game state is usually defined by the score difference and the time remaining. A team that is level at 0-0 in the first half is in a different state from the same team leading 1-0 in the second half. The players know the score, the bench knows the score, and the opponent adjusts.</p>
<p>The state is not just a label. It changes the incentives. A leading team may value safety over additional goals. A trailing team may accept more defensive risk to create chances. Those choices affect possession, pressing, fouls, substitutions and the pace of the game.</p>
<p>Analysts often split matches into states such as level, leading by one, trailing by one, and so on. The splits are a simplification, because the score can change several times, but they are more informative than treating the whole match as a single block.</p>`
    },
    {
      id: "score-effects",
      heading: "How the score changes behaviour",
      html: `<p>The most familiar effect is the leading team dropping deeper. It may defend with a lower block, clear the ball more often and commit fewer players to attacks. That can reduce its own shot volume while also reducing the opponent's space in behind.</p>
<p>The trailing team often does the opposite. It may push its defensive line higher, ask the full-backs to advance and accept more risk in possession. That can increase its shot volume but also increase the chance of conceding on the counter. The net effect on expected goals is not always obvious.</p>
<p>The equalising goal changes the state again. A team that has just drawn level may push for a winner, or it may settle for the point. The behaviour depends on the team, the opponent, the competition and the time remaining. There is no universal script.</p>`
    },
    {
      id: "time-and-urgency",
      heading: "Time and urgency",
      html: `<p>The clock changes the value of a goal. A goal in the first minute leaves a long time for the opponent to respond. A goal in the 89th minute leaves very little. That changes the risk calculus for both teams.</p>
<p>As time runs out, a trailing team may take more extreme risks. It may send the goalkeeper forward for a corner or leave only one defender back. Those choices can produce a late goal, but they can also produce a counter-attacking goal for the opponent. The variance of the final minutes is higher than the variance of the opening period.</p>
<p>Added time adds another layer. A team that needs a goal may benefit from a longer stoppage period; a team that is protecting a lead may not. Referee and VAR decisions can extend the match, which changes the number of opportunities available.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. Club A and Club B are level at 0-0 for 30 minutes, then Club A scores. The remaining 60 minutes are split between Club A leading and Club B chasing. The xG figures are illustrative and do not come from a real match.</p>
<table>
<caption>Illustrative xG by game state</caption>
<thead><tr><th>State</th><th>Minutes</th><th>Club A xG</th><th>Club B xG</th></tr></thead>
<tbody>
<tr><td>Level at 0-0</td><td>30</td><td>0.45</td><td>0.38</td></tr>
<tr><td>Club A leads 1-0</td><td>45</td><td>0.40</td><td>0.55</td></tr>
<tr><td>Club A leads 1-0, final 15</td><td>15</td><td>0.12</td><td>0.30</td></tr>
<tr><td><strong>Total</strong></td><td><strong>90</strong></td><td><strong>0.97</strong></td><td><strong>1.23</strong></td></tr>
</tbody>
</table>
<p>The full-match total gives Club B 1.23 xG and Club A 0.97. That looks like a strong performance from the team that trailed. The state split tells a different story. While the match was level, Club A created slightly more. After taking the lead, it ceded territory and chances, especially in the final 15 minutes.</p>
<p>The example does not prove that Club A was the better team. It shows that the raw total mixes different phases with different incentives. A trailing team's xG is partly a product of the opponent's willingness to defend the lead. That does not make the chances worthless, but it changes their meaning.</p>
<p>Now imagine the match ended 1-1 after a late equaliser. The narrative might describe Club B as deserving the point. The state split supports that reading for the final period, while also showing that Club A had the better of the level phase. Both statements can be true at once.</p>`
    },
    {
      id: "pressing-and-possession",
      heading: "Pressing, possession and the state",
      html: `<p>Possession is one of the most state-sensitive statistics. A team that leads may happily concede the ball because it wants to protect space rather than win it back quickly. A team that trails may dominate possession because the opponent is content to defend.</p>
<p>That is why a 65 per cent possession figure does not automatically mean control. It may mean the team with the ball is being allowed to have it in less dangerous areas. The same applies to passes and touches: volume can rise while threat stays flat.</p>
<p>Pressing data is also state-dependent. A team may press intensely while level and then drop off after taking the lead. A full-match pressing average blends the two behaviours. Our guide to <a href="/articles/possession-data-football.html">possession data</a> explains how to read these numbers without treating them as a direct measure of dominance.</p>`
    },
    {
      id: "substitutions",
      heading: "Game state and substitutions",
      html: `<p>Substitutions are a response to game state. A trailing team may bring on an extra attacker, while a leading team may bring on a defensive midfielder or a fresh centre-back. The timing and the role of the substitution can change the match as much as the score itself.</p>
<p>That makes substitution impact difficult to evaluate. A player who enters at 2-0 down may accumulate attacking numbers against a team that is already managing the game. A defender who enters to protect a lead may face a wave of late pressure. The raw numbers reflect the situation as well as the player.</p>
<p>Our guide to <a href="/articles/substitutions-game-management.html">substitutions and game management</a> sets out how to assess these decisions without overreading a small number of appearances. The key is to compare like with like, or at least to state the state in which the numbers were produced.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a full-match total as a neutral description of performance.</strong> The score changes behaviour, so the total blends different phases.</li>
<li><strong>Assuming possession equals control.</strong> A team can have more of the ball because the opponent is protecting a lead.</li>
<li><strong>Ignoring the timing of chances.</strong> A late goal against a team chasing the game is different from an early goal in a level match.</li>
<li><strong>Comparing players across different states.</strong> A substitute entering at 0-3 is not in the same situation as a starter at 0-0.</li>
<li><strong>Overinterpreting a single state split.</strong> The samples within each state are small, especially in one match.</li>
</ul>
<p>The common mistake is to treat the match as a single unit. It is more useful to ask which state produced the numbers and what incentives were present.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Game state is not a magic variable. It explains some of the variation in behaviour, but it does not explain everything. Team quality, tactics, injuries, weather and referee decisions all matter. A state split can also suffer from selection effects: the teams that lead are not a random sample of teams.</p>
<p>The data needed for a careful state analysis is often limited. Event data can show when shots and goals occurred, but it may not capture the tactical instructions or the precise positioning of every player. Tracking data helps, but it is not universally available.</p>
<p>Used well, game state turns a confusing total into a set of more specific questions. It is a reminder that football is a sequence of decisions, not a single performance score. For a related view of how matchups change with the score, see our guide to <a href="/articles/tactical-matchups-vs-reputation.html">tactical matchups</a>.</p>`
    }
  ],
  faq: [
    {
      q: "What is game state in football analysis?",
      a: "Game state refers to the score difference, time remaining and context that shape a team's decisions. It helps explain why the same team can behave differently at 0-0 and at 1-0."
    },
    {
      q: "Does a trailing team always create more chances?",
      a: "No. A trailing team often takes more risks, but the opponent may defend deeply and limit clear chances. The effect depends on the teams, the tactics and the time remaining."
    },
    {
      q: "Can game state explain a team's possession stats?",
      a: "Partly. A leading team may concede possession deliberately, while a trailing team may dominate the ball because the opponent is protecting space. Possession should be read alongside the score and the type of chances created."
    }
  ],
  related: ["possession-data-football", "tactical-matchups-vs-reputation", "substitutions-game-management"]
};
