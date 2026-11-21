export default {
  slug: "build-up-play-analysis",
  title: "Build-Up Play Analysis: Progressing the Ball",
  metaTitle: "Build-Up Play Analysis: Progressing the Ball",
  description: "Build-up play explains how a team moves the ball from its own third into attacking areas. Learn the patterns, metrics, and limits of reading progressions.",
  category: "Tactics",
  tags: ["build-up play", "progression", "tactics", "possession"],
  published: "2026-11-22",
  updated: "2026-11-22",
  author: "Nyasha",
  dek: "Build-up play is the part of the game that turns a goalkeeper's pass into an attack. It is easy to see when it works and hard to measure without watching the structure.",
  takeaways: [
    "Build-up play covers the passes and movements that move the ball from the defensive third into midfield and attack.",
    "Progression metrics describe territory gained, but structure and decision quality need video or event data.",
    "A team can progress the ball well and still create little, because the final third is a separate problem.",
    "Pressing changes build-up behaviour, so compare teams against similar pressure rather than raw totals.",
    "Small samples of build-up sequences are noisy, and a few mistakes can dominate the highlight reel."
  ],
  intro: `<p>Every attack starts somewhere. Build-up play is the phase between winning or receiving the ball in a team's own third and moving it into a position from which an attack can be launched. It includes the goalkeeper, the centre-backs, the deepest midfielder, and the rotations that create passing lanes ahead of them.</p>
<p>The phase is often judged by its failures. A misplaced pass near the penalty area becomes a highlight and a goal. The twenty passes that broke a press and created space are forgotten. That asymmetry makes build-up play one of the most misunderstood parts of football analysis.</p>
<p>This guide explains the phase, the metrics that describe it, and why a clean progression is not the same as a good attack.</p>`,
  sections: [
    {
      id: "what-build-up-play-means",
      heading: "What build-up play means",
      html: `<p>Build-up play is usually defined by location and intent. Location means the defensive third, roughly the area from a team's goal line to the line of its own penalty area extended across the pitch. Intent means moving the ball forward with control rather than clearing it under pressure.</p>
<p>The phase ends when the ball crosses into the middle third with a stable possession, or when the team chooses to go long. A long clearance can be a deliberate build-up choice, especially against a high press, but it is a different pattern from a short passing sequence. Both can be correct, and the same team may use both within one match.</p>
<p>Build-up is not the same as possession. A team can have little possession and still build up well when it wins the ball. A team can have plenty of possession and build up poorly if its deepest players pass sideways without breaking the first line. The distinction matters because possession totals hide the direction and purpose of the passing.</p>
<p>What counts as a successful build-up also depends on the opponent's shape. A short pass that escapes one press is a good decision. The same pass against a deep block may slow the attack down.</p>`
    },
    {
      id: "progression-metrics",
      heading: "Metrics that describe progression",
      html: `<p>Several metrics help describe build-up play. Each answers a slightly different question.</p>
<p><strong>Progressive passes</strong> count passes that move the ball significantly closer to the opponent's goal. The exact threshold varies by provider, so compare like with like. A progressive pass is a useful sign that a team is breaking lines, but it does not say whether the pass was the best option.</p>
<p><strong>Progressive carries</strong> count dribbles that advance the ball. A centre-back who steps into midfield with the ball changes the shape of the opposition press, even if the carry does not lead to a shot.</p>
<p><strong>Passes into the final third</strong> measure the end point of a sequence. They are a reasonable proxy for entering the attacking phase, but they can reward hopeful long balls as much as controlled progressions.</p>
<p><strong>Build-up success rate</strong> divides completed build-up sequences by attempted ones. The definition of a sequence matters, and providers differ. A high rate can mean calm decision making, or it can mean a team avoids difficult passes.</p>
<p>Our guide to <a href="/articles/possession-data-football.html">using possession data</a> explains why raw totals need context. The same caution applies here. A progression metric describes what happened, not why it worked.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It compares two teams over five matches using simple build-up counts. The numbers are invented for teaching, not taken from a live competition.</p>
<table>
<caption>Illustrative build-up profile over five matches</caption>
<thead><tr><th>Metric</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Build-up sequences</td><td>120</td><td>95</td></tr>
<tr><td>Completed sequences</td><td>96</td><td>80</td></tr>
<tr><td>Success rate</td><td>80%</td><td>84%</td></tr>
<tr><td>Progressive passes</td><td>58</td><td>41</td></tr>
<tr><td>Passes into final third</td><td>34</td><td>29</td></tr>
<tr><td>Losses in own third</td><td>24</td><td>15</td></tr>
</tbody>
</table>
<p>Team B has the higher success rate, but Team A completes more sequences and progresses the ball more often. Which team built up better? The table alone cannot answer that. Team A may face a stronger press, or it may attempt more ambitious passes. Team B may be more conservative, or it may be better at escaping pressure.</p>
<p>Now add the outcomes. Suppose Team B created more expected goals per match from less build-up volume. That could mean its progressions were more dangerous, or that its attacks started from transitions and set pieces.</p>
<p>The lesson is to read build-up metrics as a profile, not a score. Volume, success, progression, and final-third output answer different questions. The same logic applies to <a href="/articles/expected-threats-xt.html">expected threat</a>, which values the danger of a possession rather than the number of passes.</p>`
    },
    {
      id: "reading-the-structure",
      heading: "Reading the structure",
      html: `<p>Build-up play is a structural problem before it is a passing problem. The team needs to create a free player, and the opponent needs to close the options. Common structures include a back three with the full-backs pushed high, a double pivot in front of a back four, and a single deep midfielder who drops between the centre-backs.</p>
<p>Each structure has trade-offs. A back three gives more passing angles but leaves fewer players ahead of the ball. A double pivot protects the centre but can be isolated if the full-backs are marked. A single pivot creates a central option but asks one player to receive under pressure with limited support.</p>
<p>The goalkeeper is part of the structure. A keeper who passes accurately under pressure gives the team an extra outfield player. A keeper who cannot invites the press to commit more players forward.</p>
<p>Player roles matter as much as the formation on the team sheet. A full-back may start deep and move into midfield, a winger may drop to receive, and a striker may pin a centre-back to create space behind. The pattern is the product of these movements, not just the shape at kick-off. Our guide to <a href="/articles/pressing-intensity-ppda.html">pressing intensity and PPDA</a> explains the other side of the same contest.</p>`
    },
    {
      id: "build-up-under-pressure",
      heading: "Build-up under pressure",
      html: `<p>A build-up sequence is only as good as the pressure it survives. Comparing teams without adjusting for pressure is like comparing sprint times without noting the wind. Some teams face a high press every week; others are allowed to pass freely until the halfway line.</p>
<p>Pressure can be described in several ways. The number of opponents in the defensive third is a simple count. The distance from the nearest opponent to the ball carrier is a more detailed measure. The number of passes before a loss, and the location of losses, add context.</p>
<p>Context includes the score and the clock. A team chasing a goal may take more risks in build-up. A team protecting a lead may clear the ball more often. Comparing build-up across game states without noting the state can produce a misleading picture.</p>`
    },
    {
      id: "build-up-versus-final-third",
      heading: "Build-up versus the final third",
      html: `<p>A strong build-up phase does not guarantee chances. The final third is a separate problem with different constraints: less space, more defenders, and a higher cost for turnovers. A team can progress the ball beautifully and then run out of ideas near the penalty area.</p>
<p>The reverse is also true. A team can build up modestly and still create danger from transitions, set pieces, or individual quality. That is why build-up metrics should be paired with chance creation and shot quality. Expected goals covers the chance-quality side of the ledger.</p>
<p>When a team struggles to create, the diagnosis should not jump straight to the build-up. Ask where the attacks begin, how often the team enters the final third, and what happens after entry. The problem may be in the last pass, the movement in the box, or the quality of the crosses. Build-up is one link in a chain, not the whole chain.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging build-up by one mistake.</strong> A single misplaced pass is memorable, but it is one event in a sequence of decisions. Look at the pattern across matches.</li>
<li><strong>Ignoring the press.</strong> A completion rate against no pressure is not comparable with one against a high press. Adjust for the opponent's behaviour.</li>
<li><strong>Treating possession as progression.</strong> Sideways passes can inflate possession without moving the team up the pitch. Direction and line breaks matter.</li>
<li><strong>Assuming a high success rate is good.</strong> Safe passing can produce a high rate and a slow attack. The metric needs an intent measure beside it.</li>
<li><strong>Comparing providers without checking definitions.</strong> Progressive passes and build-up sequences are defined differently across data companies.</li>
</ul>
<p>The common thread is the search for a single number. Build-up play is a relationship between structure, pressure, and decision making, and a number can only point to a question.</p>`
    },
    {
      id: "limits",
      heading: "Limits of build-up analysis",
      html: `<p>Build-up data is limited by sample size and by the quality of the event record. A pass is recorded, but the pressure on the passer and the movement of the receiver are not always captured. Video adds the context that the event data misses.</p>
<p>Definitions vary between providers, so a progressive pass in one dataset may not meet the threshold in another. Leagues also differ in pressing intensity and pitch conditions, which changes what a successful build-up looks like.</p>
<p>The most honest use of build-up analysis is descriptive. It can show how a team prefers to progress the ball, where it takes risks, and how it responds to pressure. It cannot prove that one style is better, and it cannot predict the next match.</p>
<p>Use the metrics to ask better questions, then watch the sequences. The value is in connecting structure, pressure, and outcome.</p>`
    }
  ],
  faq: [
    {
      q: "What counts as build-up play in football?",
      a: "Build-up play is the phase in which a team moves the ball from its own defensive third into midfield or attack with controlled passes or carries. It usually involves the goalkeeper, defenders, and deep midfielders, and it ends when the team enters the middle or final third."
    },
    {
      q: "Which metric best measures build-up play?",
      a: "There is no single best metric. Progressive passes, progressive carries, passes into the final third, and build-up success rate each describe a different part of the phase. Use them together and add context about pressure and game state."
    },
    {
      q: "Does good build-up play lead to more goals?",
      a: "Not automatically. Progression gets the ball into dangerous areas, but chance creation and finishing are separate skills. A team can build up well and still create little, so build-up metrics should be read alongside shot quality and final-third output."
    }
  ],
  related: ["possession-data-football", "pressing-intensity-ppda", "expected-threats-xt"]
};
