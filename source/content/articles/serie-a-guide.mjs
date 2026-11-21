export default {
  slug: "serie-a-guide",
  title: "Serie A Analysis Guide",
  metaTitle: "Serie A Analysis Guide: Shape, Detail and Home Form",
  description: "Serie A analysis guide: tactical variety, defensive structure, set-piece detail and a careful look at home advantage.",
  category: "Leagues",
  tags: ["Serie A", "defensive structure", "set pieces", "home advantage"],
  published: "2026-06-02",
  updated: "2026-06-02",
  author: "Nyasha",
  dek: "Serie A rewards attention to detail. The league's variety of shapes and its emphasis on defensive organisation make it a poor place for one-size-fits-all assumptions.",
  takeaways: [
    "Serie A is tactically varied, so league averages are a weak guide to a specific fixture.",
    "Defensive structure is about where space is conceded, not how many players sit behind the ball.",
    "Set pieces are a rehearsed part of the game, but their conversion is noisy.",
    "Home advantage is a variable shaped by venue, travel and approach, not a fixed bonus."
  ],
  intro: `<p>The most useful thing to say about Serie A is that it resists a single description. One club builds from a back three and presses man to man. Another defends in a compact 4-4-2 and attacks in transition. A third controls the ball patiently and relies on set pieces to break a low block.</p>
<p>That variety is the analytical challenge. It is also the reason the league is interesting. A guide cannot tell you what every team will do. It can tell you which questions separate one team from another.</p>`,
  sections: [
    {
      id: "variety",
      heading: "Variety is the point",
      html: `<p>Serie A's tactical range is wider than the old stereotypes suggest. Coaches use back threes and back fours, zonal marking and man-oriented pressing, patient build-up and direct counterattacks. Some teams defend with a high line; others protect the edge of their own box. The shapes change with the opponent and the game state.</p>
<p>This makes league-wide averages less useful than they are in a more homogeneous competition. An average goals figure blends a team that wants a 3-2 with a team that wants a 1-0. The average describes neither. When preparing for a fixture, start with the two teams involved and treat the league figure as a distant baseline.</p>
<p>Variety also makes the matchup more important. A team that struggles against a back three may be comfortable against a back four. A pressing side may thrive against a short build-up and suffer against a goalkeeper who goes long. The useful question is not "what does Serie A do?" but "what does this pairing create?"</p>`
    },
    {
      id: "defensive-structure",
      heading: "Defensive structure is not caution",
      html: `<p>A low goals-conceded total can come from many things: a deep block, a high press, a dominant possession game, or an excellent goalkeeper. Treating all of them as "defensive" hides the mechanism. The useful analysis asks where the team concedes space and what it is willing to give up.</p>
<p>Line height is the first distinction. A team that defends high compresses the midfield but leaves room behind the defence. A team that defends deep protects that room but allows the opponent to circulate. Both can be organised. Both can be cautious or aggressive depending on the trigger and the cover.</p>
<p>Look at the quality of the chances conceded, not just the count. A team may allow many shots from outside the box and few from the centre. Another may allow fewer shots but better locations. <a href="/articles/defensive-metrics-football.html">Defensive metrics</a> become useful when they separate volume, location and goalkeeping.</p>`
    },
    {
      id: "set-pieces",
      heading: "Set pieces and rehearsed detail",
      html: `<p>Set pieces are a small game with their own rules. The delivery, the movement of the blockers, the first contact and the second ball all matter. A corner is not a random cross. It is a pattern that a coaching staff has chosen, often against a specific defensive scheme.</p>
<p>Serie A's coaching culture places weight on these details. Some teams use short corners to change the delivery angle. Others crowd the six-yard box and rely on blocks. Defensively, the choice between zonal and man marking assigns responsibility differently, especially for the second ball. A team can defend the first contact well and still concede from the rebound.</p>
<p>The analytical trap is to treat set-piece goals as a stable skill. Conversion varies from season to season, even when the routine looks the same. Look at the chances created, the quality of the first contact and the opponent's marking. <a href="/articles/set-pieces-football-prediction.html">Set-piece analysis</a> is more reliable when it studies the process rather than the goal count.</p>`
    },
    {
      id: "home-advantage",
      heading: "Home advantage is a variable",
      html: `<p>Home advantage is often treated as a fixed bonus. In practice it is a bundle of effects: crowd support, travel for the away team, familiarity with the pitch, kick-off time and the way each coach approaches the game. The bundle can be strong in one fixture and weak in another.</p>
<p>Venue matters. Some grounds are tight and loud; others have a running track or a different playing surface. A shared stadium can reduce the sense of home identity. A long trip for the away side can add fatigue, but the effect depends on the mode of travel and the recovery window.</p>
<p>The tactical approach matters too. A home team may feel obliged to attack, which can open space for a counterattacking opponent. An away team may be more conservative than its usual style. Use multi-season splits where possible, and treat a single season's home record as a small sample. <a href="/articles/league-table-beyond-points.html">The table beyond points</a> is a better guide than a home label alone.</p>`
    },
    {
      id: "reading-scorelines",
      heading: "Reading the Italian scoreline",
      html: `<p>A 1-0 is not a single type of match. It can be a controlled performance by a team that scored early and managed the game. It can be a scrappy win by a team that defended for an hour. It can be a match where both sides created enough chances for three goals and the finishing was poor.</p>
<p>To read it, split the match into phases. Before the first goal, the teams often reveal their intended shapes. After the goal, the trailing team may take more risks, and the leading team may drop deeper. The final twenty minutes add substitutions, fatigue and a different kind of space.</p>
<p>Serie A's coaching detail often shows in these phases. A substitution can change the marking scheme, the height of the line or the target of the long ball. The scoreline records the result of those choices, not the quality of the performance. Analyse the sequence, not just the final score.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The following clubs, totals and splits are illustrative. They are not a real season or a claim about any team. The exercise shows how to separate set-piece reliance from open-play production.</p>
<table>
  <thead>
    <tr><th>Goal source</th><th>Club A</th><th>Club B</th></tr>
  </thead>
  <tbody>
    <tr><td>Open play</td><td>24</td><td>24</td></tr>
    <tr><td>Set piece</td><td>11</td><td>7</td></tr>
    <tr><td>Penalty</td><td>5</td><td>3</td></tr>
    <tr><td>Own goal</td><td>2</td><td>1</td></tr>
    <tr><td>Total</td><td>42</td><td>35</td></tr>
  </tbody>
</table>
<p>Club A's set-piece share is 11 divided by 42, or 26 per cent. Club B's is 7 divided by 35, or 20 per cent. Club A's open-play share is 57 per cent; Club B's is 69 per cent. The two teams scored the same number of open-play goals, but Club B depended on them more.</p>
<p>Convert the totals to a per-match rate over an illustrative 38 matches. Club A scores 42 divided by 38, or 1.11 goals per match, with 0.29 from set pieces. Club B scores 35 divided by 38, or 0.92, with 0.18 from set pieces. The set-piece gap is about 0.11 goals per match.</p>
<p>That gap is real but modest. It matters most in a match projected for few open-play chances, where one set piece can decide the result. It matters less in an end-to-end game. The goal counts are also a small sample: a single deflection or a missed header can change the totals. If set-piece expected goals were available, they would be a better input than the conversion count.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating the league as uniformly defensive.</strong> The range of styles is wide. A low-scoring match may be organised, cautious or simply poor in front of goal.</li>
<li><strong>Assuming a back three means caution.</strong> A back three can support aggressive wing-backs and a high press. The shape is not the instruction.</li>
<li><strong>Overreading set-piece goals.</strong> Conversion is noisy. Look at the routine, the first contact and the chances created.</li>
<li><strong>Using one season of home form.</strong> A single campaign is a small sample. Venue effects need multiple seasons and context.</li>
<li><strong>Ignoring substitutions.</strong> A change of shape at 60 minutes can alter the matchup more than the starting eleven.</li>
<li><strong>Confusing control with possession.</strong> A team can have the ball and still be kept away from the box.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and useful cautions",
      html: `<p>Tactical descriptions age quickly. A coach change can alter the shape, the pressing height and the role of the forwards within weeks. A guide can name the questions, but the answers need current evidence. Serie A is a set of projects, not a monolith, and the projects do not move at the same speed.</p>
<p>Public data has gaps. Event data can show where a shot was taken and who delivered the corner. It cannot show the instruction, the fitness level or the reason a defender stepped up. Set-piece samples are small, home advantage is unstable, and goals conceded is a noisy summary of defensive quality.</p>
<p>The honest approach is to keep the adjustments modest and write down the reasoning. A set-piece edge of 0.1 goals per match is worth noting. It is not worth building a whole argument around. The same discipline applies to home advantage, form and reputation.</p>`
    }
  ],
  faq: [
    {
      q: "Is Serie A still a defensive league?",
      a: "The stereotype is too broad. The league contains high-pressing teams, deep blocks and possession sides. Analyse each team and each season on its own evidence rather than applying a league-wide label."
    },
    {
      q: "Why do set pieces matter so much in analysis?",
      a: "They are a repeatable source of chances, especially in tight matches. But conversion is noisy. Study the routine, the first contact and the second ball, and use chance creation rather than goals alone."
    },
    {
      q: "How should I handle home advantage in Serie A?",
      a: "Treat it as a variable. Check the venue, the travel, the crowd and each team's approach. Use multi-season samples where possible, and avoid applying a fixed bonus to every home side."
    }
  ],
  related: ["league-table-beyond-points", "defensive-metrics-football", "set-pieces-football-prediction"]
};
