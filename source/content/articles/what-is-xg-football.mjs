export default {
  slug: "what-is-xg-football",
  title: "What Is xG in Football? Expected Goals Explained",
  metaTitle: "What Is xG in Football? Expected Goals Explained",
  description: "Expected goals measures the quality of chances a team creates. Learn how xG is calculated, what it ignores, and how to read it without overclaiming.",
  category: "xG and Stats",
  tags: ["xG", "chance quality", "shot data", "analytics"],
  published: "2025-12-04",
  updated: "2025-12-04",
  author: "Nyasha",
  dek: "Expected goals gives every shot a value from zero to one, then adds those values into a team total. The total is a useful description of chance quality, not a prophecy.",
  takeaways: [
    "xG estimates the probability that a shot becomes a goal, based on location and other measurable context.",
    "A team total is the sum of individual shot values, so both volume and quality shape it.",
    "xG describes the chances a team produced, not the overall quality of its performance.",
    "Models differ in inputs and calibration, so compare totals from one provider rather than mixing sources.",
    "One match tells you little on its own; longer windows and opponent context make the number more useful."
  ],
  intro: `<p>A shot from twelve yards, struck first time after a low cross, is not the same event as a hopeful effort from 30 yards. Both count as one shot in a basic match report. Expected goals, usually shortened to xG, exists to make that distinction visible.</p>
<p>The idea is simple enough to state in a sentence: assign each shot a probability of becoming a goal, then add the probabilities. The discipline lies in what goes into those probabilities, and in resisting the urge to treat the final number as a complete judgement.</p>`,
  sections: [
    {
      id: "what-it-measures",
      heading: "What expected goals actually measures",
      html: `<p>xG is a model output. For each shot, the model estimates the chance that a similar attempt, from a similar position and situation, ends in a goal. A value of 0.10 means roughly one in ten comparable attempts is scored. It does not mean the shot was worth exactly one tenth of a goal in any moral sense, and it does not mean the shooter made a mistake if the ball goes wide.</p>
<p>Those per-shot values are summed. If a team takes ten shots with values of 0.05, 0.08, 0.12 and so on, the team total is the sum of all ten. A total of 1.4 xG describes the collection of chances, not a scoreline the team deserved. The distinction matters because a side can create 2.0 xG and lose, or create 0.4 xG and win, without either result proving that the model was wrong.</p>
<p>It helps to think of xG as a common currency for shots. A header from six yards and a volley from the edge of the area can now be compared on one scale, even though they look completely different to the eye.</p>`
    },
    {
      id: "inputs",
      heading: "The inputs behind an xG value",
      html: `<p>Most public models begin with distance and angle to goal. A central shot from eight yards sits in a very different position from a wide shot from the same distance. From there, providers add variables such as body part, whether the shot followed a cross or a through ball, whether it was taken first time, and how much defensive pressure was nearby.</p>
<p>Some models include goalkeeper position, the number of defenders between the shooter and the goal, or the speed of the attacking move. The exact recipe is proprietary in many cases, which is why two providers can give the same shot different values. Neither number is fraudulent. They are answers to slightly different questions.</p>
<p>What xG deliberately excludes is also important. A standard model does not know that a striker is carrying an injury, that the pitch is dry, or that the shot came in the 89th minute of a match already decided. Some models include game state, many do not. A single number cannot hold every piece of context, and it should not be asked to.</p>`
    },
    {
      id: "why-it-matters",
      heading: "Why chance quality beats shot counts",
      html: `<p>A raw shot count treats a tame header from 18 yards and a clear chance from six yards as equivalent events. That is fine for some purposes, but it is a poor summary of attacking threat. xG weights the chances, so a team that takes six good shots can be distinguished from a team that takes sixteen poor ones.</p>
<p>This is especially useful across a run of matches. Shot volume tends to be more stable than conversion, and chance quality tends to be more informative than the scoreline. A side creating 1.5 xG per match across ten games is generating a repeatable pattern, even if it has scored only nine goals. The finishing may be poor, the goalkeeping may be good, or both. xG narrows the question without pretending to answer all of it.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The numbers below are illustrative and use a simplified model. Club A and Club B each take ten shots in the same match. Values are rounded to two decimal places.</p>
<table>
<thead><tr><th>Shot</th><th>Club A xG</th><th>Club B xG</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.04</td><td>0.02</td></tr>
<tr><td>2</td><td>0.07</td><td>0.05</td></tr>
<tr><td>3</td><td>0.10</td><td>0.08</td></tr>
<tr><td>4</td><td>0.12</td><td>0.03</td></tr>
<tr><td>5</td><td>0.03</td><td>0.14</td></tr>
<tr><td>6</td><td>0.18</td><td>0.06</td></tr>
<tr><td>7</td><td>0.06</td><td>0.04</td></tr>
<tr><td>8</td><td>0.25</td><td>0.11</td></tr>
<tr><td>9</td><td>0.09</td><td>0.02</td></tr>
<tr><td>10</td><td>0.01</td><td>0.05</td></tr>
<tr><td><strong>Total</strong></td><td><strong>0.95</strong></td><td><strong>0.60</strong></td></tr>
</tbody>
</table>
<p>Club A's total is 0.95 xG, Club B's is 0.60. The match ended 1-1. Club A scored from the 0.25 chance, while Club B scored from the 0.05 attempt. The arithmetic shows why a single result can sit awkwardly beside the chance data: the better chance pool did not produce the better scoreline on this occasion.</p>
<p>If the same match were played again, Club A would not be certain to win. The estimate says that A created the better collection of chances, not that A was unlucky in any metaphysical sense. Random variation is part of the sport, and xG is a description of the inputs rather than a promise about the output.</p>`
    },
    {
      id: "reading-a-match",
      heading: "Reading xG in a match",
      html: `<p>Start with the total, then break it down. A side with 1.8 xG may have created one 0.7 chance and a stream of small ones, or eighteen 0.1 chances. Those are different attacking profiles. Shot maps and xG timelines help, because they show when the chances arrived and whether the game state changed the pattern.</p>
<p>Look at the distribution of values, not just the sum. A team that relies on one huge chance may be more volatile than a team that manufactures a steady supply of medium chances. Timing matters too: xG accumulated after a red card or in the final minutes of a lost match tells a different story from xG created while the game was level.</p>
<p>It is also worth separating set-piece shots from open-play shots. A side can post a healthy total while depending heavily on corners, which is a different signal from consistently opening defences in open play.</p>`
    },
    {
      id: "process-and-outcome",
      heading: "Process and outcome are different questions",
      html: `<p>Results answer what happened. xG helps answer what kind of chances produced the result. A team can win 1-0 from a 0.3 xG performance and lose the next match 0-1 with 2.2 xG. Over a short window, results will swing; over a longer window, chance quality tends to assert itself, though never perfectly.</p>
<p>The honest phrasing is "created better chances" rather than "deserved to win". Desert is a judgement about fairness; xG is a measurement of shot quality. Keeping those ideas apart makes analysis clearer and reduces the temptation to explain every result with a single number.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li>Treating xG as a prediction of the final score. It is a summary of chances, not a forecast.</li>
<li>Comparing totals from different providers as if they were the same currency.</li>
<li>Ignoring shot volume. A high total from very few attempts can be less repeatable than a lower total from many chances.</li>
<li>Using one match as evidence of a season-long trend.</li>
<li>Forgetting that penalties are usually included at a fixed value, which can distort comparisons between teams that take very different numbers of them.</li>
</ul>
<p>Each mistake comes from asking a descriptive tool to settle a question it was not designed to answer. The fix is usually to add context rather than to discard the metric.</p>`
    },
    {
      id: "limits",
      heading: "What xG cannot tell you",
      html: `<p>xG does not measure defensive structure, pressing, or the quality of a team's build-up except insofar as those things produce shots. It does not know about the shooter's finishing ability, though some models adjust for it. It cannot capture the difference between a chance taken in a calm 2-0 lead and the same chance at 0-0 in the 90th minute unless the model explicitly includes game state.</p>
<p>It is also a model, with assumptions and error. Treat differences of a few hundredths as noise. Treat a large gap over a long period as a signal worth investigating. That is a more useful habit than treating the number as exact.</p>`
    },
    {
      id: "using-with-other-evidence",
      heading: "Using xG alongside other evidence",
      html: `<p>Pair xG with shot counts, box entries, and the quality of the opponent. A team creating 1.6 xG against a defence that regularly concedes 1.5 is less impressive than the same total against a defence conceding 0.8. The raw number is the beginning of the conversation, not the end.</p>
<p>For a fuller picture, see our guide to <a href="/articles/what-is-xga.html">xGA</a>, which applies the same logic to chances conceded. If you are interested in how possession value is measured before a shot is taken, <a href="/articles/expected-threats-xt.html">expected threats</a> is the next step. And for the difference between actual goal difference and xG difference, our <a href="/articles/goal-difference-vs-xg-difference.html">comparison</a> sets out the arithmetic.</p>`
    }
  ],
  faq: [
    { q: "Does a higher xG total mean a team deserved to win?", a: "No. It means the team created chances of higher estimated quality. Finishing, goalkeeping, and random variation decide the scoreline, so a team can create more xG and still lose." },
    { q: "Why do different websites show different xG numbers?", a: "Models use different inputs, training samples, and calibration methods. Some include game state or goalkeeper position and others do not. Treat each provider's xG as its own currency." },
    { q: "Is xG useful for a single match?", a: "It is useful as a description of chance quality, provided you look at the shot distribution and the game state. It is weak as a stand-alone verdict on performance or as a forecast." }
  ],
  related: ["what-is-xga", "expected-threats-xt", "goal-difference-vs-xg-difference"]
};
