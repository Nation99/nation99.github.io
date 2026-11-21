export default {
  slug: "scouting-with-data",
  title: "Scouting Players with Data: A Beginner Guide",
  metaTitle: "Scouting Players with Data: A Beginner Guide",
  description: "A beginner's process for profiling footballers with data: choose the role, compare per-90 metrics, adjust for league, use percentiles, then watch.",
  category: "Beginner Guides",
  tags: ["scouting", "player profiles", "percentiles", "data analysis"],
  published: "2026-12-02",
  updated: "2026-12-02",
  author: "Nyasha",
  dek: "Data can narrow a shortlist and expose blind spots, but it cannot tell you who to sign. The useful skill is building a profile that matches the job.",
  takeaways: [
    "Start with the role and its tasks, then choose metrics that describe those tasks.",
    "Per-90 rates make players with different minutes comparable, but they need a minutes filter.",
    "League strength, team style, and tactical role all change what a number means.",
    "Percentiles turn raw values into a readable profile within a defined peer group.",
    "Video is the final check: data points to questions, not conclusions."
  ],
  intro: `<p>Scouting conversations often begin with a name. Someone has seen a highlight reel or a scoring run, and the question becomes whether the player is good. A data-led process begins somewhere less exciting: with the job the player would be asked to do.</p>
<p>That shift matters. A midfielder who looks excellent in a possession side may be a poor fit for a team that defends deep and attacks in transition. A defender with impressive tackle numbers may be defending more often because his team is under pressure. The numbers are not wrong. They are answering a question that was never clearly asked. This guide sets out a repeatable process, from role definition to the video work that should come before any conclusion.</p>`,
  sections: [
    {
      id: "start-with-the-role",
      heading: "Start with the role, not the player",
      html: `<p>A role is a set of tasks, not a position on a teamsheet. "Central midfielder" describes where a player stands. It does not describe whether he receives from the centre-backs, presses the opponent's deepest midfielder, arrives in the box, or covers the space behind an attacking full-back.</p>
<p>Write the role specification before opening a data site. What does the team need this player to solve? A side that struggles to progress the ball may need a midfielder who can receive under pressure and break the first line. A side that concedes transitions may need a defender who can cover large spaces. Each task points to a family of metrics.</p>
<p>Then note the environment. A player's numbers are produced inside a system, against a level of opposition, with a set of teammates. Scouting is partly the study of how those numbers might transfer to a different environment.</p>`
    },
    {
      id: "pick-comparable-metrics",
      heading: "Pick metrics that describe the job",
      html: `<p>Counting stats reward opportunity. A defender in a team that faces thirty crosses per match will have more headed clearances than one in a dominant side. A striker who plays every minute will accumulate more shots than a substitute with a similar rate. Raw totals record volume and opportunity, not quality.</p>
<p>Use rate metrics, usually per 90 minutes, and group them into three questions. How often does the player do the action? How well does he do it? What does it produce? A winger might be judged on carries per 90, carry success rate, and expected goals plus expected assists per 90. A centre-back might be judged on passes, progressive passes, aerial duel success, and the quality of shots conceded while he is on the pitch.</p>
<p>The combination matters more than any single number. Pass completion without pass difficulty is a weak guide. Tackles without the location of the duels can reward a defender who is repeatedly caught out of position. Check definitions before comparing, because providers differ on progressive passes, pressures, duels, and even what counts as a shot. Our guide to <a href="/articles/football-data-sources.html">football data sources</a> explains why mixing definitions can quietly break an analysis.</p>`
    },
    {
      id: "adjust-for-minutes-and-league",
      heading: "Adjust for minutes and league",
      html: `<p>Minutes are the first adjustment. A player with 300 minutes has faced a small and possibly unrepresentative sample. A common starting filter is 900 to 1,200 minutes. Lower it for young players or rotation options, but say so and treat the profile as provisional. Per-90 rates also need care with substitutes: twenty minutes against tired opponents can produce a rate that is hard to sustain as a starter.</p>
<p>League adjustment is harder. Stronger leagues generally feature faster pressing, better defenders, and fewer easy possessions. A player moving up a division may get less time on the ball and more pressure when he receives it. A single multiplier cannot capture that, because the effect depends on position, style, and the specific move.</p>
<p>Team style is part of the adjustment. A goalkeeper in a long-ball team will have a lower pass completion rate than one in a short build-up team, even if both are accurate. A defender in a low block will make more blocks and clearances than one in a high line. These are consequences of the system, not independent evidence of ability. The article on <a href="/articles/squad-depth-football-prediction.html">squad depth</a> shows how role and rotation can change a player's profile across a season.</p>`
    },
    {
      id: "use-percentiles",
      heading: "Use percentiles to build a profile",
      html: `<p>A percentile places a player inside a peer group. If a midfielder is in the 85th percentile for progressive passes, he completed more per 90 than 85 per cent of the comparison group. Define that group clearly: same position, same league, same season, and a minimum minutes filter.</p>
<p>Percentiles turn a list of numbers into a shape. A profile of eight to twelve metrics can show whether a player is a volume passer, a progressor, a ball-winner, or a finisher. That shape is more informative than one standout value. Direction matters too: a high percentile for tackles is not automatically good, and a low percentile for fouls is not automatically bad.</p>
<p>Percentiles also hide magnitude. Being in the 95th percentile for a rare action can still mean a small absolute number. Keep the raw rate beside the percentile. Our guide to <a href="/articles/data-visualization-football.html">football data visualisation</a> covers how charts can clarify or distort that comparison.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It describes three invented central midfielders in the same league, with numbers invented for teaching. Percentiles are shown in brackets and compare each player with other midfielders in the league who played at least 900 minutes.</p>
<div class="table-wrap">
<table>
<caption>Illustrative central midfielder profiles, invented for teaching</caption>
<thead><tr><th>Metric per 90</th><th>Player A</th><th>Player B</th><th>Player C</th></tr></thead>
<tbody>
<tr><td>Minutes played</td><td>1,650</td><td>1,400</td><td>1,200</td></tr>
<tr><td>Passes attempted</td><td>78 (92nd)</td><td>61 (74th)</td><td>44 (38th)</td></tr>
<tr><td>Pass completion</td><td>91% (88th)</td><td>82% (54th)</td><td>86% (71st)</td></tr>
<tr><td>Progressive passes</td><td>5.1 (61st)</td><td>7.8 (93rd)</td><td>3.2 (29th)</td></tr>
<tr><td>Passes into final third</td><td>4.4 (58th)</td><td>6.1 (87th)</td><td>2.7 (24th)</td></tr>
<tr><td>Carries</td><td>18 (63rd)</td><td>24 (84th)</td><td>12 (31st)</td></tr>
<tr><td>Tackles and interceptions</td><td>2.1 (42nd)</td><td>2.8 (61st)</td><td>4.6 (91st)</td></tr>
<tr><td>Fouls committed</td><td>1.0 (39th)</td><td>1.4 (58th)</td><td>2.3 (84th)</td></tr>
</tbody>
</table>
</div>
<p>Player A is a recycler: high passing volume, high completion, modest progression. Player B is a progressor: lower completion, but more passes into the final third and more carries. Player C is a destroyer: frequent ball wins, limited passing volume and progression.</p>
<p>Which player is best depends on the role. A team that needs to control possession might prefer Player A. A team that needs to break a low block might prefer Player B. A team that expects to defend transitions might prefer Player C. Context matters too: Player B's lower completion rate may reflect more difficult passes, and Player C's defensive numbers may be high because his team spends long periods without the ball.</p>
<p>The table has narrowed the question. It has not answered it. Check the shot profile, the game states, and the opposition, then watch the players.</p>`
    },
    {
      id: "watch-the-video",
      heading: "Watch the video before you conclude",
      html: `<p>Video is where a data profile becomes a judgement. Watch at least three full matches, not a highlight reel. Note the opponent, the venue, the score, and the player's role. A short compilation can make almost anyone look decisive because it removes the long stretches when the player was uninvolved or out of position.</p>
<p>Look for details that data captures poorly: scanning before receiving, body orientation, first touch under pressure, weak-foot use, decision speed, and the reaction after losing the ball. Does the player check his shoulder before the pass arrives? Does he receive on the half-turn? Does he choose the safe pass when a forward option is available? These are the mechanisms behind the numbers.</p>
<p>Watch the off-ball movement too. A midfielder's value may come from occupying space that creates a lane for someone else. Use the data to direct your eyes, then let the video challenge the profile. If a defender has a low duel success rate, check whether he is being exposed in space or asked to defend crosses against a larger opponent.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Starting with the player and then finding metrics.</strong> Define the role first, then choose the evidence that speaks to it.</li>
<li><strong>Using counting stats as quality.</strong> Volume reflects opportunity. More tackles may simply mean more defending.</li>
<li><strong>Comparing across positions.</strong> Percentiles only work inside a sensible peer group.</li>
<li><strong>Ignoring minutes and sample size.</strong> A hot run of 400 minutes is a hint, not a profile.</li>
<li><strong>Treating league adjustment as one multiplier.</strong> The effect of a step up depends on role, style, and the player.</li>
<li><strong>Skipping the video.</strong> A spreadsheet can describe output. It cannot show scanning, body shape, or the response to a mistake.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and a repeatable routine",
      html: `<p>Data scouting has clear limits. A player's numbers describe what happened in a particular system, with particular teammates, against particular opponents. They do not prove how he would perform in a new league or role. Adaptability, language, personality, and coaching fit are real factors that a spreadsheet cannot capture.</p>
<p>The routine that works is modest. Define the role, choose a few role-specific metrics, apply a minutes filter, adjust for league and team style, build a percentile profile, and watch full matches. Keep a written note with the sample, the source, and the uncertainties. Data can narrow the shortlist. It cannot make the choice alone.</p>`
    }
  ],
  faq: [
    {
      q: "How many minutes does a player need before the data is useful?",
      a: "A common starting point is 900 to 1,200 minutes, but the right threshold depends on the role and the question. Young players and rotation options often have less. Lower the threshold only if you label the profile as provisional and check the share of minutes that came from the bench."
    },
    {
      q: "Are percentiles better than raw per-90 numbers?",
      a: "They answer different questions. Per-90 numbers show the rate of an action. Percentiles show how that rate compares with a defined peer group. Use both, and keep the raw value visible because a high percentile for a rare action can still represent a small contribution."
    },
    {
      q: "Can data alone decide whether to sign a player?",
      a: "No. Data can narrow a shortlist and reveal strengths or blind spots, but a signing also depends on role fit, adaptability, character, availability, and cost. Video and background work remain essential, and even a careful process cannot remove the uncertainty of a transfer."
    }
  ],
  related: ["football-data-sources", "squad-depth-football-prediction", "data-visualization-football"]
};
