export default {
  slug: "elo-ratings-football",
  title: "Elo Ratings in Football Explained",
  metaTitle: "Elo Ratings in Football Explained",
  description: "Elo ratings turn results into a single strength score. Learn how football Elo works, how to read it, and why it is not a prediction.",
  category: "xG and Stats",
  tags: ["Elo", "team ratings", "team strength", "prediction"],
  published: "2026-11-22",
  updated: "2026-11-22",
  author: "Nyasha",
  dek: "Elo is a simple, transparent way to rate teams from results. Its strength is also its limit: it knows who won, not how well they played.",
  takeaways: [
    "Elo turns results into a relative strength rating that updates after every match.",
    "The expected score comes from the rating gap, not from a fixed league table.",
    "A win over a strong team moves a rating more than a win over a weak team.",
    "Elo is results-based, so it can miss good performances that did not produce points.",
    "Ratings from different systems are not directly comparable without a shared scale."
  ],
  intro: `<p>Elo is one of the oldest and most durable ideas in sports rating. Football adapted it from chess because the same problem applies: how do you compare teams that play different schedules and beat different levels of opposition?</p>
<p>The appeal is transparency. An Elo rating is not a black box. It moves after every match according to a formula you can inspect, and the size of the move depends on the result and the opponent. That makes it a useful teaching tool, and a useful check on more complex models.</p>
<p>The limitation is equally clear. Elo knows who won, drew, or lost. It does not know how many chances were created, how well the goalkeeper played, or whether a red card changed the game. A rating built only from results is a summary of outcomes, not a complete description of performance.</p>`,
  sections: [
    {
      id: "what-elo-measures",
      heading: "What Elo measures",
      html: `<p>An Elo rating is a relative strength score. A team with a higher rating is expected to score more points against a team with a lower rating. The rating does not have an absolute meaning. A score of 1600 is not good or bad on its own; it only matters in relation to the teams around it.</p>
<p>The system updates after every match. A team that wins gains rating points, and the opponent loses the same amount. A draw moves fewer points, and the exact movement depends on the gap between the teams. A heavy favourite that wins gains little; a heavy underdog that wins gains a lot.</p>
<p>This is why Elo is often described as a zero-sum system. Every point gained by one team is lost by another. The total rating in a closed league stays roughly constant, apart from new teams or adjustments. The rating is a way of redistributing credibility based on results.</p>
<p>Football Elo systems often add refinements. They may adjust for home advantage, weight competitions differently, or use goal difference to decide how much a result should move the rating. Those choices matter, and two systems with different rules will produce different numbers.</p>`
    },
    {
      id: "how-football-elo-works",
      heading: "How football Elo works",
      html: `<p>The core formula starts with the rating gap. If Team A is rated 1600 and Team B is rated 1500, the gap is 100 points. The expected score for Team A is:</p>
<p><strong>Expected score = 1 / (1 + 10^((rating B - rating A) / 400))</strong></p>
<p>With a 100-point gap, the expected score is about 0.64. In Elo, the expected score is not a win probability in the narrow sense. It is the average score, where a win counts as 1, a draw as 0.5, and a loss as 0. A 0.64 expected score could mean a 64 per cent chance of winning with no draws, or a mix of wins and draws. Football needs a separate draw model if you want a three-way probability.</p>
<p>After the match, the rating changes by:</p>
<p><strong>Change = K x (actual score - expected score)</strong></p>
<p>K is a sensitivity constant. A larger K makes ratings react faster to recent results. A smaller K makes them more stable. Many football systems use a K around 20 for club matches, with adjustments for competition level and goal difference.</p>
<p>Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains a different kind of rating, one based on chance quality rather than results. The two approaches answer different questions, which is why they are useful together.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. Team A starts at 1600, Team B at 1500, and K is 20. The expected score for Team A is 0.64, so the update depends on what actually happens.</p>
<table>
<caption>Elo update after one match, K = 20</caption>
<thead><tr><th>Result</th><th>Actual score</th><th>Expected score</th><th>Change</th><th>New rating</th></tr></thead>
<tbody>
<tr><td>Team A wins</td><td>1.00</td><td>0.64</td><td>+7.2</td><td>1607.2</td></tr>
<tr><td>Draw</td><td>0.50</td><td>0.64</td><td>-2.8</td><td>1597.2</td></tr>
<tr><td>Team A loses</td><td>0.00</td><td>0.64</td><td>-12.8</td><td>1587.2</td></tr>
</tbody>
</table>
<p>The asymmetry is the point. A win adds less than a loss subtracts because Team A was expected to do well. Team B's rating moves in the opposite direction by the same amount. If Team B wins, it gains 12.8 points and Team A loses 12.8.</p>
<p>Now suppose Team A is the home side. A simple football adjustment is to add a fixed number of rating points to the home team before calculating the expected score, or to include a home-field term in the model. If the adjustment is 50 points, Team A's effective rating is 1650 and the expected score rises to about 0.70. The same result then produces a smaller gain. Our article on <a href="/articles/home-advantage-modern-football.html">home advantage</a> explains why that adjustment is not a constant across leagues and seasons.</p>
<p>The worked example also shows why one match should not be overread. A single result moves the rating by a few points. A season of results is needed before the rating carries much information.</p>`
    },
    {
      id: "reading-elo-ratings",
      heading: "Reading Elo ratings",
      html: `<p>Elo ratings are most useful when they are read as a ranking with uncertainty, not as a precise measurement. A 30-point gap between two teams is small enough that a single match can change the order. A 200-point gap is more meaningful, but it still does not guarantee a result.</p>
<p>The rating scale is arbitrary. Different systems use different starting values, K factors, and home adjustments. A 1600 in one system may be a 1500 in another. Do not compare raw ratings across systems unless you know they share a scale. Compare ranks or standardised gaps instead.</p>
<p>Elo is also sensitive to the order of results. A team that starts with a low rating and wins a few matches can climb quickly, while a team that starts high and loses can fall quickly. That is a feature, not a bug, but it means early-season ratings carry more uncertainty than late-season ratings.</p>
<p>For a more complete view, pair Elo with a performance measure. A team can win while being outplayed, and Elo will reward the result. A team can lose while creating the better chances, and Elo will punish the result. The gap between the two views is often the most interesting part of the analysis. Our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a> explains how to judge whether a rating system is actually calibrated.</p>`
    },
    {
      id: "elo-vs-xg",
      heading: "Elo versus xG",
      html: `<p>Elo and expected goals are complementary. Elo is a results-based rating: it asks who won and adjusts credibility accordingly. xG is a process-based measure: it asks what kind of chances a team created and conceded. A team can be strong in one and weak in the other.</p>
<p>An Elo model is simple to maintain. It needs a result and a rating, and it can be updated immediately. It is robust to missing data and easy to explain. Its weakness is that it treats a lucky win and a dominant win as the same result, unless the system adds a goal-difference multiplier.</p>
<p>An xG model is richer but more demanding. It needs shot data, a defined model, and a consistent provider. It can describe performance that results hide, but it can also overfit to a small sample. The best use is not to choose one and reject the other. Use Elo to track results and xG to understand the process behind them.</p>
<p>Neither measure is a prediction on its own. A rating tells you what the model believes about relative strength. A probability model turns that belief into match odds. The distinction matters when you evaluate a forecast, because a good rating can still produce a poorly calibrated probability.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating Elo as a prediction.</strong> A rating is a strength estimate, not a three-way match probability. You still need a draw model and a home adjustment.</li>
<li><strong>Ignoring home advantage.</strong> A 100-point gap can shrink or reverse when the weaker team is at home. Use a consistent adjustment.</li>
<li><strong>Comparing ratings from different systems.</strong> Different starting values and K factors produce different scales. Compare ranks or gaps within one system.</li>
<li><strong>Overreacting to one result.</strong> A single match moves a rating by a few points. The signal is in the sequence, not the latest number.</li>
<li><strong>Forgetting draws.</strong> Football has three outcomes. An Elo expected score is not the same as a win probability.</li>
<li><strong>Using Elo to judge players.</strong> A team rating describes the team, not the individuals inside it.</li>
</ul>
<p>The common thread is a search for a single number that answers every question. Elo is useful precisely because it is narrow. It tracks results, and it does that job well.</p>`
    },
    {
      id: "limits",
      heading: "Limits and uncertainty",
      html: `<p>Elo ratings are relative, results-based, and dependent on the rules of the system. They do not know about injuries, tactics, travel, weather, or motivation unless those factors are built into the model. They do not know whether a team created good chances or scored from a deflection. They only know the result.</p>
<p>New teams are especially uncertain. A promoted club may start with a rating inherited from a lower division, or with a default value that does not reflect its new squad. It takes time for the rating to adjust. The same is true after a change of manager or a major transfer window.</p>
<p>Use Elo as one layer of analysis. It can tell you which teams have the strongest results record, and it can provide a simple baseline for a prediction model. It cannot tell you why a team is strong, whether the strength will last, or what will happen in the next match. Those questions need data, context, and judgement.</p>`
    }
  ],
  faq: [
    {
      q: "What is a good Elo rating in football?",
      a: "There is no universal good rating because the scale depends on the system. What matters is the gap between teams and the rank within the same rating pool. A rating of 1600 is only meaningful in relation to the opponents around it."
    },
    {
      q: "Does Elo predict football matches?",
      a: "Elo estimates relative strength, not a three-way result probability. You can convert a rating gap into an expected score, but you still need a draw model and a home advantage adjustment to produce match probabilities."
    },
    {
      q: "Why do Elo ratings differ between websites?",
      a: "Systems use different starting values, K factors, home adjustments, competition weights, and goal-difference rules. Those choices produce different numbers, so compare ratings within one system rather than across systems."
    }
  ],
  related: ["what-is-xg-football", "track-prediction-accuracy", "home-advantage-modern-football"]
};
