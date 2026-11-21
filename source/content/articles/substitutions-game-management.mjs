export default {
  slug: "substitutions-game-management",
  title: "Substitutions and Game Management",
  metaTitle: "Substitutions and Game Management",
  description: "How bench quality, substitution timing and role changes affect football matches, and how to assess the impact without overreading small samples.",
  category: "Tactics",
  tags: ["substitutions", "game management", "squad depth", "tactics"],
  published: "2026-11-06",
  updated: "2026-11-06",
  author: "Nyasha",
  dek: "A substitution is a tactical decision made under time pressure. The best ones change the shape of the match, not just the personnel.",
  takeaways: [
    "Substitutions affect both fresh legs and the tactical structure of the team.",
    "Bench quality is a real part of squad strength, especially in congested schedules.",
    "Timing matters because the value of a change depends on the game state.",
    "Raw post-substitution numbers are confounded by the situation the player enters.",
    "Assessing impact requires context, comparison and a healthy respect for small samples."
  ],
  intro: `<p>Modern football allows five substitutions in many competitions, and coaches use them as a tactical tool rather than a last resort. A substitution can change the energy level, the shape, the pressing height or the attacking threat. It can also destabilise a team that was in control.</p>
<p>Game management is the art of choosing the right change at the right time. It is difficult to evaluate because the player who enters is not entering a neutral match. The score, the clock and the opponent's approach all shape what happens next.</p>`,
  sections: [
    {
      id: "why-subs-matter",
      heading: "Why substitutions matter",
      html: `<p>Football is a game of fatigue as well as skill. A player who has run for 70 minutes is less able to sprint, press or recover than a fresh substitute. The drop is not uniform, but it is real, especially in positions that require repeated high-intensity efforts.</p>
<p>A substitution can also change the tactical structure without changing the formation. Bringing on a more defensive full-back may lower the team's attacking width. Bringing on a winger may stretch the opponent's back line. The personnel change and the tactical change are often linked.</p>
<p>The five-substitution rule has increased the scope for tactical changes. A coach can now change half the outfield team, which makes the bench a more significant part of the match plan. The quality of the bench is no longer a minor detail.</p>`
    },
    {
      id: "bench-quality",
      heading: "Bench quality and squad depth",
      html: `<p>A strong bench is a form of insurance. It provides cover for injuries, options against different opponents and fresh legs in a congested schedule. A team with a deep squad can maintain its style for longer, while a team with a thin squad may fade in the final 20 minutes.</p>
<p>Bench quality is difficult to measure from team-level data. A team may have a strong starting eleven and a weak bench, or a balanced squad with less star power. The aggregate league position can hide the difference, especially in cup competitions and during fixture congestion.</p>
<p>Our guide to <a href="/articles/squad-depth-football-prediction.html">squad depth</a> explains how to assess the drop-off beyond the first choice players. The key question is not how many players a club has, but how much quality it loses when the starters are replaced.</p>`
    },
    {
      id: "timing",
      heading: "Timing and game state",
      html: `<p>The same substitution can be good or bad depending on the state of the match. Bringing on an extra attacker at 0-0 may be sensible; doing it at 2-0 up with ten minutes left may be unnecessarily risky. The decision depends on the score, the opponent and the team's own strengths.</p>
<p>Timing also affects the sample. A substitute who enters at 0-2 down may accumulate attacking numbers because the team is chasing the game. A substitute who enters at 2-0 up may record very little because the team is managing the result. Comparing their raw output without accounting for the score is misleading.</p>
<p>Our guide to <a href="/articles/game-state-analysis.html">game state</a> explains how the score changes behaviour. Substitutions are one of the main mechanisms through which coaches respond to those changes.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. Club A is drawing 1-1 after 65 minutes. It makes two substitutions and changes from a 4-3-3 to a 4-2-3-1. The xG figures are illustrative and cover the final 25 minutes.</p>
<table>
<caption>Illustrative before and after a double substitution</caption>
<thead><tr><th>Period</th><th>Club A xG</th><th>Club B xG</th><th>Club A shots</th></tr></thead>
<tbody>
<tr><td>First 65 minutes</td><td>0.82</td><td>0.76</td><td>8</td></tr>
<tr><td>Final 25 minutes</td><td>0.41</td><td>0.22</td><td>5</td></tr>
<tr><td><strong>Per 25 minutes, first period</strong></td><td><strong>0.32</strong></td><td><strong>0.29</strong></td><td><strong>3.1</strong></td></tr>
<tr><td><strong>Per 25 minutes, final period</strong></td><td><strong>0.41</strong></td><td><strong>0.22</strong></td><td><strong>5.0</strong></td></tr>
</tbody>
</table>
<p>The raw final-period totals look modest: 0.41 xG for Club A and 0.22 for Club B. Adjusted for the 25-minute length, Club A's rate improved from 0.32 to 0.41 per 25 minutes, while Club B's fell from 0.29 to 0.22. The substitutions did not produce a flood of chances, but they shifted the balance.</p>
<p>Now consider the confounders. Club B may have dropped deeper to protect the draw. Club A may have taken more risks because it was chasing a winner. The substitution is one part of a changing situation, not the only cause. A single match cannot separate the effects.</p>
<p>The example shows how to read the numbers without overclaiming. The direction is interesting; the sample is tiny. A larger study across many matches would be needed to estimate the average effect of a similar change.</p>`
    },
    {
      id: "role-changes",
      heading: "Role changes, not just personnel",
      html: `<p>A substitution can change a player's role even if the player stays on the pitch. Moving a winger to the opposite side, pushing a midfielder higher or dropping a forward into midfield can alter the team's shape without using a substitution. Coaches often combine the two: a new player enters, and an existing player moves to a different position.</p>
<p>These role changes are difficult to capture in event data. A player may be listed in the same position but asked to do a different job. The numbers may change because the role changed, not because the player improved or declined.</p>
<p>For analysis, it helps to record the tactical change alongside the personnel change. A substitution that brings on a defender and moves a midfielder to centre-back is not the same as a like-for-like replacement. The label "substitution" hides a lot of variation.</p>`
    },
    {
      id: "evaluating-impact",
      heading: "How to evaluate substitution impact",
      html: `<p>The first step is to define the question. Is the aim to measure the player's individual contribution, the coach's decision, or the team's performance after the change? Those are different questions with different methods.</p>
<p>For a player, compare like with like: similar positions, similar game states and similar minutes. For a coach, compare the decision with the available alternatives, which is even harder because the counterfactual is unobserved. For a team, look at the change in chance creation and concession after the substitution, while noting the score and the opponent's response.</p>
<p>A useful habit is to track substitutions across a season rather than judging them one at a time. Patterns may emerge: a coach who consistently improves the team's attacking output after a certain change, or one whose team becomes more exposed. The sample is still limited, but it is larger than a single match.</p>
<p>Our guide to <a href="/articles/manager-impact-football.html">manager impact</a> discusses the broader challenge of attributing team performance to coaching decisions. Substitutions are one of the most visible decisions, but they are also one of the most context-dependent.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a substitute by raw output.</strong> The player may have entered at a score that encourages or discourages attacking numbers.</li>
<li><strong>Ignoring the tactical change.</strong> A substitution often changes the shape, not just the personnel.</li>
<li><strong>Assuming a late goal proves the substitution worked.</strong> One goal can be noise, and the opponent's response matters.</li>
<li><strong>Comparing across different minutes.</strong> A 25-minute cameo is not directly comparable with a 90-minute start.</li>
<li><strong>Treating bench quality as irrelevant.</strong> In congested schedules, the drop-off beyond the starting eleven can decide matches.</li>
</ul>
<p>The common thread is context. A substitution is a decision inside a changing match, and the evaluation should reflect that.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Substitution analysis is limited by the counterfactual problem. We never see what would have happened if the coach had made a different choice. We can describe what happened after the change, but causal claims require stronger designs and more data than a single match provides.</p>
<p>There is also a selection effect. Coaches make substitutions when they believe a change is needed, which means the situations are not random. A substitution that follows a poor performance may look effective simply because the team was likely to improve anyway.</p>
<p>The practical conclusion is modest. Substitutions are a real tactical lever, and bench quality is a real part of squad strength. But the impact is difficult to isolate, and the best analysis is careful about context, comparison and sample size.</p>`
    }
  ],
  faq: [
    {
      q: "Do substitutions actually change match outcomes?",
      a: "They can. A substitution can change energy levels, shape and attacking threat. The size of the effect varies by situation, and it is difficult to isolate from the score, the opponent and random variation."
    },
    {
      q: "Why is bench quality important?",
      a: "A strong bench provides cover for injuries, tactical options and fresh legs in congested schedules. The drop-off beyond the starting eleven can shape results over a season."
    },
    {
      q: "How can I evaluate a substitution fairly?",
      a: "Compare similar game states and minutes, record the tactical change as well as the player, and look at patterns across a season rather than a single match. Acknowledge that the counterfactual is unknown."
    }
  ],
  related: ["squad-depth-football-prediction", "game-state-analysis", "manager-impact-football"]
};
