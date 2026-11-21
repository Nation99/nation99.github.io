export default {
  slug: "pre-match-analysis-guide",
  title: "How to Analyse a Football Match",
  metaTitle: "How to Analyse a Football Match: A Pre-Match Checklist",
  description: "A repeatable pre-match routine for football analysis: set a sample, read styles, weigh availability, note context and keep honest limits.",
  category: "Beginner Guides",
  tags: ["pre-match analysis", "process", "sample size", "tactics"],
  published: "2026-01-05",
  updated: "2026-01-05",
  author: "Nyasha",
  dek: "A pre-match note is only as good as the order in which it is built. This guide sets out a repeatable routine, from choosing a sample to writing a single-page summary, and shows where judgement should stop.",
  takeaways: [
    "Choose the sample before you look at the numbers, so the evidence cannot be selected to fit a hunch.",
    "Describe each team's intentions with and without the ball before comparing their results.",
    "Treat an absence as a missing role, not a missing name.",
    "Keep a written uncertainty range beside every estimate, because a clean number can hide a fragile assumption."
  ],
  intro: `<p>Most pre-match analysis does not fail because there is too little information. It fails because the information is assembled in the wrong order. You watch a few highlights, notice a scoreline, check a table, form a view, and then look for numbers that support it. The note looks thorough. The reasoning is backwards.</p>
<p>A fixed routine is the simplest defence against that habit. It does not make the forecast correct. It makes the reasoning inspectable, which is the more useful standard. The routine below moves from sample to style to availability to context, and only then to a numerical estimate.</p>`,
  sections: [
    {
      id: "start-with-a-question",
      heading: "Start with a question, not a verdict",
      html: `<p>Before opening a table, write one sentence that names the uncertainty. "Can Club A sustain its press for ninety minutes?" is a question. "Club A should win" is a verdict wearing a question mark. The first invites evidence. The second recruits it.</p>
<p>A useful question points to a mechanism: a missing midfielder, a full-back isolated in a back three, a team that struggles against direct running. Once it is written, every later note either speaks to the question or is cut. That is how a checklist stays short.</p>
<p>Keep the question at the top of the page. If it changes halfway through, mark the change. A revised question is honest. A quietly revised question is how hindsight gets mistaken for insight.</p>`
    },
    {
      id: "choose-the-sample",
      heading: "Choose the sample before the numbers",
      html: `<p>The sample is the first real decision. Competition, venue, recency and opponent quality all change what a number means. Ten matches in one competition are not the same as ten spread across a league, a cup and a continental tie.</p>
<p>For club analysis, a rolling window of ten to fifteen matches is a reasonable start, backed by the previous season when the coach and squad are stable. Use minutes rather than appearances for player data. Separate home and away only when the split is large enough to survive a second look. Many are not.</p>
<p>Strength of schedule belongs in the same decision. A team that has played the strongest clubs recently may look ordinary and be ordinary. It may also be better than its points suggest. <a href="/articles/form-streaks-misleading.html">Form streaks can mislead</a> when the fixture list is not neutral.</p>`
    },
    {
      id: "describe-the-shape",
      heading: "Describe the shape each team wants",
      html: `<p>Style is not a synonym for formation. Two teams can line up as 4-3-3 and produce completely different matches. The useful description covers build-up, progression, pressing height, rest defence and the preferred route to the box. It also covers the out-of-possession shape, because that is where the matchup is decided.</p>
<p>Ask how each team creates its first advantage. One may want a spare player at the back and patient circulation. Another may want a direct ball into a striker and runners beyond. A third may press a specific pass and attack the chaos. The question is not which style is better in the abstract. It is which style gets the game it wants.</p>
<p>Reputation becomes a trap here. A possession side may have defended deep for a month because of injuries. A direct side may have added a technical midfielder and become patient. <a href="/articles/tactical-matchups-vs-reputation.html">Matchups matter more than reputation</a> when the two disagree.</p>`
    },
    {
      id: "weigh-availability",
      heading: "Weigh availability as a missing role",
      html: `<p>Team news is usually treated as a list of names. A more useful approach asks what function disappears. A missing centre-back may remove aerial defence, left-footed build-up, or the ability to hold a high line. Those are different absences with different consequences.</p>
<p>Sort the information. Long-term absences are part of the sample. Short-term absences are specific to this fixture. Suspensions are certain, while a player returning from injury may start, bench, or play a restricted number of minutes. International call-ups can add travel and late arrivals.</p>
<p>Build two or three scenarios rather than one. Name the role that changes in each. If the holding midfielder starts, the estimate stays near the baseline. If not, ask who protects the space in front of the defence. The scenario method keeps the note useful when the team sheet lands.</p>`
    },
    {
      id: "place-context",
      heading: "Place context inside the model",
      html: `<p>Context explains why raw numbers may not travel. Rest days, travel, pitch, weather, referee and competition priorities all belong in the note, but they do not all deserve an adjustment. The difference is evidence. A short turnaround is measurable. A vague sense that a club cares more is not.</p>
<p>Use context to condition the sample, not decorate it. If a team has played three matches in seven days, look at comparable schedules. If the pitch is narrow, ask which team's width depends on the touchline. If the referee allows more contact, ask who benefits from duels. Each question should point to a mechanism, not a mood.</p>
<p>Keep adjustments small and separate. A home bonus, rest bonus, injury penalty and motivation bonus can overlap, and the result is not precise. A tired team at home may gain from the crowd and lose from the schedule. Say which effect dominates, and by how much.</p>`
    },
    {
      id: "write-the-note",
      heading: "Write a one-page match note",
      html: `<p>The note is the deliverable. It should fit on one page and be readable by someone who has not seen the data. A workable structure is: fixture and question, sample, each team's shape, availability by role, context, an estimate with a range, and three uncertainties.</p>
<p>Each claim should be traceable. "Club A presses high" is not. "Club A's back line starts near the halfway line and the front three press the first pass" is. "Club B is weaker without its captain" is not. "Club B loses its main progressor from deep" is.</p>
<p>End with the uncertainties, not the estimate. The estimate is what readers remember, so the caveats need to sit beside it. If the note has no uncertainties, it is not analysis. It is a forecast pretending to be a fact.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The following clubs and numbers are illustrative. They are not a real fixture, a real run of results or a claim about any team.</p>
<table>
  <thead>
    <tr><th>Factor</th><th>Club A</th><th>Club B</th><th>Note</th></tr>
  </thead>
  <tbody>
    <tr><td>Neutral baseline</td><td>1.35</td><td>1.35</td><td>Goals per team</td></tr>
    <tr><td>Venue</td><td>+0.20</td><td>-0.10</td><td>Home and away adjustment</td></tr>
    <tr><td>Availability</td><td>-0.05</td><td>-0.10</td><td>Club B loses its holding midfielder</td></tr>
    <tr><td>Schedule</td><td>-0.10</td><td>0.00</td><td>Club A's third match in seven days</td></tr>
    <tr><td>Set pieces</td><td>+0.05</td><td>+0.10</td><td>Club B's aerial threat</td></tr>
    <tr><td>Adjusted expectancy</td><td>1.45</td><td>1.25</td><td>Sum of the rows</td></tr>
  </tbody>
</table>
<p>The arithmetic is simple. Club A: 1.35 + 0.20 - 0.05 - 0.10 + 0.05 = 1.45. Club B: 1.35 - 0.10 - 0.10 + 0.00 + 0.10 = 1.25. The total is 2.70 goals. A basic Poisson model using those two means produces roughly 42 per cent for Club A, 26 per cent for the draw and 33 per cent for Club B, with rounding. The exact split depends on the model.</p>
<p>Suppose a market-implied figure for Club A is 48 per cent. The gap is not an instruction. It is a prompt: which assumption is doing the work? If the answer is the schedule row, test it against a longer run of congested fixtures. If the answer is the set-piece row, ask whether one aerial matchup deserves that weight. The value of the exercise is the audit, not the disagreement.</p>
<p>Remove the schedule adjustment and Club A's expectancy rises to 1.55. That sensitivity is often more informative than the original number, because it shows which input the conclusion depends on.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Starting with a conclusion.</strong> If the view comes first, the sample becomes a search for support. Write the question first.</li>
<li><strong>Splitting until everything looks meaningful.</strong> Home form, away form, form after a European tie: each split cuts the sample. Most patterns in small slices are noise.</li>
<li><strong>Double-counting an absence.</strong> A missing midfielder can weaken both attack and defence. That does not mean two penalties. Name the mechanism once.</li>
<li><strong>Treating possession as control.</strong> A team can have most of the ball and pass in front of a compact block. Check where the ball is advanced.</li>
<li><strong>Mistaking detail for reliability.</strong> A ten-part note is not automatically better than a three-part note. Every extra input is another chance to overfit.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and what the checklist cannot do",
      html: `<p>A checklist improves consistency. It does not remove uncertainty. Public data may not describe the roles a coach actually uses. Lineups may arrive too late for a careful adjustment. A match can turn on a deflection, a red card or a refereeing decision that no pre-match note could reasonably contain.</p>
<p>There is also model risk. Two analysts can use the same sample and reach different estimates because they weight recency, opponent quality or home advantage differently. That is not a failure of the method. It is a reminder that the estimate is a summary of judgement, not a measurement of truth. Write down the weights, review them after the match, and change them for a reason rather than a result.</p>
<p>Finally, the checklist is not a substitute for watching football. Numbers tell you what happened often enough to matter. They do not tell you why a full-back hesitated or a coach changed shape at half-time. Use the data to direct your eyes, then let your eyes challenge the data.</p>`
    }
  ],
  faq: [
    {
      q: "How large should a pre-match sample be?",
      a: "There is no universal number. Ten to fifteen recent matches is a practical start for club form, supported by the previous season when the coach and squad are stable. Decide the window before looking at results."
    },
    {
      q: "Should I change my estimate when the lineup is announced?",
      a: "Only if the lineup changes a role you have already identified as important. Start with scenarios, then adjust once. A name change alone is not information; a change in who progresses the ball is."
    },
    {
      q: "What is the difference between a checklist and a model?",
      a: "A checklist structures judgement and makes assumptions visible. A model turns those assumptions into numbers. The checklist is useful without a model, and a model is fragile without one, because arithmetic can look more objective than its inputs."
    }
  ],
  related: ["form-streaks-misleading", "tactical-matchups-vs-reputation", "football-data-sources"]
};
