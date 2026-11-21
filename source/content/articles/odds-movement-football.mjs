export default {
  slug: "odds-movement-football",
  title: "Reading Football Odds Movement",
  metaTitle: "Reading Football Odds Movement",
  description: "What opening lines, steam and reverse movement can tell an analyst, and why a price change is information rather than an instruction.",
  category: "Betting Education",
  tags: ["odds", "market movement", "closing line"],
  published: "2026-06-23",
  updated: "2026-06-23",
  author: "Nyasha",
  dek: "A price is a snapshot of a market's current offer. Movement is the record of how that offer changed, not a transcript of why.",
  takeaways: [
    "Opening prices are provisional estimates, often adjusted before kick-off.",
    "A move can reflect information, liability management, or simple demand.",
    "Steam describes speed, not certainty.",
    "Movement is evidence to weigh, not a signal to follow."
  ],
  intro: `<p>A hypothetical market opens with Club A at 2.40. Two hours later the same price is 2.10. Nothing has happened on the pitch. The analyst's job is not to guess which trader knew what, but to ask what the new price implies and whether the change is large enough to matter.</p>
<p>Odds movement is often treated as a message from the market. It is better understood as a trail of revisions. Each revision has a cause, and the cause is usually invisible from outside. This guide explains the common patterns, shows the arithmetic behind a move, and sets out the limits of what a price path can prove.</p>`,
  sections: [
    {
      id: "what-moves-a-price",
      heading: "What actually moves a price",
      html: `<p>A price is an offer. It changes when the operator's estimate changes, when the operator wants to change its exposure, or when a competitor moves and the operator follows. Those are different mechanisms, and they can produce the same visible movement.</p>
<p>Information is the easiest to imagine: a training report, a selection decision, a weather forecast. Exposure management is less visible: a book that is carrying too much risk on one outcome may shorten that outcome even if the underlying estimate has not moved. Competition is a third force: operators watch each other, and a move at one can ripple across the market. A single price change can contain all three.</p>`
    },
    {
      id: "opening-lines-provisional",
      heading: "Opening lines are provisional",
      html: `<p>Opening prices are often set days before kick-off, with less information and more uncertainty. They are provisional in a literal sense: they are the market's first offer, not its final judgement. Early prices may also carry a larger margin, because the operator has less confidence and wants more protection.</p>
<p>That matters when comparing opening and closing prices. A move from 2.40 to 2.10 is not necessarily a single revision of the true probability. It is the net result of several revisions, each with its own cause. To interpret it, record the time of each price and the information available at that moment. A price without a timestamp is a number without a context. Our beginner guide to <a href="/articles/reading-football-odds.html">reading football odds</a> explains the conversion from prices to probabilities.</p>`
    },
    {
      id: "steam-and-speed",
      heading: "Steam and the speed of adjustment",
      html: `<p>Steam is the term for a rapid price change, usually across several operators, in response to information or a large order. The speed is the defining feature. A slow drift can reflect gradual demand; a steam move suggests that the market is repricing quickly.</p>
<p>Speed is a clue about coordination, not about correctness. A fast move can be right or wrong. It tells you that the market has changed its mind in a hurry, not that the new price is fair. In fact, a very fast move can overshoot, because operators are reacting to each other as well as to the underlying information. The analyst's question is not whether the move was fast, but what the new price implies and whether that implication is supported by the evidence.</p>`
    },
    {
      id: "reverse-movement",
      heading: "Reverse movement explained",
      html: `<p>Reverse movement is the pattern where a price moves against the direction of reported public support. If most small commitments are said to be on Club A, but the price on Club A drifts out, the visible demand and the visible price are telling different stories. The likely explanations include larger money on the other side, liability management, or a reported split that is not representative.</p>
<p>None of those explanations is certain. Reverse movement is a description of a relationship between two partial observations, not a window into the market's soul. It can be a useful prompt to check for team news or a tactical mismatch, but it cannot tell you which side is right. Our article on <a href="/articles/bookmaker-traps-public-bias.html">public bias and football odds</a> covers the market structure in more detail.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>Suppose a hypothetical market for Club A against Club B moves through three stages. The numbers are illustrative, and the percentages are rounded, so the components may not add exactly to the total.</p>
<table>
<thead><tr><th>Stage</th><th>Club A</th><th>Draw</th><th>Club B</th><th>Implied total</th></tr></thead>
<tbody>
<tr><td>Opening</td><td>2.40 (41.7%)</td><td>3.30 (30.3%)</td><td>3.10 (32.3%)</td><td>104.2%</td></tr>
<tr><td>Mid</td><td>2.20 (45.5%)</td><td>3.30 (30.3%)</td><td>3.40 (29.4%)</td><td>105.2%</td></tr>
<tr><td>Close</td><td>2.10 (47.6%)</td><td>3.40 (29.4%)</td><td>3.60 (27.8%)</td><td>104.8%</td></tr>
</tbody>
</table>
<p>After normalising, Club A rises from 40.0 per cent to 45.4 per cent, Club B falls from 31.0 per cent to 26.5 per cent, and the draw slips from 29.1 per cent to 28.1 per cent. The overround stays between 4.2 and 5.2 per cent, so most of the move is a reallocation rather than a change in the total margin.</p>
<p>The table gives the fact and nothing more. Club A's price shortened by 30 points of decimal odds, which sounds dramatic. In probability terms, the market moved about 5.4 percentage points towards Club A. Whether that is a lot depends on the match, the stage of the season, and the information available. A 5-point move in a low-information market may be meaningful; the same move after a confirmed team news story may be mostly priced in.</p>`
    },
    {
      id: "timing-information",
      heading: "Timing and the information you do not have",
      html: `<p>The timing of a move carries information, but not in a simple way. An early move may reflect a model's opening estimate or a small number of informed orders. A late move may reflect team news, but it may also reflect a rush of casual support or an operator balancing its book before kick-off. Late money is not automatically smart money.</p>
<p>Record the time and the reason, if you can find one. A move that happens within minutes of a confirmed injury is easier to interpret than a move that happens overnight with no obvious trigger. The aim is to build a timeline, not a single verdict. A timeline shows which pieces of information were available when the price changed.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating any drift as a signal.</strong> Some moves are noise, and some are administrative.</li>
<li><strong>Comparing prices from different times without normalising the overround.</strong> The margin can change as well as the probabilities.</li>
<li><strong>Assuming the closing price is always the truest.</strong> Closing prices often contain more information, but they are still an offer.</li>
<li><strong>Following a move after it has happened without asking what is left in the price.</strong> The information may already be reflected.</li>
<li><strong>Forgetting that the market can be wrong.</strong> A coordinated move is not the same as a correct one.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits: movement is not a forecast",
      html: `<p>Movement describes the market, not the match. It cannot tell you the true probability, and it cannot remove the margin. A price can move for reasons that have nothing to do with the teams, and a move that looks informative can be noise. The arithmetic of <a href="/articles/implied-probability-expected-value.html">implied probability and expected value</a> is a useful check, but it is still built on an estimate.</p>
<p>Most people who gamble over time end up with less money than they started, because prices contain a built-in margin and variance does most of the talking over short periods. Reading movement carefully may improve your understanding of prices. It does not promise a better financial outcome, and this article does not claim otherwise.</p>`
    }
  ],
  faq: [
    {
      q: "What is a steam move?",
      a: "A steam move is a rapid price change, often across several operators, that suggests the market is repricing in response to information or a large order. The speed is the defining feature, not the accuracy."
    },
    {
      q: "Does a shortening price mean a team is more likely to win?",
      a: "It means the market's implied probability has risen. The true probability may have moved less, or not at all. A price change is a change in the offer, not a direct measurement of the team."
    },
    {
      q: "Is the closing price always the most accurate?",
      a: "No. Closing prices often incorporate more information, but they can also be distorted by liability management and late demand. They are a useful reference, not a certainty."
    }
  ],
  related: ["bookmaker-traps-public-bias", "implied-probability-expected-value", "reading-football-odds"]
};
