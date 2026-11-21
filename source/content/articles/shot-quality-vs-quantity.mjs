export default {
  slug: "shot-quality-vs-quantity",
  title: "Shot Quality vs Shot Quantity in Football",
  metaTitle: "Shot Quality vs Shot Quantity in Football",
  description: "Shot volume and shot quality are different dimensions. Learn how xG combines them, why both matter, and how to compare contrasting attacking profiles.",
  category: "xG and Stats",
  tags: ["shot quality", "shot volume", "xG", "chance creation"],
  published: "2026-11-25",
  updated: "2026-11-25",
  author: "Nyasha",
  dek: "Two teams can finish with the same expected goals and tell completely different stories. The total hides the difference between taking more shots and taking better ones.",
  takeaways: [
    "Shot quantity is how many attempts a team takes; shot quality is how good each attempt is.",
    "An xG total combines both dimensions because it sums the estimated value of every shot.",
    "Two teams can reach the same xG with very different mixes of volume and quality.",
    "Volume and quality carry different information, and both need context about game state, opponent and sample size.",
    "xG per shot describes style, while total xG describes output, and neither is a prediction on its own."
  ],
  intro: `<p>Two teams can finish a match with the same expected goals and tell different stories about how they attacked. One may have taken twenty shots from distance; the other six from inside the box. The total hides the difference between quantity and quality.</p>
<p>Shot volume is easy to count. Shot quality requires a model that weighs location, angle and other factors. Expected goals combines both by summing every attempt's estimated value, but the single number can conceal as much as it reveals.</p>
<p>This guide explains the two dimensions, how xG joins them, and how to compare teams whose attacking profiles look nothing alike.</p>`,
  sections: [
    {
      id: "two-dimensions",
      heading: "Quantity and quality are different dimensions",
      html: `<p>Shot quantity is the count. A team that takes 18 shots has more volume than one that takes nine. The count can be split further: shots inside the box, shots from the centre, headers, or attempts after a rebound.</p>
<p>Shot quality is the average value of those attempts. It is often expressed as xG per shot, the total expected goals divided by the number of shots. A team with nine shots worth 1.26 xG has an average of 0.14 per shot. A team with 18 shots worth the same 1.26 xG has an average of 0.07.</p>
<p>The two teams have identical output and different processes. The first created fewer but better chances. The second created more but weaker ones. Neither profile is automatically superior. The first depends on converting a few good chances; the second on generating enough volume to compensate.</p>
<p>This is why a single shot count or a single xG total is a poor description of an attack. The count says nothing about location. The total says nothing about how the chances were distributed. Together, they begin to show the shape of the team's threat.</p>`
    },
    {
      id: "how-xg-combines-them",
      heading: "How xG combines volume and quality",
      html: `<p>An xG model assigns a probability to each shot based on its location and other inputs, then adds those probabilities together. A close-range chance may be worth 0.35; a shot from 25 yards may be worth 0.03. The team total is the sum of every attempt.</p>
<p>That arithmetic means a total can rise in two ways: more shots, or better shots. A team that takes 20 attempts at 0.06 each finishes with 1.2 xG. A team that takes eight attempts at 0.15 each also finishes with 1.2. The totals match, but the underlying events do not.</p>
<p>The distinction matters when a total summarises performance. A high total built from volume suggests sustained pressure and repeated entries into shooting areas. A high total built from quality suggests fewer entries but clearer chances, often from transitions or set pieces. Both can be good, but they imply different strengths and vulnerabilities.</p>
<p>Penalties need care. One penalty adds a large value, often around 0.75 to 0.8 xG depending on the model, from a single attempt. A team that wins a penalty looks more dangerous in the total even if its open-play creation was modest. Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains the inputs behind these values.</p>`
    },
    {
      id: "why-both-matter",
      heading: "Why both dimensions matter",
      html: `<p>Volume without quality can look like dominance while producing little. A team may move the ball into the final third, win corners and force the opponent deep, then settle for shots from outside the box. The pressure is real, but the chance quality is low, so the pattern can be sustainable as territory and inefficient as scoring.</p>
<p>Quality without volume can be efficient but fragile. A team that creates two clear chances and scores one may look clinical. If the opponent blocks the route to those chances, the team may have no second way to generate threat. Selective attacks are not automatically better; they depend on the chances arriving.</p>
<p>Context decides how to read the balance. A team chasing a game will often increase volume and lower average quality, because it is shooting from wherever it can. A team protecting a lead may take fewer shots but of better quality, because it attacks the space the opponent leaves. A low-volume, high-quality profile may describe a counter-attacking side, or a team that spent the match without the ball.</p>
<p>Both dimensions carry information, but not in the same way. Shot volume tends to be more stable than conversion from match to match. Average shot quality can move sharply when a team loses a striker or changes its approach. Neither is a fixed identity.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It compares two teams over ten matches. The numbers are invented for teaching.</p>
<table>
<caption>Illustrative shooting profile over ten matches</caption>
<thead><tr><th>Measure</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Shots</td><td>164</td><td>102</td></tr>
<tr><td>Shots inside the box</td><td>91</td><td>74</td></tr>
<tr><td>Expected goals</td><td>15.2</td><td>14.8</td></tr>
<tr><td>xG per shot</td><td>0.093</td><td>0.145</td></tr>
<tr><td>Goals</td><td>17</td><td>15</td></tr>
<tr><td>Goals minus xG</td><td>+1.8</td><td>+0.2</td></tr>
</tbody>
</table>
<p>The two teams produced almost the same expected goals, about 1.5 per match, in different ways. Team A took 16.4 shots per match and built its total through volume. Team B took 10.2 and built through better average quality. Team A scored 1.8 goals more than its xG suggested, while Team B finished almost exactly at its estimate.</p>
<p>It is tempting to conclude Team A has better finishers. Ten matches is far too short. A couple of deflections, a strong goalkeeping display against Team B, or one match with high conversion can produce the same gap. The column describes what happened, not a repeatable skill.</p>
<p>Now look at the distribution. If Team B's 14.8 xG came from three matches with a combined 8.0, its profile is much less steady than the average suggests. If Team A's 15.2 was spread evenly across the ten matches, its volume may be the more reliable pattern. The table gives the totals; a match-by-match list or a shot map gives the shape.</p>
<p>Penalties can change the comparison. Suppose Team B's total included three penalties worth about 2.3 xG. Its open-play xG would fall to roughly 12.5, and its open-play xG per shot would drop. A total that looked almost identical would describe a weaker open-play attack.</p>`
    },
    {
      id: "comparing-profiles",
      heading: "Comparing teams with different profiles",
      html: `<p>The first rule is to compare rates, not raw totals. Teams play different numbers of matches, and a total over 12 games is not comparable with one over eight. Use per-match figures and state the sample.</p>
<p>The second rule is to compare more than one measure. Shots per match, shots inside the box, xG per match and xG per shot together are more informative than any single column. If one team leads on volume and the other on quality, say so rather than force a verdict.</p>
<p>The third rule is to separate the sources of value. Penalties, set pieces and open play are different routes to a shot. A team may rank highly on total xG because of set pieces while creating little in open play, so split the sources.</p>
<p>The fourth rule is to check the opponent and the game state. A team that has faced strong opponents may have lower volume and quality than its process deserves. A team that has spent many minutes chasing deficits may have inflated volume. Shot maps help here, because they show where the attempts came from. Our guide to <a href="/articles/shot-maps-football.html">shot maps</a> explains how to read the distribution.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Equating more shots with a better attack.</strong> Volume without location can be pressure without penetration.</li>
<li><strong>Equating higher xG per shot with a better attack.</strong> A team that rarely shoots may have a high average because it only shoots from close range.</li>
<li><strong>Comparing xG per shot across providers.</strong> Different models value the same shot differently, so the averages are not interchangeable.</li>
<li><strong>Ignoring penalties and set pieces.</strong> One penalty can lift a total and an average without any improvement in open play.</li>
<li><strong>Reading goals minus xG as finishing skill.</strong> Ten matches is a small sample, and deflections and keeper errors affect the gap.</li>
<li><strong>Judging a profile from one match.</strong> A single game can produce an extreme shot count or an unusually high average quality.</li>
</ul>
<p>The common thread is the search for one number that settles the argument. Volume and quality answer different questions, so keep them apart before putting them back together.</p>`
    },
    {
      id: "limits",
      heading: "Limits and practical use",
      html: `<p>xG is a model, not a measurement. Its values depend on the inputs, training sample and calibration choices of the provider. A quality comparison built from two models can produce differences that are artefacts rather than signals. Our article on <a href="/articles/xg-models-differences.html">why xG models disagree</a> explains how large those differences can be.</p>
<p>Shot counts have definitional quirks. Blocked shots may or may not be included. A deflected shot may be recorded as an attempt by the original shooter or the deflector. Rebound sequences can produce several attempts in two seconds, inflating volume without adding independent information.</p>
<p>The practical approach is modest. Use one provider, state the sample, separate penalties and set pieces, and pair the numbers with video and game state. A team can create excellent chances that never become shots because a pass is cut out. The record only sees attempts that happened.</p>
<p>Read together, volume and quality give a fuller description of an attack than either can alone. One shows how often the team reached a shooting position. The other shows how good those positions were. The interesting questions sit in the gap between them.</p>`
    }
  ],
  faq: [
    {
      q: "Is shot quality more important than shot quantity?",
      a: "Neither is more important in isolation. A team needs enough attempts to create chances and enough quality to convert them. The balance depends on style, opponent and game state."
    },
    {
      q: "How is xG per shot calculated?",
      a: "Divide a team's total expected goals by its number of shots. The result describes the average quality of its attempts. It is useful for comparing styles, but it should be read alongside the total and the number of shots."
    },
    {
      q: "Can a team have high xG from few shots?",
      a: "Yes. A team can generate a high total from a few excellent chances, such as close-range finishes or penalties. That can be efficient, but less resilient if the opponent denies those chances."
    }
  ],
  related: ["what-is-xg-football", "shot-maps-football", "xg-models-differences"]
};
