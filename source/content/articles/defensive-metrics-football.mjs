export default {
  slug: "defensive-metrics-football",
  title: "Defensive Metrics That Actually Matter",
  metaTitle: "Defensive Metrics That Actually Matter",
  description: "Goals conceded is a noisy summary. Learn how xGA, post-shot xG, set-piece data, and pressing metrics describe different parts of defending.",
  category: "xG and Stats",
  tags: ["defence", "xGA", "post-shot xG", "set pieces", "pressing"],
  published: "2026-07-23",
  updated: "2026-07-23",
  author: "Nyasha",
  dek: "A defence is not one number. Chance quality, shot placement, set pieces, and pressing each describe a different part of the job, and useful analysis keeps them apart.",
  takeaways: [
    "Goals conceded mixes chance prevention, finishing, and goalkeeping, so it is a poor stand-alone measure of defence.",
    "xGA describes the quality of chances allowed and is the natural starting point.",
    "Post-shot xG adds placement and helps separate defending from shot-stopping.",
    "Set-piece defence deserves its own view because the mechanisms and sample sizes differ from open play.",
    "Pressing and territory data explain how chances are suppressed, but they need context and should not be read as direct outcomes."
  ],
  intro: `<p>Ask a supporter how a team defended and the answer usually starts with goals conceded. It is the most visible number and the least patient one. A deflection, a penalty, or a brilliant save can move it without saying much about the structure in front of the goalkeeper.</p>
<p>Defensive analysis gets better when the single number is replaced by a small set of questions. How good were the chances allowed? Where did the shots go? How much of the threat came from set pieces? Did the team suppress chances through pressing, or did it simply face fewer attacks? Each question has a metric, and each metric has a limit.</p>`,
  sections: [
    {
      id: "goals-conceded",
      heading: "Why goals conceded is a poor first question",
      html: `<p>Goals conceded is the product of several things: the number of chances allowed, the quality of those chances, the quality of the shots taken, and the goalkeeper's performance. It is also subject to deflections, own goals, and penalties. A team can defend well and concede twice; another can defend poorly and concede once.</p>
<p>The number is not useless. Over a long season it is the outcome that matters, and it should be respected. The problem is using it as a first-order explanation. If a defence is judged only by goals conceded, the analysis cannot distinguish a structural weakness from a cold spell of finishing or a hot goalkeeper.</p>
<p>The first split should be between chance prevention and shot-stopping. xGA handles the first. Post-shot xG helps with the second.</p>`
    },
    {
      id: "chance-quality",
      heading: "Chance quality: xGA",
      html: `<p>Expected goals against sums the estimated quality of every shot a team faces. A lower total means the opponent's shots were, on average, less likely to score. It is the clearest team-level measure of chance prevention available from event data.</p>
<p>Read it per match and alongside the number of shots faced. A side allowing 1.2 xGA from 16 shots is conceding many low-quality attempts. A side allowing 1.2 xGA from seven shots is conceding fewer but better chances. The first profile may reflect a defence that forces opponents wide; the second may reflect a defence that protects the box but gives up clear looks when it breaks.</p>
<p>It also helps to separate open play from set pieces. The mechanisms are different, and blending them can hide a specific weakness.</p>`
    },
    {
      id: "post-shot",
      heading: "Shot placement: post-shot xG",
      html: `<p>Post-shot xG estimates the chance of a goal after the shot has been struck, using the placement of the ball and, in some models, the goalkeeper's position. It is usually calculated for shots on target. The difference between post-shot xG faced and goals conceded is a rough signal of shot-stopping.</p>
<p>A goalkeeper who concedes fewer goals than the post-shot model expects has likely saved more than an average keeper would, or benefited from shots hitting the frame. A keeper who concedes more may have underperformed, or faced unusually well-placed shots that the model still rates highly. The signal is noisy over 10 or 12 matches and becomes more meaningful over a full season.</p>
<p>Post-shot xG is not a replacement for xGA. It describes what happened once a shot was taken, not whether the chance should have been allowed.</p>`
    },
    {
      id: "set-pieces",
      heading: "Set-piece defence",
      html: `<p>Set pieces deserve a separate column because they are a distinct defensive problem. Delivery quality, aerial contests, marking schemes, and second balls all matter, and the sample of set-piece shots is smaller than the sample of open-play shots. A team can look solid in open play and vulnerable from corners without the overall xGA revealing it.</p>
<p>Useful questions include: how many set-piece shots does the team allow, what is their average quality, and how many second-phase chances follow? A corner that is cleared but returned with a cross is part of the same defensive sequence, even if the first header was harmless.</p>
<p>Set-piece xGA is noisy. A single well-delivered corner can produce two good chances, and a single match can dominate a monthly total. Treat the numbers as a prompt to watch the routine, not as a complete diagnosis.</p>`
    },
    {
      id: "pressing-territory",
      heading: "Pressing and territory",
      html: `<p>Chance prevention starts before the shot. Pressing data, such as passes allowed per defensive action, can describe how aggressively a team contests the ball. Territory data, such as the share of play in each third, can describe how far opponents are allowed to progress. High turnovers and counter-pressing recoveries add another layer.</p>
<p>These metrics explain mechanisms, but they are not outcomes. A team can press aggressively and still allow good chances if the press is bypassed. Another can sit deep, allow territory, and concede very little because it protects the box well. Neither style is automatically better; the question is whether the approach reduces the quality of chances faced.</p>
<p>Pressing numbers are also shaped by game state. A team chasing a match presses more; a team protecting a lead may press less. Without that context, a raw pressing figure can be misleading.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table compares two hypothetical teams over 12 matches. All values are illustrative and rounded.</p>
<table>
<thead><tr><th>Metric</th><th>Club A</th><th>Club B</th></tr></thead>
<tbody>
<tr><td>Matches</td><td>12</td><td>12</td></tr>
<tr><td>Shots faced</td><td>132</td><td>108</td></tr>
<tr><td>xGA</td><td>15.6</td><td>14.4</td></tr>
<tr><td>xGA per match</td><td>1.30</td><td>1.20</td></tr>
<tr><td>xGA per shot</td><td>0.118</td><td>0.133</td></tr>
<tr><td>Post-shot xG faced</td><td>16.8</td><td>12.0</td></tr>
<tr><td>Post-shot xG faced per match</td><td>1.40</td><td>1.00</td></tr>
<tr><td>Goals conceded</td><td>19</td><td>11</td></tr>
<tr><td>Goals conceded per match</td><td>1.58</td><td>0.92</td></tr>
<tr><td>Set-piece xGA</td><td>4.8</td><td>3.6</td></tr>
<tr><td>Set-piece share of xGA</td><td>30.8%</td><td>25.0%</td></tr>
</tbody>
</table>
<p>Club B looks better on almost every outcome, and its chance prevention is slightly stronger: 1.20 xGA per match against 1.30. But the more revealing difference is shot placement. Club B's post-shot xG faced is 1.00 per match, well below its xGA of 1.20, while Club A's post-shot figure is 1.40, above its xGA of 1.30. That pattern suggests Club B's goalkeeper has been the stronger shot-stopper over this sample, or that opponents have directed shots more kindly towards him.</p>
<p>Club A faces more shots but of slightly lower average quality: 15.6 xGA from 132 shots is 0.118 per shot, compared with 0.133 for Club B. The overall xGA totals are close, but the profiles differ. Club A's defence concedes volume; Club B's concedes fewer, better shots and has paired that with stronger shot-stopping.</p>
<p>Set pieces account for 4.8 of Club A's 15.6 xGA, or 30.8 per cent, and 3.6 of Club B's 14.4, or 25.0 per cent. That is a meaningful share for both, and a reason to look at the routines rather than treating the overall xGA as a complete verdict.</p>`
    },
    {
      id: "putting-together",
      heading: "Putting the metrics together",
      html: `<p>A useful defensive profile has four layers. First, chance quantity: how many shots does the team allow? Second, chance quality: what is the xGA per shot and per match? Third, shot placement and goalkeeping: how do goals conceded compare with post-shot xG faced? Fourth, mechanism: how much comes from set pieces, transitions, or sustained possession, and how does the team's pressing or depth shape those chances?</p>
<p>No single layer is decisive. A low xGA with a high post-shot gap may indicate excellent keeping rather than excellent defending. A high xGA with a low post-shot figure may indicate a keeper who is facing well-placed shots, or a model that rates the chances differently from the eye. The profile is more informative than any one column.</p>
<p>For the chance-quality layer, see <a href="/articles/what-is-xga.html">our guide to xGA</a>. The goalkeeping question is covered in <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance and prediction</a>. Set-piece specifics sit in <a href="/articles/set-pieces-football-prediction.html">set pieces in football analysis</a>.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li>Judging a defence by goals conceded alone, without separating chance prevention from shot-stopping.</li>
<li>Reading xGA without the number of shots faced, which hides the difference between volume and quality.</li>
<li>Treating a 10-match post-shot gap as proof of goalkeeping ability.</li>
<li>Ignoring set-piece xGA because the overall total looks acceptable.</li>
<li>Using pressing volume as a proxy for defensive quality without checking the chances it concedes.</li>
</ul>
<p>Each mistake collapses a multi-part question into a single number. The fix is not more decimal places; it is a clearer question.</p>`
    },
    {
      id: "limits",
      heading: "Where defensive metrics stop",
      html: `<p>Defensive metrics cannot see the chances that never became shots. A defender who cuts out a cross, a midfielder who tracks a runner, or a goalkeeper who claims a corner before the header all prevent xGA without recording any. They also cannot fully separate individual quality from team structure, or account for the opponent's intentions.</p>
<p>Use the numbers to describe the chances allowed, then watch the defending. The metrics tell you where to look; they do not replace the look.</p>`
    }
  ],
  faq: [
    { q: "Is xGA the best defensive metric?", a: "It is the best starting point for chance prevention, but it does not measure goalkeeping or the chances a defence prevented from becoming shots. It works best alongside post-shot xG, set-piece data, and pressing context." },
    { q: "What is a good xGA per match?", a: "There is no universal threshold because leagues, eras, and providers differ. Compare a team with its own baseline and its opponents rather than applying a fixed number." },
    { q: "Does a low goals conceded total mean the defence is good?", a: "Not necessarily. It may reflect strong goalkeeping, poor finishing from opponents, or a small sample. Check xGA and post-shot xG before drawing a conclusion about the defence." }
  ],
  related: ["what-is-xga", "goalkeeper-performance-prediction", "set-pieces-football-prediction"]
};
