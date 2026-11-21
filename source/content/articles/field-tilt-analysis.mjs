export default {
  slug: "field-tilt-analysis",
  title: "Field Tilt: Measuring Territorial Control",
  metaTitle: "Field Tilt: Measuring Territorial Control",
  description: "Field tilt measures territorial control, not possession. Learn a simple calculation, what it reveals, and why chance quality and game state still matter.",
  category: "xG and Stats",
  tags: ["field tilt", "territory", "possession", "football analytics"],
  published: "2026-11-30",
  updated: "2026-11-30",
  author: "Nyasha",
  dek: "Field tilt asks where the ball is, not just who has it. The number describes territory well, but it still needs chance quality and game state beside it.",
  takeaways: [
    "Field tilt measures the share of attacking-third activity, not the share of the ball.",
    "A team can dominate possession and still lose the territory battle if its passing stays deep.",
    "The simple calculation divides one team's final-third events by both teams' total.",
    "High field tilt can hide poor chance quality, especially when it comes from crosses and long shots.",
    "Game state shapes territory: the team chasing usually tilts the field, while the team protecting a lead concedes it."
  ],
  intro: `<p>Possession is the most familiar summary of territorial control, and one of the bluntest. A team can finish a match with 60 per cent of the ball while most of its passing happens in its own half. The number says who had the ball. It says much less about where the game was played.</p>
<p>Field tilt is an attempt to answer the location question. It measures the share of activity that happens in the attacking third, usually through touches, passes, or entries. A team with 65 per cent field tilt spent far more of the match near the opponent's goal than its own.</p>
<p>This guide explains how field tilt works, how it differs from possession, how to calculate a simple version, and why territory alone is not a complete description of performance.</p>`,
  sections: [
    {
      id: "what-field-tilt-measures",
      heading: "What field tilt measures",
      html: `<p>Field tilt is the share of play that happens in the attacking third. The most common version counts touches in that zone for each team, then divides one team's count by the combined total. If Team A records 420 attacking-third touches and Team B records 180, Team A's field tilt is 70 per cent.</p>
<p>The label covers several definitions. Some providers count passes received in the final third; others count passes played into it, carries that end there, or every touch in the zone. Two dashboards can show different field tilt numbers for the same match because they are counting different events.</p>
<p>Because field tilt is a ratio, it is easy to compare across matches with different tempo. It is also sensitive to the total number of events. A low-event match can produce a dramatic percentage from a small count, which is why the raw numbers should sit beside the share.</p>
<p>Field tilt is a map of territory, not a verdict on performance. It tells you which end of the pitch the play favoured. It does not tell you whether the team with the territory created better chances.</p>`
    },
    {
      id: "field-tilt-vs-possession",
      heading: "Field tilt versus possession",
      html: `<p>Possession measures how much of the ball a team controls, usually as a share of passes or time. It treats a pass on the halfway line and a pass in the penalty area as one event. Field tilt weights location by counting only the attacking third, so it separates deep circulation from play near goal.</p>
<p>The two numbers can diverge in useful ways. A team with 60 per cent possession may have only 45 per cent field tilt if most of its passing is between defenders and deep midfielders. A team with 40 per cent possession may have 55 per cent field tilt if its attacks are direct and regularly end in the final third.</p>
<p>Neither number is dominance. Possession can be sterile, and field tilt can be busy without being dangerous. A side can build a high tilt by crossing repeatedly from wide areas while producing low-quality shots. Our guide to <a href="/articles/possession-data-football.html">using possession data</a> explains why a possession figure needs progression and box entries beside it.</p>
<p>The practical habit is to read them together. Possession tells you who controlled the ball. Field tilt tells you where that control happened. Chance quality tells you whether it mattered.</p>`
    },
    {
      id: "calculating-a-simple-version",
      heading: "Calculating a simple version",
      html: `<p>Start with one clear event definition. The simplest version counts touches in the attacking third for each team. If the data includes passes, you can count passes played from or received in the final third, but choose one method and keep it stable.</p>
<p>The formula is:</p>
<p><strong>Field tilt = Team A final-third events / (Team A + Team B final-third events) x 100</strong></p>
<p>With 420 events for Team A and 180 for Team B, the calculation is 420 divided by 600, which equals 70 per cent. Team B's tilt is the remaining 30 per cent. The two shares always add to 100, unless you are comparing more than two teams in the same calculation.</p>
<p>Several data choices change the answer. Decide whether set-piece events count, whether touches in wide areas count the same as central touches, and how the final third is defined in the provider's coordinates. A throw-in into the final third is not the same as a pass received between the lines, even though both may enter the zone.</p>
<p>Use shares rather than raw counts, and average over several matches. For a single match, show the counts beside the share so a reader can see whether the percentage came from 600 events or 60. Final-third entries are a useful alternative measure: they count sequences that reach the zone rather than every touch inside it.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is invented for teaching. It compares two teams over five hypothetical matches. The field tilt is calculated from final-third passes.</p>
<div class="table-wrap">
<table>
<caption>Invented five-match territorial profile</caption>
<thead><tr><th>Measure</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Final-third passes</td><td>310</td><td>190</td></tr>
<tr><td>Final-third entries</td><td>45</td><td>32</td></tr>
<tr><td>Field tilt</td><td>62%</td><td>38%</td></tr>
<tr><td>Possession</td><td>58%</td><td>42%</td></tr>
<tr><td>Shots</td><td>14</td><td>9</td></tr>
<tr><td>Expected goals</td><td>0.9</td><td>1.4</td></tr>
<tr><td>Goals</td><td>1</td><td>2</td></tr>
</tbody>
</table>
</div>
<p>Team A's field tilt is 310 divided by 500, which is 62 per cent. It also had more possession, more final-third entries, and more shots. On the surface it controlled the match. Team B, however, created 1.4 expected goals from nine shots and scored twice.</p>
<p>The entries explain part of the gap. Team A produced 0.020 expected goals per final-third entry, while Team B produced 0.044. Team A's territory was real, but its entries were less dangerous. That pattern fits a team crossing from wide areas or shooting from distance, while Team B found cutbacks or passes into the box.</p>
<p>Game state can explain more. If Team A was chasing for much of the five matches and Team B was protecting leads, Team A's territory is partly a consequence of the score. The same numbers would describe a dominant performance in one context and a predictable response to defeat in another. The table cannot separate style from state on its own.</p>`
    },
    {
      id: "territory-quality-and-game-state",
      heading: "Territory, quality, and game state",
      html: `<p>Field tilt is most useful when it is paired with chance quality. Expected goals, shots inside the box, and expected goals per entry all ask what the territory produced. A team with 65 per cent field tilt and 0.6 expected goals has controlled the ball without controlling the danger. A team with 40 per cent tilt and 1.8 expected goals has been selective and effective.</p>
<p>Game state is the next layer. Teams that lead often sit deeper and concede territory; teams that trail push players forward and tilt the field. A single-match field tilt can therefore be a description of the score rather than a description of the plan. If the data allows, split the match into level-score and chasing periods, or compare teams only in similar states.</p>
<p>Style matters too. A low block deliberately concedes territory and tries to protect the central spaces near goal. A high press may force the opponent into long clearances, which can reduce the opponent's final-third touches without giving the pressing team a high tilt of its own. Territory is a consequence of both plans, not a measure of intent.</p>
<p>Expected threats can add the value of positions before a shot arrives, as our guide to <a href="/articles/expected-threats-xt.html">expected threats</a> explains. Our guide to <a href="/articles/game-state-analysis.html">game state and tactical change</a> covers the score effects that move territory from minute to minute.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating field tilt as dominance.</strong> Territory is not chance quality. A team can have most of the final-third play and still create fewer good chances.</li>
<li><strong>Comparing different definitions.</strong> Touches, passes, and entries produce different numbers. Check the method before comparing two teams or two providers.</li>
<li><strong>Ignoring game state.</strong> A chasing team will usually have more territory. That may be a response to the score rather than evidence of control.</li>
<li><strong>Using raw counts without minutes.</strong> A match with more stoppages has more events. Shares help, but match length still matters.</li>
<li><strong>Overreading one match.</strong> A single game can be distorted by an early red card, a penalty, or a team protecting a lead. Use a run of matches.</li>
<li><strong>Assuming high field tilt means a high press.</strong> Slow possession can also pin a team back. The location of play does not tell you how the team got there.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits of field tilt",
      html: `<p>Field tilt is a coarse measure. The final third is a large zone, and a touch near the corner flag is not equivalent to a touch on the edge of the six-yard box. The metric describes where play happened, not how dangerous it was or how well the team used it.</p>
<p>It also says little about tempo, pressing height, or the number of players committed forward. A team can have modest field tilt and still be aggressive on the counter, or high field tilt and still be passive in the box. Those qualities need different data and, ideally, video.</p>
<p>Data quality is a practical limit. Event data with reliable coordinates is better than a simple pass count, and tracking data can add information that event data misses. Whatever the source, the definition should be stated so the number can be interpreted.</p>
<p>Used over a run of matches and beside chance quality and game state, field tilt is a useful description of territorial control. Used alone, it is a number that can flatter a team with the ball and mislead a reader about the danger.</p>`
    }
  ],
  faq: [
    {
      q: "Is field tilt the same as possession?",
      a: "No. Possession measures the share of ball control, usually through passes or time. Field tilt measures the share of activity in the attacking third. A team can dominate possession while playing most of its passes in its own half, or have less possession while attacking directly into the final third."
    },
    {
      q: "What is a good field tilt percentage?",
      a: "There is no universal good number. Fifty per cent is even, and values around 60 to 65 per cent suggest sustained territory. The meaning depends on the opponent, the game state, the data definition, and the quality of the chances produced."
    },
    {
      q: "Can field tilt predict match results?",
      a: "It describes territory, not outcomes. High field tilt can coexist with low expected goals, especially when it comes from crosses and long shots. Use it with chance quality, box entries, and game state rather than as a stand-alone forecast."
    }
  ],
  related: ["possession-data-football", "expected-threats-xt", "game-state-analysis"]
};
