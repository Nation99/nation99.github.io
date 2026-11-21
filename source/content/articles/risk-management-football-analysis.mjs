export default {
  slug: "risk-management-football-analysis",
  title: "Risk Management for Football Analysis",
  metaTitle: "Risk Management for Football Analysis",
  description: "How sample size, variance, selectivity and record keeping shape analytical risk, and why a careful process still cannot remove uncertainty.",
  category: "Betting Education",
  tags: ["risk", "sample size", "record keeping"],
  published: "2026-02-17",
  updated: "2026-02-17",
  author: "Nyasha",
  dek: "Risk management in analysis is not a staking plan. It is the discipline of asking how much of a result could have been luck, and how much evidence a conclusion really has.",
  takeaways: [
    "A short run of results says little about the quality of a process.",
    "Standard error gives a rough scale for how much a hit rate could wobble.",
    "Selectivity changes the question: fewer forecasts are easier to audit but slower to learn from.",
    "Record keeping is a risk control because it makes hindsight harder to rewrite."
  ],
  intro: `<p>Two analysts review a season. Both report a hit rate of 55 per cent. The first made 40 forecasts. The second made 400. The numbers look identical, but the conclusions they support are not. The first record is compatible with a wide range of true ability, including no ability at all. The second is narrower, though still not proof.</p>
<p>Risk management in football analysis begins with that difference. It is not about predicting the future more confidently. It is about knowing how much confidence the evidence can carry.</p>`,
  sections: [
    {
      id: "risk-is-not-loss",
      heading: "Risk is not the same as loss",
      html: `<p>Risk is often used as a synonym for losing, but the two are not the same. A forecast can lose and still be well made. A forecast can win and still be poorly made. Analytical risk is the chance that a conclusion is wrong, fragile, or dependent on a sample that will not repeat.</p>
<p>Three kinds of risk sit behind most football predictions. Model risk is the chance that the structure of the analysis is wrong. Sample risk is the chance that the observed results are a product of noise. Process risk is the chance that the analyst changes the question after seeing the answer. Only the second is easy to quantify, and even that requires assumptions. The others are matters of discipline and honest documentation.</p>`
    },
    {
      id: "sample-size-story",
      heading: "Sample size changes the story",
      html: `<p>A hit rate is a summary of a sample. The same percentage can come from a handful of forecasts or from hundreds, and the uncertainty around it shrinks as the sample grows. For a simple proportion, the standard error is the square root of p multiplied by one minus p, divided by n. With p at 0.55, the standard error is about 7.9 percentage points at 40 forecasts and about 2.5 points at 400.</p>
<p>That calculation assumes independent forecasts with a constant true rate. Football forecasts rarely satisfy both assumptions. Matches share teams, managers, and market conditions, and the analyst's method may improve during the season. The standard error is therefore a rough scale, not a precise certificate. It is still useful because it shows how quickly a small sample can produce a dramatic-looking result.</p>`
    },
    {
      id: "variance-illusion",
      heading: "Variance and the illusion of skill",
      html: `<p>Variance is the spread of outcomes around an expectation. It is not a malfunction. A well-calibrated model can produce a cluster of correct calls followed by a cluster of misses, and the order tells you nothing about the model's quality. The mind reads streaks as skill or collapse; the arithmetic reads them as sampling.</p>
<p>Suppose a model assigns a 55 per cent chance to an event. Over 20 independent repetitions, the expected number of successes is 11, but the observed count will often be 8, 9, 13, or 14. None of those outcomes is surprising. An analyst who changes the model after a run of 8 may be responding to noise. An analyst who celebrates a run of 14 may be doing the same thing with a happier expression.</p>`
    },
    {
      id: "selectivity-risk",
      heading: "Selectivity is a risk decision",
      html: `<p>Selectivity is often presented as a virtue: focus on the matches you know best, ignore the rest, and wait for clarity. There is something to that. A narrow focus can improve depth, and it reduces the number of low-information forecasts. But selectivity is also a risk decision, because it changes the sample and creates room for hindsight.</p>
<p>If the analyst decides which matches count only after the results are known, the record becomes a highlight reel. The same danger applies to changing the definition of a successful forecast, or to dropping a competition when the model performs badly there. A declared rule, written before the season, is easier to audit than an instinct that feels sensible in the moment. The rule may still be wrong, but at least it can be tested. Our guide to <a href="/articles/cognitive-biases-football-prediction.html">cognitive biases in football prediction</a> explains why the instinct is so persuasive.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>Two hypothetical analysts both report a 55 per cent hit rate. The table shows why the same headline can support different levels of confidence. The intervals are approximate and assume independent forecasts with a constant true rate.</p>
<table>
<thead><tr><th>Analyst</th><th>Forecasts</th><th>Correct</th><th>Hit rate</th><th>Standard error</th><th>Rough 95% range</th></tr></thead>
<tbody>
<tr><td>A</td><td>40</td><td>22</td><td>55%</td><td>7.9 points</td><td>39.6% to 70.4%</td></tr>
<tr><td>B</td><td>400</td><td>220</td><td>55%</td><td>2.5 points</td><td>50.1% to 59.9%</td></tr>
</tbody>
</table>
<p>Analyst A's interval runs from well below a coin flip to a very strong record. Analyst B's interval is much tighter, but it still does not prove that the process is sound. A hit rate is only one dimension; calibration, the difficulty of the forecasts, and the baseline all matter. The arithmetic narrows the uncertainty. It does not remove it.</p>`
    },
    {
      id: "record-keeping-control",
      heading: "Record keeping as a control",
      html: `<p>Record keeping is a risk control because memory is not an archive. A forecast written after the result is not a record; it is a story. The useful record includes the date, the match, the event being forecast, the probability assigned, the reasoning in one or two lines, the source of the data, and the outcome. If the model changes, the version should change with it.</p>
<p>The point is not to create paperwork for its own sake. It is to make later review possible without relying on the analyst's preferred version of events. A record that includes misses is more valuable than one that includes only hits, because the misses are where the assumptions are exposed. Our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a> sets out a simple structure for this.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a short hot run as validation.</strong> A run of correct calls is not evidence of a repeatable process.</li>
<li><strong>Changing the model after every loss.</strong> This turns the analysis into a chase for the most recent result.</li>
<li><strong>Counting only the forecasts you remember.</strong> Memory selects for vivid outcomes, not representative ones.</li>
<li><strong>Confusing confidence with evidence.</strong> A strongly held view is not a larger sample.</li>
<li><strong>Ignoring the cost of a small sample.</strong> A narrow focus can be useful, but it makes every conclusion more fragile.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits of risk management",
      html: `<p>Risk management cannot make an uncertain forecast certain. It cannot tell you whether the model is right, only how much noise the evidence can tolerate. It also cannot create an advantage in a market that already contains a margin. No amount of record keeping changes the arithmetic of the prices themselves.</p>
<p>The honest summary is uncomfortable. Most people who gamble over time end up with less money than they started, because the margin is built into every price and variance ensures that even sensible-looking runs come to an end. A careful process can make an analyst harder to fool, including by their own results. It cannot promise a different financial outcome, and this article does not. Readers who want to understand the balance side of the subject can read our guide to <a href="/articles/bankroll-basics.html">bankroll basics</a>.</p>`
    }
  ],
  faq: [
    {
      q: "Is a 55 per cent hit rate good?",
      a: "It depends on the baseline, the calibration, and the sample. A 55 per cent rate on forecasts that should be 70 per cent is poor. On events with a 40 per cent base rate, the same number may be informative. There is no universal threshold."
    },
    {
      q: "How many forecasts are enough?",
      a: "There is no universal number. It depends on the size of the effect, the independence of the forecasts, and the question being asked. More evidence is generally better, but correlated forecasts add less than independent ones."
    },
    {
      q: "Does risk management improve returns?",
      a: "It can improve the quality of decisions and reduce the chance of being misled by noise. It cannot create an edge or promise a particular financial result, because the margin and variance remain."
    }
  ],
  related: ["bankroll-basics", "winning-predictions-vs-profit", "track-prediction-accuracy"]
};
