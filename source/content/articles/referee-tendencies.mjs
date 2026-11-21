export default {
  slug: "referee-tendencies",
  title: "Referee Tendencies in Football Analysis",
  metaTitle: "Referee Tendencies in Football Analysis",
  description: "Referee tendencies add small context, not a verdict. Learn how card rates, penalty rates and added time work, and where the sample stops being useful.",
  category: "Tactics",
  tags: ["referees", "cards", "penalties", "match context"],
  published: "2026-07-13",
  updated: "2026-07-13",
  author: "Nyasha",
  dek: "A referee's record is a description of past matches, not a prediction of the next one. The useful questions are about context, sample size and the decisions that leave a trace.",
  takeaways: [
    "Referee card and penalty rates are small samples and vary with the teams involved.",
    "A referee's style is a tendency, not a fixed rule that overrides the match situation.",
    "Added time and game management affect the shape of the closing stages.",
    "Use referee context as a minor adjustment, never as the centre of an analysis."
  ],
  intro: `<p>Referees are part of the match, but they are not a seventh defender. They influence the game through decisions, communication and the way they manage time, yet the size of that influence is easy to exaggerate. A referee who shows eight cards in one bad-tempered match is remembered as strict; the same official may have shown two cards in each of his previous five games.</p>
<p>That gap between memory and evidence is the reason referee analysis needs discipline. The aim is not to build a profile that claims to know what will happen. It is to understand the small, real ways a referee can change the conditions of a match.</p>`,
  sections: [
    {
      id: "what-referee-data-can-show",
      heading: "What referee data can show",
      html: `<p>The most common referee statistics are cards per match, penalties per match and added minutes per match. Each is a count divided by a number of matches. Each is a description of what happened, not a measure of what the referee intended.</p>
<p>Cards depend on the teams. A referee who officiates matches involving physical, high-fouling sides will record more cards than one who works with technical teams. Penalties depend on how often defenders dive in, how often attackers enter the box, and how the referee interprets contact. Added time depends on stoppages, substitutions, injuries and the score.</p>
<p>This does not make the numbers meaningless. Over a large sample, a referee's rates can reveal a consistent approach to contact, dissent or time management. The key word is large. A dozen matches is a starting point, not a settled profile.</p>`
    },
    {
      id: "cards-are-a-product-of-context",
      heading: "Cards are a product of context",
      html: `<p>A card is a decision about an event. The event matters: a tactical foul in the middle of the pitch is different from a reckless lunge in the box. The context matters too: the score, the temperature of the match, the crowd and the referee's earlier decisions all shape what feels like a card.</p>
<p>Referees often try to keep the game calm. An early card can raise the temperature; a quiet word can lower it. Card counts therefore do not rise in a straight line with the number of fouls. A referee may tolerate more contact in a derby to avoid a procession of cards, or clamp down early to prevent the match from escalating.</p>
<p>For analysis, separate the types of card. Second yellows, straight reds, dissent and time-wasting are different behaviours. A referee with a high total may simply be strict about dissent, which has little to do with how he judges tackles. Our guide to <a href="/articles/tactical-matchups-vs-reputation.html">tactical matchups</a> explains why that distinction matters when two teams meet.</p>`
    },
    {
      id: "penalties-and-the-limits-of-rate",
      heading: "Penalties and the limits of rate",
      html: `<p>Penalty rates are even noisier than card rates. A penalty is a rare event, and a single match can contain two or three. A referee with seven penalties in twenty matches may have had one chaotic afternoon that accounts for a third of the total.</p>
<p>The rate is still worth noting, provided it is read as a count per match rather than a prediction. Four penalties in twenty matches is 0.2 per match, or roughly one every five games. Seven in twenty is 0.35 per match, or roughly one every three. The difference sounds large, but the samples are small enough that a couple of decisions could reverse the comparison.</p>
<p>Penalty decisions also depend on the defender. A team that commits late tackles in the box will concede more penalties regardless of the referee. If a referee's rate is high and the teams in front of him are reckless, the analyst has to decide which explanation is doing the work. The answer is usually a mixture.</p>`
    },
    {
      id: "added-time-and-game-management",
      heading: "Added time and game management",
      html: `<p>Added time is the most visible form of game management. A referee who adds six minutes to a match with several injuries and substitutions is not necessarily more generous than one who adds three. The amount added is a response to the time lost.</p>
<p>Still, the pattern matters for late-game analysis. A longer added period gives a chasing team more time to attack and a defending team more time to hold on. It also increases the number of set pieces, which is why referee context can connect to <a href="/articles/set-pieces-football-prediction.html">set-piece analysis</a>.</p>
<p>Communication is part of the same picture. A referee who explains decisions quickly can keep the match moving; one who allows long protests can add time without adding much football. Neither behaviour is captured by a simple average, so watch the closing stages of a few matches before drawing conclusions.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. Referees A, B and C are hypothetical officials, and the matches involve hypothetical clubs such as Club A and Club B.</p>
<table>
<thead><tr><th>Referee</th><th>Matches</th><th>Cards</th><th>Cards per match</th><th>Penalties</th><th>Penalties per match</th><th>Added minutes per match</th></tr></thead>
<tbody>
<tr><td>A</td><td>20</td><td>78</td><td>3.9</td><td>4</td><td>0.20</td><td>5.6</td></tr>
<tr><td>B</td><td>20</td><td>52</td><td>2.6</td><td>7</td><td>0.35</td><td>4.8</td></tr>
<tr><td>C</td><td>12</td><td>60</td><td>5.0</td><td>2</td><td>0.17</td><td>5.9</td></tr>
</tbody>
</table>
<p>The rates come from simple division: 78 divided by 20 equals 3.9 cards per match, 52 divided by 20 equals 2.6, and 60 divided by 12 equals 5.0. For penalties, 4 divided by 20 equals 0.20, 7 divided by 20 equals 0.35, and 2 divided by 12 equals 0.17.</p>
<p>On the raw numbers, Referee C looks the strictest. But C has only twelve matches, and one match with eight cards can lift the average sharply. Suppose one of C's matches had produced no cards at all instead of eight. The total would fall from 60 to 52, and the average from 5.0 to 4.3, a swing of 0.7 cards per match from a single fixture. That is a large share of the difference between the officials.</p>
<p>Referee B has the highest penalty rate, but seven penalties in twenty matches could include one match with three. Remove two of those penalties and the rate falls to 0.25, close to A. The ordering is fragile. That fragility is the main lesson: referee profiles are useful for raising questions, not for ranking officials with confidence.</p>`
    },
    {
      id: "applying-referee-context",
      heading: "Applying referee context",
      html: `<p>Referee context belongs near the end of a pre-match analysis, after the teams, the styles and the availability have been considered. It can adjust a small part of the picture: the likelihood of a stop-start match, the number of set pieces, the risk of a card changing a team's shape.</p>
<p>A practical approach is to write two notes. One records the referee's observed rate over a defined sample. The other captures the context that might explain it: the teams involved, the competition, the stage of the season. If the two notes point in the same direction, the adjustment is slightly stronger. If they conflict, keep the adjustment small or leave it out.</p>
<p>Our <a href="/articles/pre-match-analysis-guide.html">pre-match analysis guide</a> places referee context in a wider checklist, which helps prevent it from becoming the tail that wags the dog. A referee can shape a match, but he rarely determines it on his own.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a referee as a fixed type.</strong> "Strict" and "lenient" are summaries, not identities. The same official can manage different matches differently.</li>
<li><strong>Ignoring the teams.</strong> Card and penalty rates are partly a product of the players on the pitch. A physical matchup will produce more incidents.</li>
<li><strong>Using a tiny sample.</strong> A dozen matches can be dominated by one unusual game. Show the sample size whenever you quote a rate.</li>
<li><strong>Letting the referee dominate the forecast.</strong> Referee effects are small compared with team quality, tactics and availability. Keep the adjustment proportional.</li>
</ul>`
    },
    {
      id: "limits-and-the-risk-of-stereotyping",
      heading: "Limits and the risk of stereotyping",
      html: `<p>Referee analysis carries a risk that other football metrics do not: it can slide into stereotyping. A label based on a handful of matches can follow an official for years, even after the evidence changes. That is unfair to the referee and unhelpful for the analyst.</p>
<p>The honest position is modest. Referees have tendencies, those tendencies can be observed, and their effect on a match is usually smaller than the effect of the teams. Use the data to ask better questions about discipline, set pieces and late-game management. Do not use it to claim certainty about a decision that has not happened yet.</p>`
    }
  ],
  faq: [
    {
      q: "Do referees consistently show more cards than others?",
      a: "Some do over large samples, but the differences are partly explained by the teams they officiate and the competitions they work in. A dozen matches is not enough to establish a stable style."
    },
    {
      q: "Should referee tendencies change a match estimate?",
      a: "Only slightly. Referee effects are small relative to team quality, tactics and availability. A modest adjustment for discipline or set-piece volume is reasonable; a large swing is not."
    },
    {
      q: "How should I handle added time in analysis?",
      a: "Treat it as extra variance rather than a fixed bonus. A longer added period gives both teams more opportunity, and the effect depends on the score and the shape of the game."
    }
  ],
  related: ["set-pieces-football-prediction", "pre-match-analysis-guide", "tactical-matchups-vs-reputation"]
};
