export default {
  slug: "expected-threats-xt",
  title: "Expected Threats (xT) Explained",
  metaTitle: "Expected Threats (xT) Explained",
  description: "Expected threats scores each pass by how much it improves a team's chance of scoring. Learn how xT works and how it differs from xG.",
  category: "xG and Stats",
  tags: ["xT", "possession value", "progression", "analytics"],
  published: "2026-03-25",
  updated: "2026-03-25",
  author: "Nyasha",
  dek: "Expected threats assigns value to the territory and control a pass creates, even when no shot follows. It is a model of progression, not a substitute for xG.",
  takeaways: [
    "xT estimates how much a possession improves a team's chance of scoring, usually by comparing pitch zones.",
    "A pass or carry adds value when it moves the ball into a more dangerous area.",
    "xT captures build-up play that shot-based metrics cannot see.",
    "Values differ by provider and are not directly comparable to xG.",
    "xT rewards progression, so it can overrate possession that is already advanced but going nowhere."
  ],
  intro: `<p>A full-back receives the ball deep, scans forward and plays a pass into the half-space. No shot follows. A basic match report records a completed pass; it cannot say whether the pass made a goal more likely.</p>
<p>Expected threats, usually written as xT, tries to fill that gap. It puts a value on the ball's movement into dangerous areas, so that the pass before the pass can be measured alongside the shot at the end of the move. The idea is powerful, but it is also easy to misread as a goal probability. It is not one.</p>`,
  sections: [
    {
      id: "what-xt-measures",
      heading: "What expected threats measures",
      html: `<p>xT is a family of possession-value models rather than a single universal statistic. The common idea is that the ball's location, and sometimes the number of defenders between the ball and goal, changes the probability that the attacking team will score before the move breaks down. A pass that moves the ball from a low-value area to a high-value area receives a positive xT score.</p>
<p>The score is usually expressed as a small decimal. A pass worth 0.04 xT is not a four per cent chance of a goal. It represents a four percentage point increase in the model's estimate of the possession's scoring probability, relative to where the ball started. Those increments accumulate across a move.</p>
<p>Because the model is built on pitch zones or learned spatial values, it can assess actions that never become shots. That is the whole point: to give build-up and progression a place in the analysis without pretending that every good pass is worth the same as a clear chance.</p>`
    },
    {
      id: "grid-values",
      heading: "A grid of possession values",
      html: `<p>A simple xT model divides the pitch into a grid. Each cell holds a value representing the estimated chance that a possession in that cell ends in a goal within a limited number of actions. Values rise as the ball moves closer to goal and towards the centre. The table below is illustrative and deliberately coarse.</p>
<table>
<thead><tr><th>Zone</th><th>Description</th><th>Illustrative value</th></tr></thead>
<tbody>
<tr><td>A</td><td>Deep central</td><td>0.01</td></tr>
<tr><td>B</td><td>Deep wide</td><td>0.008</td></tr>
<tr><td>C</td><td>Middle third central</td><td>0.03</td></tr>
<tr><td>D</td><td>Middle third wide</td><td>0.02</td></tr>
<tr><td>E</td><td>Final third central</td><td>0.08</td></tr>
<tr><td>F</td><td>Final third wide</td><td>0.06</td></tr>
<tr><td>G</td><td>Penalty area, side</td><td>0.18</td></tr>
<tr><td>H</td><td>Penalty area, central</td><td>0.30</td></tr>
<tr><td>I</td><td>Six-yard box</td><td>0.40</td></tr>
</tbody>
</table>
<p>Real models use finer grids, defensive pressure, and sometimes the identity of the ball carrier. The principle survives the extra detail: value is attached to territory and control, and a completed action that improves both is rewarded.</p>`
    },
    {
      id: "accumulating-xt",
      heading: "How a move accumulates xT",
      html: `<p>As the ball travels, each completed pass or carry can change the zone value. The difference between the destination value and the origin value is the xT added. A pass from a 0.01 zone to a 0.03 zone adds 0.02. A pass that goes backwards from 0.08 to 0.03 subtracts 0.05, although many public presentations count only positive progressions.</p>
<p>This is where the models diverge. Some sum only the positive changes, treating backward passes as zero. Others take the net change from the start of the possession to its most advanced point, or to the shot. The same move can therefore produce different totals under different definitions. That is not a flaw unique to xT; it is a reminder to read the method before comparing numbers.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The sequence below is illustrative and uses the zone values from the previous table. Club A moves the ball from deep to a shot in six actions.</p>
<table>
<thead><tr><th>Action</th><th>From</th><th>To</th><th>xT added</th></tr></thead>
<tbody>
<tr><td>Centre-back pass</td><td>A (0.01)</td><td>C (0.03)</td><td>+0.02</td></tr>
<tr><td>Midfield pass</td><td>C (0.03)</td><td>E (0.08)</td><td>+0.05</td></tr>
<tr><td>Pass wide</td><td>E (0.08)</td><td>F (0.06)</td><td>-0.02</td></tr>
<tr><td>Cross</td><td>F (0.06)</td><td>H (0.30)</td><td>+0.24</td></tr>
<tr><td>Lay-off</td><td>H (0.30)</td><td>G (0.18)</td><td>-0.12</td></tr>
<tr><td>Shot</td><td>G (0.18)</td><td>End</td><td>0.14 xG</td></tr>
</tbody>
</table>
<p>Summing every change gives 0.02 + 0.05 - 0.02 + 0.24 - 0.12 = 0.17. Summing only the positive changes gives 0.02 + 0.05 + 0.24 = 0.31. The move ends with a shot worth 0.14 xG. Those three numbers describe the same passage of play in three different ways, and none of them is the scoreline.</p>
<p>The net xT of 0.17 says the possession improved its scoring probability by about seventeen percentage points from its starting point. The positive-only total of 0.31 says the progressive actions were worth that much before the backward lay-off. The 0.14 xG says the resulting shot was a reasonable but not outstanding chance. A reader who adds 0.17 and 0.14 would be mixing scales and double counting the move.</p>`
    },
    {
      id: "xt-versus-xg",
      heading: "xT and xG are different lenses",
      html: `<p>xG values the shot. xT values the route to the shot. A team can accumulate a large xT total without producing much xG if it progresses neatly to the edge of the area and then stalls. It can also produce a respectable xG total from a low xT base if a single long ball or a set piece creates a clear chance.</p>
<p>The two metrics answer different questions, which is why they are most useful together. High xT and low xG suggest a team reaches dangerous areas but does not turn that territory into shots. Low xT and high xG suggest a more direct approach, or a reliance on set pieces and individual moments. Neither pattern is automatically better; they are different attacking identities.</p>`
    },
    {
      id: "what-xt-rewards",
      heading: "What xT rewards",
      html: `<p>Progressive passes, line-breaking passes, and carries into space all score well. So do switches that move the ball from a crowded wide area into a central pocket. The metric gives credit to the midfielder who receives under pressure and turns a safe position into an attacking one, even if the move ends without a shot.</p>
<p>That makes xT valuable for scouting and for describing a team's build-up. It can show which players are responsible for moving a side up the pitch, and which combinations consistently create better field position. It can also reveal that a team's possession is less threatening than its passing volume suggests.</p>`
    },
    {
      id: "what-xt-misses",
      heading: "What xT misses",
      html: `<p>Most xT models value completed actions, so a brilliant pass that is narrowly intercepted scores nothing. The risk attached to a pass is not fully captured. A safe square ball and a defence-splitting attempt that fails may both end at zero, even though one is far more ambitious.</p>
<p>The model also tends to reward territory. A team already camped in the final third can accumulate small positive increments with passes that do not actually unsettle the defence. Without pressure data, xT cannot tell the difference between a pass into space and a pass into a crowd. And because the zone values come from historical averages, they may not reflect the specific opponent or game state.</p>`
    },
    {
      id: "using-xt",
      heading: "Using xT in analysis",
      html: `<p>Treat xT as a description of progression, not as an expected score. Compare it with xG to see whether territory turns into chances. Look at per-90 totals and per-possession totals, because a team with more of the ball will accumulate more xT by volume alone. A side that creates 1.2 xT per possession is doing something different from a side that creates 1.2 across thirty possessions.</p>
<p>Opponent context matters. Progressing the ball against a deep, compact defence is harder than progressing against a side that presses high and leaves space behind. A raw xT total will not distinguish those situations. Splitting the data by opponent style, or at least noting it, makes the number more honest.</p>
<p>For the shot side of the picture, see <a href="/articles/what-is-xg-football.html">our explanation of xG</a>. The way possession is counted and interpreted is covered in <a href="/articles/possession-data-football.html">using possession data</a>. And if you want to compare team-level summaries, the piece on <a href="/articles/goal-difference-vs-xg-difference.html">goal difference and xG difference</a> shows how the arithmetic works.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li>Treating xT as a goal probability or adding it directly to xG.</li>
<li>Comparing xT totals from different providers without checking the zone values and the treatment of backward passes.</li>
<li>Ignoring possession volume, which inflates totals for teams that see more of the ball.</li>
<li>Reading a single match's xT as a stable player trait.</li>
<li>Assuming a high xT total means a team created good chances. It may only mean it reached good areas.</li>
</ul>
<p>Each of these errors comes from forgetting that xT is a model of progression. It is informative precisely because it is narrow, and it becomes misleading when asked to do the work of a shot metric.</p>`
    },
    {
      id: "limits",
      heading: "The limits of possession value",
      html: `<p>xT depends on the quality of the event data and on the model's assumptions about what happens next. A zone value derived from average teams may not fit a side with an unusual style. The metric also stops at the edge of what it can see: it does not know why a pass was played, whether it was the right decision, or how the defence reacted.</p>
<p>Use it as one lens among several. It pairs naturally with shot quality, pressing data, and video. The number can point you towards a passage of play worth watching; it cannot replace the watching.</p>`
    }
  ],
  faq: [
    { q: "Is xT the same as expected goals?", a: "No. xG values shots, while xT values the progression of a possession into more dangerous areas. They use different scales and should not be added together." },
    { q: "Why do xT totals differ between providers?", a: "Providers use different pitch grids, zone values, and rules for backward passes and carries. Some count only positive progressions and others use net change, so the totals are not directly comparable." },
    { q: "Can xT measure a player's quality?", a: "It can describe how much progression a player produces in a given role and system. It cannot separate that from team style, opponent strength, or the player's other contributions, so it is a starting point rather than a verdict." }
  ],
  related: ["what-is-xg-football", "possession-data-football", "goal-difference-vs-xg-difference"]
};
