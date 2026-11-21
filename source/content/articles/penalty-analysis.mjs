export default {
  slug: "penalty-analysis",
  title: "Penalty Analysis in Football",
  metaTitle: "Penalty Analysis in Football",
  description: "How penalties are converted, why placement and pressure matter, and why penalty records need a large sample before they mean much.",
  category: "Tactics",
  tags: ["penalties", "conversion", "shootouts", "goalkeepers"],
  published: "2026-11-10",
  updated: "2026-11-10",
  author: "Nyasha",
  dek: "A penalty is a high-probability shot, not a certain goal. The difference between a good and a great penalty taker is smaller than most records suggest.",
  takeaways: [
    "Penalties are converted at a high rate, but the rate is not 100 per cent.",
    "Placement and pace matter, yet goalkeepers also use patterns and guesswork.",
    "Pressure and fatigue can affect execution, though the effect is hard to measure.",
    "Shootout records are small samples and should be treated with caution.",
    "Penalties are usually assigned a fixed xG value, which affects team totals."
  ],
  intro: `<p>A penalty is the clearest chance in football. The shooter is twelve yards from goal, the goalkeeper must stay on the line until the ball is struck, and the rest of the players are outside the area. It is also one of the most psychologically loaded moments in the sport.</p>
<p>Because penalties are so visible, they attract strong narratives about nerve, technique and goalkeeper intuition. Some of those narratives are supported by evidence. Many are built on small samples and selective memory.</p>`,
  sections: [
    {
      id: "base-rates",
      heading: "The base rate comes first",
      html: `<p>Across many leagues and competitions, penalties are converted at roughly 75 to 80 per cent. The exact rate varies by era, competition and data source, but the broad pattern is stable. A penalty is a strong chance, not a certainty.</p>
<p>That base rate is the starting point for analysis. A player who has scored eight of ten penalties has a raw conversion rate of 80 per cent, which is close to the average. A player who has scored 20 of 24 has a raw rate of 83 per cent, which is above average but still within the range that a small sample can produce.</p>
<p>The base rate also matters for team totals. If a team is awarded six penalties in a season and the average conversion rate is 76 per cent, the expected number of penalty goals is about 4.6. The actual total may be higher or lower without implying a lasting skill difference.</p>`
    },
    {
      id: "placement",
      heading: "Placement, pace and technique",
      html: `<p>Penalty takers face a trade-off between placement and risk. A shot into the top corner is difficult to save, but it is also easier to miss. A shot down the middle may succeed if the goalkeeper dives early, but it looks foolish if the goalkeeper stays still.</p>
<p>Research on penalties generally finds that shots placed close to the posts and at a good height are more successful than central or mid-height shots. Pace also matters, because it reduces the goalkeeper's reaction time. The best penalties combine both, which is why the technique is so difficult to repeat under pressure.</p>
<p>Goalkeepers use patterns too. They may study a taker's previous penalties, wait for a tell in the run-up, or choose a side in advance. The interaction is strategic: a taker who always opens his body to the same side becomes predictable, while a goalkeeper who always dives early becomes vulnerable to a cheeky central effort.</p>`
    },
    {
      id: "pressure",
      heading: "Pressure, fatigue and the moment",
      html: `<p>The pressure of a penalty is real, but its effect is difficult to measure. A taker in a league match may feel less pressure than one in a shootout, and a taker who has already missed may carry that memory into the next attempt.</p>
<p>Fatigue can affect technique. A player who has played 120 minutes may have less control over the placement and pace of the shot. That does not mean fatigue causes every miss, but it is a plausible mechanism that analysts should consider.</p>
<p>The crowd adds another layer. Home supporters may try to distract the taker, while away supporters may celebrate a miss before the ball crosses the line. The effect is part of the home advantage discussion, though it is small compared with the overall penalty base rate.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows hypothetical conversion rates for four placement zones, based on 200 penalties in each zone. The numbers are not real data, but they show how the arithmetic of placement and sample size works.</p>
<table>
<caption>Illustrative penalty conversion by placement zone</caption>
<thead><tr><th>Zone</th><th>Penalties</th><th>Goals</th><th>Conversion</th></tr></thead>
<tbody>
<tr><td>Low corner</td><td>200</td><td>164</td><td>82.0%</td></tr>
<tr><td>High corner</td><td>200</td><td>158</td><td>79.0%</td></tr>
<tr><td>Mid-height, wide</td><td>200</td><td>142</td><td>71.0%</td></tr>
<tr><td>Central</td><td>200</td><td>138</td><td>69.0%</td></tr>
<tr><td><strong>All zones</strong></td><td><strong>800</strong></td><td><strong>602</strong></td><td><strong>75.3%</strong></td></tr>
</tbody>
</table>
<p>The low corner has the highest conversion rate in this illustration, but the gap between the low corner and the high corner is only three percentage points. With 200 penalties in each zone, a difference of that size is within the range that random variation can produce. The gap between the low corner and the central zone is larger, but it still needs a bigger sample and a careful model to separate placement from taker quality.</p>
<p>Now consider a single player. If the player has taken 12 penalties and scored nine, the raw rate is 75 per cent, almost identical to the overall average. A narrative might describe the player as a reliable taker, but the record is too short to distinguish reliability from ordinary conversion.</p>
<p>The example shows why penalty records need context. A 100 per cent record from five attempts is not evidence of a special skill. A 70 per cent record from 50 attempts is more informative, even though the headline rate is lower.</p>`
    },
    {
      id: "shootouts",
      heading: "Shootouts and small samples",
      html: `<p>A shootout is a sequence of high-pressure penalties with a winner-takes-all structure. The format amplifies the drama, but it does not change the underlying arithmetic. Each kick is still a penalty with a conversion probability, and each team has five attempts before sudden death.</p>
<p>Shootout records are often used to label teams or players as good or bad under pressure. The samples are usually tiny. A team that has won three of four shootouts may be described as mentally strong, while a team that has lost three of four may be described as fragile. Neither record is large enough to support a strong claim.</p>
<p>The order of takers, the goalkeeper's preparation and the pressure of the situation all matter, but they interact in complex ways. A simple shootout record cannot separate those factors. It is a description of a few events, not a stable trait.</p>`
    },
    {
      id: "penalties-and-xg",
      heading: "Penalties in expected goals",
      html: `<p>Most xG models assign penalties a fixed value, often around 0.76, rather than the value of a typical shot from twelve yards. That choice reflects the special conditions of a penalty and keeps the model comparable across teams.</p>
<p>The fixed value creates a quirk. A team that takes many penalties can accumulate a large xG total without creating many open-play chances. A team that takes none may look less threatening than it is. When comparing teams, it helps to separate penalty xG from open-play xG.</p>
<p>Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains the general logic. The penalty adjustment is a reminder that xG is a model, and every model makes choices about how to treat special events.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a penalty as a certain goal.</strong> The base rate is high, but misses are a normal part of the distribution.</li>
<li><strong>Judging a taker on a handful of attempts.</strong> Small samples produce extreme records that regress over time.</li>
<li><strong>Ignoring placement and taker quality.</strong> Conversion is not random, even if the sample is noisy.</li>
<li><strong>Using shootout records as proof of mentality.</strong> The sample is usually too small to support a strong psychological claim.</li>
<li><strong>Forgetting the fixed xG value.</strong> Penalty goals and penalty xG can distort team comparisons if they are not separated.</li>
</ul>
<p>The common thread is the difference between a dramatic event and a reliable measurement. Penalties are dramatic, but the data behind them is often thin.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Penalty analysis is limited by the rarity of the event. Even a player with a long career may take only a few dozen penalties, which is not enough to estimate a stable skill with much precision. Team shootout records are even smaller.</p>
<p>The context also matters. A penalty in a friendly is not the same as a penalty in a final. The pressure, the crowd and the consequences differ. A model that pools all penalties may miss those differences, while a model that splits them may run out of data.</p>
<p>For a related view of the goalkeeper's side, see our guide to <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a>. For the set-piece context, our note on <a href="/articles/set-pieces-football-prediction.html">set pieces</a> explains how dead-ball situations are valued. The honest conclusion is that penalties are a high-quality chance with a noisy record, and the noise should be part of the interpretation.</p>`
    }
  ],
  faq: [
    {
      q: "What is the average conversion rate for a penalty?",
      a: "It varies by competition and era, but many leagues produce rates of roughly 75 to 80 per cent. The rate is high enough to make a penalty a strong chance, but not high enough to treat it as certain."
    },
    {
      q: "Are some players genuinely better at penalties?",
      a: "Technique and placement can create real differences, but the samples are usually too small to measure them precisely. A player with a strong record over many attempts is more convincing than one with a short hot streak."
    },
    {
      q: "Why do xG models use a fixed value for penalties?",
      a: "A fixed value reflects the special conditions of a penalty and keeps team totals comparable. It also avoids letting a single event dominate the model's shot-level estimates."
    }
  ],
  related: ["goalkeeper-performance-prediction", "set-pieces-football-prediction", "what-is-xg-football"]
};
