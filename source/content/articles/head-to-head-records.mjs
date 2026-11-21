export default {
  slug: "head-to-head-records",
  title: "Do Head-to-Head Records Matter?",
  metaTitle: "Do Head-to-Head Records Matter? A Data View",
  description: "Head-to-head records appear in every preview. Learn how sample size, squad turnover and tactical change decide whether they carry signal.",
  category: "xG and Stats",
  tags: ["head to head", "sample size", "pre-match analysis"],
  published: "2025-12-11",
  updated: "2025-12-11",
  author: "Nyasha",
  dek: "A run of results between two clubs can look like a pattern. Often it is a small sample wearing a confident coat.",
  takeaways: [
    "A head-to-head record is a selected sample, and the choice of window changes the story.",
    "Squad turnover and managerial change erode the relevance of old meetings.",
    "Venue, competition and lineups matter as much as the final scores.",
    "Head-to-head results work best as context, not as a forecast."
  ],
  intro: `<p>Open a match preview and you will usually find a line about the head-to-head record: unbeaten in seven, one win in twelve, or some other sequence presented as if it settles the question. The numbers are real, but the sentence around them often hides a choice. Someone selected a window, a competition and a set of meetings, and that selection shapes the story.</p>
<p>This guide treats the record as evidence about specific past matches, not as a property of the fixture.</p>`,
  sections: [
    {
      id: "what-the-record-measures",
      heading: "What a head-to-head record measures",
      html: `<p>At its simplest, a head-to-head record counts results between two clubs. It might include league, cup and continental matches. Each setting brings different stakes, team selection and conditions. A record that mixes them is really a record of several competitions placed in one column.</p>
<p>Three decisions shape the number you see. The first is the window: the last three meetings, the last ten, or every meeting since a particular season. The second is venue: all meetings together, or home and away separated. The third is competition: league only, or everything.</p>
<p>Those choices can produce opposite headlines from the same fixture. Club A might have won four of the last ten meetings, but only one of the last four. Neither statement is false; they answer different questions. A preview that does not state its window is asking you to trust a number without its recipe.</p>
<p>The word "unbeaten" deserves care. A team unbeaten in six may have won two and drawn four, which is a different level of performance from five wins and a draw. Counting draws properly is the first step towards reading the record honestly.</p>`
    },
    {
      id: "sample-size-problem",
      heading: "The sample size problem",
      html: `<p>Ten meetings sounds like a substantial history. In a league with two meetings a season, it represents five seasons of football. Five seasons is a long time in the life of a squad, and a short time for establishing a stable pattern between two clubs.</p>
<p>Suppose, purely as an illustration, that two evenly matched teams played ten meetings and each match behaved like a coin flip. A 6-4 split would be unremarkable. The chance of one team winning six or more of ten such contests is roughly 38 per cent. A record that looks like a clear edge can sit comfortably inside ordinary randomness.</p>
<p>Football is not a coin flip. Draws are common, home advantage matters and teams change, so the effective sample is smaller than the headline suggests. Ten meetings provide five home matches for each club, and those five may involve different managers and players.</p>
<p>When someone says a fixture has a "habit", ask what sample supports the claim. If the answer is six matches across four seasons, the habit is a story imposed on a small set of events. The same caution applies to short runs of form, as the <a href="/articles/form-streaks-misleading.html">guide to form streaks</a> explains.</p>`
    },
    {
      id: "squad-turnover",
      heading: "Squad turnover changes the teams involved",
      html: `<p>A result belongs to the eleven players who produced it, plus the substitutes who changed it. Clubs endure, but squads do not. A meeting from four seasons ago may contain only a handful of players who will start the next fixture.</p>
<p>There is a simple way to test this. Take the lineups from each meeting and count how many of those starters remain regular starters for the same club today. If the oldest meeting shares only three players with the current side, it is weak evidence about the current side. If the most recent meeting shares nine, it is stronger evidence, though still a single match.</p>
<p>Turnover is not only about departures. A young substitute may now be the main creative threat, and a new goalkeeper may have replaced the one who conceded four in an old meeting.</p>
<p>This is why a record should be read alongside transfer history and availability. The badge is the same, but the team is not, and a record between clubs is not automatically a record between the current sides.</p>`
    },
    {
      id: "tactical-continuity",
      heading: "Tactical continuity and matchup effects",
      html: `<p>Some matchups do repeat. A side that presses high against a side that struggles to play out can create the same problems season after season, and a tall, aggressive team may keep winning set-piece battles against a smaller defence. Those are mechanisms, not magic.</p>
<p>The useful question is whether the mechanism still exists. If the pressing team has replaced its front three and changed manager, the old pressure may not return. If the defence has signed a ball-playing centre-back, the weakness may have been addressed. A past result tells you that a mechanism worked once. It does not tell you that the mechanism is still in place.</p>
<p>Video and event data add more than the scoreline. Look at how the goals arrived: a high turnover, a set piece, a counterattack, a penalty. If the same route appears repeatedly, you have something concrete to examine. If the goals came from unrelated errors, the record is a scrapbook, not a pattern.</p>`
    },
    {
      id: "auditing-a-claim",
      heading: "How to audit a head-to-head claim",
      html: `<p>A short audit separates useful context from decoration. The checklist below often changes the conclusion.</p>
<ul>
<li><strong>State the window.</strong> Ask why it was chosen. A record that begins exactly when the run started is a selected sample.</li>
<li><strong>Separate competitions.</strong> Cup ties bring rotation and different incentives. League meetings are not the same test.</li>
<li><strong>Split the venues.</strong> A strong home record may say more about the ground than about the matchup.</li>
<li><strong>Check the lineups.</strong> Note how many starters from each meeting remain involved.</li>
<li><strong>Check the managers.</strong> A change of coach can remove the tactical reason for the record.</li>
<li><strong>Look at the margins.</strong> Three one-goal wins and a four-goal defeat tell a different story from four comfortable wins.</li>
<li><strong>Compare shot quality.</strong> Results can diverge from the underlying chance creation, as the example below shows.</li>
</ul>
<p>If a claim survives those checks, it may deserve a place in the preview. If not, it is still a fact, but not a finding.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table is illustrative. Club A and Club B are hypothetical, and the scores and xG values are invented.</p>
<table>
<caption>Six illustrative meetings between Club A and Club B</caption>
<thead>
<tr><th>Meeting</th><th>Venue</th><th>Score</th><th>Club A xG</th><th>Club B xG</th><th>Note</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Club A</td><td>2-1</td><td>1.4</td><td>0.9</td><td>Club A won the second half</td></tr>
<tr><td>2</td><td>Club B</td><td>0-0</td><td>1.0</td><td>0.8</td><td>Few clear chances</td></tr>
<tr><td>3</td><td>Club A</td><td>1-0</td><td>1.1</td><td>1.2</td><td>Club A scored from a set piece</td></tr>
<tr><td>4</td><td>Club B</td><td>2-0</td><td>0.7</td><td>1.5</td><td>Club B pressed high</td></tr>
<tr><td>5</td><td>Club A</td><td>3-1</td><td>1.9</td><td>1.3</td><td>Open game, late goals</td></tr>
<tr><td>6</td><td>Club B</td><td>1-1</td><td>0.9</td><td>1.2</td><td>Club B equalised late</td></tr>
</tbody>
</table>
<p>Club A has three wins, two draws and one defeat, which is 11 points from a possible 18. Club B has one win, two draws and three defeats, which is 5 points. On the surface, the record favours Club A clearly: 11 divided by 6 gives 1.83 points per meeting for Club A, against 0.83 for Club B.</p>
<p>The shot quality tells a quieter story. Club A's xG totals add to 7.0 across the six meetings, and Club B's add to 6.9. Per meeting, that is 1.17 against 1.15. The results separated, but the chance creation was almost level. That does not prove Club A was lucky, but it suggests the points gap is a fragile basis for a strong claim about the next match.</p>
<p>The window matters too. Over the last three meetings, Club A has one win, one draw and one defeat, which is 4 points from 9. Over the first three, Club A had 7 points from 9. A preview can choose either section and set a different tone.</p>
<p>Venue adds another layer. All three of Club A's wins came at home. Away from home, Club A drew two and lost one. If the next fixture is at Club B, the home split is more relevant than the aggregate. The record is not useless, just conditional. The <a href="/articles/home-away-splits.html">guide to home and away splits</a> covers those samples.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<p><strong>Choosing the window after seeing the answer.</strong> If the run starts at the most convenient meeting, the record is a conclusion in search of evidence. State the window first.</p>
<p><strong>Treating draws as wins or as nothing.</strong> An unbeaten run can contain many draws. A record of two wins and four draws is not the same as five wins and one draw.</p>
<p><strong>Mixing competitions without saying so.</strong> A cup tie with rotated lineups can distort a league record, so keep competitions visible or separate.</p>
<p><strong>Ignoring venue.</strong> Home advantage is not a fixed bonus, but an aggregate record can hide very different home and away patterns.</p>
<p><strong>Reading the badge instead of the team.</strong> Players and managers change. A record from before a rebuild says little about the rebuilt side.</p>
<p><strong>Using xG as a verdict.</strong> Expected goals is an estimate from a model, not a judgement on who deserved to win. It can support the record but does not replace the result.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>A head-to-head record cannot predict a football match. It describes a handful of past events, selected by someone, involving teams that have changed. Even a long record is a small sample, and football's low-scoring nature makes results noisy.</p>
<p>It also cannot capture injuries, travel, motivation, weather, referee decisions or the random bounce of the ball. Those factors are part of the game, not footnotes.</p>
<p>Used carefully, a record can point you towards a mechanism worth checking, such as a set-piece mismatch or a pressing problem. Used loosely, it becomes a story that sounds like analysis. The difference is whether you can explain why the pattern exists, and whether the conditions that produced it are still present.</p>`
    }
  ],
  faq: [
    {
      q: "How many meetings are needed before a head-to-head record means something?",
      a: "No clean threshold exists. Ten meetings is a reasonable starting point for description, but it is still a small sample that may span several squads. Treat the record as weak evidence unless the same players and tactical mechanism remain."
    },
    {
      q: "Should I ignore head-to-head records completely?",
      a: "No. They can be useful context, especially when a matchup keeps producing the same type of chance or problem. The mistake is to treat the record as a forecast rather than a clue that needs a mechanism."
    },
    {
      q: "Does a strong head-to-head record give one team an advantage?",
      a: "Not by itself. Confidence and familiarity may matter, but those effects are hard to measure. Current squad quality, availability, tactics and venue explain more."
    }
  ],
  related: ["form-streaks-misleading", "cognitive-biases-football-prediction", "pre-match-analysis-guide"]
};
