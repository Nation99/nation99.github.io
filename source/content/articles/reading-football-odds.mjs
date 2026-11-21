export default {
  slug: "reading-football-odds",
  title: "How to Read Football Odds",
  metaTitle: "How to Read Football Odds: A Beginner's Guide",
  description: "Decimal, fractional and American odds explained with clear conversions, implied probability and the margin built into every market price.",
  category: "Beginner Guides",
  tags: ["odds", "implied probability", "beginner"],
  published: "2026-03-11",
  updated: "2026-03-11",
  author: "Nyasha",
  dek: "Odds are a compact way of quoting a price. Learning the formats is the first step towards reading what the price contains.",
  takeaways: [
    "Decimal, fractional and American odds are three ways of writing the same price.",
    "Decimal odds include the stake, while fractional odds usually quote the return above it.",
    "Implied probability is one divided by decimal odds.",
    "A market's implied probabilities usually add to more than 100 per cent because of the margin.",
    "A price is a market observation, not a statement of truth."
  ],
  intro: `<p>Odds are a compact way of quoting a price. They tell you what a successful outcome would return, and they imply a probability once you do a small calculation. They do not tell you what will happen, and they do not tell you whether the price is fair.</p>
<p>Football coverage uses three formats: decimal, fractional and American. The same market can appear in all three, which is useful once you know how to convert between them. This guide covers the conversions, the arithmetic of implied probability and the margin inside a set of prices.</p>`,
  sections: [
    {
      id: "odds-are-prices",
      heading: "Odds are prices, not prophecies",
      html: `<p>A price exists because someone is willing to trade at it. In a football market, the price reflects an estimate of probability, the cost of running the market and the flow of money on each outcome. It can move without any new information about the teams.</p>
<p>That is why a short price is not a promise. A quote of 1.20 on a strong team means the market considers that outcome likely, not certain. Heavy favourites lose. The price compresses the likelihood into a number, and the number still contains uncertainty.</p>
<p>Reading odds well means separating three questions. What does this price return if the outcome happens? What probability does it imply before the margin is removed? And what do I think the probability is? The first two are arithmetic; the third is analysis.</p>`
    },
    {
      id: "decimal-odds",
      heading: "Decimal odds: the simplest format",
      html: `<p>Decimal odds state the total return for one unit staked, including the stake. A price of 2.50 returns 2.50 units for every 1 unit, which is a return of 1.50 above the stake.</p>
<p>The arithmetic is multiplication. If you stake 10 units at 2.50, the total return is 10 multiplied by 2.50, which is 25 units. Of that, 15 units are the return above the original stake.</p>
<p>Decimal odds are common in continental Europe, Australia and many online interfaces. They are easy to compare because the number is the total multiple.</p>
<p>To convert decimal odds to implied probability, divide 1 by the price. At 2.50, that is 0.40, or 40 per cent; at 4.00, it is 25 per cent. This is the raw value, before any margin adjustment.</p>`
    },
    {
      id: "fractional-odds",
      heading: "Fractional odds: returns relative to stake",
      html: `<p>Fractional odds are common in British and Irish racing and football coverage. A price of 3/2 means that for every 2 units staked, the return above the stake is 3 units. The total return, including the stake, is 5 units.</p>
<p>To convert fractional odds to decimal, divide the first number by the second and add 1. For 3/2, 3 divided by 2 is 1.5, and adding 1 gives 2.50. For 1/4, 1 divided by 4 is 0.25, and adding 1 gives 1.25. For 5/1, the decimal is 6.00.</p>
<p>The addition of 1 is the step people forget. Fractional odds quote the return above the stake, so the stake must be added back. A price of 3/2 is 2.50 in decimal terms, not 1.50.</p>
<p>To go the other way, subtract 1 from the decimal price and express the result as a fraction. A decimal price of 2.50 becomes 1.50, or 3/2; 1.25 becomes 0.25, or 1/4.</p>`
    },
    {
      id: "american-odds",
      heading: "American odds: favourites and underdogs",
      html: `<p>American odds use a positive or negative number. A positive number shows the return above the stake on a 100 unit wager; a negative number shows the stake needed to return 100 units above the stake.</p>
<p>A price of +150 means that a 100 unit stake would return 150 units above the stake, for a total of 250. The decimal equivalent is 1 plus 150 divided by 100, which is 2.50.</p>
<p>A price of -200 means a 200 unit stake would return 100 units above the stake, for a total of 300. The decimal equivalent is 1 plus 100 divided by 200, which is 1.50.</p>
<p>The signs can feel inverted because the negative number marks the favourite. The larger the negative number, the shorter the price; the larger the positive number, the longer it is.</p>`
    },
    {
      id: "implied-probability",
      heading: "From odds to implied probability",
      html: `<p>Implied probability turns a price into a percentage. For decimal odds, the formula is 1 divided by the decimal price. For fractional odds, it is the denominator divided by the sum of the numerator and denominator.</p>
<p>The decimal route is usually the least error-prone. Convert everything to decimal first, then divide 1 by the price. A price of 2.00 implies 50 per cent, a price of 3.00 implies 33.33 per cent and a price of 5.00 implies 20 per cent.</p>
<p>Those percentages are not yet a forecast. They are the probabilities that would make the price fair if the market took no margin. Real markets include a margin, so the raw percentages add to more than 100 per cent.</p>`
    },
    {
      id: "overround",
      heading: "Why implied probabilities add up to more than 100 per cent",
      html: `<p>Take a match with three possible outcomes and decimal prices of 2.00, 3.50 and 4.00. The raw implied probabilities are 50.00 per cent, 28.57 per cent and 25.00 per cent. They add to 103.57 per cent.</p>
<p>The extra 3.57 percentage points are the overround, sometimes called the margin. It is the difference between the sum of the implied probabilities and 100 per cent. The margin covers the market's costs and uncertainty across the outcomes; it is not a fee added at the end.</p>
<p>To compare the market's view with a model, normalise the probabilities by dividing each one by the total. Club A's 50.00 becomes 50.00 divided by 1.0357, which is 48.28 per cent. The draw's 28.57 becomes 27.59 per cent, and Club B's 25.00 becomes 24.14 per cent. Those three now add to 100 per cent.</p>
<p>These normalised values are the market's estimates with the margin removed. They are not corrected probabilities in any deeper sense. A market can be wrong even after the arithmetic is tidy.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table is illustrative. Club A and Club B are hypothetical, and the prices are invented to show the conversions and margin arithmetic.</p>
<table>
<caption>Three formats for the same hypothetical match prices</caption>
<thead>
<tr><th>Outcome</th><th>Decimal</th><th>Fractional</th><th>American</th><th>Implied probability</th></tr>
</thead>
<tbody>
<tr><td>Club A win</td><td>2.00</td><td>1/1</td><td>+100</td><td>50.00%</td></tr>
<tr><td>Draw</td><td>3.50</td><td>5/2</td><td>+250</td><td>28.57%</td></tr>
<tr><td>Club B win</td><td>4.00</td><td>3/1</td><td>+300</td><td>25.00%</td></tr>
<tr><td><strong>Total</strong></td><td></td><td></td><td></td><td><strong>103.57%</strong></td></tr>
</tbody>
</table>
<p>Check the conversions. Club A: 1 divided by 2.00 is 50 per cent, and 1/1 becomes 2.00. The draw: 1 divided by 3.50 is 28.57 per cent, and 5/2 becomes 3.50. Club B: 1 divided by 4.00 is 25 per cent, and 3/1 becomes 4.00. The American prices follow the same values: +100, +250 and +300.</p>
<p>The raw probabilities add to 50.00 + 28.57 + 25.00 = 103.57 per cent. Dividing each by 1.0357 gives roughly 48.28, 27.59 and 24.14 per cent, which add to 100 per cent after rounding. The market's margin has been removed, but its ordering has not been endorsed.</p>`
    },
    {
      id: "reading-movement",
      heading: "Reading movement without overreacting",
      html: `<p>When a price shortens, its implied probability rises. When it lengthens, its implied probability falls. That much is mechanical. The reason for the move is not visible in the number alone.</p>
<p>A move can reflect new information about team selection, a change in the market's assessment, or simply the cost of balancing liabilities. It can also reflect a small market with few participants. A price that drifts from 3.40 to 3.60 is not proof of an injury or tactical change; it invites a question.</p>
<p>The useful comparison is between the current price and a price from the same source at an earlier time. Mixing sources introduces differences in margin and definition. Even then, movement is information rather than instruction. Our guide to <a href="/articles/odds-movement-football.html">reading odds movement</a> covers the patterns in more detail.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<p><strong>Treating a short price as a certainty.</strong> A price of 1.20 implies a high probability, not a guarantee. The outcome can still fail to happen.</p>
<p><strong>Forgetting the stake in fractional odds.</strong> A price of 3/2 is 2.50 in decimal, not 1.50. The missing 1 is the stake.</p>
<p><strong>Comparing formats without converting.</strong> A fractional price and a decimal price cannot be compared at a glance. Convert both to decimal before deciding which is longer.</p>
<p><strong>Adding implied probabilities and expecting 100 per cent.</strong> A three-way market will usually sum to more than 100 per cent because of the margin. Treating the raw sum as a probability distribution overstates every outcome.</p>
<p><strong>Using odds as a model.</strong> A market price is one estimate among many. It can be a useful benchmark, but it does not replace your own reasoning.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>Odds reflect market conditions at a point in time. They can change before kick-off, and the price available to one participant may differ from another's. Early markets can be thin, with wider margins than mature markets.</p>
<p>The conversions in this guide are exact arithmetic. The conclusions people draw from them are not exact. A normalised probability is still a market estimate, and a margin is not a measure of how wrong the market is. It is the cost embedded in the prices.</p>
<p>For a neutral explanation of how to compare a price with a probability estimate, see our guide to <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a>. The arithmetic there builds directly on the conversions above, and it comes with the same warning: the market is a source of information, not a verdict.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between decimal and fractional odds?",
      a: "Decimal odds include the stake in the quoted return, while fractional odds usually quote the return above the stake. A fractional price of 3/2 is the same as a decimal price of 2.50."
    },
    {
      q: "Why do the implied probabilities of a match add up to more than 100 per cent?",
      a: "The extra percentage is the margin or overround. It covers the market's costs and uncertainty. Dividing each implied probability by the total removes the margin and produces a set that adds to 100 per cent."
    },
    {
      q: "Does a shorter price mean an outcome is more likely?",
      a: "It means the market is pricing the outcome as more likely, not that it will happen. Prices can move for reasons unrelated to team strength, and a short price can still lose."
    }
  ],
  related: ["implied-probability-expected-value", "odds-movement-football", "winning-predictions-vs-profit"]
};
