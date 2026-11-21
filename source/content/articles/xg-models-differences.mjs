export default {
  slug: "xg-models-differences",
  title: "Why xG Models Disagree",
  metaTitle: "Why xG Models Disagree",
  description: "Two providers can value the same shot differently. Learn why xG models disagree, how calibration works, and how to compare totals fairly.",
  category: "xG and Stats",
  tags: ["xG", "model calibration", "data providers", "analytics"],
  published: "2026-09-22",
  updated: "2026-09-22",
  author: "Nyasha",
  dek: "An xG number is the output of a model, not a direct measurement. Understanding the choices behind it explains most disagreements.",
  takeaways: [
    "Different xG models use different inputs, training samples and calibration targets.",
    "The same shot can receive different values without either model being wrong.",
    "Compare totals from one provider over time rather than mixing currencies.",
    "Model disagreement is often largest on unusual shots and small samples.",
    "Calibration and transparent documentation matter more than a single headline number."
  ],
  intro: `<p>Two websites publish an xG total for the same match. One says 1.8, the other says 1.4. Both claim to measure the same thing. The gap is not necessarily an error, and it is not proof that one provider is unreliable. It is usually the predictable result of different modelling choices.</p>
<p>Expected goals is a family of models rather than a single standard. Each provider decides which shots to include, which variables to use, how to train the model, and how to calibrate the output. Those decisions produce different numbers, especially for unusual attempts.</p>`,
  sections: [
    {
      id: "same-shot-two-values",
      heading: "The same shot can have two values",
      html: `<p>Start with a header from eight yards. One model might value it at 0.22. Another might value it at 0.15. The first model may include the number and position of nearby defenders; the second may rely mainly on distance and angle. The first may have learned from a league with more headed chances; the second may shrink unusual situations towards a broader average.</p>
<p>Neither value is a measurement of a physical quantity, in the way that a speed gun measures velocity. Each is an estimate from a statistical model. The estimate depends on the sample used to fit it and the assumptions built into it. A difference of 0.07 on one shot is unremarkable.</p>
<p>The disagreement becomes more visible when summed across a match. Ten small differences can move a team total by several tenths. That is why two xG tables can tell slightly different stories about the same game without either being fraudulent.</p>`
    },
    {
      id: "inputs-differ",
      heading: "The inputs are not identical",
      html: `<p>Most public models begin with distance and angle to goal. From there, the recipes diverge. Some include body part, assist type, defensive pressure, goalkeeper position, or the number of defenders between the shooter and the goal. Some include the speed of the attacking move or whether the shot followed a rebound.</p>
<p>Each additional input changes the model's view of what makes a shot dangerous. A model that values proximity to the goalkeeper highly may give a lower number to a shot from a tight angle than a model that focuses on distance alone. A model trained on event data may not know about a defender's position as precisely as a model trained on tracking data.</p>
<p>There is also a philosophical choice about context. Should a shot's value depend on the scoreline, the minute, or the identity of the shooter? Some models say no, because they want a pure description of the chance. Others say yes, because the same chance may be converted at different rates in different situations. Both positions are defensible, and they produce different numbers.</p>`
    },
    {
      id: "training-samples",
      heading: "Training samples and league effects",
      html: `<p>An xG model is fitted to historical shots. The sample determines what the model learns. A model trained mostly on one league may carry that league's shot patterns into its values. A model trained across many competitions may generalise better, but it may also blur important differences between leagues.</p>
<p>Time period matters too. Shot selection changes. A model trained on data from a decade ago may value long-range shots differently from one trained on recent seasons, when teams began taking fewer low-value attempts. The model is a snapshot of the game at the time it was fitted.</p>
<p>Sample size affects rare events most. There are fewer headers from tight angles, fewer overhead kicks, and fewer shots after several deflections. Models handle these cases with smoothing or fallback rules, and those rules differ. Two models may agree closely on a typical penalty-area shot and disagree sharply on something unusual.</p>`
    },
    {
      id: "calibration",
      heading: "Calibration is a separate choice",
      html: `<p>A model can rank shots correctly and still produce probabilities that are too high or too low overall. Calibration is the process of making the predicted probabilities match observed frequencies. If shots assigned a 20 per cent chance are scored 20 per cent of the time, the model is well calibrated on that group.</p>
<p>Providers may calibrate to different targets. One may prioritise accurate team totals; another may prioritise accurate shot-level probabilities. A third may adjust the output so that the sum of xG across a league matches the number of goals scored. These choices can shift the numbers without changing the ranking of chances.</p>
<p>For analysis, calibration matters more than a single season's accuracy. A model that is slightly conservative but stable is often more useful than one that is dramatic and poorly calibrated. The same principle applies when judging prediction records, where a complete and pre-committed log is more valuable than a highlight reel.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows how two hypothetical models might value the same six shots. The differences are deliberately modest, apart from the long-range effort and the header.</p>
<table>
<caption>Two illustrative xG models applied to the same shots</caption>
<thead><tr><th>Shot</th><th>Model A</th><th>Model B</th><th>Difference</th></tr></thead>
<tbody>
<tr><td>Close-range finish</td><td>0.38</td><td>0.34</td><td>0.04</td></tr>
<tr><td>Header from eight yards</td><td>0.22</td><td>0.15</td><td>0.07</td></tr>
<tr><td>Shot from edge of area</td><td>0.09</td><td>0.11</td><td>-0.02</td></tr>
<tr><td>Long-range effort</td><td>0.02</td><td>0.04</td><td>-0.02</td></tr>
<tr><td>Cut-back from six yards</td><td>0.31</td><td>0.28</td><td>0.03</td></tr>
<tr><td>Volley from 14 yards</td><td>0.07</td><td>0.09</td><td>-0.02</td></tr>
<tr><td><strong>Total</strong></td><td><strong>1.09</strong></td><td><strong>1.01</strong></td><td><strong>0.08</strong></td></tr>
</tbody>
</table>
<p>Model A gives the team 1.09 xG, Model B gives 1.01. The difference is small in total but comes from offsetting disagreements. Model A rates the header more highly; Model B rates the long-range shot and the volley more highly. If you only saw the totals, you would miss the different descriptions of the same chance pool.</p>
<p>Now change one assumption. Suppose Model A includes defensive pressure and decides the close-range finish was hurried, lowering it from 0.38 to 0.30. The total falls to 1.01, matching Model B. Two models can converge on the total while still disagreeing about individual shots. The total is a summary, not a complete account.</p>`
    },
    {
      id: "comparing-providers",
      heading: "How to compare providers fairly",
      html: `<p>The first rule is not to mix providers within a single comparison. If you use Model A for a team's attacking total, use Model A for its defensive total and for its opponents. Mixing currencies creates differences that look like performance signals but are really model artefacts.</p>
<p>The second rule is to compare like with like. Check whether penalties are included, whether own goals are excluded, and whether the model counts shootout attempts. A competition that includes penalties in xG will show higher totals than one that does not, especially for teams that win many spot kicks.</p>
<p>The third rule is to look at the distribution, not just the total. A side with 1.5 xG from one 0.8 chance and a series of small efforts is different from a side with 1.5 xG from fifteen moderate chances. Shot maps and xG timelines show the pattern. Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains why that distinction matters.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Assuming one provider is objectively correct.</strong> Different models answer slightly different questions.</li>
<li><strong>Mixing providers across a table.</strong> A ranking built from two xG currencies is not a ranking of anything consistent.</li>
<li><strong>Treating a small total difference as a real performance gap.</strong> Model error and sampling noise can both move the number.</li>
<li><strong>Ignoring whether penalties and set pieces are included.</strong> These choices can explain a large part of a total.</li>
<li><strong>Using xG to compare players without adjusting for role and minutes.</strong> The model values shots, not the difficulty of the player's task.</li>
</ul>
<p>The common thread is a search for a single authoritative number. xG is more useful when it is treated as one model's description, with known choices and known limits.</p>`
    },
    {
      id: "limits",
      heading: "What disagreement does and does not mean",
      html: `<p>Disagreement between models is not evidence that xG is useless. It is evidence that xG is an estimate. The size of the disagreement is itself informative: models tend to agree on ordinary shots and diverge on unusual ones. If two providers differ sharply about a match, look at the shot list and find the attempts driving the gap.</p>
<p>Nor does agreement prove correctness. Two models can share the same blind spot. Neither may know about a striker's injury, a change in formation, or a pitch that is cutting up. The number describes the shots, not the full context of the performance.</p>
<p>For a defensive view of the same logic, see our guide to <a href="/articles/what-is-xga.html">xGA</a>. For the passing value that precedes a shot, our explanation of <a href="/articles/expected-assists-explained.html">expected assists</a> shows how another model inherits the same choices. The practical habit is simple: pick one provider, document it, and treat its output as a consistent but imperfect description.</p>`
    }
  ],
  faq: [
    {
      q: "Which xG provider is the most accurate?",
      a: "There is no universal answer. Accuracy depends on the competition, the time period and the question being asked. Look for transparent methodology, stable calibration and consistent coverage rather than a single headline claim."
    },
    {
      q: "Can I compare xG totals from two different websites?",
      a: "It is better not to. The values are produced by different models and are not directly interchangeable. Choose one provider for a comparison and use it consistently."
    },
    {
      q: "Why do xG models disagree most on headers and long shots?",
      a: "Those shots are less common and more variable. Models have less data to learn from, and small differences in inputs or smoothing rules can produce larger differences in the estimated value."
    }
  ],
  related: ["what-is-xg-football", "what-is-xga", "expected-assists-explained"]
};
