export default {
  slug: "cognitive-biases-football-prediction",
  title: "Cognitive Biases in Football Prediction",
  metaTitle: "Cognitive Biases in Football Prediction",
  description: "How recency, availability, confirmation and anchoring distort football judgements, with practical checks that make analysis a little more honest.",
  category: "Betting Education",
  tags: ["cognitive bias", "decision making", "analysis"],
  published: "2026-09-02",
  updated: "2026-09-02",
  author: "Nyasha",
  dek: "Bias is not a character flaw. It is what happens when a fast, pattern-seeking mind meets a slow, noisy sport.",
  takeaways: [
    "Recency makes the last match feel more informative than it is.",
    "Availability makes famous results easier to recall than typical ones.",
    "Confirmation bias turns data search into evidence collection for a conclusion already held.",
    "Anchoring keeps early numbers in place even when they should be revised.",
    "Checklists and written forecasts reduce, but do not eliminate, these effects."
  ],
  intro: `<p>Ask an analyst to describe a team and the most recent match usually arrives first. That is not a failure of memory. It is a feature of a mind that prioritises what is vivid and recent. In football prediction, the same feature can turn a single result into an oversized belief.</p>
<p>Biases are not a sign of stupidity. They are shortcuts that usually work well enough in daily life and become costly when the evidence is noisy and the feedback is delayed. This guide covers the biases that matter most in football analysis, shows a simple weighting example, and offers countermeasures that are modest enough to be realistic.</p>`,
  sections: [
    {
      id: "why-mind-shortcuts",
      heading: "Why the mind takes shortcuts",
      html: `<p>Heuristics are efficient. They let a person make a judgement without collecting every piece of data, which is often the only practical option. The problem is not that the mind uses shortcuts. It is that the shortcuts are invisible, so the output feels like a direct reading of reality rather than a construction.</p>
<p>Football is especially vulnerable to this because the feedback loop is slow and noisy. A match produces a result within 90 minutes, but the quality of the pre-match reasoning is not settled by that result. A good decision can end in a loss, and a bad one can end in a win. The mind learns from the outcome anyway, which is how a bias becomes a habit.</p>`
    },
    {
      id: "recency",
      heading: "Recency and the last match",
      html: `<p>A 4-0 win is salient. It may also be one match in a noisy sequence. Recency bias gives extra weight to the latest observation, often without asking whether it contains new information. Sometimes it does: a change of manager, the return of a key player, or a tactical shift can make the last match more relevant than the previous ten.</p>
<p>The error is not caring about recent form. The error is caring about it without a reason. A single result can be caused by an early red card, a deflection, or a goalkeeper having an unusual afternoon. Those events are part of football, but they are not a stable estimate of the team's quality. Our article on <a href="/articles/form-streaks-misleading.html">why form streaks can mislead</a> explores the same problem from the results side.</p>`
    },
    {
      id: "availability",
      heading: "Availability and the famous result",
      html: `<p>Availability bias is the tendency to judge frequency by how easily examples come to mind. A famous comeback or a heavy defeat is easier to recall than a routine 1-0, so it feels more representative than it is. The result is a mental highlight reel that overweights the dramatic and underweights the ordinary.</p>
<p>Football media amplifies the effect. A controversial decision is replayed for days, while a well-organised defensive performance is forgotten by Monday. The analyst who consumes the same coverage as everyone else may end up with the same distorted prior, even when the underlying data is available. The remedy is to look at the boring matches too, because they are part of the distribution.</p>`
    },
    {
      id: "confirmation",
      heading: "Confirmation and the search for support",
      html: `<p>Once you have a view, you notice evidence that supports it and discount evidence that does not. A scout who believes Club A is defensively weak will find the missed tackles, the exposed full-back, and the shots conceded. The same match may also contain long spells of control that do not fit the story, but those are easier to skip.</p>
<p>Confirmation bias is not just a failure to search. It is a failure to search in the right places. The useful question is not what supports the view, but what would change it. Write the answer down before the match. If no evidence could change your mind, you are not analysing; you are defending. Our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a> makes that defence harder by recording the forecast in advance.</p>`
    },
    {
      id: "anchoring",
      heading: "Anchoring on early numbers",
      html: `<p>Anchoring is the tendency to rely too heavily on the first number encountered. An opening price, an early xG figure, or a pre-season rating can become an anchor that later evidence fails to move. The anchor is not necessarily wrong. The problem is that it receives more weight than it deserves.</p>
<p>Anchoring can appear in a meeting when someone quotes a price early and the rest of the discussion works around it. It can appear in a spreadsheet when a prior season's estimate is copied into a new season without adjustment. A useful check is to ask what the estimate would be if the anchor had never been seen. If the answer is very different, the anchor is doing too much work. Opening prices are a common example, because they arrive early and carry the authority of a number.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>Suppose an analyst has 12 matches of evidence that Club A creates 1.6 expected goals per match. Club A then produces 2.8 expected goals in a single match. A recency-driven update might move the estimate all the way to 2.8. A simple weighted update gives the new match a weight of one and the 12-match estimate a weight of twelve.</p>
<p>The calculation is (12 multiplied by 1.6, plus 1 multiplied by 2.8) divided by 13. That is (19.2 plus 2.8) divided by 13, or 22.0 divided by 13, which equals 1.69. The single strong performance moves the estimate, but it does not replace the prior.</p>
<table>
<thead><tr><th>Weight on new match</th><th>Calculation</th><th>Revised estimate</th></tr></thead>
<tbody>
<tr><td>1</td><td>(12 x 1.6 + 1 x 2.8) / 13</td><td>1.69</td></tr>
<tr><td>3</td><td>(12 x 1.6 + 3 x 2.8) / 15</td><td>1.84</td></tr>
<tr><td>6</td><td>(12 x 1.6 + 6 x 2.8) / 18</td><td>2.00</td></tr>
</tbody>
</table>
<p>None of these weights is objectively correct. The point is that the update is a choice, and a recency-driven mind makes it without noticing. A single strong performance can be genuine evidence, but it is not twelve matches of evidence. The arithmetic makes the assumption visible, which is the first step towards testing it.</p>`
    },
    {
      id: "countermeasures",
      heading: "Countermeasures that actually work",
      html: `<p>Countermeasures work best when they are built into the process rather than left to willpower. Write the forecast before the match. Record the evidence used. Write down what would change your mind. Review a batch of decisions rather than one at a time. Keep a baseline. Use a checklist for the questions that are easy to skip.</p>
<p>None of these removes bias. A checklist can become a ritual, and a written forecast can be rationalised after the fact. The aim is to make the bias slightly more visible, not to achieve a neutral mind. A process that is honest about its own weaknesses is more useful than a process that claims to have none.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a vivid result as a large sample.</strong> One match is one observation, however memorable.</li>
<li><strong>Reading only the evidence that supports a preferred view.</strong> The disconfirming evidence is the useful part.</li>
<li><strong>Anchoring on a pre-season prediction.</strong> A prior can be revised without being abandoned.</li>
<li><strong>Confusing confidence with competence.</strong> Certainty is not a measurement.</li>
<li><strong>Believing that awareness of bias is enough to remove it.</strong> Awareness is a start, not a cure.</li>
<li><strong>Reviewing decisions one at a time.</strong> Hindsight has the most room in a single case.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits: awareness is not a cure",
      html: `<p>Knowing about bias does not make it disappear. Checklists help, but they can also become rituals. The evidence base in football is noisy, and some biases are reasonable responses to uncertainty. Recency is not always wrong, and a strong prior is not always an anchor.</p>
<p>The honest summary is modest. Most people who gamble over time end up behind, because of the margin and variance, and self-awareness does not repeal either. A better process can make an analyst slightly harder to fool, including by their own memory. It cannot produce a flawless mind, and this article does not claim otherwise. Our article on <a href="/articles/risk-management-football-analysis.html">risk management for football analysis</a> explains why process matters more than a highlight reel.</p>`
    }
  ],
  faq: [
    {
      q: "Is recency bias always wrong?",
      a: "No. Recent evidence can matter, especially when team news or tactics have changed. The error is giving it extra weight without a reason, not noticing it at all."
    },
    {
      q: "How do I counter confirmation bias?",
      a: "Write down what evidence would change your mind before analysing, and record forecasts in advance. Reviewing a batch of decisions is more useful than arguing about one."
    },
    {
      q: "Can checklists remove bias completely?",
      a: "No. They can make biases easier to notice, but they do not replace judgement or remove uncertainty. A checklist is a support, not a substitute for judgement."
    }
  ],
  related: ["form-streaks-misleading", "track-prediction-accuracy", "winning-predictions-vs-profit"]
};
