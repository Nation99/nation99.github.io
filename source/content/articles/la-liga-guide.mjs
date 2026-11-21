export default {
  slug: "la-liga-guide",
  title: "La Liga Analysis Guide",
  metaTitle: "La Liga Analysis Guide: Control, Craft and Set Pieces",
  description: "La Liga analysis beyond the possession stereotype: territorial control, set-piece detail, resource gaps and the questions that matter.",
  category: "Leagues",
  tags: ["La Liga", "possession", "territorial control", "set pieces"],
  published: "2026-04-06",
  updated: "2026-04-06",
  author: "Nyasha",
  dek: "La Liga is often summed up in one word, technical. A better analysis asks where the technique is used, who controls territory, and what the gap between clubs does to the numbers.",
  takeaways: [
    "Possession counts passes; territorial control asks where those passes take the ball.",
    "Technical quality shows most clearly in press resistance and receiving under pressure, not in a style label.",
    "Set pieces deserve separate treatment because their conversion is noisy from season to season.",
    "The resource gap creates different tactical problems at the top and bottom of the table."
  ],
  intro: `<p>La Liga is easy to summarise and harder to analyse. The summary is technical, patient and possession-heavy. The reality is a set of clubs with different resources, different tolerances for risk and very different ideas about what to do with the ball.</p>
<p>That gap between summary and reality is the useful starting point. Instead of asking whether the league is technical, ask which players receive between the lines, how much territory each team controls, and what happens when that control is broken.</p>`,
  sections: [
    {
      id: "technical-label",
      heading: "The technical label and what it hides",
      html: `<p>The technical description is not wrong. It points to a real emphasis on close control, passing angles and receiving under pressure. But a label is not a game model. A team can be technical and direct, technical and cautious, or technical and fragile without the ball.</p>
<p>Technical quality is most visible in the details: the first touch that takes a player away from pressure, the body shape that opens a forward pass, the weight of a return pass in a tight area. Those details matter because they buy time. A team that can receive under pressure can play through a press without needing to go long.</p>
<p>The analytical question is what the technique is for. Does it progress the ball into the box, or does it circulate in safe areas? Does it survive a turnover, or does it leave the defence exposed? The label describes the surface. The answers describe the team.</p>`
    },
    {
      id: "territorial-control",
      heading: "Territorial control is not the same as possession",
      html: `<p>Possession percentage counts passes. Territorial control asks where those passes happen and what they produce. A team with 60 per cent of the ball can spend most of it in its own half, or it can pin the opponent into the final third. The two experiences are completely different.</p>
<p>Useful measures include field tilt, final-third entries and touches in the box. Field tilt compares the share of attacking-third passes or touches between the two teams. Entries count how often the ball reaches the final third. Box touches show whether territory becomes access to shooting positions. None of these is sufficient alone, but together they describe the shape of control.</p>
<p>The diagnostic pair is entries and expected goals per entry. A team that enters the final third often but generates little from each entry is controlling space without penetrating it. A team with fewer entries but higher quality per entry may be more dangerous. <a href="/articles/possession-data-football.html">Possession data</a> becomes useful when it is read this way.</p>`
    },
    {
      id: "set-piece-layer",
      heading: "Set pieces are a separate layer",
      html: `<p>Set pieces deserve their own analysis, especially in matches where open-play chances are scarce. A corner routine is a rehearsed pattern: the delivery, the blockers, the first contact, the second ball. A free kick near the box is a different problem again. Treating all set pieces as one category hides most of the detail.</p>
<p>La Liga's tactical culture places weight on preparation, and set pieces are part of that. Some teams use short corners to change the angle of delivery. Others load the six-yard box and rely on blockers. Defensively, the choice between zonal and man marking changes who is responsible for the second ball.</p>
<p>The analytical trap is to read set-piece goals as a stable skill. Conversion varies widely from season to season, even when the routine is similar. Look at the chances created, the quality of the first contact and the opponent's defensive scheme. Those are more repeatable than the goal count.</p>`
    },
    {
      id: "resource-gap",
      heading: "The gap between top and bottom",
      html: `<p>The league's resource range is wide, and that range shapes the football. Top clubs are usually built to dominate the ball and territory. Bottom clubs are often built to defend deeply, protect the box and attack through transitions or set pieces. The result is a set of tactical problems that look very different depending on where a club sits.</p>
<p>This matters for averages. A league-wide possession figure or goals-per-game rate blends clubs that play completely different games. A model trained on the whole division may describe no single team well. When comparing two clubs, condition on their tier and their typical opponent.</p>
<p>The gap also changes the meaning of home advantage. A top club may dominate the ball at home and away. A smaller club may be more dependent on its own ground, where the crowd and the pitch support a more aggressive approach. Neither pattern is universal. <a href="/articles/league-table-beyond-points.html">Reading the table beyond points</a> helps separate a structural gap from a short run of results.</p>`
    },
    {
      id: "reading-scorelines",
      heading: "Reading a low-scoring match",
      html: `<p>A 1-0 can be a controlled performance or a lucky one. A 0-0 can be two teams cancelling each other or two teams refusing to risk anything. The scoreline records goals, not control. To understand the match, separate the chances from the result.</p>
<p>Start with shot quality and game state. A team that leads early may spend the rest of the match protecting the box, conceding possession but not necessarily clear chances. A team that chases an equaliser may accumulate passes without moving the defence. The same 60 per cent possession figure can describe dominance in one match and frustration in another.</p>
<p>If the data allows, split the match into phases: before the first goal, after the first goal, and the final twenty minutes. The tactical behaviour often changes more at those boundaries than at half-time. <a href="/articles/tactical-matchups-vs-reputation.html">Matchups</a> explain why a low-scoring game can still be a mismatch in style.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The clubs and numbers below are illustrative. They are designed to show how territorial control can be separated from possession, not to describe a real match.</p>
<table>
  <thead>
    <tr><th>Measure</th><th>Club A</th><th>Club B</th></tr>
  </thead>
  <tbody>
    <tr><td>Possession</td><td>63%</td><td>37%</td></tr>
    <tr><td>Field tilt</td><td>68%</td><td>32%</td></tr>
    <tr><td>Final-third entries</td><td>42</td><td>19</td></tr>
    <tr><td>Box touches</td><td>28</td><td>12</td></tr>
    <tr><td>Shots</td><td>15</td><td>7</td></tr>
    <tr><td>Expected goals</td><td>1.45</td><td>0.62</td></tr>
    <tr><td>Set-piece xG</td><td>0.38</td><td>0.18</td></tr>
  </tbody>
</table>
<p>Club A's expected goals per box touch is 1.45 divided by 28, or about 0.052. Club B's is 0.62 divided by 12, or about 0.052. The efficiency is almost identical. The difference is volume: Club A reached the box 28 times, Club B 12. Territory became access, and access became chances at the same rate.</p>
<p>The set-piece share is also similar. Club A's 0.38 set-piece xG is 26 per cent of its 1.45 total. Club B's 0.18 is 29 per cent of 0.62. Both teams relied on set pieces for roughly a quarter of their chance quality. That does not make the routines equally good. It means neither side's open-play control was complete.</p>
<p>Now change one number. If Club A had 63 per cent possession but only 20 final-third entries, the story would be different: control without penetration. The possession figure would be unchanged, but the interpretation would not. That is why the table includes entries and box touches rather than stopping at the ball share.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Equating possession with control.</strong> The ball can be safe and still be sterile. Check where it travels and what it creates.</li>
<li><strong>Treating a low score as a defensive league.</strong> A tight match can be a high-quality contest between two organised teams, or a poor one between two cautious teams.</li>
<li><strong>Overreading set-piece goals.</strong> Conversion is noisy. Look at the routine, the first contact and the chances created.</li>
<li><strong>Comparing across the resource gap.</strong> A bottom club's deep block is a response to its squad, not a template for a top club.</li>
<li><strong>Ignoring game state.</strong> A team protecting a lead is not the same team that chased an equaliser for an hour.</li>
<li><strong>Trusting the label.</strong> Technical, possession-based, defensive: these are descriptions of tendencies, not instructions.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and what to watch",
      html: `<p>Style labels age badly. A club can change coach, sign a different profile of midfielder and alter its approach within a single season. A guide can describe the questions, but the answers have to be rebuilt from current evidence. That is especially true in a league where the resource gap produces several distinct tactical worlds.</p>
<p>Public data is strong on events and weaker on context. It can tell you where a shot was taken and how often a team entered the final third. It cannot tell you the coach's instruction, the player's fitness, or whether the delivery was meant for the near post. Set-piece samples are particularly small, and a single deflected corner can change a season's conversion rate.</p>
<p>The final limit is the analyst's own attention. It is easy to watch a possession side and remember the passes that came off, while forgetting the transitions it conceded. Keep a simple record of both. The notes that survive are the ones that include the uncomfortable evidence.</p>`
    }
  ],
  faq: [
    {
      q: "Is La Liga really more technical than other leagues?",
      a: "The label is a generalisation. Technical quality is distributed unevenly, and clubs interpret it differently. A better comparison looks at press resistance, receiving under pressure and the roles players are asked to perform."
    },
    {
      q: "Why does possession percentage mislead in La Liga?",
      a: "It counts all passes without saying where they happen. A team can have most of the ball in its own half and create little. Final-third entries, box touches and expected goals per entry give a clearer picture."
    },
    {
      q: "How much should set pieces affect a match estimate?",
      a: "They matter, but conversion is noisy. Weight the routine, the aerial matchup and the opponent's defensive scheme more heavily than last season's goal count. Keep the adjustment modest and record the reasoning."
    }
  ],
  related: ["league-table-beyond-points", "possession-data-football", "tactical-matchups-vs-reputation"]
};
