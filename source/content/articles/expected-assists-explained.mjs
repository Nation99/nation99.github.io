export default {
  slug: "expected-assists-explained",
  title: "Expected Assists (xA) Explained",
  metaTitle: "Expected Assists (xA) Explained",
  description: "Expected assists estimates the shot value a pass created. Learn how xA works, how it differs from key passes, and where it misleads.",
  category: "xG and Stats",
  tags: ["xA", "expected assists", "chance creation", "analytics"],
  published: "2026-09-12",
  updated: "2026-09-12",
  author: "Nyasha",
  dek: "Expected assists credits a passer with the quality of the chance that followed. It is a useful description of creation, not a verdict on vision.",
  takeaways: [
    "xA adds the expected goals value of the shots that directly follow a player's pass.",
    "It measures the quality of the chance created, not the number of passes played.",
    "A single assist total mixes finishing and creation; xA separates them more clearly.",
    "Provider differences and small samples make xA a descriptive tool rather than a scout's answer.",
    "Read xA alongside xG, progression data, and the player's role."
  ],
  intro: `<p>An assist is a simple event with a noisy reputation. The passer receives credit when the shot goes in, even if the pass was ordinary and the finish was extraordinary. Expected assists, usually written as xA, tries to describe the pass itself by valuing the chance it created.</p>
<p>The idea follows the same logic as expected goals. Instead of asking whether a pass produced an assist, xA asks how valuable the resulting shot was. A pass that sets up a close-range finish earns more than a pass that leads to a hopeful effort from 25 yards.</p>`,
  sections: [
    {
      id: "what-xa-measures",
      heading: "What expected assists measures",
      html: `<p>xA is the sum of the expected goals values of the shots that directly follow a player's passes. If a player plays three passes that lead to shots worth 0.08, 0.14 and 0.03 xG, the xA for those passes is 0.25. The number is a measure of chance creation, expressed on the same scale as goals.</p>
<p>Only the pass immediately before the shot is usually counted. A long passing sequence that ends in a goal gives no credit to the earlier progressive pass, even if that pass did most of the work. This is a limitation of the event definition rather than a judgement about the player.</p>
<p>xA does not measure the difficulty of the pass. A simple square ball to an unmarked striker can earn more xA than a brilliant through ball that a defender clears at the last moment. The model values the shot, not the skill of the pass. That distinction is easy to forget when the number is presented next to a player's name.</p>`
    },
    {
      id: "difference-from-key-passes",
      heading: "How xA differs from key passes and assists",
      html: `<p>Three related numbers are often confused. An assist is an actual goal that followed a pass. A key pass is any pass that leads directly to a shot, whether or not the shot is scored. xA is the expected goal value of those shots.</p>
<p>Key passes treat a two-yard pass to a teammate who shoots from 30 yards in the same way as a cut-back that creates a clear chance. xA weights the second pass far more heavily. That makes xA a better description of chance quality, though key passes still tell you something about volume and involvement.</p>
<p>Assists are the noisiest of the three. A player can record ten assists from passes that created modest chances, while another records four from passes that created excellent ones. Over a long career the totals may converge, but over a season the gap between assists and xA can be large. That gap is a signal to investigate, not proof that one player is lucky and the other is better.</p>`
    },
    {
      id: "how-xa-is-calculated",
      heading: "How xA is calculated",
      html: `<p>The calculation starts with a shot-level xG model. Every shot has a value based on location, angle, body part, pressure and any other inputs the provider uses. The provider then identifies the pass that directly preceded the shot and assigns the shot's xG to the passer.</p>
<p>Some providers make small adjustments. They may exclude passes from set pieces, or separate open-play xA from dead-ball xA. They may count a shot that follows a deflection differently. The core idea remains the same, but the details vary, which is why xA totals from two providers should not be mixed without care.</p>
<p>The arithmetic is simple once the assignments are made. The hard part is the event data: detecting the pass, deciding which pass was the decisive one, and matching the shot to the correct player. Data quality matters more than the formula.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The example below is illustrative. Player A and Player B each play four passes that lead directly to a shot. The xG value of each resulting shot is shown in the table.</p>
<table>
<caption>Illustrative xA calculation</caption>
<thead><tr><th>Pass</th><th>Player A shot xG</th><th>Player B shot xG</th></tr></thead>
<tbody>
<tr><td>1</td><td>0.06</td><td>0.02</td></tr>
<tr><td>2</td><td>0.09</td><td>0.05</td></tr>
<tr><td>3</td><td>0.12</td><td>0.04</td></tr>
<tr><td>4</td><td>0.18</td><td>0.03</td></tr>
<tr><td><strong>Total xA</strong></td><td><strong>0.45</strong></td><td><strong>0.14</strong></td></tr>
</tbody>
</table>
<p>Player A's passes created 0.45 xA. Player B's created 0.14. Both played four key passes, so a key-pass count would describe them as equally involved. The xA figures show that A's passes led to better chances.</p>
<p>Now suppose Player A also recorded one actual assist and Player B recorded two. The assist column would make B look more productive. The xA column suggests that A's passing created the better chances and that B's two assists came from lower-value situations. Neither column is the whole story. Together they show why assists and xA should be read side by side.</p>
<p>The example also shows the effect of one large chance. If A's 0.18 shot had been a 0.05 effort, A's total would fall to 0.32. A single high-value chance can move a small sample considerably, which is why per-match averages over a full season are more stable than one-match totals.</p>`
    },
    {
      id: "reading-xa-with-xg",
      heading: "Reading xA alongside xG",
      html: `<p>xA describes creation; xG describes the shooter's chances. A player who posts high xA and low xG is creating more than shooting. A player with high xG and low xA is finishing moves rather than starting them. A player with both is heavily involved in the final action.</p>
<p>The combination is more informative than either number alone. A midfielder with 0.25 xA per 90 and 0.08 xG per 90 is a creator. A forward with 0.10 xA and 0.45 xG is a finisher. Those roles are different, and judging both players by assist totals alone would obscure the difference.</p>
<p>It also helps to look at the shot distribution behind the xA. A player may accumulate xA from many low-value crosses or from a few high-value cut-backs. The totals can be similar while the underlying styles are completely different. Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains how to read that distribution.</p>`
    },
    {
      id: "role-and-position",
      heading: "Role and position change the number",
      html: `<p>xA is sensitive to role. A creative midfielder who takes corners will accumulate xA from set pieces, while a wide forward who rarely takes dead balls may create less xA but more open-play danger. Comparing their totals without separating the sources is misleading.</p>
<p>Team style matters too. A side that crosses constantly may generate many low-value shots and modest xA per pass. A side that plays cut-backs and through balls may generate fewer shots but higher xA per chance. The same player in a different system could post a very different total without changing ability.</p>
<p>Minutes matter as much as they do for goals. Per-90 rates are more comparable than season totals, but even per-90 rates need a sample large enough to smooth out one or two unusual matches. A player with 300 minutes and a hot streak can look like an elite creator before regression pulls the number back.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating xA as a prediction of next season's assists.</strong> It describes the chances created, not how many will be scored.</li>
<li><strong>Comparing key passes and xA as if they measure the same thing.</strong> One counts events; the other weights their quality.</li>
<li><strong>Ignoring set pieces.</strong> Corners and free kicks can inflate xA and distort open-play comparisons.</li>
<li><strong>Using a handful of matches.</strong> xA is noisy in small samples, especially when one or two high-value chances dominate the total.</li>
<li><strong>Mixing providers.</strong> Different xG models assign different values to the same shot, so the xA totals inherit those differences.</li>
</ul>
<p>Most of these mistakes come from asking a descriptive metric to settle a question about future performance. xA is at its best when it is used to describe what kind of chances a player helped create.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>xA cannot capture the pass before the pass, the run that created space, or the defender who was dragged out of position. It credits the final ball and ignores the build-up. That makes it a narrow measure of creation, useful but incomplete.</p>
<p>It also cannot separate the quality of the pass from the quality of the shot selection. A passer might put a teammate through with a superb ball, only for the teammate to take a poor touch and shoot from a worse angle. The xG model values the shot that happened, not the chance that was available.</p>
<p>Used carefully, xA adds a useful dimension to attacking analysis. Pair it with xG, progression data and minutes, and treat differences of a few hundredths as noise. For a broader view of how possession value is measured before the shot, see our guide to <a href="/articles/expected-threats-xt.html">expected threats</a>. Our note on <a href="/articles/data-visualization-football.html">data visualisation</a> explains how to present these numbers without implying more certainty than the data supports.</p>`
    }
  ],
  faq: [
    {
      q: "What is a good xA per 90?",
      a: "It depends on position, role and team style. A creative attacking midfielder will usually post a higher figure than a defensive midfielder. Compare players in similar roles rather than using a single universal threshold."
    },
    {
      q: "Why does xA not match a player's assists?",
      a: "Assists depend on whether the shot was scored, while xA depends on the quality of the chance. A player can create excellent chances that are missed, or record assists from low-value shots that happen to go in."
    },
    {
      q: "Does xA include passes that lead to penalties?",
      a: "It depends on the provider. Some include the penalty's xG value, some exclude it, and some treat it separately. Check the definition before comparing totals."
    }
  ],
  related: ["what-is-xg-football", "expected-threats-xt", "data-visualization-football"]
};
