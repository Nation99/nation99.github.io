export default {
  slug: "squad-age-demographics",
  title: "Squad Age Profiles and Performance",
  metaTitle: "Squad Age Profiles: Peak Windows and Decline Risk",
  description: "Why average age misleads, how peak windows differ by position, and how to read a squad's age profile with minutes-weighted data.",
  category: "Tactics",
  tags: ["squad age", "age profile", "player development", "analysis"],
  published: "2026-08-09",
  updated: "2026-08-09",
  author: "Nyasha",
  dek: "A squad's average age can hide two completely different projects. What matters is where the minutes go, which positions carry the oldest and youngest players, and how quickly the profile is changing.",
  takeaways: [
    "Average age hides the distribution of ages and minutes.",
    "Peak windows vary by position and by playing style.",
    "Minutes-weighted age is more informative than a squad-list average.",
    "A young squad is not automatically improving, and an old squad is not automatically declining.",
    "Age profiles are useful for context, not for predicting a single result."
  ],
  intro: `<p>Average age is the most quoted and least informative number in squad analysis. A figure of 27 can describe a team with eleven players in their prime, or a team with three teenagers, four veterans and a handful of players in between. The two squads may share a headline number and share almost nothing else.</p>
<p>The average is not useless. It is a quick summary that can prompt a better question. The question is where the age sits: in the starting eleven or on the bench, in the positions that carry the most minutes, and in the players a club is building around.</p>`,
  sections: [
    {
      id: "why-the-average-hides-the-shape",
      heading: "Why the average hides the shape",
      html: `<p>An average compresses a distribution into one number. That is convenient for a caption and misleading for analysis. A squad with a tight cluster of players aged 25 to 29 has a different risk profile from a squad with the same average built from a mix of 20-year-olds and 34-year-olds. The first is stable; the second is a transition waiting to happen.</p>
<p>The distribution also matters because minutes are not shared equally. A 35-year-old who plays every week has more influence on the team's on-pitch age than a 35-year-old who is a backup goalkeeper. The squad list tells you who is employed. The minutes tell you who is playing.</p>`
    },
    {
      id: "peak-windows-by-position",
      heading: "Peak windows are position-specific",
      html: `<p>There is no single peak age for a footballer. Goalkeepers often mature later because the role depends on positioning, decision-making and composure, and many keep playing at a high level into their mid-thirties. Centre-backs can follow a similar pattern, especially in teams that defend in a deep shape rather than rely on recovery pace.</p>
<p>Central midfielders often combine physical capacity with tactical understanding, so their best years can span the mid-twenties to the early thirties. Wide players and full-backs who depend on repeated sprinting may peak earlier, though the best ones adapt their game. Strikers are harder to generalise: movement, finishing and link play age at different rates. The relevant question is which qualities the team asks for, not a universal age curve.</p>`
    },
    {
      id: "age-and-injury-risk",
      heading: "Age and injury risk",
      html: `<p>Older players generally recover more slowly from intense efforts and are more likely to pick up soft-tissue problems when the schedule is crowded. Younger players are not immune; their risk often comes from load management, growth and the jump in intensity between youth and senior football. The relationship between age and injury is not a simple line.</p>
<p>This is why age interacts with travel and congestion. An older squad on a long trip with three days between matches may need more rotation than a younger one. A younger squad may recover faster but perform with more variance. The <a href="/articles/travel-fatigue-football.html">guide to travel and fatigue</a> explains how to weigh the load without treating age as a verdict.</p>`
    },
    {
      id: "transition-seasons",
      heading: "Transition seasons",
      html: `<p>Squads change faster than the average suggests. A club that sells two key players, promotes three academy graduates and signs a veteran on a short contract can move from a stable peak-age group to a mixed profile in one summer. The average may barely move while the distribution changes completely.</p>
<p>Transition seasons are volatile for reasons that go beyond age. New players need time to learn the system, younger players need time to adjust, and older players may be asked to carry more leadership. The <a href="/articles/manager-impact-football.html">guide to manager impact</a> covers the coaching side of that adjustment; the age profile is the roster side.</p>`
    },
    {
      id: "minutes-weighted-age",
      heading: "Minutes-weighted age",
      html: `<p>Minutes-weighted age is simple to calculate. Multiply each player's age by his share of the team's available minutes, then add the results. A player who never plays contributes nothing. A player who plays every minute contributes his full age.</p>
<p>The measure answers a different question from the squad average: not who is on the books, but who is actually on the pitch. It can be calculated for a season, a run of matches or a single game. Comparing the two numbers is often more revealing than either one alone. If the squad average is 27 but the minutes-weighted age is 25, the younger players are carrying the load.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The two squads below are hypothetical. Both have eleven senior players and the same average age, but very different distributions.</p>
<table>
<thead><tr><th>Metric</th><th>Squad A</th><th>Squad B</th></tr></thead>
<tbody>
<tr><td>Average age</td><td>27.0</td><td>27.0</td></tr>
<tr><td>Minutes-weighted age</td><td>27.0</td><td>26.3</td></tr>
<tr><td>Share of minutes under 23</td><td>9.1%</td><td>30.0%</td></tr>
<tr><td>Share of minutes age 30 and over</td><td>27.3%</td><td>30.0%</td></tr>
</tbody>
</table>
<p>Squad A's ages are 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 and 32. The sum is 297, so the average is 297 divided by 11 = 27.0. With equal minutes for each player, the minutes-weighted age is also 27.0. One player is under 23, giving 1 divided by 11 = 9.1% of minutes, and three are 30 or over, giving 3 divided by 11 = 27.3%.</p>
<p>Squad B's ages are 20, 21, 22, 23, 24, 25, 26, 30, 34, 35 and 37. The sum is also 297, so the average is again 27.0. The minutes are not equal. The six youngest players share 60% of the minutes, the 26-year-old takes 10%, and the four oldest share 30%. The six youngest have an average age of 22.5, so their contribution is 0.60 x 22.5 = 13.5. The 26-year-old contributes 0.10 x 26 = 2.6, and the four oldest have an average of 34, contributing 0.30 x 34 = 10.2. The total is 13.5 + 2.6 + 10.2 = 26.3.</p>
<p>The identical average hides the difference. Squad B is younger where it plays and older at the tail. If the oldest four take 45% of the minutes and the six youngest take 45%, with the 26-year-old still on 10%, the weighted age becomes 0.45 x 22.5 + 2.6 + 0.45 x 34 = 10.125 + 2.6 + 15.3 = 28.0. The same squad can look a year older simply because of selection.</p>`
    },
    {
      id: "reading-the-profile",
      heading: "Reading a squad's age profile",
      html: `<p>Start with the best eleven rather than the full squad. Which positions are oldest, and which are youngest? A team with an experienced defence and a young attack has a different risk profile from the reverse. Then check the contract and development picture: which key players are approaching the end of their deals, and which young players are ready for more minutes?</p>
<p>Look at the bench as well. A squad can have a young average and an old bench, or the other way around. The <a href="/articles/squad-depth-football-prediction.html">guide to squad depth</a> explains why the quality of the replacements matters, and age is one reason a replacement may be ready now or only next season.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a squad by its average age.</strong> The average can be identical for a stable team and a heavily mixed one.</li>
<li><strong>Assuming older means wiser.</strong> Experience helps in some roles, but it does not compensate for a loss of pace or recovery.</li>
<li><strong>Assuming younger means improving.</strong> Development is nonlinear, and young players can be inconsistent under pressure.</li>
<li><strong>Ignoring minutes.</strong> A squad-list average says nothing about who is actually playing.</li>
<li><strong>Confusing the squad with the best eleven.</strong> The players who matter most are the ones the manager trusts in the biggest matches.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "What age analysis cannot tell you",
      html: `<p>Age is a proxy for physical and technical change, not a direct measurement of either. Players age at different rates, and a 34-year-old with a careful training regime can outperform a 28-year-old with a poor one. Injury history, playing style and position all complicate the picture.</p>
<p>Age curves are averages across large groups, not predictions for an individual. They can help explain why a squad may need rotation or why a transition season looks uneven. They cannot tell you which young player will break out or which veteran will decline this month. Use the profile as context, not as a forecast.</p>`
    }
  ],
  faq: [
    {
      q: "What is a good average age for a football squad?",
      a: "There is no universal answer. A range of roughly 25 to 29 is often cited as a balanced peak, but the distribution and the minutes matter more than the average. A squad with a clear development path can succeed with a very different profile."
    },
    {
      q: "Do older squads decline late in the season?",
      a: "Not automatically. Recovery, squad depth, travel and playing style all affect the pattern. An older squad with good rotation can finish strongly, while a younger squad with a thin bench can fade."
    },
    {
      q: "Is a young squad always improving?",
      a: "No. Young players develop at different rates, and results can lag behind individual progress. A young squad may also lack the experience to manage difficult moments, which is why age is only one part of the analysis."
    }
  ],
  related: ["squad-depth-football-prediction", "travel-fatigue-football", "manager-impact-football"]
};
