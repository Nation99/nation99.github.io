export default {
  slug: "var-impact-analysis",
  title: "VAR and Match Analysis: What Changed",
  metaTitle: "VAR and Match Analysis: What Changed",
  description: "VAR changed penalties, offsides, added time, and game state. Learn why old baselines mislead and how to compare pre-VAR and VAR eras.",
  category: "Leagues",
  tags: ["VAR", "refereeing", "match analysis", "added time"],
  published: "2026-11-30",
  updated: "2026-11-30",
  author: "Nyasha",
  dek: "VAR changed more than the number of penalties. It changed how long matches last, when goals count, and how teams behave after a decision.",
  takeaways: [
    "VAR affects both the number of decisions and the way a match unfolds after them.",
    "Penalty and offside effects are small in goals per match, but they cluster in high-leverage moments.",
    "Added time has risen, extending the period in which late goals can arrive.",
    "Rule changes inside the VAR era matter as much as VAR itself, so one cut-off date is rarely enough.",
    "Compare eras with per-match rates, clear samples, and process measures kept separate from outcomes."
  ],
  intro: `<p>Video assistant referees were introduced to reduce clear and obvious errors. The scope was narrow at first: goals, penalty decisions, direct red cards, and mistaken identity. The effect has not stayed narrow: reviews change the score, the clock, and the risk each team is willing to take.</p>
<p>That makes the pre-VAR and VAR eras awkward to compare. A penalty average built from 2014 matches may not describe 2024, and a single cut-off date can hide rule changes that arrived after VAR. The analytical problem is deciding which differences matter, by how much, and for which question.</p>
<p>This guide covers penalties, offsides, added time, and game state, then sets out a practical way to analyse matches across the two eras.</p>`,
  sections: [
    {
      id: "what-var-changes",
      heading: "What VAR actually changes",
      html: `<p>VAR can review four categories of decision: goals, penalties, direct red cards, and mistaken identity. Some reviews are initiated by the referee on the pitch; others are checked silently by the video team. The threshold is usually described as clear and obvious error, a judgement rather than a measurement.</p>
<p>The system also changes the match environment. Reviews take time, players wait, and the referee may change a decision after watching a screen. A review that confirms the original call can still disrupt rhythm.</p>
<p>Adoption has been staggered. Some leagues introduced VAR in 2018, others later, and protocols differ. Pooling every league into one VAR group mixes several treatments.</p>
<p>VAR is not the only change in the period. Handball interpretations, added-time enforcement, substitution rules, and offside technology have all moved, so any comparison needs to separate them where possible.</p>`
    },
    {
      id: "penalties",
      heading: "Penalties: a modest shift, not a revolution",
      html: `<p>Penalty awards rose in many leagues after VAR, but the size and timing of the increase varied. Part of the rise came from reviews catching clear errors. Part came from a stricter handball interpretation that coincided with the early VAR years. Separating the two is difficult.</p>
<p>Conversion has been more stable, generally sitting in the high seventies as a percentage across large samples. A penalty is still a single event with a goalkeeper, a taker, and a pressure context. A team with five penalties in ten matches has a small sample, and its conversion can swing without any change in skill.</p>
<p>The effect on goals is smaller than the debate suggests. Five extra penalties per hundred matches at about 79 per cent is roughly four extra penalty goals per hundred, or 0.04 per match. That is real, but small beside a total near 2.7 goals per match.</p>
<p>Timing matters more than the average. A penalty at 0-0 in the 20th minute changes the game differently from one at 2-2 in the 90th. Our guide to <a href="/articles/penalty-analysis.html">penalty analysis</a> covers conversion and sample-size limits, while the guide to <a href="/articles/referee-tendencies.html">referee tendencies</a> explains why penalty rates need context.</p>`
    },
    {
      id: "offsides-and-added-time",
      heading: "Offsides, added time, and match length",
      html: `<p>Offside is where VAR most visibly changes outcomes. Tight calls can now be reviewed frame by frame, and goals are disallowed for margins that would have been invisible in real time. Semi-automated offside systems have reduced some delays, but marginal cases remain.</p>
<p>The net effect on goals is less obvious than the number of disallowed goals suggests. A review can remove a goal that was wrongly allowed as well as one that was wrongly awarded, and more accurate decisions may allow goals that a flag would have cancelled. The direction depends on the balance of errors before VAR.</p>
<p>Added time has moved more clearly. Around 2022-23, several competitions began counting stoppages for substitutions, injuries, celebrations, and reviews more strictly. Matches became longer, with some finishing near 99 minutes instead of 94.</p>
<p>That extra time is not neutral. More minutes mean more chances for a late goal, more fatigue, and more space as teams chase a result. It also changes per-90 rates: 3 per cent more minutes can lift raw goal counts without improving the rate. Record match length rather than assuming 90 minutes.</p>
<p>VAR contributes to added time, but it is not the only cause. Substitutions, injuries, celebrations, and time-wasting all count. Attributing the whole increase to VAR overstates its role.</p>`
    },
    {
      id: "game-state",
      heading: "Game state after a review",
      html: `<p>A VAR decision is not just a decision. It is a state transition. A goal becomes a goal kick, a penalty is awarded or removed, a red card appears or disappears. Both teams then adjust to a new score, a new clock, and sometimes a new man advantage.</p>
<p>Those adjustments can dominate the raw numbers. A team that has a goal disallowed may push forward and accumulate possession and shots in the next ten minutes. A team that is awarded a penalty may drop deeper to protect the lead. The totals after the review describe the response to the decision as much as the decision itself.</p>
<p>This is why game state belongs in any VAR analysis. A review in a 0-0 match is a different event from one in a settled 3-0 match.</p>
<p>Our guide to <a href="/articles/game-state-analysis.html">game state and tactical change</a> explains how score effects shape possession, pressing, and chance creation. The same logic applies after a review, with the clock also moved.</p>`
    },
    {
      id: "why-old-baselines-mislead",
      heading: "Why old baselines mislead",
      html: `<p>Old baselines are not useless, but they answer a different question. A pre-VAR penalty rate describes a game without video reviews, under the handball interpretation and added-time conventions of that time. Using it for a modern match assumes those conditions still hold.</p>
<p>The break is not always sharp. Some leagues adopted VAR midway through a season, some used it only in certain competitions, and early seasons had technical problems and long delays. A clean split may not exist in the data.</p>
<p>Recording conventions add another layer. Providers differ on whether added time is included, how own goals are assigned, and whether a penalty rebound counts as a separate shot. Mixing providers can manufacture an accounting difference.</p>
<p>There is also a selection issue. The clubs, tactical styles, and share of matches involving dominant teams may differ between eras. Before-and-after comparisons describe the whole package, not an isolated VAR effect.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is invented for teaching. It compares two hypothetical samples of 400 matches, one before VAR and one later, with rates per 100 matches. The numbers do not represent any real league.</p>
<div class="table-wrap">
<table>
<caption>Invented pre-VAR and VAR-era rates per 100 matches</caption>
<thead><tr><th>Measure</th><th>Pre-VAR</th><th>VAR era</th><th>Difference</th></tr></thead>
<tbody>
<tr><td>Penalties awarded</td><td>22</td><td>27</td><td>+5</td></tr>
<tr><td>Penalty conversion</td><td>77%</td><td>79%</td><td>+2 points</td></tr>
<tr><td>Goals disallowed</td><td>2</td><td>8</td><td>+6</td></tr>
<tr><td>Offside goals allowed</td><td>5</td><td>2</td><td>-3</td></tr>
<tr><td>Red cards</td><td>6.0</td><td>6.5</td><td>+0.5</td></tr>
<tr><td>Added time per match</td><td>4.2 min</td><td>6.9 min</td><td>+2.7 min</td></tr>
<tr><td>Goals from the 90th minute</td><td>8</td><td>11</td><td>+3</td></tr>
<tr><td>Total goals per match</td><td>2.65</td><td>2.72</td><td>+0.07</td></tr>
</tbody>
</table>
</div>
<p>The penalty rows show a real but modest effect. Twenty-two penalties at 77 per cent produce about 16.9 goals per 100 matches; twenty-seven at 79 per cent produce about 21.3. The difference is roughly 4.4 goals per 100, or 0.04 per match. A single penalty can feel decisive, but the league average moves slowly.</p>
<p>The disallowed-goal rows are harder to read. Six more goals are disallowed per 100 matches, while three fewer offside goals are allowed. If those categories overlapped perfectly, the net would be three fewer goals per 100, or 0.03 per match. They do not, because a disallowed goal can be ruled out for a foul or handball. The table is a set of counts, not a clean accounting identity.</p>
<p>Added time is the largest change. An extra 2.7 minutes is about 3 per cent more match time, consistent with a small rise in total goals. The late-goal row rises by three per 100, but that is a small count and should not be treated as precise. The overall picture is a modest shift in the number and timing of goals.</p>`
    },
    {
      id: "analysing-across-eras",
      heading: "How to analyse across the eras",
      html: `<p>Start by defining the eras around rule changes, not just the date VAR arrived. Added-time enforcement in 2022 was a separate break, and handball interpretation in 2019 was another. A timeline with several markers is more honest than a single split.</p>
<p>Use rates rather than raw totals. Penalties per 100 matches, goals per 90 minutes, and disallowed goals per 100 are easier to compare than season totals. Report the sample size and uncertainty, especially for rare events such as red cards and penalty rebounds.</p>
<p>Keep process and outcome separate. Shots, expected goals, and box entries describe chance creation; goals and penalty awards describe outcomes. A change in penalty awards may show up in goals without any change in open-play chance quality.</p>
<p>Finally, describe the difference as an association. Before-and-after data can show that rates moved, but it cannot isolate VAR from concurrent rule changes, squad turnover, and tactical trends. A pattern that replicates across leagues is stronger evidence. That is a reason to phrase conclusions carefully, not to ignore the data.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Using one cut-off date.</strong> VAR arrived at different times, and other rules changed inside the era. A single split can mix treatments.</li>
<li><strong>Comparing raw season totals.</strong> Different match counts and longer matches distort totals. Use per-match or per-90 rates.</li>
<li><strong>Ignoring added time.</strong> More minutes mean more chances for late goals. A rise in raw goals may be a rise in exposure rather than a rise in rate.</li>
<li><strong>Blaming VAR for every change.</strong> Handball interpretation, substitution rules, and timekeeping directives all moved in the same period.</li>
<li><strong>Overreading small counts.</strong> Red cards and penalty rebounds are rare. A difference of a few events per 100 matches is compatible with noise.</li>
</ul>`
    }
  ],
  faq: [
    {
      q: "Did VAR increase the number of penalties?",
      a: "Penalty awards rose in many leagues after VAR, but the increase was modest and varied. Handball interpretation and review thresholds make it hard to attribute the whole rise to VAR."
    },
    {
      q: "Does VAR reduce the number of goals?",
      a: "There is no simple answer. More goals are disallowed, but more accurate offside decisions can also allow goals that would previously have been flagged. Longer added time and more penalties push the other way. The net effect is small and competition-specific."
    },
    {
      q: "Can pre-VAR data still be used in analysis?",
      a: "Yes, but with care. Pre-VAR data remains useful for style, chance creation, and many tactical questions. Baselines for penalties, disallowed goals, added time, and late goals should be recalculated for the era you are studying."
    }
  ],
  related: ["referee-tendencies", "game-state-analysis", "penalty-analysis"]
};
