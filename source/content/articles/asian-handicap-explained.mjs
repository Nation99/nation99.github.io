export default {
  slug: "asian-handicap-explained",
  title: "Asian Handicap Explained",
  metaTitle: "Asian Handicap Explained",
  description: "Learn how Asian handicap lines work, including level, split and quarter handicaps, with worked examples of wins, pushes and half results.",
  category: "Beginner Guides",
  tags: ["Asian handicap", "odds", "handicap", "beginner"],
  published: "2026-10-20",
  updated: "2026-10-20",
  author: "Nyasha",
  dek: "An Asian handicap gives one team a head start or a deficit. The line removes the draw and turns a three-way match into a two-way comparison.",
  takeaways: [
    "An Asian handicap adjusts the starting score before the result is settled.",
    "Whole lines can push, half lines cannot, and quarter lines split the stake across two adjacent lines.",
    "The draw is removed because the handicap creates a two-way market.",
    "The size of the handicap is the market's attempt to balance the two sides.",
    "Reading the line is an exercise in probability, not a recommendation."
  ],
  intro: `<p>A standard match market has three outcomes: home win, draw, away win. An Asian handicap reduces that to two by giving one team a virtual head start. The adjustment can turn a strong favourite into a more even contest, or make a close match look like a mismatch.</p>
<p>The concept is simple, but the notation can confuse beginners. Lines such as minus 0.5, minus 0.75 and minus 1.25 behave differently, and the quarter lines split the outcome in a way that has no direct equivalent in the final score.</p>`,
  sections: [
    {
      id: "what-it-is",
      heading: "What an Asian handicap does",
      html: `<p>An Asian handicap adds a number of goals to one team's score for settlement purposes. If Club A is given a handicap of minus 1, it must win by two or more goals for that side of the market to be successful. A one-goal win becomes a draw on the handicap, which is usually settled as a push.</p>
<p>The handicap is not a prediction of the score. It is a way to express the relative strength of the two teams in a two-way market. A large handicap means the market sees a large gap. A small handicap means the teams are considered close.</p>
<p>Because the draw is removed, the two sides of an Asian handicap market are complementary, apart from the margin. That makes the arithmetic easier to follow than a three-way market, but it also means the line carries a lot of information about the expected balance of the match.</p>`
    },
    {
      id: "whole-and-half",
      heading: "Whole lines, half lines, and pushes",
      html: `<p>A half line, such as minus 0.5, cannot be pushed. If Club A wins by one goal or more, the minus 0.5 side is successful. If the match is drawn or Club A loses, the other side is successful. The half goal removes the possibility of a push.</p>
<p>A whole line, such as minus 1, can be pushed. If Club A wins by exactly one goal, the adjusted score is level, and the stake is returned on that side. A win by two or more goals succeeds; a draw or loss fails. The push is a distinct outcome, not a win or a loss.</p>
<p>Whole lines are common at 0, 1 and 2. They can be useful for understanding how the market treats the margin, but they require the analyst to account for the possibility of a push. A model that ignores pushes will misstate the probabilities.</p>`
    },
    {
      id: "quarter-lines",
      heading: "Quarter lines split the difference",
      html: `<p>A quarter line, such as minus 0.75, is halfway between minus 0.5 and minus 1. It is settled as two half-stakes, one on each adjacent line. The same applies to plus 0.75, minus 1.25 and other quarter values.</p>
<p>Suppose Club A is minus 0.75 and wins by one goal. The half-stake on minus 0.5 succeeds, while the half-stake on minus 1 pushes. The overall result is a half win. If Club A wins by two or more, both halves succeed. If the match is drawn or Club A loses, both halves fail.</p>
<p>The quarter line therefore produces four possible outcomes: win, half win, half loss and loss. That is more complex than a standard two-way market, but it is not mysterious once the split is understood. The key is to treat the line as two separate bets on adjacent handicaps.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The example below is illustrative. Club A is priced at minus 0.75 against Club B. We use a notional 100 units for arithmetic only, and the figures exclude any market margin.</p>
<table>
<caption>Illustrative settlement of a minus 0.75 handicap</caption>
<thead><tr><th>Match result</th><th>Minus 0.5 half</th><th>Minus 1 half</th><th>Overall</th></tr></thead>
<tbody>
<tr><td>Club A wins 2-0</td><td>Win</td><td>Win</td><td>Full win</td></tr>
<tr><td>Club A wins 1-0</td><td>Win</td><td>Push</td><td>Half win</td></tr>
<tr><td>Draw 1-1</td><td>Loss</td><td>Loss</td><td>Full loss</td></tr>
<tr><td>Club A loses 0-1</td><td>Loss</td><td>Loss</td><td>Full loss</td></tr>
</tbody>
</table>
<p>If the decimal price is 1.90, a full win returns 90 units on a 100 unit notional stake. A half win returns half of that return, or 45 units, while the other half is returned. A push returns the relevant half. A full loss returns nothing.</p>
<p>The example shows why the line matters. A bettor who thinks Club A will win by exactly one goal is in a different position from one who expects a comfortable win. The handicap expresses that difference in the settlement rules, not in the opinion.</p>
<p>Now compare minus 0.5 at the same price. A 1-0 win is a full win rather than a half win, so the minus 0.5 line is more favourable to the Club A side for that score. The market would normally price the two lines differently to reflect that difference.</p>`
    },
    {
      id: "why-remove-draw",
      heading: "Why the draw is removed",
      html: `<p>The draw is removed because the handicap creates a two-way comparison. In a standard match market, the draw is a third outcome with its own probability. In an Asian handicap, the handicap is chosen so that the adjusted match has two sides, with the draw absorbed into the line or the push.</p>
<p>That structure appeals to analysts who want a cleaner comparison of relative strength. It also makes the market sensitive to the exact line. A change from minus 0.5 to minus 0.75 is not a small cosmetic adjustment; it changes the settlement for a one-goal win. The line and the price move together, and both need to be read.</p>
<p>For a beginner, the clearest approach is to start with half lines and whole lines before moving to quarter lines. The half line is decisive, the whole line introduces the push, and the quarter line combines the two. Understanding the settlement rules is more important than memorising notation.</p>`
    },
    {
      id: "reading-prices",
      heading: "Reading the price alongside the line",
      html: `<p>A handicap is only half of the information. The price tells you how the market values each side. A large handicap with a short price implies a strong favourite; a small handicap with a longer price implies a closer contest. The two pieces need to be read together.</p>
<p>The price can be converted into an implied probability, as explained in our guide to <a href="/articles/reading-football-odds.html">reading football odds</a>. For a two-way market, the two implied probabilities should sum to slightly more than 100 per cent because of the margin. Normalising them gives a cleaner estimate of the market's view.</p>
<p>The line itself is also informative. If the market moves from minus 0.5 to minus 0.75, it is expressing a stronger view of the favourite. That movement may reflect team news, money flow or a change in the underlying model. Our note on <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a> explains how to compare the market estimate with an independent estimate.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a quarter line as a single bet.</strong> It is two half-stakes on adjacent lines, which is why half wins and half losses exist.</li>
<li><strong>Forgetting that whole lines can push.</strong> A one-goal win on a minus 1 line is not a loss or a win in the usual sense.</li>
<li><strong>Reading the handicap as a prediction.</strong> The line expresses the market's balance, not a forecast of the exact margin.</li>
<li><strong>Ignoring the price.</strong> A favourable line at a poor price may be less useful than a less favourable line at a better one.</li>
<li><strong>Comparing handicapped and non-handicapped markets without adjustment.</strong> The draw is treated differently, so the probabilities are not directly comparable.</li>
</ul>
<p>Most beginner errors come from the notation rather than the idea. Once the settlement rules are clear, the market becomes easier to read.</p>`
    },
    {
      id: "limits",
      heading: "Limits and responsible use",
      html: `<p>Asian handicaps are a pricing structure, not a shortcut to a better forecast. The line can be efficient, and the margin still works against the participant. Understanding the structure does not remove the uncertainty of the match.</p>
<p>Different providers may use slightly different rules for pushes, abandoned matches or unusual events. Check the settlement rules before treating a line as standard. A model that assumes one rule set may misstate the probabilities under another.</p>
<p>For the totals market, the same logic of lines and pushes applies, as explained in our <a href="/articles/over-under-goals-guide.html">over/under goals guide</a>. The broader lesson is that a market's format changes the question it asks. Read the format before reading the price.</p>`
    }
  ],
  faq: [
    {
      q: "What does minus 0.75 mean in an Asian handicap?",
      a: "It means the team is handicapped by three-quarters of a goal. The stake is split between minus 0.5 and minus 1, so a one-goal win produces a half win rather than a full win or a push."
    },
    {
      q: "What happens to an Asian handicap if the match is drawn?",
      a: "It depends on the line. A half line or quarter line will usually produce a loss for the favoured side, while a whole line may push if the handicap is exactly covered. The settlement rules define the outcome."
    },
    {
      q: "Why do Asian handicaps not include a draw option?",
      a: "The handicap adjusts the starting score so that the market has two sides. The draw is absorbed into the line, the push rules, or the price rather than offered as a separate outcome."
    }
  ],
  related: ["reading-football-odds", "implied-probability-expected-value", "over-under-goals-guide"]
};
