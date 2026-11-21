export default {
  slug: "cup-vs-league-football",
  title: "Cup Football vs League Football",
  metaTitle: "Cup vs League Football: Why Models Need Recalibration",
  description: "How knockout formats, rotation, motivation and small samples change football analysis, and how to recalibrate a league model for cups.",
  category: "Tactics",
  tags: ["cup football", "knockout ties", "rotation", "match analysis"],
  published: "2026-04-20",
  updated: "2026-04-20",
  author: "Nyasha",
  dek: "A league season asks who accumulates the most. A cup asks who survives the next ninety minutes. Those are different statistical questions, and a league model cannot answer the second without adjustment.",
  takeaways: [
    "Knockout football changes the value of a draw and the route to progression.",
    "One-off ties amplify variance, especially when extra time and penalties are possible.",
    "Rotation and priority decisions add uncertainty that league models do not face.",
    "Estimate the ninety-minute result and the advancement probability separately.",
    "Cup shocks are normal outcomes, not automatic evidence that a model is broken."
  ],
  intro: `<p>A cup tie does not reward the better team in the same way a league season does. That is not a flaw in the competition. It is the competition. Over thirty-eight matches, the strongest squad usually finds a way to the top. Over one knockout tie, a deflection, a red card or a penalty shootout can decide everything.</p>
<p>The mistake is to take a league model, change the competition name and expect the output to remain calibrated. Some of the inputs still apply: team quality, style, availability and venue. Others change sharply: the value of a draw, the likelihood of rotation and the number of minutes remaining when the score is level.</p>`,
  sections: [
    {
      id: "the-format-changes-the-question",
      heading: "The format changes the question",
      html: `<p>League football is an accumulation problem. Three points for a win and one for a draw create a long-run incentive to be consistently good. A draw is often an acceptable result, especially away from home, because it still adds to the total. Knockout football is a survival problem. A draw may simply extend the tie into extra time, where the same teams must find another route to victory.</p>
<p>That difference changes behaviour. A favourite may become more cautious late in a tie, protecting a lead rather than chasing another goal. An underdog may accept a draw and aim for penalties. These are rational responses to the format, and they can make the match look less like the league meeting between the same clubs.</p>`
    },
    {
      id: "variance-is-the-point",
      heading: "Variance is the point",
      html: `<p>A single match is a small sample. A team that is better on average can still lose on the day, and the shorter the format, the more that randomness matters. This is not a reason to ignore quality. It is a reason to express confidence differently. A league table after thirty-eight matches tells you more about the teams than a cup run of four matches, even if the cup run is more memorable.</p>
<p>The same logic applies to the underdog. A lower-ranked team does not need to be the better side to win one tie. It needs to stay in the match, take one of its chances and survive the moments that decide close games. That is a real route to progression, not a moral victory.</p>`
    },
    {
      id: "rotation-and-priorities",
      heading: "Rotation, priorities and the lineup problem",
      html: `<p>Cup team selection is less predictable than league selection. A manager may rest key players before a decisive league fixture, give minutes to a returning starter or use the cup to develop younger players. The same club can field very different elevens in two competitions within a week.</p>
<p>This is where <a href="/articles/squad-depth-football-prediction.html">squad depth</a> becomes central. A club with two adequate options in each position can rotate and keep its structure. A thinner squad must choose which competition to protect. Priority is not only a mood; it is a resource allocation problem, and it is visible in the lineup sheet more reliably than in pre-match comments.</p>`
    },
    {
      id: "motivation-narratives",
      heading: "Motivation narratives need evidence",
      html: `<p>Cup football attracts stories about desire, history and the magic of the occasion. Some of those stories contain truth: a lower-division team may raise its intensity, and a favourite may underestimate the difficulty of a cold, tight ground. But motivation is hard to measure and easy to invent after the result.</p>
<p>A more disciplined approach is to look for observable proxies. Did the manager name a strong side? Is the team's schedule crowded? Has the club prioritised the competition in previous rounds? These are imperfect, but they are better than assuming that the team with more to gain will automatically run further.</p>`
    },
    {
      id: "style-matchups-in-knockout-football",
      heading: "Style matchups in knockout football",
      html: `<p>Knockout ties can sharpen stylistic contrasts. A team that dominates the ball in league matches may find less space against a compact opponent who is content to defend deep and counter. A team that relies on set pieces may be less affected by a poor playing surface than a short-passing side. The <a href="/articles/tactical-matchups-vs-reputation.html">guide to tactical matchups</a> explains why reputation can hide these details.</p>
<p>The key is to ask how the game state will evolve. If the favourite scores first, does the underdog have the tools to respond? If the underdog scores first, can the favourite break a deep defence without leaving itself exposed? These questions matter more in a one-off tie than in a league match where there is always another week.</p>`
    },
    {
      id: "two-legged-ties",
      heading: "Two-legged ties and game state",
      html: `<p>A two-legged tie is not simply two independent matches added together. The first leg creates a scoreline that shapes the second. A team leading by two goals may manage the return leg differently from a team leading by one. A team that is behind may accept more risk, which can create the space it needs or the space its opponent wants.</p>
<p>The rules matter too. The away goals rule has been abolished in many competitions, so check the specific format before modelling a tie. Extra time and penalties may apply after the second leg, or not at all. A generic cup model that ignores the rule set can be badly calibrated.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The probabilities below are illustrative and describe a hypothetical Club A and Club B. They are not taken from a real match.</p>
<table>
<thead><tr><th>Stage</th><th>Club A win</th><th>Draw</th><th>Club B win</th></tr></thead>
<tbody>
<tr><td>League meeting, 90 minutes</td><td>55%</td><td>25%</td><td>20%</td></tr>
<tr><td>Cup tie, 90 minutes</td><td>48%</td><td>27%</td><td>25%</td></tr>
<tr><td>Extra time, if drawn</td><td>30%</td><td>50%</td><td>20%</td></tr>
<tr><td>Penalties, if still drawn</td><td>50%</td><td>0%</td><td>50%</td></tr>
</tbody>
</table>
<p>In the league, Club A's expected points are 0.55 x 3 + 0.25 x 1 = 1.90. Club B's are 0.20 x 3 + 0.25 x 1 = 0.85. The gap is large because the league format rewards the more likely winner with three points and gives the draw a shared value.</p>
<p>In the cup, the calculation must cover every route to advancement. Club A wins in 90 minutes with probability 0.48. If the match is drawn, which happens with probability 0.27, Club A wins in extra time with probability 0.30, or reaches penalties with probability 0.50 and wins those with probability 0.50. The full expression is 0.48 + 0.27 x (0.30 + 0.50 x 0.50) = 0.48 + 0.27 x 0.55 = 0.48 + 0.1485 = 0.6285, or about 63%.</p>
<p>Club B's route is 0.25 + 0.27 x (0.20 + 0.50 x 0.50) = 0.25 + 0.27 x 0.45 = 0.25 + 0.1215 = 0.3715, or about 37%. The two figures sum to 100%, which is a useful check. The favourite is still favoured, but the advancement probability is lower than the league points gap might suggest. The draw route gives the underdog a second chance.</p>`
    },
    {
      id: "recalibrating-a-league-model",
      heading: "Recalibrating a league model",
      html: `<p>Start by estimating the ninety-minute result, not the tie. Use the same team-strength and style inputs as a league model, then adjust for likely rotation, venue and competition context. Convert the ninety-minute probabilities into advancement probabilities using the actual extra-time and penalty rules. Keep the two outputs separate, because they answer different questions.</p>
<p>Then widen the uncertainty. Cup samples are small, lineups are less predictable and the format adds branches that a league model does not have. A match outcome estimate for the ninety minutes can be reasonably confident while the advancement estimate remains much less certain. Our <a href="/articles/pre-match-analysis-guide.html">pre-match analysis guide</a> offers a checklist for organising those inputs without pretending the uncertainty has gone away.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Using the league table as a cup probability.</strong> The format, rotation and motivation can all differ from the league meeting.</li>
<li><strong>Forgetting the draw route.</strong> A draw is not a neutral outcome in a knockout tie; it may lead to extra time and penalties.</li>
<li><strong>Treating penalties as pure skill.</strong> Shootouts are close to coin flips, with small and noisy effects from preparation and pressure.</li>
<li><strong>Over-weighting motivation stories.</strong> Observable choices such as the lineup are more useful than narratives about desire.</li>
<li><strong>Ignoring the rule set.</strong> Two legs, away goals and extra time change the arithmetic.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "What cup analysis cannot tell you",
      html: `<p>Cup football is a small-sample environment by design. A single tie can be decided by an event that no pre-match model could reasonably forecast. That does not make the exercise useless; it means the output should be expressed as a range of plausible outcomes rather than a confident verdict.</p>
<p>Lineups are often unknown until an hour before kick-off, and priority can change after a league result elsewhere. Extra time introduces fatigue and substitution patterns that are hard to estimate. Treat cup analysis as a structured way to compare routes to progression, not as a claim to know which story the competition will produce.</p>`
    }
  ],
  faq: [
    {
      q: "Why are cup matches harder to predict than league matches?",
      a: "The sample is smaller, the format adds extra time and penalties, and team selection is less predictable. Rotation and priority decisions can change the strength of the eleven in ways that a league fixture rarely does."
    },
    {
      q: "Do penalties favour the better team?",
      a: "Mostly no. A shootout is close to a coin flip, with small effects from goalkeeper preparation, routine and pressure. A stronger team may reach more shootouts, but it does not automatically win them."
    },
    {
      q: "Should league form carry into cup ties?",
      a: "Partly. Form contains information about quality and confidence, but it must be adjusted for the lineup, the opponent and the format. A league win by a rotated side may say less about the cup eleven than it first appears."
    }
  ],
  related: ["squad-depth-football-prediction", "manager-impact-football", "pre-match-analysis-guide"]
};
