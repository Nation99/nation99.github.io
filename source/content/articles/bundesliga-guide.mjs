export default {
  slug: "bundesliga-guide",
  title: "Bundesliga Analysis Guide",
  metaTitle: "Bundesliga Analysis Guide: Transitions and Pressing",
  description: "Bundesliga analysis guide: transitions, pressing systems, coach-specific models and how to read high-event football honestly.",
  category: "Leagues",
  tags: ["Bundesliga", "transitions", "pressing", "coaching"],
  published: "2026-07-18",
  updated: "2026-07-18",
  author: "Nyasha",
  dek: "Bundesliga analysis starts with the transition. The league's pressing, vertical passing and coaching continuity create a distinct set of questions, and a distinct set of traps.",
  takeaways: [
    "The transition from regain to shot is a more useful unit than the final scoreline.",
    "Pressing is a system of triggers and cover, not a single measure of intensity.",
    "A coach change can invalidate historical data faster than a squad change.",
    "High event volume makes single results noisy, so rolling evidence matters."
  ],
  intro: `<p>Bundesliga analysis begins with a simple observation: the most important pass is often the one played immediately after a turnover. The league's reputation for open, end-to-end football is built on those moments, when a regain becomes a shot before the opposition can reset.</p>
<p>That does not mean every match is chaotic. It means the transition is a useful unit of analysis. Once you start counting what happens in the first ten seconds after a regain, the league's tactical differences become easier to see.</p>`,
  sections: [
    {
      id: "transition-unit",
      heading: "The transition is the unit of analysis",
      html: `<p>A transition begins with a regain and ends with a shot, a foul, a loss of possession or a reset. Within that window, count the seconds, the number of passes and the number of players committed forward. A team that needs six passes to reach the box is playing a different game from one that needs two.</p>
<p>Distinguish the types. A counterattack starts deep and attacks a disorganised defence. A fast break starts higher and attacks a defence that is still recovering. Sustained possession after a regain is a third pattern, slower but often more controlled. Grouping all three as "transition" hides the mechanism.</p>
<p>The league's verticality encourages these moments, but the execution varies. Some teams attack the space immediately. Others secure the ball first and wait for the next wave. The question is which approach each coach has trained, and whether the opponent can disrupt it.</p>`
    },
    {
      id: "pressing-system",
      heading: "Pressing is a system, not a dial",
      html: `<p>Pressing is often described as if it were a volume control: higher is more aggressive, lower is more cautious. In practice it is a set of choices about where to press, whom to press and who covers behind. A high press with no cover is not more aggressive than a mid block. It is more exposed.</p>
<p>The trigger is the key. A team may press when the ball goes to a full-back, when the goalkeeper takes a poor touch, or when a pass travels backwards. The trigger tells you what the coach believes the opponent cannot do under pressure. The cover tells you how much risk the coach is willing to carry.</p>
<p>Pressing proxies such as passes allowed per defensive action are useful, but they average across the match. They do not distinguish a press that started well and faded from one that was never intense. Pair the proxy with line height, high turnovers and the quality of the chances conceded. <a href="/articles/pressing-intensity-ppda.html">Pressing intensity</a> is a starting point, not a verdict.</p>`
    },
    {
      id: "coach-models",
      heading: "Coach-specific game models",
      html: `<p>The league has a strong tradition of coaching identities. A coach arrives with a way of building up, pressing and attacking, and the club recruits players to fit it. That continuity makes the team's style more predictable than the badge alone would suggest.</p>
<p>It also makes the coach the most important variable in the sample. When a coach changes, the old data describes a different team. The pressing height, the role of the full-backs and the preferred route to goal can all shift within a few weeks. Historical results may still be useful for the squad's quality, but not for its tactical behaviour.</p>
<p>Analyse the new coach's previous teams, the pre-season friendlies and the first competitive matches. Look for repeated patterns rather than early results. <a href="/articles/tactical-matchups-vs-reputation.html">Matchups</a> are easier to assess when you know which ideas are actually being trained.</p>`
    },
    {
      id: "event-volume",
      heading: "High event volume changes how scorelines read",
      html: `<p>A league with more shots, more transitions and more goals produces more extreme scorelines. A 4-2 can be a close match with a wild finish. A 1-0 can be a match with several clear chances and good goalkeeping. The scoreline records the goals, not the balance of play.</p>
<p>High event volume also makes single results weaker evidence. One match contains more variance, not less, because there are more opportunities for a deflection, a red card or a momentary lapse. Rolling averages over five to ten matches are more stable than a single spectacular result.</p>
<p>Use expected goals and shot quality to reconstruct the match. Then check the game state: a team that leads 3-0 may concede chances late because it has stopped pressing. <a href="/articles/league-table-beyond-points.html">Reading the table beyond points</a> helps separate a team's underlying level from a run of unusual scorelines.</p>`
    },
    {
      id: "data-profile",
      heading: "The data profile",
      html: `<p>Public data for the Bundesliga is relatively strong, but it is not uniform. Event data is widely available; tracking data is less so. Expected goals models differ in how they value distance, angle, pressure and shot type, so mixing providers in one comparison is a mistake.</p>
<p>Useful measures include field tilt, progressive passes, xG per shot and high turnovers. Each describes a different part of the game. Field tilt shows territory. Progressive passes show advancement. xG per shot shows chance quality. High turnovers show where the press wins the ball.</p>
<p>Possession needs context. A team can be dominant with 45 per cent of the ball if it creates better chances and controls the dangerous spaces. A team with 60 per cent may be circulating without penetration. The data profile should describe the mechanism, not just the volume.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The clubs and numbers below are illustrative. They are intended to show how transition efficiency can be separated from finishing, not to describe a real match.</p>
<table>
  <thead>
    <tr><th>Measure</th><th>Club A</th><th>Club B</th></tr>
  </thead>
  <tbody>
    <tr><td>Middle-third regains</td><td>30</td><td>24</td></tr>
    <tr><td>Regains leading to a shot within 10 seconds</td><td>9</td><td>4</td></tr>
    <tr><td>Transition shots</td><td>9</td><td>4</td></tr>
    <tr><td>Transition xG</td><td>1.10</td><td>0.45</td></tr>
    <tr><td>xG per transition shot</td><td>0.12</td><td>0.11</td></tr>
  </tbody>
</table>
<p>Club A converts 9 of 30 regains into a shot within ten seconds, or 30 per cent. Club B converts 4 of 24, or 17 per cent. The gap is 13 percentage points. The quality per shot is almost identical: 1.10 divided by 9 is about 0.12, and 0.45 divided by 4 is about 0.11.</p>
<p>If Club B had matched Club A's conversion rate, it would have produced 24 times 0.30, or about 7 shots, rather than 4. At 0.11 xG per shot, that is roughly 0.77 xG instead of 0.45. The difference is about 0.32 xG, created by turning more regains into shots rather than by shooting better.</p>
<p>The example is one match, so it is a hypothesis, not a finding. Opponent style, score effects and the quality of the regains all matter. A regain in the opposition box is worth more than a regain near the halfway line. The next step would be to classify regains by location and by the number of defenders behind the ball.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Assuming every team presses alike.</strong> The league contains high presses, mid blocks and deep counters. The badge does not tell you which one appears.</li>
<li><strong>Reading goals as style.</strong> A high-scoring match can be open, or it can be a controlled game with unusual finishing.</li>
<li><strong>Ignoring a coach change.</strong> Historical data describes the old system. Rebuild the sample when the ideas change.</li>
<li><strong>Using possession as dominance.</strong> Territory and penetration are different. Check where the ball is advanced.</li>
<li><strong>Treating transition goals as luck.</strong> Some are. Others are the product of trained patterns and repeated triggers.</li>
<li><strong>Comparing raw totals across seasons.</strong> Rule changes, squad turnover and coaching changes make old totals a weak baseline.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and how to stay honest",
      html: `<p>The league's reputation can become a story that confirms itself. If you expect open football, you notice the transitions and forget the long spells of control. The data can correct that, but only if the sample is broad enough to include the quieter matches.</p>
<p>Coaching samples are short. A new coach may have only a handful of matches in charge, and those matches may be against an unusual run of opponents. Public data may not capture the training ground, the fitness levels or the instruction that produced the shape. Tracking data is uneven, and expected goals models disagree.</p>
<p>High variance is not a reason to give up on analysis. It is a reason to widen the uncertainty and avoid overreacting to one result. The most useful notes describe the mechanism, show the evidence and name the conditions under which the conclusion would change.</p>`
    },
    {
      id: "preparing",
      heading: "Preparing for a Bundesliga fixture",
      html: `<p>Five questions do most of the work. Who controls the first regain after a long ball? How high is each defensive line, and who covers behind it? Which forward can run into space rather than receive to feet? What happens in the ten seconds after a turnover? How does the coach change the shape when the team leads or trails?</p>
<p>Answer those before reaching for a league average. They describe the match that is likely to be played, rather than the league that contains it. The answers will not remove uncertainty, but they will make the uncertainty specific.</p>`
    }
  ],
  faq: [
    {
      q: "Why are Bundesliga matches often described as open?",
      a: "Pressing and vertical passing can create transitions, and transitions produce shots quickly. But not every match is open. The specific game models and the score effects matter more than the league's reputation."
    },
    {
      q: "How useful is PPDA in this league?",
      a: "It is a useful starting point, but it averages the press across the match. Pair it with pressing height, triggers, line height, high turnovers and the quality of chances conceded."
    },
    {
      q: "What happens to historical data when a coach changes?",
      a: "It becomes less reliable for tactical behaviour. The squad's quality may persist, but the pressing height, roles and preferred routes can change quickly. Weight the new coach's principles and early matches, and keep uncertainty high."
    }
  ],
  related: ["league-table-beyond-points", "pressing-intensity-ppda", "tactical-matchups-vs-reputation"]
};
