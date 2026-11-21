export default {
  slug: "possession-data-football",
  title: "Using Possession Data Correctly",
  metaTitle: "Using Possession Data Correctly",
  description: "Possession percentage is not dominance. Learn how progressive passes, box entries and game state reveal what a possession share hides.",
  category: "Tactics",
  tags: ["possession", "progressive passes", "box entries", "game state"],
  published: "2026-02-24",
  updated: "2026-02-24",
  author: "Nyasha",
  dek: "Possession is a share of the ball, not a share of control. The useful analysis begins when you ask what a team did with its passes and where the opponent let it happen.",
  takeaways: [
    "Possession percentage counts passes, not territory or threat.",
    "Progressive passes and box entries describe what a possession share actually produced.",
    "Game state changes possession more than style does, especially after an early goal.",
    "A possession profile should include where the ball was won and how quickly it moved forward."
  ],
  intro: `<p>Possession is the most familiar statistic in football and the least self-explanatory. A team can have 62 per cent of the ball and spend most of the match passing between its centre-backs. Another can have 38 per cent and create the better chances because every regain turns into a forward run.</p>
<p>The percentage is not useless. It is simply a starting point that describes the distribution of passes. To understand control, you need to look at what the passes achieved, where they happened and what the scoreline was asking of each team. That is a more interesting set of questions.</p>`,
  sections: [
    {
      id: "what-the-percentage-counts",
      heading: "What the percentage counts",
      html: `<p>Most possession figures are built from passes. The provider counts the passes attempted by each team, adds them together, and expresses each team's share of the total. If Club A attempts 600 passes and Club B attempts 400, Club A is credited with 60 per cent possession.</p>
<p>That definition has consequences. A team that makes many short passes in its own half can dominate the count without advancing the ball. A team that goes long and contests second balls can have less possession while spending more time in the opponent's half. Neither approach is inherently better. They are different uses of the ball.</p>
<p>Some providers also include other events, such as carries or time in possession, which can produce slightly different percentages. As with most football metrics, the first question is not "what is the number?" but "what exactly was counted?"</p>`
    },
    {
      id: "why-possession-is-a-poor-synonym-for-control",
      heading: "Why possession is a poor synonym for control",
      html: `<p>Control implies that a team can decide where the game is played and when it speeds up. Possession alone does not show that. A side can circulate the ball safely while the opponent keeps its shape and waits for a mistake. The passing team has the ball, but not the initiative.</p>
<p>The opposite is also possible. A team with less possession can control the important spaces: the centre of the pitch, the zone in front of the defence, the far post at set pieces. Control is spatial and temporal, while possession is numerical.</p>
<p>Possession is therefore often more useful as a description of the game state than of quality. A team protecting a lead will happily concede the ball. A team chasing an equaliser will force passes and inflate its share. The number moves with the score, not only with the philosophy.</p>`
    },
    {
      id: "progression-is-the-better-question",
      heading: "Progression is the better question",
      html: `<p>If possession asks "who had the ball?", progression asks "what did they do with it?". Progressive passes are passes that move the ball meaningfully closer to the opponent's goal, usually judged against a threshold that varies by provider. Progressive carries do the same job with the feet.</p>
<p>Box entries are another useful lens. A pass or carry into the penalty area is a much stronger signal of attacking intent than a pass between the halfway line and the edge of the centre circle. So is the number of touches in the opponent's box, provided it is read alongside shot quality.</p>
<p>These measures do not replace possession. They give it a direction. A team with 60 per cent possession and few progressive passes is circulating. A team with 40 per cent possession and many progressive passes is breaking lines. Our guide to <a href="/articles/pressing-intensity-ppda.html">pressing intensity</a> explains how the same distinction applies without the ball.</p>`
    },
    {
      id: "game-state-changes-the-meaning",
      heading: "Game state changes the meaning",
      html: `<p>Possession figures are heavily shaped by the scoreline. A team that scores in the tenth minute can spend the next eighty passing to control the game, or sit deeper and invite pressure. A team that concedes early has to take more risks, which often means more passes and more territory but also more exposure.</p>
<p>A single match's possession split can therefore mislead. The team with the ball may be the team that is losing and chasing. The team without it may be the team that is protecting a lead and choosing its moments.</p>
<p>A practical adjustment is to separate the first twenty minutes from the rest. Early possession is closer to a tactical choice; late possession is often a response to the score. If the pattern changes dramatically after a goal, the number is telling you about the game state rather than the team's identity.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The figures below are illustrative and describe a hypothetical match between Club A and Club B.</p>
<table>
<thead><tr><th>Measure</th><th>Club A</th><th>Club B</th></tr></thead>
<tbody>
<tr><td>Possession</td><td>58 per cent</td><td>42 per cent</td></tr>
<tr><td>Passes attempted</td><td>610</td><td>440</td></tr>
<tr><td>Progressive passes</td><td>41</td><td>55</td></tr>
<tr><td>Box entries</td><td>18</td><td>24</td></tr>
<tr><td>Shots</td><td>9</td><td>14</td></tr>
<tr><td>Expected goals</td><td>0.9</td><td>1.4</td></tr>
</tbody>
</table>
<p>Club A had the larger share of the ball, but Club B progressed it more often and entered the box more frequently. The totals are interesting; the rates are clearer. Club A made 41 progressive passes from 610 attempts, which is 6.7 per 100 passes. Club B made 55 from 440, which is 12.5 per 100. The calculation runs 41 divided by 610 multiplied by 100, and 55 divided by 440 multiplied by 100.</p>
<p>Box entries tell a similar story. Club A entered the box 18 times from 610 passes, or 3.0 times per 100 passes. Club B entered 24 times from 440, or 5.5 times per 100. Club B was less patient in possession but far more direct when it had the ball.</p>
<p>The possession share was not wrong. It accurately described who passed more. It simply answered a different question from the one most readers care about: which team looked more likely to score? On this evidence, the answer is Club B, even though Club A had the ball for longer.</p>`
    },
    {
      id: "building-a-possession-profile",
      heading: "Building a possession profile",
      html: `<p>A useful profile has four layers. Start with the share itself, ideally split by half or by game state. Add progression: progressive passes and carries, expressed as a rate rather than a raw total. Then penetration: box entries, touches in the box and shots. Finally, security: how often the team loses the ball in its own half and what the opponent does with those turnovers.</p>
<p>Add a note on where possession starts. A team that wins the ball high already has a shorter path to goal, so its progression numbers may look modest even when the attack is efficient. A team that builds from its goalkeeper has more ground to cover and may accumulate progressive passes without creating much.</p>
<p>Visual tools can help here. A passing network or a touch map makes the shape of possession visible in a way a single percentage cannot. Our guide to <a href="/articles/data-visualization-football.html">football data visualisation</a> covers how to read those charts without overclaiming.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Equating possession with dominance.</strong> The team with more passes may be the team with fewer ideas. Look for progression and penetration before drawing conclusions.</li>
<li><strong>Ignoring the scoreline.</strong> A chasing team will almost always see more of the ball. That is a game-state effect, not proof of superior play.</li>
<li><strong>Comparing raw totals across matches.</strong> A match with more stoppages has fewer passes for both teams. Rates per possession or per 100 passes are more stable.</li>
<li><strong>Forgetting the opponent.</strong> A share is relational. The same team can look patient against a deep defence and rushed against a high press.</li>
</ul>`
    },
    {
      id: "limits-of-possession-data",
      heading: "Limits of possession data",
      html: `<p>Possession data says little about off-ball movement, defensive organisation or the quality of a team's decisions. It also struggles with the moments between events: the run that drags a defender away, the press that forces a hurried pass, the goalkeeper's positioning that makes a cross harmless.</p>
<p>Treat the percentage as a map of where the ball went, not a verdict on who controlled the game. Pair it with progression, box entries and the scoreline, and the picture becomes much closer to the match you actually watched.</p>`
    }
  ],
  faq: [
    {
      q: "Is possession percentage calculated by time or by passes?",
      a: "Most published figures are based on passes, though some providers use time in possession or a combination of events. The method matters because a long passing sequence and a long spell of defensive containment are counted differently."
    },
    {
      q: "What is a good number of progressive passes?",
      a: "There is no universal threshold because providers define progression differently. Compare a team with its own average and with opponents in similar game states rather than against a fixed target."
    },
    {
      q: "Does more possession lead to more wins?",
      a: "Not reliably. Across a season, stronger teams tend to have more possession, but the relationship is not a rule for individual matches. Chasing a game and protecting a lead both distort the share."
    }
  ],
  related: ["pressing-intensity-ppda", "tactical-matchups-vs-reputation", "data-visualization-football"]
};
