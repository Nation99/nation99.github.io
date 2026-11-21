export default {
  slug: "goalkeeper-distribution-analysis",
  title: "Goalkeeper Distribution and Build-Up",
  metaTitle: "Goalkeeper Distribution and Build-Up",
  description: "Short and long goalkeeper distribution, passing under pressure, and why completion rate alone cannot measure how well a keeper starts attacks.",
  category: "Tactics",
  tags: ["goalkeepers", "distribution", "build-up play", "pressing"],
  published: "2026-12-03",
  updated: "2026-12-03",
  author: "Nyasha",
  dek: "A goalkeeper's first pass can decide where the next thirty seconds are played. Distribution is a tactical choice before it is a technical statistic.",
  takeaways: [
    "Short distribution asks the keeper to become an extra outfield player and depends on angles, timing, and composure.",
    "Long distribution is a contested transfer of possession, not a failure of style.",
    "Passing under pressure is the hardest part to measure and often the clearest difference between keepers.",
    "Completion rate mixes pass difficulty, team instruction, and opponent behaviour.",
    "Distribution quality should be judged by what the pass achieves, not only by whether it finds a teammate."
  ],
  intro: `<p>Goalkeeper distribution used to be a minor part of the scouting report. The keeper saved shots, commanded the box, and cleared the ball when required. The modern game asks for more. A goalkeeper may be the first passer in a build-up sequence, the spare player against a press, and the launch point for a direct attack.</p>
<p>That change has made distribution a tactical subject as much as a technical one. A short pass that invites pressure can be a good decision if it creates a free player elsewhere. A long ball that gives away possession can be right if it relieves a press. This guide covers short and long distribution, passing under pressure, the metrics that describe it, and why completion rate alone misleads.</p>`,
  sections: [
    {
      id: "short-distribution",
      heading: "Short distribution and the first line",
      html: `<p>Short distribution starts with a goal kick, a free kick, or a back pass. The aim is to move the ball to a teammate with enough control to begin an attack. That depends on a structure ahead of the keeper. The centre-backs split, the full-backs move high or narrow, and a midfielder drops to create a passing angle.</p>
<p>The shape creates the option. Against a two-man press, a back three with a deep midfielder can create a spare player. Against a front three, the keeper may aim for a full-back higher up or clip a pass over the first line.</p>
<p>Short distribution carries risk near goal. A misplaced pass in the defensive third can become a shot within seconds. The risk is acceptable if the team gains control and progresses the ball, and unacceptable if the pass is played without a plan.</p>`
    },
    {
      id: "long-distribution",
      heading: "Long distribution and the contest",
      html: `<p>Long distribution is often described as a last resort. It can be a deliberate strategy. A goal kick launched towards the touchline can target a striker who is strong in the air, with the team set up to win the second ball. A long free kick can relieve pressure and move the game into the opponent's half.</p>
<p>Placement matters as much as distance. A ball into the opposition full-back's zone can isolate a defender and create a duel. A ball into the centre may be headed clear by a dominant centre-back. A ball into the channel can turn the defence and force it to retreat. The keeper is choosing where the next contest happens.</p>
<p>The structure after the launch is part of the distribution. If the forwards do not compete, or the midfield does not anticipate the second ball, the long pass becomes a turnover with the team out of shape.</p>`
    },
    {
      id: "passing-under-pressure",
      heading: "The keeper as an extra outfield player",
      html: `<p>A goalkeeper who can pass under pressure gives his team an extra outfield player. The opponent cannot press with all eleven players if the keeper can safely receive and distribute. The spare player at the back becomes a genuine option, and the press has to cover more space.</p>
<p>Passing under pressure is a different skill from passing in space. The keeper has less time, a worse view of the pitch, and less margin for error. The best keepers scan before the ball arrives, open their body, and choose the pass that relieves pressure rather than the one that looks most ambitious. Sometimes that means a short pass into midfield. Sometimes it means a long pass to a forward who can hold the ball.</p>
<p>Starting position is part of the skill. A keeper on the edge of his box can play a short pass and become an option again. A keeper on his line is easier to press because the pass must travel further. The trade-off is the space behind him. This is why "good with his feet" is too vague. The useful question is which passes he can play when the opponent is closing him down. Our guide to <a href="/articles/pressing-intensity-ppda.html">pressing intensity</a> explains the other side of that contest.</p>`
    },
    {
      id: "measuring-distribution",
      heading: "Measuring distribution quality",
      html: `<p>Distribution metrics should describe volume, difficulty, and outcome. Volume asks how often the keeper is involved, difficulty asks how hard the passes were, and outcome asks what they achieved.</p>
<p>Useful volume metrics include passes attempted per 90, the share of short and long passes, and touches per 90. Difficulty metrics include the share of passes under pressure, average pass length, and the distance of the nearest opponent. Outcome metrics include completion rate, progressive passes, passes into the final third, and the team's expected goals from sequences that start with the keeper.</p>
<p>Errors deserve a separate column. An error leading to a shot is not the same as an incomplete pass. A keeper can miss a long pass by thirty metres and face no danger, or complete a short pass into a teammate who is immediately tackled.</p>`
    },
    {
      id: "why-completion-misleads",
      heading: "Why completion rate alone misleads",
      html: `<p>Completion rate depends on the passes a keeper attempts. A keeper in a short build-up team will attempt many low-risk passes and may complete 90 per cent. A keeper in a direct team may attempt more long passes and complete 65 per cent. The second keeper is not necessarily worse. He is being asked to do a different job.</p>
<p>The opponent matters too. A keeper facing an aggressive press has less time and fewer easy options than one facing a team that drops into a block. The same keeper can post very different rates against those opponents.</p>
<p>The alternative is not to abandon completion rate. Place it beside the pass mix. One keeper might show 88 per cent completion, a 70 per cent short pass share, and a below-average progressive pass rate. Another might show 74 per cent completion, a 40 per cent short pass share, and a much higher progressive rate. The profiles describe different styles, and both can work in the right team.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It compares three invented goalkeepers over twelve matches in the same league. The numbers are invented for teaching, and the profiles show why a single completion figure cannot settle the question.</p>
<div class="table-wrap">
<table>
<caption>Illustrative goalkeeper distribution profiles, invented for teaching</caption>
<thead><tr><th>Metric per 90</th><th>Keeper A</th><th>Keeper B</th><th>Keeper C</th></tr></thead>
<tbody>
<tr><td>Passes attempted</td><td>38</td><td>31</td><td>44</td></tr>
<tr><td>Completion rate</td><td>91%</td><td>78%</td><td>68%</td></tr>
<tr><td>Average pass length</td><td>18 metres</td><td>27 metres</td><td>41 metres</td></tr>
<tr><td>Short pass share</td><td>72%</td><td>46%</td><td>18%</td></tr>
<tr><td>Completion under pressure</td><td>84%</td><td>76%</td><td>61%</td></tr>
<tr><td>Progressive passes</td><td>2.4</td><td>4.1</td><td>1.8</td></tr>
<tr><td>Errors leading to shots</td><td>1</td><td>2</td><td>1</td></tr>
<tr><td>Team xG from build-up</td><td>0.42</td><td>0.58</td><td>0.31</td></tr>
</tbody>
</table>
</div>
<p>Keeper A is a short passer. He completes a high share of his passes and is comfortable under pressure, but he progresses the ball less often than Keeper B. Keeper B takes more risk. His completion rate is lower, but he plays more progressive passes and his team generates more expected goals from build-up. Keeper C is a long-ball specialist. His completion rate is the lowest, but his pass length and low short-pass share show that he is asked to move the game up the pitch quickly.</p>
<p>Which keeper is best depends on the team. A side with technical centre-backs and a deep midfielder who can receive under pressure may benefit from Keeper A or B. A side with a strong target forward and a midfield set up for second balls may prefer Keeper C. The table describes styles, not a ranking.</p>
<p>The error column adds context. Keeper B has two errors leading to shots, which is a warning sign, but twelve matches is a small sample and errors are rare events. Watch the errors, and check whether the structure left him with a safe option.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a keeper by completion rate.</strong> The number ignores pass difficulty, instruction, and the opponent's press.</li>
<li><strong>Treating long balls as automatically bad.</strong> A well-placed long pass can relieve pressure and create a contest higher up.</li>
<li><strong>Ignoring the pass mix.</strong> Two keepers with the same completion rate can be asked to play different passes.</li>
<li><strong>Comparing across team styles.</strong> A short build-up keeper and a direct keeper are not running the same experiment.</li>
<li><strong>Overreacting to one error.</strong> Look for a repeated pattern in the decision, not just the outcome.</li>
<li><strong>Forgetting the receiver.</strong> A completed pass to a player under immediate pressure may be worse than an incomplete pass that avoids danger.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits of distribution analysis",
      html: `<p>Distribution data describes what happened after the keeper received the ball. It does not capture the instruction, the confidence of the defence, or the quality of the movement ahead of him.</p>
<p>The sample is also small. A keeper may attempt thirty to forty passes per match, but the difficult passes under pressure are much rarer. A dozen pressured passes over twelve matches is not enough to establish a stable skill. The numbers should be read alongside a longer history and a clear description of the role.</p>
<p>Finally, distribution is only one part of goalkeeping. Shot stopping, command of the area, communication, and decision making still matter. The article on <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance and prediction</a> explains how to weigh the shot-stopping side, and the guide to <a href="/articles/build-up-play-analysis.html">build-up play analysis</a> shows how the keeper fits into the larger structure.</p>
<p>Used with those limits in mind, distribution analysis shows how a team wants to start attacks and which keepers can carry that plan under pressure.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between short and long goalkeeper distribution?",
      a: "Short distribution tries to find a teammate close to the keeper and keep possession. Long distribution sends the ball further up the pitch to contest territory or a specific matchup. Both can be deliberate tactics, and the right mix depends on the team, the opponent, and the game state."
    },
    {
      q: "Is a high pass completion rate good for a goalkeeper?",
      a: "It can be, but it depends on the passes attempted. A keeper who only plays safe short passes will complete more than one asked to break a press with longer passes. Completion rate should be read alongside pass length, pressure, and what the pass achieved."
    },
    {
      q: "How can I judge a goalkeeper's distribution without advanced data?",
      a: "Watch full matches and note the pass mix, the pressure on the keeper, and whether the receiver had a clear next action. Count the errors that led to shots, and compare the keeper's choices with the team's shape. Basic event data can support that review, but video is essential."
    }
  ],
  related: ["build-up-play-analysis", "goalkeeper-performance-prediction", "pressing-intensity-ppda"]
};
