export default {
  slug: "weather-pitch-conditions",
  title: "How Weather and Pitch Conditions Change Matches",
  metaTitle: "Weather and Pitch Conditions: What Analysts Can Adjust",
  description: "How rain, wind, heat, altitude and pitch quality change football matches, with sensible limits on how much to adjust.",
  category: "Tactics",
  tags: ["weather", "pitch conditions", "match context", "analysis"],
  published: "2026-06-09",
  updated: "2026-06-09",
  author: "Nyasha",
  dek: "Conditions rarely transform a match on their own. They nudge the style, the error rate and the value of set pieces, and the nudge is usually smaller than the commentary suggests.",
  takeaways: [
    "Weather affects both teams, but not always in the same way.",
    "Rain can reduce open-play fluency while increasing the value of set pieces.",
    "Wind direction matters more than wind speed alone.",
    "Pitch and surface quality are part of venue context, not a separate penalty.",
    "Most condition adjustments should be small and expressed as ranges."
  ],
  intro: `<p>Weather is the easiest excuse in football and one of the hardest variables to measure. A commentator sees a slippery surface and predicts fewer goals; a coach sees the same surface and expects more mistakes. Both stories can be true in different matches. The conditions set a range of possible effects, and the teams decide which ones appear.</p>
<p>For analysis, the useful question is not whether it will rain. It is which parts of each team's game depend on a dry, calm, firm surface, and how much of that dependence survives the forecast. That keeps the adjustment honest and avoids turning a weather report into a prediction.</p>`,
  sections: [
    {
      id: "what-conditions-change",
      heading: "What conditions can and cannot change",
      html: `<p>Weather changes the physical environment: how the ball rolls, how high it bounces, how much grip a player has, how quickly a pitch drains and how hard the body works to regulate temperature. Those changes can affect passing accuracy, dribbling, pressing duration and the flight of a cross or a long shot.</p>
<p>What weather cannot do is erase the difference in quality between two teams. A poor surface may add randomness, but it does not make a weaker side equal. Conditions also tend to affect both teams, though not symmetrically: a team built on short passing may suffer more from standing water than a team built on direct play and set pieces.</p>`
    },
    {
      id: "rain-and-surface-water",
      heading: "Rain and surface water",
      html: `<p>Light rain can make a pitch faster and more predictable, especially on a well-maintained surface. The ball skids through, passes arrive sooner and defenders have less time to adjust. Heavy rain is different. Standing water slows the ball, kills bounce and makes turning and stopping harder. The match can become a sequence of loose balls and set pieces.</p>
<p>The common assumption that rain means fewer goals is too simple. Rain can reduce clean passing moves, but it can also increase defensive errors, corners and penalty-area scrambles. The direction of the effect depends on drainage, the amount of water and the styles involved. A team that defends deep and attacks set pieces may be relatively comfortable in conditions that frustrate a possession side.</p>`
    },
    {
      id: "wind",
      heading: "Wind",
      html: `<p>Wind is directional, which makes it more interesting than a simple speed reading. A strong crosswind affects crosses and long diagonal passes; a wind blowing towards one goal can make clearances travel further and turn a routine long ball into a chance. A team playing into the wind may shorten its passing and keep the ball lower.</p>
<p>Stadium geometry matters. An open ground exposes the pitch; a compact stadium with tall stands may shield it. Gusts matter more than averages because a single gust can change the flight of a ball at the decisive moment. Weather reports rarely capture that level of detail, which is one reason wind adjustments should be modest and uncertain.</p>`
    },
    {
      id: "heat-and-humidity",
      heading: "Heat and humidity",
      html: `<p>Heat affects the pace of the game and the way players manage their energy. In hot, humid conditions, high pressing becomes more expensive, and teams may sit deeper to avoid repeated sprinting. Cooling breaks, if the competition allows them, can change the rhythm. Substitutions become more valuable because fresh legs can exploit tired opponents.</p>
<p>Acclimatisation matters. A team used to playing in heat may cope better than a visiting side that has arrived from a cooler climate. That overlaps with travel and recovery, so avoid treating heat as an independent penalty. The <a href="/articles/travel-fatigue-football.html">guide to travel and fatigue</a> explains why the combination of climate, journey and congestion is more informative than any one factor.</p>`
    },
    {
      id: "altitude",
      heading: "Altitude",
      html: `<p>At altitude, air density falls. The ball travels slightly further and faster, and aerobic effort feels harder for players who are not adapted. The effect is real at venues substantially above sea level, but it is easy to overstate for a single match. Visiting teams often arrive early to adapt, and the physiological response varies between individuals.</p>
<p>Altitude is a venue-specific factor, not a universal weather adjustment. If a match is played at sea level, altitude should not appear in the model at all. If it is played high, the effect belongs with the venue and the away team's preparation, not in a generic "difficult conditions" bonus.</p>`
    },
    {
      id: "pitch-quality-and-surface",
      heading: "Pitch quality and surface type",
      html: `<p>Pitch quality is broader than the weather on the day. Grass length, moisture, wear, drainage and the presence of other events in the stadium all change how the surface plays. A dry, firm pitch rewards speed of pass; a soft, heavy pitch rewards strength and direct play. A heavily worn area can become a target for both teams.</p>
<p>Artificial surfaces add another layer. The ball bounces differently, the surface is more consistent and some players are less comfortable on it. Home teams that train on the same surface may gain a small familiarity edge, which is part of the wider <a href="/articles/home-advantage-modern-football.html">home advantage</a> picture. The effect is usually smaller than the difference in team quality, and it is not a fixed bonus.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The expected-goals figures below are illustrative and describe a hypothetical Club A and Club B. They are split into open-play and set-piece contributions so the arithmetic can be followed.</p>
<table>
<thead><tr><th>Condition</th><th>Club A open play</th><th>Club A set piece</th><th>Club A total</th><th>Club B total</th><th>Match total</th></tr></thead>
<tbody>
<tr><td>Baseline</td><td>1.25</td><td>0.30</td><td>1.55</td><td>1.15</td><td>2.70</td></tr>
<tr><td>Heavy rain</td><td>1.18</td><td>0.31</td><td>1.49</td><td>1.10</td><td>2.59</td></tr>
<tr><td>Strong wind</td><td>1.13</td><td>0.29</td><td>1.42</td><td>1.06</td><td>2.48</td></tr>
</tbody>
</table>
<p>For heavy rain, apply a 6% reduction to open-play expected goals and a 4% increase to set pieces. Club A's open play becomes 1.25 x 0.94 = 1.175, which rounds to 1.18. Its set pieces become 0.30 x 1.04 = 0.312, which rounds to 0.31. The total is 1.49. Club B's open play is 0.95 x 0.94 = 0.893, or 0.89, and its set pieces are 0.20 x 1.04 = 0.208, or 0.21, for a total of 1.10. The match total falls from 2.70 to 2.59, a reduction of 0.11 goals, or about 4%.</p>
<p>For strong wind, apply a 10% reduction to open play and a 2% reduction to set pieces. Club A's total becomes 1.42 and Club B's becomes 1.06, for a match total of 2.48. That is 0.22 lower than the baseline, or about 8%. Even a fairly aggressive wind adjustment moves the total by less than a quarter of a goal.</p>
<p>The exact percentages are assumptions, not measurements. The purpose of the table is to show the scale: conditions usually shift a match total by a few tenths of a goal, and the direction can differ by team. A side that depends heavily on set pieces might see almost no change in a rain-soaked match, while a short-passing side could lose more of its open-play edge than the average suggests.</p>`
    },
    {
      id: "using-conditions-in-analysis",
      heading: "Using conditions in analysis",
      html: `<p>Check the forecast at the stadium, not the city, and check the timing. A forecast for heavy rain at dawn may be irrelevant if the pitch drains well and the rain stops by kick-off. Wind direction is more useful than wind speed. Pitch inspections and local reports can add detail that a generic weather app misses.</p>
<p>Then connect the conditions to style. Does the home team cross a lot? Does the away team play short goal kicks? Is either side dependent on a high press that heat or a heavy pitch would make more expensive? Adjust the parts of the model that the condition actually touches, rather than applying a blanket change to the total. Our <a href="/articles/pre-match-analysis-guide.html">pre-match analysis guide</a> shows where this check fits in a wider routine.</p>
<p>Finally, keep the adjustment small and the uncertainty wide. If the condition is not clearly relevant to either team's style, the best adjustment may be none at all.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Assuming rain means fewer goals.</strong> Rain can reduce open-play fluency and increase set-piece and error-driven chances.</li>
<li><strong>Treating conditions as symmetric.</strong> A direct team and a short-passing team do not suffer equally on the same surface.</li>
<li><strong>Ignoring wind direction.</strong> A strong wind blowing across the pitch is a different problem from one blowing towards a goal.</li>
<li><strong>Using the forecast too early.</strong> Conditions at kick-off can differ from the morning report.</li>
<li><strong>Overfitting to one famous match.</strong> A memorable mudbath is an anecdote, not a base rate.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "What weather analysis cannot tell you",
      html: `<p>Forecasts are uncertain, stadium microclimates are local and pitch drainage data is rarely public. The effects of weather are also nonlinear: light rain may help a fast surface, while heavy rain harms it. Players adapt, grounds staff prepare and teams change their approach, so the same forecast can produce different matches.</p>
<p>Weather is a context variable, not a hidden edge. It can help explain why a match looked unusual, and it can justify a small adjustment to a match estimate. It cannot tell you which team will cope better with a single gust or a single bad bounce.</p>`
    }
  ],
  faq: [
    {
      q: "Does rain reduce goals in football?",
      a: "Not reliably. Light rain can make a good surface faster, while heavy rain can slow the ball and increase scrappy chances. The effect depends on drainage, the amount of water and the styles of the two teams."
    },
    {
      q: "How much should weather change a match forecast?",
      a: "Usually only a little. A sensible adjustment is often less than 0.2 goals for the match total, and it should come with a wider uncertainty range. If the condition is not clearly relevant to either team's style, no adjustment may be better than a guess."
    },
    {
      q: "Do artificial pitches create a home advantage?",
      a: "Possibly, through familiarity with the bounce and the surface, but the evidence is mixed and the effect is not fixed. Team quality, venue and travel usually matter more than the surface alone."
    }
  ],
  related: ["home-advantage-modern-football", "travel-fatigue-football", "pre-match-analysis-guide"]
};
