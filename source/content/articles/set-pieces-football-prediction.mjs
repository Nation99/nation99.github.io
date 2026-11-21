export default {
  slug: "set-pieces-football-prediction",
  title: "Set Pieces in Football Analysis",
  metaTitle: "Set Pieces in Football Analysis",
  description: "Corners and free kicks are small systems, not lottery tickets. Separate repeatable set-piece quality from conversion noise with clear arithmetic.",
  category: "Tactics",
  tags: ["set pieces", "corners", "aerial duels", "chance creation"],
  published: "2026-04-27",
  updated: "2026-04-27",
  author: "Nyasha",
  dek: "Set pieces are coached routines with repeatable inputs and noisy outputs. The analytical task is to judge the routine without being fooled by the conversion.",
  takeaways: [
    "Set-piece goals are a small sample, so conversion records swing widely.",
    "Delivery quality, screening movement and aerial profiles repeat more reliably than goals.",
    "Expected goals per corner is a better guide to routine quality than a season's goal tally.",
    "Defending the second ball is part of the routine, not a separate phase."
  ],
  intro: `<p>A corner looks like a pause in the game. Analytically, it is a small, repeatable system with its own delivery, movement and second-ball logic. That combination is why set pieces reward a different lens from open-play analysis: the inputs are designed, but the output is still football, with deflections, fouls and goalkeepers involved.</p>
<p>The temptation is to count goals and call it expertise. A team that scores from four corners in a month is described as a set-piece threat; a team that scores from none is described as weak. Both labels may be wrong. The underlying routines can be identical while the conversion differs.</p>`,
  sections: [
    {
      id: "why-set-pieces-reward-a-different-lens",
      heading: "Why set pieces reward a different lens",
      html: `<p>Open-play attacks are shaped by the opponent's structure and the flow of the game. Set pieces are closer to rehearsed plays. The attacking team controls the delivery, the starting positions and, to a large extent, the timing of the movement. The defending team knows this and prepares its own responses.</p>
<p>That does not make set pieces deterministic. A corner can be headed clear, a free kick can hit the wall, and a goalkeeper can claim a cross that seemed certain to reach a striker. But the repeatability of the setup means we can evaluate the process separately from the result.</p>
<p>The first step is to decide what counts as a set piece. Corners, wide free kicks, direct free kicks, throw-ins in the final third and penalties are different problems. Grouping them together hides more than it reveals.</p>`
    },
    {
      id: "the-inputs-that-repeat",
      heading: "The inputs that repeat",
      html: `<p>Four inputs tend to persist from match to match. Delivery sets the tone: the height, speed and curl of the ball, and whether it is aimed at the near post, the far post or the penalty spot. Screening comes next: the picks and decoy runs that free a runner from his marker. Then there is the aerial profile of the attackers: who can win a header against a defender of similar size, and who needs a run-up to compete.</p>
<p>The fourth is the second-ball structure. A routine is not finished when the first header is cleared. The team that wins the loose ball at the edge of the box can recycle it, shoot or deliver again. A team that is poorly placed for the second ball can turn a promising corner into an immediate counter-attack for the opponent.</p>
<p>These inputs are visible without a spreadsheet. Watch three corners in a row and note the same details: who took it, where it landed, who made the first run, and how many defenders were left outside the box. The pattern is usually stable.</p>`
    },
    {
      id: "measuring-chance-creation-not-goals",
      heading: "Measuring chance creation, not goals",
      html: `<p>A set-piece goal is a rare event. A team might take two hundred corners in a season and score from a dozen of them. That sample is small enough for randomness to dominate the goal count. A deflection here or a missed header there can change the story completely.</p>
<p>The expected goals figure gives a better handle on the process. Each corner produces a set of shots, and each shot has a probability of becoming a goal. Adding those probabilities gives the total chance quality created by the corner, regardless of whether the ball went in.</p>
<p>The same logic applies to defending. A team that concedes few set-piece goals may be well organised, lucky, or protected by a goalkeeper having an excellent season. Looking at the chance quality conceded separates those explanations, at least partly. Our guide to <a href="/articles/defensive-metrics-football.html">defensive metrics</a> sets out the wider logic.</p>`
    },
    {
      id: "attacking-routines-and-delivery",
      heading: "Attacking routines and delivery",
      html: `<p>Delivery is the part of a set piece that most affects the first shot. A flat, fast ball into the near post asks a different question from a high, hanging ball to the far post. The first rewards a glancing header and careful timing; the second rewards height and a contested aerial duel.</p>
<p>The routine should match the personnel. A team with one dominant centre-back might overload the near post and use decoy runners to create a free run. A team with several strong headers might spread across the six-yard box and attack from deeper starting positions. A team without height might use short corners to create a better crossing angle or drag a defender out of the box.</p>
<p>Watch the first movement rather than the delivery. If two attackers cross before the ball is struck, the defence has to decide who picks up whom. That decision is where routines create confusion. A well-drilled defence will pass markers on, but a poorly drilled one will leave a runner free.</p>`
    },
    {
      id: "defending-the-second-ball",
      heading: "Defending the second ball",
      html: `<p>Defending a set piece is not only about the first header. The clearance often falls to a player at the edge of the box, and the next action decides whether the attack continues. A defence that clears the first ball but leaves the second-ball zone open has only solved half the problem.</p>
<p>There are two common approaches. One is to leave a player high up the pitch as an outlet, forcing the opponent to keep a defender back. The other is to commit everyone to the box and rely on a strong first clearance. Both involve trade-offs: the first reduces the attacking numbers, the second increases the risk of a recycled chance.</p>
<p>Goalkeeper positioning is part of this structure. A keeper who claims crosses confidently can reduce the number of second balls that need defending. A keeper who stays on his line shifts more responsibility onto the defenders. The <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance guide</a> explains why that choice is not always captured by save numbers.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The figures below are illustrative and describe two hypothetical teams over one match.</p>
<table>
<thead><tr><th>Team</th><th>Corners</th><th>Expected goals per corner</th><th>Total corner expected goals</th><th>Goals scored</th></tr></thead>
<tbody>
<tr><td>Club A</td><td>6</td><td>0.07</td><td>0.42</td><td>1</td></tr>
<tr><td>Club B</td><td>3</td><td>0.14</td><td>0.42</td><td>0</td></tr>
</tbody>
</table>
<p>Both teams created the same total chance quality from corners: 6 multiplied by 0.07 equals 0.42, and 3 multiplied by 0.14 equals 0.42. Club A did it through volume, with six deliveries that each produced a modest chance. Club B did it through quality, with three deliveries that each produced a better chance.</p>
<p>Club A scored once and Club B did not. If the analysis stopped there, it would conclude that Club A had the better set pieces. That conclusion is not supported by the chance quality. One goal from 0.42 expected goals is a good outcome, but it is not evidence that the routine was superior. Conversely, Club B's zero goals from the same total is not evidence that its routine failed.</p>
<p>Now extend the example over ten matches. Suppose Club A takes 62 corners at 0.07 per corner, for 4.34 total expected goals. Club B takes 31 corners at 0.14 per corner, for the same 4.34. The two teams have created identical chance quality by different routes. If Club A has scored four goals and Club B has scored two, the difference is more likely to be conversion noise than a fundamental gap in set-piece coaching.</p>
<p>As a rough teaching device, if the 0.42 total were treated as independent, the chance of at least one goal would be 1 minus e to the power of negative 0.42, which is about 34 per cent. Set-piece events are not independent, so use that calculation to understand the scale of the number, not as a forecast.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a routine by its goals.</strong> Conversion is noisy. Look at the chance quality and the repeatability of the movement first.</li>
<li><strong>Ignoring the second ball.</strong> A clearance is not the end of the phase. The team that wins the loose ball often decides whether the set piece was a success.</li>
<li><strong>Treating all corners as equal.</strong> A short corner and a deep inswinger create different chances. Split the routines before comparing teams.</li>
<li><strong>Assuming height is the only route.</strong> Movement, screening and delivery can create chances for smaller attackers. Aerial ability helps, but it is not the whole system.</li>
</ul>`
    },
    {
      id: "limits-and-sample-size",
      heading: "Limits and sample size",
      html: `<p>Set-piece analysis is limited by sample size and by the quality of the data. A team may take only a few corners in a match, and the routines may change depending on the opponent, the weather or the score. A single season is often too short to separate a genuinely strong set-piece team from a lucky one.</p>
<p>There is also a selection effect. Teams that are good in open play may not need to invest as much in set pieces, while teams that struggle to create might rely on them more. The routine quality is real, but its importance depends on the rest of the team's game. Use set-piece numbers as one part of the match profile, not as a standalone verdict.</p>`
    }
  ],
  faq: [
    {
      q: "How many corners does a team need before set-piece data is useful?",
      a: "More than a handful. A few hundred corners give a steadier picture of routine quality, though even then conversion will vary. Early in a season, treat the numbers as a description rather than a ranking."
    },
    {
      q: "Are short corners less effective than crosses?",
      a: "Not inherently. Short corners can create better crossing angles and unsettle a defence that has prepared for an aerial ball. Effectiveness depends on the personnel and the execution, not the label."
    },
    {
      q: "Should set-piece goals be included in expected goals?",
      a: "Most expected goals models include them, but it is useful to separate open-play and set-piece chance quality. The two phases have different repeatability and different defensive structures."
    }
  ],
  related: ["defensive-metrics-football", "goalkeeper-performance-prediction", "tactical-matchups-vs-reputation"]
};
