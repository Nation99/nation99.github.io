export default {
  slug: "goalkeeper-performance-prediction",
  title: "Goalkeeper Performance and Prediction",
  metaTitle: "Goalkeeper Performance and Prediction",
  description: "Post-shot xG, shot-stopping variance and distribution. How to assess goalkeepers without confusing a hot streak with a repeatable skill.",
  category: "Tactics",
  tags: ["goalkeepers", "post-shot xG", "shot stopping", "distribution"],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "Nyasha",
  dek: "A goalkeeper's season is a mix of repeatable skill, defensive support and a small number of decisive moments. Good analysis keeps those threads apart.",
  takeaways: [
    "Post-shot xG measures the quality of a shot on target, not the quality of the goalkeeper.",
    "Goals prevented is a useful description but a noisy one over a short run of matches.",
    "Distribution and starting position affect the defence in ways save numbers cannot show.",
    "Separating a keeper from his defence requires looking at the shots he faced, not only the goals he conceded."
  ],
  intro: `<p>Goalkeeping is the position where a single mistake can dominate the memory of a season. A late fumble is replayed for weeks; a routine save in the first half is forgotten. That asymmetry makes goalkeeper analysis unusually vulnerable to narrative, and unusually dependent on a clear method.</p>
<p>The method starts with a simple distinction. A goalkeeper can be judged on the shots he faced, the goals he conceded and the way he helped his team play. Those are related, but they are not the same question. Mixing them together produces confident conclusions from very little evidence.</p>`,
  sections: [
    {
      id: "why-goalkeeper-numbers-are-noisy",
      heading: "Why goalkeeper numbers are noisy",
      html: `<p>A goalkeeper might face three or four shots on target in a match. Over ten matches, that is perhaps thirty to forty events. Compare that with the hundreds of passes a midfielder plays. The sample is small, and the outcomes are binary: a shot is saved or it is not.</p>
<p>Small samples produce dramatic swings. A keeper can save twenty shots in a row and look unbeatable, then concede from three deflections in a month and look fragile. Neither run proves a permanent change in ability. Goalkeeper scouting therefore relies on technique, positioning and decision making as well as results.</p>
<p>The quality of the shots matters too. A keeper facing long-range efforts from a compact defence has an easier job than one facing close-range finishes after a defensive breakdown. Raw save percentage hides that difference. We need a measure that accounts for the difficulty of the shot.</p>`
    },
    {
      id: "post-shot-xg-and-what-it-adds",
      heading: "Post-shot xG and what it adds",
      html: `<p>Expected goals assigns a probability to a shot before it is struck, based on factors such as distance, angle, body part and the pressure on the shooter. Post-shot expected goals goes a step further. It estimates the probability that a shot on target becomes a goal after accounting for where the ball is heading and how close it is to the goalkeeper.</p>
<p>The difference is useful. A shot from twelve yards might have a modest pre-shot xG because it was taken from a crowded position, but if it is placed in the top corner, its post-shot value is high. A weak effort straight at the keeper has a low post-shot value even if it was taken from a good position.</p>
<p>Post-shot xG is still not a measure of the goalkeeper. It describes the shot. To evaluate the keeper, compare the post-shot xG he faced with the goals he conceded. That comparison is the basis of goals prevented. Our guide to <a href="/articles/what-is-xga.html">xGA</a> explains the defensive side of the same idea.</p>`
    },
    {
      id: "shot-stopping-arithmetic",
      heading: "Shot-stopping arithmetic",
      html: `<p>Goals prevented is a simple subtraction: post-shot xG faced minus goals conceded. If a goalkeeper faces 14.2 post-shot xG over a run of matches and concedes 12, he has prevented 2.2 goals relative to the model's expectation. If he concedes 16, he has conceded 1.8 more than expected.</p>
<p>The sign is easy to read. A positive figure suggests the keeper saved more than an average keeper would have saved from the same shots. A negative figure suggests the opposite. The difficulty is in the interpretation, because the model's expectation is an estimate, not a certainty, and the sample is small.</p>
<p>It helps to express the figure per match and to show the range. A keeper with plus 2.2 over ten matches is preventing about 0.22 goals per match. That sounds impressive, but a handful of excellent saves can produce the same total. The number is a description of the run, not a prediction of the next ten matches.</p>`
    },
    {
      id: "distribution-and-defensive-shape",
      heading: "Distribution and defensive shape",
      html: `<p>Goalkeepers influence matches without making a save. A keeper who is comfortable stepping outside his box can allow the defence to push higher, which compresses the opponent's space. A keeper who prefers to stay deep may require the defence to drop, which creates a gap between the lines.</p>
<p>Distribution is part of the same story. Short passes into midfield can help a team build, but they also invite pressure. Long launches can relieve that pressure, but they often surrender possession. The right choice depends on the opponent and the game state, not on a fixed preference for "playing out".</p>
<p>A goalkeeper's pass completion rate therefore needs context. A keeper who attempts difficult passes under pressure may complete fewer than one who rolls the ball to an unmarked centre-back. The number is not comparable without knowing the difficulty of the passes and the instructions behind them.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The figures below are illustrative and describe a hypothetical goalkeeper at Club A over five matches.</p>
<table>
<thead><tr><th>Match</th><th>Post-shot xG faced</th><th>Goals conceded</th><th>Goals prevented</th></tr></thead>
<tbody>
<tr><td>One</td><td>1.2</td><td>1</td><td>0.2</td></tr>
<tr><td>Two</td><td>0.8</td><td>0</td><td>0.8</td></tr>
<tr><td>Three</td><td>1.6</td><td>2</td><td>-0.4</td></tr>
<tr><td>Four</td><td>0.9</td><td>1</td><td>-0.1</td></tr>
<tr><td>Five</td><td>1.4</td><td>1</td><td>0.4</td></tr>
<tr><td><strong>Total</strong></td><td><strong>5.9</strong></td><td><strong>5</strong></td><td><strong>0.9</strong></td></tr>
</tbody>
</table>
<p>Match by match, the subtraction runs 1.2 minus 1 equals plus 0.2, 0.8 minus 0 equals plus 0.8, 1.6 minus 2 equals minus 0.4, 0.9 minus 1 equals minus 0.1, and 1.4 minus 1 equals plus 0.4. Adding the five match figures gives plus 0.9. Equivalently, 5.9 minus 5 equals plus 0.9.</p>
<p>The summary looks positive, but the match detail is more useful. Two strong performances and one poor one produce a modest overall figure. If the same keeper repeated this pattern over thirty matches, the total might be plus 5.4, but that extrapolation assumes the shots and the opponent mix stay similar. They will not.</p>
<p>Now consider the defence. Suppose Club A allowed ten shots from outside the box and only three from inside it across the five matches. The keeper's job was easier than the raw goal count suggests, because long shots are usually lower quality. A different keeper behind a leakier defence might face more close-range chances and post a worse goals prevented figure despite similar ability.</p>`
    },
    {
      id: "separating-keeper-from-defence",
      heading: "Separating the keeper from the defence",
      html: `<p>The cleanest way to separate keeper and defence is to look at the shot profile. How many shots did the team allow? From where? Under what pressure? A defence that concedes many shots from distance is giving the keeper a chance to accumulate saves without necessarily exposing him to high-quality chances.</p>
<p>Then look at the goals. Were they close-range finishes, penalties, deflections or errors? Each has a different relationship to goalkeeper skill. A penalty is a heavily weighted contest that says little about general shot stopping; a deflection is often uncontrollable; a near-post save is a technical skill that can be coached.</p>
<p>Finally, watch the keeper's starting position. A keeper who is consistently well placed makes saves look routine. A keeper who is often recovering makes routine saves look spectacular. The save count alone cannot distinguish the two. The <a href="/articles/defensive-metrics-football.html">defensive metrics guide</a> covers the team side of this balance, while the article on <a href="/articles/squad-depth-football-prediction.html">squad depth</a> explains why rotation can change the picture across a season.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a keeper by save percentage.</strong> The number ignores shot difficulty and the defence in front of him. Post-shot xG is a better starting point.</li>
<li><strong>Overreacting to one error.</strong> A single mistake is memorable but not a trend. Look for repeated patterns in positioning or decision making.</li>
<li><strong>Ignoring distribution.</strong> A keeper's passing and starting position shape the team's ability to press and build. Those effects do not appear in save numbers.</li>
<li><strong>Extrapolating a hot streak.</strong> A short run of goals prevented is a description, not a forecast. Regression is common.</li>
</ul>`
    },
    {
      id: "limits-of-goalkeeper-evaluation",
      heading: "Limits of goalkeeper evaluation",
      html: `<p>Goalkeeper analysis cannot fully capture communication, command of the area or the confidence a keeper gives his defenders. These qualities matter, but they are difficult to measure and easy to confuse with results. A quiet keeper behind a well-organised defence may be undervalued; a spectacular keeper behind a chaotic one may be overvalued.</p>
<p>Use the numbers to structure your observation, then watch the keeper closely. The best evaluation combines the shot profile, the goals prevented and a clear-eyed view of the decisions that do not appear in the basic numbers.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between xG and post-shot xG?",
      a: "xG estimates the chance of a shot becoming a goal before it is taken. Post-shot xG estimates the chance after the shot is on target, using the placement and the goalkeeper's position. Post-shot xG is more relevant to shot stopping."
    },
    {
      q: "How many matches are needed to judge a goalkeeper?",
      a: "A full season gives a steadier picture, but even then the sample is limited. Use a rolling window and compare the keeper with his own history rather than relying on a single total."
    },
    {
      q: "Does a positive goals prevented figure prove a keeper is elite?",
      a: "No. It shows that he saved more than the model expected over that run. The model, the sample and the defence all influence the figure. It is evidence to weigh, not a verdict."
    }
  ],
  related: ["what-is-xga", "defensive-metrics-football", "squad-depth-football-prediction"]
};
