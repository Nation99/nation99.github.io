export default {
  slug: "manager-impact-football",
  title: "How Managers Change Team Performance",
  metaTitle: "Manager Impact: How Coaches Change Team Performance",
  description: "How managers change team performance through tactics, rotation and training, and how to evaluate them beyond win rate.",
  category: "Tactics",
  tags: ["managers", "coaching", "team performance", "analysis"],
  published: "2026-09-17",
  updated: "2026-09-17",
  author: "Nyasha",
  dek: "A manager can change the shape, the selection and the preparation of a team. What a manager cannot do is control finishing, injuries or luck, which is why judging the job requires more than a win rate.",
  takeaways: [
    "Managers influence process more directly than they influence finishing.",
    "The new-manager bounce is partly regression and partly fixture context.",
    "Tactical changes need time and the right players to become visible.",
    "Rotation and squad use are part of a manager's impact.",
    "Evaluate managers against resources, schedule and underlying performance."
  ],
  intro: `<p>Managers are hired to change outcomes and sacked when outcomes do not change quickly enough. The awkward question is how much of either is attributable to them. A coach can set the shape, choose the players, design the training week and decide when to make a substitution. He cannot take the shot, make the save or prevent a defender from slipping at the wrong moment.</p>
<p>That does not make management unimportant. It makes the analysis conditional. The useful question is not simply whether results improved, but which parts of the team's performance changed, how quickly, and whether the change is likely to persist.</p>`,
  sections: [
    {
      id: "what-a-manager-controls",
      heading: "What a manager actually controls",
      html: `<p>The direct levers are selection, shape, training content, set-piece routines, substitutions and the way the team manages a game state. A manager can decide to press higher, defend deeper, use a back three or ask a full-back to invert. He can give a young player a run of starts or protect a veteran in a congested week.</p>
<p>Indirect levers include motivation, confidence and the standards of the dressing room. These are real but hard to measure, and they are easily confused with the result. A manager whose team wins is described as a strong motivator; the same behaviour after a defeat is described as strained. Recruitment is another influence, though the split between coach, sporting director and board varies by club.</p>
<p>What remains outside the manager's control is substantial: finishing quality, injuries, refereeing decisions, the budget and the opponent. A manager can improve the probability of good outcomes, not ensure them.</p>`
    },
    {
      id: "the-new-manager-effect",
      heading: "The new-manager effect",
      html: `<p>The idea of a bounce is intuitive. A new voice raises intensity, players want to impress and the atmosphere changes. There is often a short-term improvement in results, but the explanation is not always coaching. New managers tend to arrive after a poor run, when results were below the team's underlying performance. Some of the recovery is simply regression toward the mean.</p>
<p>Fixture difficulty matters too. A manager who starts with three home matches against lower-half opponents will look better than one who inherits a run against the strongest teams. The sample is usually too small to separate the bounce from the schedule. Treat the first ten matches as a provisional signal, not a verdict on the appointment.</p>`
    },
    {
      id: "implementation-takes-time",
      heading: "Implementation takes time",
      html: `<p>A tactical idea has to be taught before it can be judged. A pre-season appointment gives a manager weeks of training, friendly matches and squad conversations. A mid-season appointment gives him a few sessions between fixtures, with the next result always close. The same idea can look incoherent in October and obvious in February.</p>
<p>Player fit is part of the delay. A manager who wants high pressing needs mobile forwards and a squad comfortable defending in open space. A manager who wants controlled possession needs midfielders who can receive under pressure. The <a href="/articles/tactical-matchups-vs-reputation.html">guide to tactical matchups</a> explains why the fit between idea and personnel matters more than the reputation of the system.</p>`
    },
    {
      id: "rotation-and-trust",
      heading: "Rotation and trust",
      html: `<p>Rotation is one of the clearest areas where managers differ. Some coaches keep a small core and use the bench to change games; others rotate proactively to protect minutes. The choice affects the team's freshness, the development of younger players and the mood of the squad. It also affects the accuracy of pre-match estimates, because the lineup is less predictable.</p>
<p>A manager with a deep squad has more options, but options are not the same as decisions. Using the bench well requires judging which players can enter a match without breaking the structure. The <a href="/articles/squad-depth-football-prediction.html">guide to squad depth</a> covers the supply side; the manager decides how to spend it.</p>`
    },
    {
      id: "beyond-win-rate",
      heading: "Evaluating beyond win rate",
      html: `<p>Win rate is a noisy summary. It depends on the quality of the squad, the strength of the opposition, the number of matches and the variance of finishing. A manager can produce a good process and a mediocre record, or a poor process and a flattering one. Neither is stable forever.</p>
<p>Look at expected goals for and against, the balance between attack and defence, and the way the team behaves in different game states. Does it create chances when chasing a goal? Does it protect a lead without collapsing? How does it perform against stronger opponents? These questions are more informative than a single league position, especially over a short spell.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The records below are illustrative and describe two hypothetical managers at the same club, each with ten matches in charge. The xG figures are also illustrative.</p>
<table>
<thead><tr><th>Metric</th><th>Manager A</th><th>Manager B</th></tr></thead>
<tbody>
<tr><td>Points</td><td>17</td><td>16</td></tr>
<tr><td>Wins, draws, losses</td><td>5, 2, 3</td><td>4, 4, 2</td></tr>
<tr><td>Goals for</td><td>14</td><td>15</td></tr>
<tr><td>Goals against</td><td>11</td><td>9</td></tr>
<tr><td>xG for</td><td>14.2</td><td>16.8</td></tr>
<tr><td>xG against</td><td>10.8</td><td>9.2</td></tr>
<tr><td>xG difference per match</td><td>+0.34</td><td>+0.76</td></tr>
<tr><td>Opponents' average points per match</td><td>1.50</td><td>1.20</td></tr>
</tbody>
</table>
<p>Manager A took 17 points from 10 matches, or 1.70 per match. Manager B took 16, or 1.60 per match. On the headline measure, A is marginally ahead. The goal differences are +3 for A and +6 for B, and the expected-goals differences are +3.4 and +7.6 over the ten matches.</p>
<p>The context complicates the comparison. Manager A faced opponents averaging 1.50 points per match, while Manager B faced opponents averaging 1.20. B's stronger underlying numbers came against a softer schedule, so the apparent process advantage is smaller than the raw xG gap suggests. A's points came against tougher opposition, but his team also conceded more chances.</p>
<p>Ten matches is far too short to settle the question. A single deflected shot or penalty decision could reverse the points difference. The example is useful because it shows how a win-rate comparison can mislead in both directions: A looks better on points, B looks better on process, and the schedule explains part of the gap. The honest conclusion is that both records are provisional.</p>`
    },
    {
      id: "assessing-in-context",
      heading: "Assessing a manager in context",
      html: `<p>Start with the resources. A manager working with a top-three budget is expected to produce a top-three team; a manager keeping a promoted club clear of relegation may be doing a better job with less. That does not make every table position meaningful, but it prevents lazy comparisons between clubs with different constraints.</p>
<p>Then consider the squad's age profile, the injury record and the competition priorities. A cup run can be a misleading signal if it came from a favourable draw, and a league position can flatter a team that has been lucky in close games. The <a href="/articles/cup-vs-league-football.html">guide to cup versus league football</a> explains why the two formats ask different questions of the same squad.</p>
<p>Finally, look at direction of travel. Is the team creating more than it did six months ago? Are younger players getting meaningful minutes? Is the style becoming more coherent? Those are slower signals than results, but they are more likely to persist.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging a manager on win rate alone.</strong> Results are noisy and depend on the squad, the schedule and finishing.</li>
<li><strong>Believing every new-manager bounce is coaching.</strong> Some of the improvement is regression from a poor run.</li>
<li><strong>Using a ten-match sample as proof.</strong> Short spells are dominated by variance and fixture difficulty.</li>
<li><strong>Crediting the manager for finishing.</strong> Conversion is partly skill and partly noise, and it can change without a tactical shift.</li>
<li><strong>Ignoring the inherited squad.</strong> A manager may need a transfer window before the idea can be judged fairly.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "What manager analysis cannot tell you",
      html: `<p>Training sessions, team talks, dressing-room relationships and individual conversations are largely invisible. Recruitment is shared with other departments, and the board's decisions shape the squad as much as the coach's. A manager's impact is also entangled with the quality of the players, the schedule and the club's resources.</p>
<p>There is no single metric that isolates management. The best approach is to combine observable tactics, selection patterns, underlying performance and context, then state a provisional view. Manager impact is real, but it is not a number that can be read off a league table.</p>`
    }
  ],
  faq: [
    {
      q: "How long does a manager need to make an impact?",
      a: "There is no fixed period. A pre-season appointment can show structural changes within a few months, while a mid-season appointment may need longer. Ten to twenty matches is a reasonable window for a provisional view, not a final judgement."
    },
    {
      q: "Do new managers always improve results?",
      a: "No. Some teams improve, some stay the same and some get worse. The bounce is partly a real change in intensity and partly regression from a poor run. Fixture difficulty and sample size make short records unreliable."
    },
    {
      q: "How can I evaluate a manager beyond win rate?",
      a: "Look at expected goals, chance creation and concession, game-state behaviour, rotation, player development and the resources available. Compare the team with its own past and with clubs in a similar position, not just with the league table."
    }
  ],
  related: ["tactical-matchups-vs-reputation", "squad-depth-football-prediction", "cup-vs-league-football"]
};
