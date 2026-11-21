export default {
  slug: "post-shot-expected-goals",
  title: "Post-Shot xG: Measuring Goalkeeper Saves",
  metaTitle: "Post-Shot xG: Measuring Goalkeeper Saves",
  description: "Post-shot xG values shots on target, not reputations. Learn how it differs from xG, why save percentage misleads, and how to judge small samples.",
  category: "xG and Stats",
  tags: ["post-shot xG", "goalkeepers", "shot stopping", "analytics"],
  published: "2026-11-28",
  updated: "2026-11-28",
  author: "Nyasha",
  dek: "Post-shot xG asks how hard a shot was to save, not how good a goalkeeper is. Keeping those questions apart is the whole discipline.",
  takeaways: [
    "xG values a shot before it is struck; post-shot xG values it after the ball is on target.",
    "Post-shot xG uses placement and goalkeeper position, so it describes the difficulty of the save rather than the shooter's reputation.",
    "Goals prevented compares post-shot xG faced with goals conceded, and it is noisy over short runs.",
    "Save percentage misleads because it ignores the quality of the shots a keeper faced.",
    "A goalkeeper's distribution and command of the area still fall outside the shot-stopping numbers."
  ],
  intro: `<p>Two shots can leave the same boot and produce different problems for a goalkeeper. One is struck straight at the middle of the goal. The other curls into the top corner. A basic xG model may value them similarly because they came from the same place. A goalkeeper knows the difference immediately.</p>
<p>Post-shot expected goals exists to capture that difference. It estimates the chance of a goal after the shot has been struck, using where the ball is heading and where the goalkeeper is. The result is a better description of the save a keeper had to make, and a fairer starting point for judging shot stopping.</p>
<p>This guide explains how post-shot xG works, why save percentage can point in the wrong direction, and why even the best goalkeeper metric needs patience.</p>`,
  sections: [
    {
      id: "xg-versus-post-shot-xg",
      heading: "xG versus post-shot xG",
      html: `<p><a href="/articles/what-is-xg-football.html">Expected goals</a>, or xG, is calculated before the shot is taken. The model looks at the location, the angle to goal, the body part used, the type of assist, and sometimes the pressure on the shooter. It answers a pre-shot question: how often does a shot like this become a goal?</p>
<p>Post-shot xG, sometimes called xG on target or xGOT, is calculated after the ball has been struck. It adds information about the trajectory. A shot that is heading into the corner is worth more than a shot that is heading straight at the keeper, even if both were taken from the same spot. The model is no longer judging the decision to shoot. It is judging the difficulty of the attempt on target.</p>
<p>The distinction is easy to remember with a pair of questions. xG asks how good the chance was. Post-shot xG asks how good the shot was. A striker who takes a difficult chance and places it perfectly can have a low xG and a high post-shot value. A striker who shoots from a great position but scuffs the ball at the keeper can have the opposite.</p>
<p>Most providers apply post-shot xG to shots on target, because the model needs to know where the ball was going. Check the definition before comparing totals.</p>`
    },
    {
      id: "how-post-shot-xg-is-built",
      heading: "How post-shot xG is built",
      html: `<p>The inputs are spatial and situational. The model uses the point where the ball crosses the goal line, the height of that point, the distance from the goalkeeper, and the keeper's position at the moment of the shot. Some models include the speed of the ball, the number of defenders nearby, and whether the shot followed a deflection.</p>
<p>The output is a probability between zero and one. A value of 0.80 means the shot, given its placement and the keeper's position, would be expected to beat an average goalkeeper eight times in ten. A value of 0.05 describes a tame effort that is very likely to be saved. The values are estimates, not measurements of the keeper's ability.</p>
<p>This is where post-shot xG is often misread. A high post-shot value does not mean the goalkeeper was at fault. It means the shot was difficult to stop. A low post-shot value does not mean the keeper made a good save. It means the shot was easy to stop, and the keeper did what was expected.</p>
<p>Because placement is central, post-shot xG is sensitive to the provider's tracking accuracy. A shot near the post may be recorded differently by two systems. Deflections are especially tricky: the ball may change direction late, which affects both the recorded trajectory and the goalkeeper's ability to react.</p>`
    },
    {
      id: "measuring-shot-stopping",
      heading: "Measuring shot stopping",
      html: `<p>The standard summary is goals prevented. Take the post-shot xG a goalkeeper faced, subtract the goals he conceded, and the difference is the number of goals he saved or gave away relative to the model's expectation. A positive figure means he conceded fewer goals than expected from those shots. A negative figure means the opposite.</p>
<p>The arithmetic is simple, but the interpretation needs care. If a keeper faces 12.4 post-shot xG over a run of matches and concedes 10, he has prevented 2.4 goals. That is a useful description of the run. It is not a promise about the next run, because the shots will be different and the sample is small.</p>
<p>Penalties deserve a separate note. A penalty has a relatively fixed value in most models, close to 0.76, and it says little about general shot stopping. Some analyses exclude penalties from goals prevented, while others include them. A good comparison states which choices were made.</p>`
    },
    {
      id: "why-save-percentage-misleads",
      heading: "Why save percentage misleads",
      html: `<p>Save percentage is the share of shots on target that a goalkeeper stops. It is easy to calculate and easy to quote, which is exactly why it causes trouble. The number treats every shot on target as an equal test. A keeper who faces six shots from 25 yards and a keeper who faces six shots from six yards can post very different save percentages without any difference in skill.</p>
<p>The defence in front of the keeper shapes the shot profile. A compact team that forces long shots will make its keeper look efficient. An open team that concedes cutbacks and close-range finishes will make its keeper look exposed. Neither number tells you which keeper is better at stopping the shots he actually faces.</p>
<p>Score effects add another layer. A team chasing a game may take more shots, including many low-quality ones. A team protecting a lead may concede fewer but better chances. Goalkeepers accumulate saves in different game states, and the raw percentage does not adjust for any of it.</p>
<p>Definitions vary too. Blocked shots are not usually counted as shots on target, a shot that hits the frame is not a save, and a parry that falls to an attacker may become a goal without being recorded as a save. These conventions can shift the percentage by a few points, which is enough to change a ranking in a small sample. Post-shot xG is not perfect, but it at least tries to price the difficulty of each shot.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>Two goalkeepers face the same number of shots on target over a run of matches. The table is invented for teaching, not a record of real players.</p>
<table>
<caption>Illustrative goalkeeper comparison, invented for teaching</caption>
<thead><tr><th>Measure</th><th>Keeper A</th><th>Keeper B</th></tr></thead>
<tbody>
<tr><td>Shots on target faced</td><td>24</td><td>24</td></tr>
<tr><td>Saves</td><td>20</td><td>21</td></tr>
<tr><td>Save percentage</td><td>83.3%</td><td>87.5%</td></tr>
<tr><td>Post-shot xG faced</td><td>6.4</td><td>5.1</td></tr>
<tr><td>Goals conceded</td><td>4</td><td>3</td></tr>
<tr><td>Goals prevented</td><td>+2.4</td><td>+2.1</td></tr>
</tbody>
</table>
<p>Keeper B has the better save percentage. Keeper A has the better goals prevented figure. The reason is the difficulty of the shots. Keeper A faced 6.4 post-shot xG, an average of about 0.27 per shot on target. Keeper B faced 5.1, an average of about 0.21. Keeper A was asked to make harder saves, and he stopped enough of them to edge the comparison.</p>
<p>The gap is small: 0.3 goals over 24 shots. That is well within the range of normal variation. The honest conclusion is that both keepers performed similarly, with Keeper A facing the tougher workload. Saying that Keeper A is clearly better would be overreading the table. Saying that Keeper B is better because of the save percentage would be worse.</p>`
    },
    {
      id: "small-samples-and-limits",
      heading: "Small samples and the limits",
      html: `<p>Goalkeeper metrics are built on a small number of events. A keeper might face three or four shots on target in a match, and perhaps 100 to 150 over a full season. The sample is thin, and the outcomes are binary.</p>
<p>This makes hot and cold runs inevitable. A keeper can save 12 of 13 shots over a month and look transformed, then concede from three deflections the next month and look fragile. Neither run proves a permanent change in ability.</p>
<p>The practical response is to use longer windows and to compare a keeper with his own history. Three seasons of goals prevented give a better picture than ten matches, though even that is not conclusive. A keeper who joins a more open side may face a different shot mix and post a different figure without changing his technique.</p>
<p>Video remains essential. Does the keeper start in the right position? Does he recover well after a parry? Does he command his area on crosses? Post-shot xG cannot answer those questions. It can tell you which shots were difficult, and that is a useful place to begin watching. Our article on <a href="/articles/shot-maps-football.html">shot maps</a> shows how to view the attempts behind the totals, and the guide to <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a> covers the wider evaluation.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating post-shot xG as a goalkeeper rating.</strong> It describes the shots, not the keeper. Goals prevented is the comparison, and even that is noisy.</li>
<li><strong>Using save percentage alone.</strong> The number ignores shot difficulty and the defence in front of the keeper.</li>
<li><strong>Comparing totals from different providers.</strong> Placement tracking, penalty treatment, and inclusion rules differ. Use one source consistently.</li>
<li><strong>Overreading a hot streak.</strong> A short run of positive goals prevented is a description, not a forecast.</li>
<li><strong>Forgetting penalties and deflections.</strong> They distort shot-stopping numbers and should be separated or at least acknowledged.</li>
<li><strong>Ignoring distribution and command.</strong> A keeper contributes to the team in ways that never appear in a shot-stopping metric.</li>
</ul>
<p>The common thread is the difference between a shot and a save. Post-shot xG measures the first. The second is a skill, a decision, and sometimes a piece of luck. Keeping the two apart makes goalkeeper analysis calmer and more useful.</p>`
    }
  ],
  faq: [
    {
      q: "What is post-shot xG?",
      a: "Post-shot xG estimates the probability that a shot on target becomes a goal after the ball has been struck. It uses the placement of the shot and the goalkeeper's position, so it reflects how difficult the attempt was to save."
    },
    {
      q: "How is post-shot xG different from xG?",
      a: "xG values a shot before it is taken, based on location, angle, body part, and similar factors. Post-shot xG values it after the strike, adding information about where the ball is heading. It is sometimes called xG on target."
    },
    {
      q: "Can goals prevented predict a goalkeeper's future performance?",
      a: "Only weakly over short periods. Goals prevented describes how a keeper performed relative to the model over a set of shots. It is useful evidence, but sample size, model differences, and the defence in front of him all limit its predictive power."
    }
  ],
  related: ["goalkeeper-performance-prediction", "what-is-xg-football", "shot-maps-football"]
};
