export default {
  slug: "penalties-expected-goals",
  title: "Penalties and xG: Valuing Spot Kicks Fairly",
  metaTitle: "Penalties and xG: Valuing Spot Kicks Fairly",
  description: "Penalties are high-value chances with unusual rules. Learn how xG models treat spot kicks, why conversion rates differ, and how to compare teams.",
  category: "xG and Stats",
  tags: ["penalties", "xG", "chance quality", "set pieces"],
  published: "2026-11-24",
  updated: "2026-11-24",
  author: "Nyasha",
  dek: "A penalty is one of the best chances in football, but it is not a goal. How a model values it changes the story of a match and a season.",
  takeaways: [
    "A penalty is usually worth around 0.75 to 0.80 expected goals, depending on the model and the sample.",
    "Some xG models exclude penalties so that open-play chance quality can be compared separately.",
    "Penalty conversion is influenced by the taker, the goalkeeper, the pressure, and the shootout rules.",
    "A rebound after a saved penalty is a separate event and should not be double-counted silently.",
    "Comparing team xG with and without penalties is a useful habit, not a way to erase the penalty."
  ],
  intro: `<p>A penalty is the most rehearsed chance in football and still one of the most uncertain. The shooter has a clear sight of goal from twelve yards, with only the goalkeeper to beat. The expected goals value is high, usually around 0.75 to 0.80, but it is not one. A miss is always possible.</p>
<p>That gap between high probability and certainty makes penalties a useful test of how we read chance quality. A team that wins a penalty has earned a strong opportunity. A team that scores it has converted a strong opportunity. Those are related facts, but they are not the same fact.</p>
<p>This guide explains how xG models value penalties, why some models separate them, and how to compare teams without hiding the spot kick.</p>`,
  sections: [
    {
      id: "why-penalties-are-different",
      heading: "Why penalties are different",
      html: `<p>Most shots are open play. The shooter is moving, defenders are close, and the angle and distance vary. A penalty is a set piece with fixed geometry: twelve yards from goal, central, and with a goalkeeper who must stay on the line until the kick is taken. The only variables are the taker's execution and the keeper's guess.</p>
<p>That fixed geometry is why penalties are valued so highly. A central shot from twelve yards would already be a good chance in open play. The penalty adds the isolation from defenders, which raises the value further. The exact number depends on the model's training data and the era it covers.</p>
<p>Penalties also have a different psychological profile. The shooter knows the stakes, the crowd knows, and the goalkeeper knows. Some players are excellent under that pressure; others are not. A single conversion rate over a career mixes skill, luck, and sample size.</p>
<p>Finally, penalties can be retaken if the goalkeeper moves early or an outfield player encroaches. The rules add a layer of variance that open-play shots do not have. A model that treats every penalty as an independent 0.78 chance is simplifying, but the simplification is usually reasonable.</p>`
    },
    {
      id: "how-models-value-penalties",
      heading: "How models value penalties",
      html: `<p>There are two common approaches. The first includes penalties in the xG total, using a fixed value or a value estimated from a large sample. The second excludes penalties from the main xG figure and reports them separately.</p>
<p>Including penalties makes the total a complete measure of the chances a team produced, including set pieces. It is the right choice if the question is "how dangerous were this team's attempts?" Excluding them makes the total a measure of open-play chance creation, which is useful when comparing teams that take very different numbers of penalties.</p>
<p>The important rule is transparency. A total that includes penalties should say so. A total that excludes them should say so. Mixing the two across a table creates a comparison that looks precise but is not.</p>
<p>Some models also adjust the penalty value for the taker. A team with a historically strong penalty taker may have a slightly higher conversion probability than a team with a weak one. The adjustment is usually small because the sample of penalties for any one player is limited. Our guide to <a href="/articles/penalty-analysis.html">penalty analysis</a> covers conversion rates, placement, and the limits of shootout records.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows two teams' chance creation with and without penalties over five matches. The numbers are invented for teaching.</p>
<table>
<caption>Illustrative xG with and without penalties</caption>
<thead><tr><th>Measure</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Open-play xG</td><td>1.2</td><td>1.1</td></tr>
<tr><td>Penalty xG</td><td>0.8</td><td>0.0</td></tr>
<tr><td>Total xG</td><td>2.0</td><td>1.1</td></tr>
<tr><td>Goals scored</td><td>3</td><td>1</td></tr>
</tbody>
</table>
<p>Team A looks clearly more dangerous on total xG, but the gap is entirely a penalty. In open play, the two teams are close. If the question is "which team created more from open play?", the answer is Team A by a small margin. If the question is "which team had the better chances overall?", the penalty counts and Team A is ahead.</p>
<p>Neither answer is wrong. The mistake is to use one number without saying which question it answers. A table that shows only total xG hides the penalty. A table that shows only open-play xG hides a real chance that happened.</p>
<p>Now consider the goals. Team A scored three from 2.0 total xG, which is above expectation but not absurd. Team B scored one from 1.1, which is close to expectation. Over five matches, these differences are noise as much as signal. The penalty explains part of the gap, but not all of it.</p>`
    },
    {
      id: "rebounds-and-saves",
      heading: "Rebounds and saved penalties",
      html: `<p>A saved penalty does not always end the sequence. The goalkeeper may push the ball back into play, and the attacking team may score from the rebound. How a model records that sequence matters.</p>
<p>One approach treats the penalty as a single event with a value of about 0.78 and ignores the rebound. Another records the penalty and then the follow-up shot as separate attempts. The second approach can double-count the danger if the rebound is valued as a normal open-play shot without noting that it came from a penalty.</p>
<p>The cleanest method is to record the penalty and the rebound as separate events but to label the sequence. A reader can then see that the total includes a penalty and a follow-up. The same principle applies to a penalty that is saved and then cleared: the penalty value remains, and the clearance is a defensive action, not a new chance.</p>
<p>Shootouts are a separate case. Most league xG tables exclude shootout penalties because they are not part of the match result in the same way. A cup match decided on penalties may show a draw after extra time, with the shootout recorded separately. Our article on <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a> explains why shootout saves are a narrow and noisy measure of skill.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating a penalty as a certain goal.</strong> A value of 0.78 is a probability, not a promise. The keeper can save, the shooter can miss, and the ball can hit the post.</li>
<li><strong>Mixing totals with and without penalties.</strong> A table that compares one team's total xG with another team's open-play xG is not a fair comparison.</li>
<li><strong>Ignoring the penalty in the narrative.</strong> A team can dominate open play and still lose because it conceded a penalty. The spot kick is part of the match.</li>
<li><strong>Overreading a taker's record.</strong> Penalty samples are small, and conversion rates regress toward the mean. A perfect record is not proof of a repeatable superpower.</li>
<li><strong>Double-counting rebounds.</strong> A saved penalty and the follow-up shot are two events. Counting both without labels can inflate the total.</li>
<li><strong>Using penalties to explain everything.</strong> A gap in the table may come from penalties, finishing, goalkeeping, or sample noise. Check the sequence before choosing a story.</li>
</ul>
<p>The common thread is the difference between a complete total and a comparable total. Both are useful, but they answer different questions.</p>`
    },
    {
      id: "limits",
      heading: "Limits and practical use",
      html: `<p>Penalty xG is a model output, not a measurement. The value depends on the sample used to estimate it, the era of the data, and the model's assumptions about the taker and the keeper. A value of 0.75 and a value of 0.80 are both plausible, and the difference is small compared with the uncertainty of a single kick.</p>
<p>The bigger limit is sample size. A team may take only a handful of penalties in a season. A single miss can swing the conversion rate by tens of percentage points. Comparing teams on penalty conversion alone is therefore weak. Comparing them on penalties awarded is more stable, because it reflects how often they get into the box and draw fouls.</p>
<p>The most useful habit is to report both totals. Show open-play xG, penalty xG, and total xG. Then let the reader see the composition. This is more honest than choosing one number and presenting it as the whole truth.</p>
<p>For a wider view of how chance quality becomes a match model, pair the penalty discussion with <a href="/articles/what-is-xg-football.html">expected goals</a> and a clear record of model accuracy. The spot kick is one input, not a verdict on the team.</p>`
    }
  ],
  faq: [
    {
      q: "What is the xG value of a penalty?",
      a: "Most models value a penalty at around 0.75 to 0.80 expected goals. The exact figure depends on the model, the data sample, and whether it adjusts for the taker or the goalkeeper."
    },
    {
      q: "Should penalties be included in xG?",
      a: "Both approaches are valid if they are labelled. Including penalties gives a complete measure of chances. Excluding them gives a cleaner comparison of open-play creation. The mistake is mixing the two without saying so."
    },
    {
      q: "Do penalties inflate a team's xG too much?",
      a: "They can dominate a small sample because a single penalty is worth about 0.78 xG. Reporting open-play xG and penalty xG separately lets readers see how much of the total comes from spot kicks."
    }
  ],
  related: ["penalty-analysis", "what-is-xg-football", "goalkeeper-performance-prediction"]
};
