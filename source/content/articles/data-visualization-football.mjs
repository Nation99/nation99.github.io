export default {
  slug: "data-visualization-football",
  title: "Football Data Visualisation for Beginners",
  metaTitle: "Football Data Visualisation for Beginners",
  description: "Shot maps, xG timelines and passing networks repay careful reading. Learn the axes, samples and definitions that shape what a football chart shows.",
  category: "Beginner Guides",
  tags: ["data visualisation", "shot maps", "passing networks"],
  published: "2026-02-03",
  updated: "2026-02-03",
  author: "Nyasha",
  dek: "A chart is an argument with axes. Inspect the choices behind it before you accept the conclusion.",
  takeaways: [
    "Every football chart embeds choices about axes, scale, sample and definitions.",
    "Shot maps show shot locations and estimated quality, not territorial dominance.",
    "Cumulative xG timelines are shaped by game state and penalties.",
    "Passing networks describe average positions and passing links, not a tactical plan.",
    "A chart is a starting point for questions, not a verdict."
  ],
  intro: `<p>A shot map can make one team look dominant while the scoreline says otherwise. An xG timeline can suggest a tide turning when the only change was a penalty. A passing network can look like a clear system until you notice that it averages three different phases of the same match.</p>
<p>Football visualisations are useful because they compress a lot of information into a small space. That compression is also the problem. Every chart is built from decisions, and a reader who cannot see those decisions is at the mercy of the person who made them. This guide covers the common chart types, the arithmetic behind them and the questions worth asking.</p>`,
  sections: [
    {
      id: "why-charts-help",
      heading: "Why visualisations help, and where they mislead",
      html: `<p>A table of 800 passes is hard to read; a network diagram can reveal a pattern in seconds. Visualisation earns its place by making comparison easier between teams, matches, or a team and its earlier self.</p>
<p>The cost is detail. A chart fixes a scale, chooses a colour scheme and decides which observations to show, and those choices can clarify or distort. A truncated axis makes a small difference look large; a chart that omits blocked shots may flatter a defence without intent.</p>
<p>The first habit of a good reader is simple: look at the labels before looking at the shape. What is on each axis? What is the unit? What is the sample? Which events are missing? Only then ask what the chart seems to say.</p>`
    },
    {
      id: "reading-shot-maps",
      heading: "Reading a shot map",
      html: `<p>A shot map places each shot on a pitch and usually encodes one or two extra variables through size or colour. Size often represents expected goals, so a big dot marks a high-quality chance; colour may mark the outcome. The <a href="/articles/what-is-xg-football.html">expected goals guide</a> explains those values.</p>
<p>The map answers a narrow question: where did the shots come from, and how good were they according to one model? It does not show possession, pressure or the passing move that created the chance. A team can spend ten minutes in the final third and produce a sparse map; another can break once and produce a single large dot.</p>
<p>Look for penalties, often included as a fixed high-value dot that can dominate the total. Look for blocked shots: some providers include them, some do not, and the choice changes both the shot count and the xG total. Check whether headers and volleys are marked, because the same location can carry different value depending on how the shot was struck.</p>
<p>Finally, check the sample. A single-match map describes one afternoon; a season map summarises many but hides the variation between them. Neither is wrong, but the caption should say which one you are looking at.</p>`
    },
    {
      id: "reading-xg-timelines",
      heading: "Reading an xG timeline",
      html: `<p>An xG timeline plots cumulative expected goals against match time. The line steps upward when a chance is created, and the steepness of the steps reflects chance quality. A flat line means few shots or low-quality shots, not necessarily a lack of control.</p>
<p>The step shape matters more than the final total. A team can finish with 1.8 xG after one penalty and one close-range header, or after twenty low-value attempts. The same endpoint describes very different attacking afternoons.</p>
<p>Game state shapes the timeline. A side leading 1-0 may sit deeper and allow shots from distance, lifting the trailing team's xG without threatening the result. A side chasing an equaliser may create better chances and more exposure. The chart records shots, not intention.</p>
<p>Penalties appear as sudden vertical jumps. Own goals are not expected goals, and a timeline that includes them without a label can confuse. Check which events are counted, which model produced the values, and whether the chart covers one match or a run.</p>`
    },
    {
      id: "reading-passing-networks",
      heading: "Reading a passing network",
      html: `<p>A passing network turns players into nodes and passes into lines. Node position usually represents a player's average location, and line thickness represents the number of passes between two players.</p>
<p>It is a picture of averages, not of movement. A player who spent the first half on the right wing and the second half in central midfield may appear in a position that he never actually occupied for long. A substitute with twenty minutes can distort the shape if his minutes are not weighted properly.</p>
<p>The threshold for drawing a line is another choice. Five passes between two players produces a different network from ten. The caption should state the threshold, the minutes covered and whether ball direction was normalised.</p>
<p>Networks are most useful for comparing a team with itself: how the shape changed after a substitution, or how a pressing opponent disrupted the usual links. They are weakest as proof of style. A network can show that a team passed through the left, but not why, or whether that was the plan.</p>`
    },
    {
      id: "colour-scale-and-axes",
      heading: "Colour, scale and the axes",
      html: `<p>Most misleading football charts are not dishonest; they make a poor encoding choice. A few checks catch the common problems.</p>
<ul>
<li><strong>Axis range.</strong> A cumulative xG chart should normally start at zero. Starting at 1.0 can make a 1.2 against 1.0 comparison look dramatic.</li>
<li><strong>Units and denominators.</strong> Is the value per match, per 90 or per season? Raw totals cannot compare 12 goals in 30 matches with 6 in 8 fairly.</li>
<li><strong>Colour.</strong> Red and green are a poor pair for many readers. Sequential data needs a sequential palette, and categorical data needs distinct colours that survive greyscale.</li>
<li><strong>Dot size.</strong> If area scales with value, the diameter grows with the square root of the value. If the radius scales with value, the area grows much faster. Readers tend to judge diameter, so the second choice exaggerates differences.</li>
<li><strong>Overplotting.</strong> Thirty shots from the same zone can sit on top of one another and look like one dot. Density or jitter can help, but both change the impression.</li>
</ul>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The numbers are illustrative. Club A and Club B are hypothetical, and the xG values are invented.</p>
<table>
<caption>Illustrative shot locations and expected goals</caption>
<thead>
<tr><th>Zone</th><th>Club A shots</th><th>Club A xG each</th><th>Club A total</th><th>Club B shots</th><th>Club B xG each</th><th>Club B total</th></tr>
</thead>
<tbody>
<tr><td>Six-yard box</td><td>1</td><td>0.30</td><td>0.30</td><td>2</td><td>0.35</td><td>0.70</td></tr>
<tr><td>Central penalty area</td><td>3</td><td>0.12</td><td>0.36</td><td>3</td><td>0.14</td><td>0.42</td></tr>
<tr><td>Wide penalty area</td><td>5</td><td>0.05</td><td>0.25</td><td>2</td><td>0.06</td><td>0.12</td></tr>
<tr><td>Outside the box</td><td>7</td><td>0.03</td><td>0.21</td><td>2</td><td>0.03</td><td>0.06</td></tr>
<tr><td><strong>Total</strong></td><td><strong>16</strong></td><td></td><td><strong>1.12</strong></td><td><strong>9</strong></td><td></td><td><strong>1.30</strong></td></tr>
</tbody>
</table>
<p>Club A took 16 shots and generated 1.12 xG. Club B took 9 shots and generated 1.30 xG. The arithmetic is straightforward: Club A's rows add to 0.30 + 0.36 + 0.25 + 0.21 = 1.12, while Club B's add to 0.70 + 0.42 + 0.12 + 0.06 = 1.30.</p>
<p>Per shot, Club A averaged 1.12 divided by 16, which is 0.070 xG. Club B averaged 1.30 divided by 9, which is 0.144 xG. A dot-only map might make Club A look busier, while a map scaled by xG would show two large Club B dots near goal and many small Club A dots outside the box.</p>
<p>A 0.35 xG chance is about 11.7 times more valuable than a 0.03 chance. If area scales with xG, the area ratio is 11.7 and the diameter ratio about 3.4. If radius scales with xG, the area ratio becomes about 137, which overstates the difference. Neither chart is lying, but they are not saying the same thing.</p>`
    },
    {
      id: "chart-checklist",
      heading: "A checklist for any football chart",
      html: `<p>Before drawing a conclusion from a chart, run through the following questions.</p>
<ol>
<li>What is the sample: one match, a run of matches, or a season?</li>
<li>What is on each axis, and what are the units?</li>
<li>Does the axis start at zero, and if not, why not?</li>
<li>Which events are included or excluded, such as penalties, blocked shots or own goals?</li>
<li>Who produced the underlying data, and which model produced the xG values?</li>
<li>Does colour or size encode more than one variable?</li>
<li>Is the chart comparing like with like, or mixing home and away, or different competitions?</li>
</ol>
<p>If the chart survives those questions, it can support an analytical insight. If it cannot answer them, treat it as an illustration rather than evidence.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<p><strong>Treating a shot map as a dominance map.</strong> Shot locations describe shooting, not control. A team can dominate the ball and create little, or concede territory and create the best chances.</p>
<p><strong>Reading a cumulative xG line as momentum.</strong> The line rises when shots occur. It does not know which team is controlling play, and it does not adjust for game state.</p>
<p><strong>Ignoring penalties and own goals.</strong> A penalty can be a large share of a match's xG. Leaving it unlabelled turns a specific event into a general impression.</p>
<p><strong>Comparing charts from different providers.</strong> Two xG models can assign different values to the same shot. Mixing them in one comparison is a definitional error, not a small inconvenience.</p>`
    },
    {
      id: "limits",
      heading: "Limits and caveats",
      html: `<p>A visualisation is a description, not a forecast. It can show what happened in a dataset, but not what will happen next. The data may be incomplete, definitions may differ between providers, and the model behind an xG value is an estimate, not a measurement.</p>
<p>Charts also invite pattern-seeking. The eye finds shapes in noise, especially when the shape supports a story we already believe. A chart that looks compelling after one match may look ordinary after ten, which is why the sample size belongs on the chart.</p>
<p>None of this makes visualisation less useful. It makes the reading discipline more important. A good chart, read with its definitions in view, can save time and reveal structure. A good chart read carelessly is just a confident picture. See <a href="/articles/football-data-sources.html">football data sources</a> for where the numbers come from.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between a shot map and an xG timeline?",
      a: "A shot map shows where shots were taken and often encodes their estimated quality. A cumulative xG timeline shows when those chances occurred and how the total developed."
    },
    {
      q: "Are passing networks useful for analysing tactics?",
      a: "They can be, if you treat them as descriptions of average positions and passing links. They are weaker as evidence of intent, because averages hide movement, phases and substitutions."
    },
    {
      q: "Why do two shot maps show different xG totals for the same match?",
      a: "Providers use different shot definitions, models and inclusion rules for penalties, blocked shots and deflections. Totals can differ without either provider being wrong, so compare charts from the same source or reconcile the definitions."
    }
  ],
  related: ["what-is-xg-football", "possession-data-football", "football-data-sources"]
};
