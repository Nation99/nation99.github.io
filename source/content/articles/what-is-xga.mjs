export default {
  slug: "what-is-xga",
  title: "What Is xGA? Defensive Expected Goals",
  metaTitle: "What Is xGA? Defensive Expected Goals",
  description: "Expected goals against measures the quality of chances a team concedes. Learn how xGA separates defence from goalkeeping and where it misleads.",
  category: "xG and Stats",
  tags: ["xGA", "defence", "goalkeeping", "analytics"],
  published: "2026-01-19",
  updated: "2026-01-19",
  author: "Nyasha",
  dek: "Expected goals against turns the chances a team allows into a single scale. Used carefully, it separates the structure of a defence from the shots that beat it.",
  takeaways: [
    "xGA sums the estimated quality of every shot a team faces, so lower is generally better.",
    "It describes the chances allowed, not the goals conceded, and the two can diverge sharply.",
    "Post-shot xG adds shot placement, which helps separate defending from goalkeeping.",
    "Five matches is a small window; opponent strength and game state need to sit beside the number.",
    "A low xGA can reflect good defending, a slow game, or a team protecting a lead, so context is essential."
  ],
  intro: `<p>A team can concede twice and defend reasonably well. It can also concede once and defend badly. The scoreline records the outcome of a handful of moments, not the quality of the defending that produced them.</p>
<p>Expected goals against, or xGA, is the defensive side of the expected goals family. It asks a narrow question: how good were the chances the team allowed? The answer is not a verdict on the defence, but it is a much better starting point than the goals conceded column.</p>`,
  sections: [
    {
      id: "mirror-image",
      heading: "The mirror image of xG",
      html: `<p>If xG measures the quality of a team's shots, xGA measures the quality of the shots it faces. The mechanics are the same. Each attempt is assigned a probability of becoming a goal, and those probabilities are summed. A team that allows a clear chance from six yards and a harmless effort from 30 yards will carry both values into its xGA total.</p>
<p>The direction of judgement is reversed. For xG, a higher figure is usually encouraging. For xGA, a lower figure is usually encouraging. That sounds trivial, but it catches people out when they compare columns quickly or read a table without checking the heading.</p>
<p>xGA is also a team-level description. It does not say which defender was responsible for a chance, whether the midfield failed to track a runner, or whether the goalkeeper was badly positioned. It says that a shot of a certain quality was taken. Assigning blame requires watching the move.</p>`
    },
    {
      id: "what-xga-counts",
      heading: "What xGA counts",
      html: `<p>An xGA total normally includes every shot faced, including headers, volleys, penalties, and attempts that are deflected wide. Some providers separate set-piece xGA from open-play xGA, and some exclude penalties because their value is fixed. Those choices matter when comparing teams or providers.</p>
<p>The count of shots faced is a useful companion. A side allowing 20 shots worth 1.0 xGA has a different profile from a side allowing five shots worth 1.0 xGA. The first defence is conceding a lot of low-quality attempts; the second is limiting volume but allowing better looks. Neither pattern is automatically better without more context.</p>
<p>It also helps to know how much of the total arrived in which game state. A team that spends the last 20 minutes protecting a one-goal lead may allow shots it would not allow at 0-0. Those attempts still count, but the reason is tactical choice rather than defensive weakness.</p>`
    },
    {
      id: "defence-and-goalkeeping",
      heading: "Defence and goalkeeping are different problems",
      html: `<p>Goals conceded is a joint product of the chances allowed and the saves made. xGA isolates the first part. Post-shot xG goes a step further by estimating the chance of a goal after the shot has been struck, taking account of placement and, in some models, goalkeeper position. It is usually calculated only for shots on target.</p>
<p>Comparing goals conceded with post-shot xG faced gives a rough view of shot-stopping. If a team concedes seven goals from shots worth 5.0 post-shot xG, the goalkeeper has probably saved more than an average keeper would. If it concedes seven from shots worth 9.0, the opposite may be true. "Probably" is doing important work in both sentences, because the sample is small and the metric is a model.</p>
<p>The distinction matters because a defence can be blamed for goals that were mainly a keeping problem, and a keeper can be credited for results built on chances the defence should have prevented.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The following five-match sequence is illustrative. Club A's opponents and all values are hypothetical, rounded for clarity.</p>
<table>
<thead><tr><th>Match</th><th>Shots faced</th><th>xGA</th><th>Shots on target</th><th>Post-shot xG faced</th><th>Goals conceded</th></tr></thead>
<tbody>
<tr><td>vs Club B</td><td>9</td><td>0.8</td><td>3</td><td>0.9</td><td>1</td></tr>
<tr><td>vs Club C</td><td>14</td><td>1.4</td><td>5</td><td>1.6</td><td>1</td></tr>
<tr><td>vs Club D</td><td>7</td><td>0.6</td><td>4</td><td>1.2</td><td>2</td></tr>
<tr><td>vs Club E</td><td>11</td><td>1.1</td><td>3</td><td>0.8</td><td>0</td></tr>
<tr><td>vs Club F</td><td>16</td><td>2.0</td><td>7</td><td>2.5</td><td>3</td></tr>
<tr><td><strong>Total</strong></td><td><strong>57</strong></td><td><strong>5.9</strong></td><td><strong>22</strong></td><td><strong>7.0</strong></td><td><strong>7</strong></td></tr>
<tr><td><strong>Per match</strong></td><td><strong>11.4</strong></td><td><strong>1.18</strong></td><td><strong>4.4</strong></td><td><strong>1.40</strong></td><td><strong>1.40</strong></td></tr>
</tbody>
</table>
<p>Club A allowed 5.9 xG across five matches, or 1.18 per match, but conceded seven goals. The gap of 1.1 goals is not proof of bad goalkeeping. The post-shot figure is the better clue. Shots on target were worth 7.0 after placement, and the keeper conceded exactly seven, which suggests roughly neutral shot-stopping across this small sample.</p>
<p>The comparison between 5.9 xGA and 7.0 post-shot xG needs care because post-shot xG covers only shots on target, while xGA covers all shots. The two totals answer different questions. The useful reading is that the chances faced were modest, the shots that hit the target were well placed, and the scoreline followed the placement more than the raw chance count.</p>`
    },
    {
      id: "rolling-window",
      heading: "Why a rolling window helps",
      html: `<p>Five matches is about 450 minutes of football. That is enough to notice a pattern, not enough to establish one. A single deflected shot, a red card, or an early injury can distort the average. A ten-match or twenty-match rolling xGA is less responsive to one strange afternoon and more likely to reflect the team's underlying defensive behaviour.</p>
<p>The trade-off is obvious. A long window is stable but slow to notice genuine change, such as a new manager altering the back line or a key defender returning from injury. A short window is current but noisy. The sensible approach is to use both: the long window for the baseline, the short window for evidence that something has changed.</p>`
    },
    {
      id: "opponent-adjustment",
      heading: "Adjusting for the opponent",
      html: `<p>Allowing 2.0 xGA to a strong attacking side is not the same as allowing 2.0 to a cautious one. A simple adjustment compares each opponent's typical xG creation with what Club A allowed. Suppose the five opponents above averaged 1.1, 1.5, 0.9, 1.2 and 1.8 xG in their other matches. That sums to 6.5 expected xGA across the five games. Club A allowed 5.9, which is 0.6 fewer than the crude baseline, or 0.12 per match.</p>
<p>This is a blunt adjustment. It ignores venue, the strength of the opponents' opponents, and the fact that the five matches are not a random sample. It is still more informative than treating every xGA total as if it were produced against the same opponent. The arithmetic is simple enough to do in a notebook, and the result should be presented as an estimate rather than a correction set in stone.</p>`
    },
    {
      id: "reading-with-context",
      heading: "Reading xGA with context",
      html: `<p>Start with the per-match figure and the number of shots faced. Then ask who the opponents were, where the matches were played, and what the game states looked like. A team that leads often will spend more time defending a lead, which can raise its xGA without saying much about its defending from a neutral scoreline.</p>
<p>Split the total by set pieces and open play if the provider supports it. A defence that is solid in open play but vulnerable from corners has a specific problem, and the overall xGA hides it. The same applies to shots from outside the area: a low-quality long-range attempt counts for little, but a cluster of them may indicate that opponents are being allowed to shoot unchallenged.</p>
<p>Finally, compare xGA with the quality of the goalkeeper and the team's own attacking style. A side that commits many players forward may accept more transition chances by design. That is a tactical trade-off, not necessarily a defensive failure.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li>Reading goals conceded as a direct measure of defence. It mixes chance prevention with finishing and goalkeeping.</li>
<li>Comparing xGA totals without checking minutes played or the number of matches.</li>
<li>Ignoring post-shot xG and then blaming the defence for goals that were mainly about placement or keeping.</li>
<li>Treating a five-match xGA as a settled team trait.</li>
<li>Mixing xGA numbers from different providers, whose models and inclusion rules may differ.</li>
<li>Forgetting that game state changes how many chances a team allows.</li>
</ul>
<p>Most of these errors come from reading a single column in isolation. xGA is at its best when it sits next to shots faced, post-shot xG, and a note about the opponent.</p>`
    },
    {
      id: "limits",
      heading: "Where xGA stops being useful",
      html: `<p>xGA cannot see the chances a defence prevented from ever becoming shots. A perfectly timed interception, a cutback cleared at the near post, or a runner tracked across the box leaves no shot value behind. That means a well-drilled defence can look ordinary in xGA if opponents simply stop attacking down its side.</p>
<p>It also cannot assign individual responsibility or capture the difference between a chaotic defensive structure and a deliberate one. It is a team-level summary of shot quality faced, and it should be used as one. For a broader view, our guide to <a href="/articles/defensive-metrics-football.html">defensive metrics</a> puts xGA alongside post-shot xG, set-piece data, and pressing. If the goalkeeping side interests you, the piece on <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a> explains why save percentages are so noisy. And for the attacking mirror, see <a href="/articles/what-is-xg-football.html">what xG measures</a>.</p>`
    }
  ],
  faq: [
    { q: "Is lower xGA always better?", a: "Usually, because it means the team allowed chances of lower estimated quality. But a low xGA can also come from a slow game, a cautious opponent, or a match state that discouraged risk, so the number needs context." },
    { q: "How does xGA differ from goals conceded?", a: "xGA values the chances faced; goals conceded records how many went in. The gap between them reflects finishing, goalkeeping, deflections, and random variation over the sample." },
    { q: "Should I use xGA for a single match?", a: "It can describe the chances a team allowed in that match, but one game is a small and noisy sample. Use it for match description rather than as a durable judgement about the defence." }
  ],
  related: ["what-is-xg-football", "defensive-metrics-football", "goalkeeper-performance-prediction"]
};
