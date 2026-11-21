export default {
  slug: "defensive-actions-data",
  title: "Tackles, Interceptions, and Blocks Explained",
  metaTitle: "Tackles, Interceptions, and Blocks Explained",
  description: "Tackles, interceptions, and blocks measure different skills. Learn why raw counts mislead and how possession, location, and role change the picture.",
  category: "xG and Stats",
  tags: ["defensive actions", "tackles", "interceptions", "blocks"],
  published: "2026-11-26",
  updated: "2026-11-26",
  author: "Nyasha",
  dek: "A tackle is an event, not a verdict. Counting defensive actions without possession, location, and role can make a busy defender look better than a well-positioned one.",
  takeaways: [
    "Tackles, interceptions, and blocks measure different skills in different situations, so one combined total hides more than it shows.",
    "High counts often reflect how much a team is defending, not how well an individual is defending.",
    "Location matters: a regain near the halfway line is usually worth more than a last-ditch tackle in the box.",
    "Success rate, fouls, and times dribbled past give a fairer picture than volume alone.",
    "Use per-90 and possession-adjusted figures, then check the video before judging a player."
  ],
  intro: `<p>A tackle is the most visible act of defending. It is easy to count, easy to celebrate, and easy to clip for a highlight reel. That convenience has made defensive action counts one of the most quoted parts of football data, and one of the most misunderstood.</p>
<p>The problem is that a defensive action is a response to a situation. A defender who makes many tackles may be repeatedly drawn out of position. A high block count can show bravery, or it can show that the team is allowing too many shots. The number alone cannot tell the difference.</p>
<p>This guide explains what each action measures, why a busy defender is not automatically a good one, and how to judge defensive work with context.</p>`,
  sections: [
    {
      id: "what-counts",
      heading: "What counts as a defensive action",
      html: `<p>Defensive action is an umbrella term. The core events are tackles, interceptions, blocks, and recoveries, with duels sometimes included. Each describes a different interaction with the ball or the opponent.</p>
<p>A tackle is an attempt to dispossess an opponent who has the ball, usually with the feet. An interception is a pass cut out before it reaches its target. A block is a shot or cross stopped by a defender's body. A recovery is a loose ball collected after a duel, a deflection, or a poor touch.</p>
<p>Definitions vary by provider. Some count attempted tackles and some count only successful ones. Some record a blocked cross as a block and some as a clearance. Some include fouls in the defensive action total, which flatters teams that commit many. Read the definitions before comparing players or teams.</p>`
    },
    {
      id: "tackles",
      heading: "Tackles: a contest with a cost",
      html: `<p>A tackle is a direct contest, and direct contests carry risk. The defender has to be close enough to challenge, which means he has already been found by the opponent or has chosen to step out. Winning the ball can start an attack. Losing it can leave the defence a player short.</p>
<p>Tackle success rate matters as much as volume. A player with 42 tackles and a 61 per cent success rate has lost the ball or been beaten on 16 occasions. A player with 26 tackles and a 74 per cent success rate has lost it on 7. The second profile is cleaner.</p>
<p>Location changes the value of a tackle. A tackle near the halfway line is often a pressing action that keeps the opponent pinned back. A tackle in the penalty area is a last-ditch intervention where a mistake is costly. The same event means different things depending on where it happens and what follows.</p>
<p>Fouls belong in the same conversation. A defender who tackles often but also fouls often is trading risk for control. Our guide to <a href="/articles/pressing-intensity-ppda.html">pressing intensity and PPDA</a> explains how these engagement numbers fit a team's plan.</p>`
    },
    {
      id: "interceptions",
      heading: "Interceptions: reading the pass",
      html: `<p>An interception requires anticipation rather than contact. The defender reads the passer, the receiver, and the space between them, then arrives before the ball does. That is a different skill from tackling, and often a better sign of positioning.</p>
<p>A high interception count can mean a player is screening passing lanes effectively. It can also mean the opponent is being allowed to circulate the ball through midfield without enough pressure. Location helps separate those stories. Interceptions in the opponent's half are regains that can lead to chances. Deep interceptions usually end an attack but may not start one.</p>
<p>Interceptions are shaped by the opponent's style. A team that plays long passes offers fewer chances than one that builds patiently. A side that dominates possession may record few interceptions because the opponent rarely has the ball. Compare within similar match states, not across every fixture.</p>`
    },
    {
      id: "blocks",
      heading: "Blocks: the last line",
      html: `<p>A block is the last form of defending before the goalkeeper is beaten. A defender throws a body or a leg in front of a shot or cross, often with little time to react. The act can be brave and valuable, and it can also be a symptom.</p>
<p>A team that records many blocks is usually allowing many shots. The block prevents the immediate danger but does not explain why the shot was available. A low block that forces long-range attempts will produce blocks without necessarily defending badly. A high line that is repeatedly turned will produce blocks in more dangerous positions.</p>
<p>Blocked shots also complicate the data. Some models include blocked attempts in shot counts and expected goals, while others treat them separately. A blocked shot may be recorded at the point of the block rather than the attempt.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It compares two central midfielders over ten matches with the same minutes. The numbers are invented for teaching.</p>
<table>
<caption>Illustrative defensive profile over ten matches</caption>
<thead><tr><th>Measure</th><th>Player A</th><th>Player B</th></tr></thead>
<tbody>
<tr><td>Minutes</td><td>900</td><td>900</td></tr>
<tr><td>Team possession</td><td>43%</td><td>57%</td></tr>
<tr><td>Tackles</td><td>42</td><td>26</td></tr>
<tr><td>Tackle success</td><td>61%</td><td>74%</td></tr>
<tr><td>Interceptions</td><td>18</td><td>24</td></tr>
<tr><td>Blocks</td><td>9</td><td>4</td></tr>
<tr><td>Fouls</td><td>28</td><td>14</td></tr>
<tr><td>Dribbled past</td><td>19</td><td>9</td></tr>
<tr><td>Actions in own third</td><td>38%</td><td>29%</td></tr>
</tbody>
</table>
<p>Player A's total of 69 tackles, interceptions, and blocks is higher than Player B's 54. On volume alone, A looks the busier defender. But A played for a team with 43 per cent possession, so he faced more defensive situations, and 38 per cent of his actions came in his own third, suggesting more last-ditch defending.</p>
<p>Player B intercepted more passes while playing for the team with more of the ball. That is notable, because a team with 57 per cent possession spends less time defending. B also committed half as many fouls and was dribbled past less than half as often. The cleaner profile belongs to B, though role and opponent quality still need checking.</p>
<p>The totals are not comparable in a second sense: a tackle, an interception, and a block are not equivalent events. Adding them assumes each is worth the same. Better to compare each action separately and ask what the player was asked to do.</p>`
    },
    {
      id: "high-counts",
      heading: "When high counts signal trouble",
      html: `<p>Defensive actions are opportunity events. A player cannot tackle if the opponent never has the ball near him. Raw counts are therefore sensitive to possession, game state, and style. A defender on a team that spends most of the match without the ball will record more actions than one on a dominant team.</p>
<p>Game state amplifies the effect. A team chasing a goal takes more risks and faces more transitions. A team protecting a lead sits deeper and invites crosses and shots, which raises block and clearance counts.</p>
<p>Position matters too. A full-back in a back four faces more one-on-one situations than a centre-back in a back three. A midfield screen may intercept many passes but attempt few tackles. Comparing their totals without adjusting for role is like comparing a goalkeeper's saves with a striker's shots.</p>
<p>A high count is a prompt, not proof. Ask why the player had so many chances to defend, and whether the actions stopped the attack or merely delayed it. The answer usually sits in the location data and the video.</p>`
    },
    {
      id: "judging-context",
      heading: "Judging defenders with context",
      html: `<p>The first adjustment is per 90 minutes. A player with 42 tackles in 900 minutes averages 4.2 per 90. The same total in 1,800 minutes averages 2.1. Minutes normalise volume, though they do not fix the possession effect.</p>
<p>The second adjustment is for defensive workload. Possession share, opponent passes, and shots faced describe how often the defender had to act. A useful measure is the share of defensive actions in the team's own third. A high share suggests reactive defending near goal. A lower share suggests engagement higher up.</p>
<p>The third is outcome. Tackle success, fouls, times dribbled past, and the quality of chances conceded after a failed action describe whether the defending worked. A defender who wins the ball but leaves his partner exposed has not solved the problem. One who delays an attack long enough for the team to recover has, even without a tackle.</p>
<p>Finally, watch the player. Does he hold position? Does he show the opponent away from goal? These are parts of defending that event data cannot see. Our guide to <a href="/articles/defensive-metrics-football.html">defensive metrics</a> explains how to combine actions with chance quality, and the article on <a href="/articles/low-block-defending.html">the low block</a> shows why a deep defender may record more blocks without defending worse.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Adding all actions together.</strong> A tackle, an interception, and a block are different events. A combined total hides the mix.</li>
<li><strong>Ignoring possession.</strong> More defending means more chances to record an action. A busy defender on a struggling team is not automatically better.</li>
<li><strong>Judging by volume alone.</strong> Check success rate, fouls, and times dribbled past before praising the count.</li>
<li><strong>Forgetting location.</strong> A regain high up the pitch is usually worth more than a clearance in the six-yard box.</li>
<li><strong>Comparing across providers.</strong> Definitions differ, so use the same source for both players.</li>
<li><strong>Treating blocks as a sign of strength.</strong> A block prevents a shot, but the shot existed for a reason.</li>
</ul>
<p>The common thread is that defensive actions describe responses. They show involvement, not quality. Context turns the response into a story.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between a tackle and an interception?",
      a: "A tackle is a direct challenge on an opponent who has the ball. An interception is a pass cut out before it reaches its target, usually without contact. They measure different skills and are best compared separately."
    },
    {
      q: "Do high tackle numbers mean a defender is playing well?",
      a: "Not necessarily. A high tackle count can mean the player is frequently exposed and has to recover. Check tackle success, fouls, times dribbled past, and where the actions happen before judging."
    },
    {
      q: "Why do blocked shots count as defensive actions?",
      a: "A block stops a shot or cross from reaching the goal, so it is a defensive intervention. But a high block count also suggests the team is allowing attempts, which is why blocks should be read with shots and expected goals faced."
    }
  ],
  related: ["defensive-metrics-football", "pressing-intensity-ppda", "low-block-defending"]
};
