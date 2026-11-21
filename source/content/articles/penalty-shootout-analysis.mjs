export default {
  slug: "penalty-shootout-analysis",
  title: "Penalty Shootouts: Data and Psychology",
  metaTitle: "Penalty Shootouts: Data and Psychology",
  description: "Shootout formats, order effects, conversion rates, goalkeeper tactics and pressure, and why shootout records are weak evidence.",
  category: "Tactics",
  tags: ["penalty shootouts", "penalties", "psychology", "goalkeepers"],
  published: "2026-12-02",
  updated: "2026-12-02",
  author: "Nyasha",
  dek: "A shootout is the smallest sample in football with the largest consequences. Five kicks each, and a place in the next round decided in minutes.",
  takeaways: [
    "A shootout is a sequence of penalties, not a separate skill that can be measured from a handful of results.",
    "Shootout conversion tends to be lower than open-play penalty conversion, though estimates vary.",
    "Kicking first may carry a small advantage in some studies, but the evidence is limited and debated.",
    "Goalkeepers use patterns, timing and guesswork, and their save rates are noisy.",
    "A team's shootout record is a description of a few events, not a stable prediction."
  ],
  intro: `<p>A penalty shootout is the smallest sample in football with the largest consequences. Five kicks each, sudden death if needed, and a place in the next round decided in a few minutes.</p>
<p>The format is simple, but the analysis is not. Conversion rates, order effects, goalkeeper behaviour and pressure all interact, and the sample of shootouts available to any team is tiny. This guide covers the format, the base rates, the psychology, and the reasons a shootout record is a weak guide to the future.</p>`,
  sections: [
    {
      id: "format-and-arithmetic",
      heading: "The format and its arithmetic",
      html: `<p>Most shootouts use five kicks per team, taken alternately, with sudden death if the score is level after five each. The sequence is usually ABAB, although a brief trial of an ABBA order was abandoned and most competitions returned to the traditional format.</p>
<p>The arithmetic matters. A shootout is not a single contest between two teams; it is a sequence of individual contests with a running score. The state changes after every kick. A miss in the first round feels different from a miss in the fifth, and a taker who knows a goal is required faces a different task from one who can afford to miss.</p>
<p>The format also decides who takes the fifth kick and whether it is taken at all. A team that is already ahead after four rounds does not need its fifth taker, which complicates any analysis of order.</p>`
    },
    {
      id: "conversion-baselines",
      heading: "Conversion baselines",
      html: `<p>Open-play penalties are converted at roughly 75 to 80 per cent across many leagues. Shootout conversion is usually lower, often in the low 70s, though the exact figure depends on the competition, the era and the sample. The drop is plausible: the pressure is higher, the goalkeeper has prepared, and the taker cannot choose the moment.</p>
<p>That baseline is the starting point. A team that scores four of five in a shootout has converted 80 per cent, which is around the open-play average and above the typical shootout rate. A team that scores three of five has converted 60 per cent, which is below average but not unusual in a small sample.</p>
<p>Individual records need even more care. A player who has taken six shootout penalties and scored five looks reliable, but six attempts cannot distinguish a strong taker from an average one who has had a good run. The same logic applies to goalkeepers.</p>`
    },
    {
      id: "order-effects",
      heading: "Order effects",
      html: `<p>Research on shootout order has found a possible advantage for the team that kicks first. Some studies report that the first team wins slightly more often than chance would suggest, while others find a smaller effect or none. The evidence is not strong enough to treat the order as a decisive factor.</p>
<p>There are plausible mechanisms. The team that kicks first can put pressure on the opponent by scoring, while the team that kicks second always knows what it needs. The fifth kick may never be taken, and the players assigned to it may be the strongest takers, which changes the effective order.</p>
<p>Selection is another complication. Coaches choose an order based on technique, temperament and practice, not randomly. A team with a strong first taker may look like it benefits from order when the real cause is the taker.</p>`
    },
    {
      id: "goalkeeper-tactics",
      heading: "Goalkeeper tactics",
      html: `<p>A goalkeeper cannot wait forever. The ball travels from twelve yards in well under a second, so the keeper has to commit before or just as the ball is struck. That creates a guessing game. Some keepers dive early, some wait, and some try to read the taker's hips or standing foot.</p>
<p>Research on penalty behaviour has found that goalkeepers tend to dive more often than they stay central, even though central shots are relatively common. A keeper who always dives gives a taker an easy option down the middle, while a keeper who waits risks being beaten by pace and placement. The best keepers mix their approach and study the taker's patterns.</p>
<p>Save rates are noisy. A keeper who saves three penalties in a row becomes a hero, but three saves is a tiny sample. Our guide to <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a> explains why save numbers need context in open play, and the same caution applies here.</p>`
    },
    {
      id: "pressure-and-psychology",
      heading: "Pressure and psychology",
      html: `<p>Pressure is real, but it is not a single variable. A taker in the first round may feel less pressure than one in the fifth, and a taker who has missed earlier may carry that memory. The crowd, the stakes and the time spent waiting all contribute.</p>
<p>Some players use routines to manage the moment: a fixed breathing pattern, a preselected target, a consistent run-up. These routines can reduce the chance of a rushed decision, but they do not remove the pressure or ensure execution.</p>
<p>The psychology of the goalkeeper is different. The keeper is expected to fail, so a save is a bonus. That asymmetry can free the keeper to take risks, and it can make the taker feel that the odds are against him even though the base rate favours the shooter. Our guide to <a href="/articles/cognitive-biases-football-prediction.html">cognitive biases</a> explains how memory and narrative distort these judgements.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is invented for teaching. It shows conversion by kick number across 50 hypothetical shootouts, with 500 kicks in total. The numbers are designed to show a plausible pattern, not to report real data.</p>
<table>
<caption>Illustrative shootout conversion by kick number, 50 invented shootouts</caption>
<thead><tr><th>Kick</th><th>Kicks taken</th><th>Goals</th><th>Conversion</th></tr></thead>
<tbody>
<tr><td>First</td><td>100</td><td>76</td><td>76.0%</td></tr>
<tr><td>Second</td><td>100</td><td>73</td><td>73.0%</td></tr>
<tr><td>Third</td><td>100</td><td>72</td><td>72.0%</td></tr>
<tr><td>Fourth</td><td>100</td><td>70</td><td>70.0%</td></tr>
<tr><td>Fifth</td><td>85</td><td>58</td><td>68.2%</td></tr>
<tr><td>Sudden death</td><td>15</td><td>10</td><td>66.7%</td></tr>
<tr><td><strong>All kicks</strong></td><td><strong>500</strong></td><td><strong>359</strong></td><td><strong>71.8%</strong></td></tr>
</tbody>
</table>
<p>The table shows a gradual decline in conversion as the kicks progress, which is a common narrative: the later kicks carry more pressure. But the decline is small, and the fifth-kick sample is smaller because some shootouts end after four rounds. The sudden-death sample is tiny, so its 66.7 per cent rate should not be treated as a stable estimate.</p>
<p>The overall rate of 71.8 per cent is close to the typical shootout range. A team that converts 80 per cent in one shootout may have faced a weaker keeper or taken better penalties on the night, and a team that converts 60 per cent is not necessarily fragile. The difference over five kicks is a handful of events.</p>`
    },
    {
      id: "weak-evidence",
      heading: "Why shootout records are weak evidence",
      html: `<p>A team's shootout record is a small sample of a high-variance event. Five shootouts is 25 to 30 kicks, often taken by different players against different goalkeepers. A 4-1 record sounds impressive, but it can be produced by ordinary conversion and a few good saves.</p>
<p>Consider a simplified model in which each team has a 50 per cent chance of winning a shootout. The probability of winning at least four of five is six combinations out of 32, or about 19 per cent. Roughly one in five teams would have a 4-1 or better record by chance alone. A 5-0 record is rarer, at about 3 per cent, but it is still possible without any special skill.</p>
<p>Team composition changes too. The players who took the kicks three years ago may have left, the goalkeeper may be different, and the coaching staff may have changed the preparation. A record from a previous era is not a measurement of the current team.</p>
<p>Format and opposition matter as well. A shootout against a strong keeper is harder than one against a weak keeper, and a shootout in a hostile stadium is different from one at a neutral venue. A simple win-loss record pools all of those contexts together. The same caution applies to individual records, because a perfect record may simply reflect a small number of attempts.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a shootout record as a stable trait.</strong> Five shootouts are too few to separate skill from variance.</li>
<li><strong>Ignoring the base rate.</strong> Most shootouts are decided by ordinary conversion and a few misses, not by a special mentality.</li>
<li><strong>Assuming the first kick decides the outcome.</strong> Order may matter slightly, but the evidence is limited.</li>
<li><strong>Judging keepers by save count alone.</strong> The quality of the shots and the situations matter.</li>
<li><strong>Forgetting that the fifth kick may not be taken.</strong> The order is not a fixed five-act script.</li>
</ul>
<p>The common thread is the difference between a dramatic event and a reliable measurement. A shootout is dramatic, but the sample behind any record is usually thin.</p>`
    },
    {
      id: "what-to-look-at",
      heading: "What to look at instead",
      html: `<p>If a shootout is coming, the useful preparation is procedural. Confirm the order, identify the takers who are comfortable with the responsibility, and practise the routines under some pressure. Study the opposing goalkeeper's patterns, but do not treat them as a code to be cracked. The keeper is also adjusting.</p>
<p>For analysis, record the process rather than only the result. Note the placement, the keeper's decision, the quality of the strike, and the game state. Over time, those records can support a modest judgement about strengths and weaknesses. A single shootout cannot.</p>
<p>The honest conclusion is that shootouts are close to a coin flip with a slight edge to the better takers and the better-prepared keeper. That edge is real, but it is small, and it is easily lost in the noise of five kicks. Our guide to <a href="/articles/penalty-analysis.html">penalty analysis</a> covers the broader base rates. The shootout is a special case of a high-quality chance, not a separate sport.</p>`
    }
  ],
  faq: [
    {
      q: "Is there a first-kicker advantage in penalty shootouts?",
      a: "Some studies report a small advantage for the team that kicks first, but the evidence is mixed and the samples are limited. It is a possible effect, not a rule, and it should not overshadow taker quality and goalkeeper preparation."
    },
    {
      q: "What is a typical conversion rate in a shootout?",
      a: "It varies by competition and era, but shootout conversion is often in the low 70s, somewhat below the 75 to 80 per cent rate for open-play penalties. Small samples mean any single shootout can look very different."
    },
    {
      q: "Can a team's shootout record predict future results?",
      a: "Weakly at best. The sample is small, the personnel change, and the opponent matters. A record describes past events and should be treated as one input, not a forecast."
    }
  ],
  related: ["penalty-analysis", "goalkeeper-performance-prediction", "cognitive-biases-football-prediction"]
};
