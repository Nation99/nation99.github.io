export default {
  slug: "shot-maps-football",
  title: "Shot Maps: How to Read Football Shot Charts",
  metaTitle: "Shot Maps: How to Read Football Shot Charts",
  description: "A shot map plots every attempt by location and outcome. Learn how to read shot charts, what they hide, and how to compare them fairly.",
  category: "xG and Stats",
  tags: ["shot maps", "xG", "visualisation", "chance quality"],
  published: "2026-11-23",
  updated: "2026-11-23",
  author: "Nyasha",
  dek: "A shot map is a picture of where a team shot from and what happened. It is a useful starting point, but the dots are not the whole story.",
  takeaways: [
    "A shot map plots the location and outcome of every attempt, often with marker size or colour showing expected goals.",
    "Location and angle explain much of a shot's value, but not the pressure, the goalkeeper, or the build-up before it.",
    "A map with few dots can hide a team that created good chances and failed to shoot.",
    "Compare maps from the same provider and the same match state, because definitions and styles differ.",
    "A shot map describes chances, not the quality of a performance or the probability of a result."
  ],
  intro: `<p>A shot map turns a list of attempts into a picture. Each dot marks where a shot was taken, and the size, colour, or shape of the dot often shows the estimated chance quality or the outcome. The result is one of the most accessible visuals in football analytics.</p>
<p>The accessibility is also the danger. A map looks like a complete account of a match, but it only shows the shots that happened. It does not show the passes that created them, the runs that were not found, or the chances that never became attempts. Reading a shot map well means asking what is missing as well as what is visible.</p>
<p>This guide explains the common conventions, a simple way to read location and angle, and the limits that should shape every conclusion.</p>`,
  sections: [
    {
      id: "what-a-shot-map-shows",
      heading: "What a shot map shows",
      html: `<p>A basic shot map has a pitch outline and a marker for each shot. The marker's position gives the location. The marker's size often represents expected goals, so a bigger dot means a better chance. Colour may show the outcome: a goal, a save, a block, or a miss. Some maps add a trail or an arrow to show the pass that led to the shot.</p>
<p>The map usually faces the attacking goal, so the bottom of the image is the team's own half and the top is the opponent's goal. That convention makes it easy to see how close the shots were and whether they came from central or wide areas. A map with many dots in the penalty area looks more dangerous than one with dots spread around the edge of the box.</p>
<p>Different providers use different marker conventions. One may size dots by expected goals and colour them by team. Another may use a hexbin or a heat map instead of individual dots. The visual language is not standardised, so the first step is to read the legend. A map without a legend is decoration, not analysis.</p>
<p>Shot maps can show one team or both. A combined map with two colours is useful for comparing territory, but it can become cluttered. A small multiple, with one panel per team, is often clearer. The choice depends on the question you want to answer.</p>`
    },
    {
      id: "reading-location-and-angle",
      heading: "Reading location and angle",
      html: `<p>Most of a shot's baseline value comes from its location. A shot from six yards in front of goal is worth far more than a shot from 25 yards. The angle matters too. A shot from the centre of the box has a wider view of the goal than a shot from the byline, even if both are close to the goal line.</p>
<p>A simple way to think about angle is to draw two lines from the ball to the goalposts. The angle between them is the part of the goal the shooter can see. A narrow angle means less goal to aim at, which lowers the chance of scoring. A central position gives a wider angle and usually a higher value.</p>
<p>Distance and angle interact. A shot from 18 yards in the centre of the pitch may have a better angle than a shot from eight yards at the byline. That is why a map with dots close to goal is not automatically a map of good chances. The location of the dots relative to the goal, not just their distance from it, is what matters.</p>
<p>Our guide to <a href="/articles/what-is-xg-football.html">expected goals</a> explains how models combine location, angle, and other inputs into a single value. A shot map is a visual summary of that model's output, not an independent measurement.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It describes two teams' shot profiles from one match. The numbers are invented for teaching.</p>
<table>
<caption>Illustrative shot profile</caption>
<thead><tr><th>Measure</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Shots</td><td>14</td><td>8</td></tr>
<tr><td>Shots inside the box</td><td>7</td><td>6</td></tr>
<tr><td>Shots from the centre</td><td>5</td><td>3</td></tr>
<tr><td>Expected goals</td><td>1.1</td><td>1.4</td></tr>
<tr><td>Goals</td><td>1</td><td>2</td></tr>
</tbody>
</table>
<p>Team A took more shots and more shots from inside the box, but Team B generated higher expected goals. The map would show why: Team B's shots were probably closer to the centre of the goal, while Team A's were spread across the box and from wider angles.</p>
<p>Now imagine the map without the expected goals column. A reader might conclude that Team A created more. The shot count supports that view, but the chance quality does not. The lesson is to read the map with at least one quality measure beside the count. Volume and quality are different dimensions.</p>
<p>A third dimension is the game state. A team chasing a goal may take many low-value shots from distance. A team protecting a lead may take few shots but of high quality. A map from the 80th minute of a one-goal game looks different from a map from the first half. Context changes the meaning of the dots.</p>`
    },
    {
      id: "shot-maps-versus-xg",
      heading: "Shot maps versus xG totals",
      html: `<p>A shot map and an expected goals total are related but not interchangeable. The map shows the individual attempts and their locations. The total adds the values into one number. The total is convenient, but it loses the distribution. Two teams can finish with 1.2 xG: one from twelve poor chances, the other from two excellent ones.</p>
<p>The distribution matters for interpretation. A team with many small dots may be creating volume without a clear route to a high-quality chance. A team with one large dot may have created a single clear opportunity and little else. The total alone cannot distinguish these patterns, but the map can.</p>
<p>Maps also help with shot selection. A team that shoots often from outside the box may be settling for low-value attempts. A team that rarely shoots from distance may be passing up acceptable chances. Neither pattern is automatically good or bad. The map makes the pattern visible so it can be discussed.</p>
<p>For a deeper comparison of how models value the same shot, see our article on <a href="/articles/xg-models-differences.html">why xG models disagree</a>. The dots may move or change size when the model changes, even if the underlying shots are identical.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Reading the dots as the whole performance.</strong> A shot map excludes the chances that never became shots, including good runs that were not found.</li>
<li><strong>Ignoring the legend.</strong> Marker size and colour mean different things in different charts. A big dot is not always a big chance.</li>
<li><strong>Comparing maps across providers.</strong> Different models produce different expected goals values, so the same shot can change size.</li>
<li><strong>Forgetting the game state.</strong> A team chasing a game takes different shots from a team protecting a lead.</li>
<li><strong>Counting shots instead of weighing them.</strong> Fourteen low-value attempts can be worth less than five good ones.</li>
<li><strong>Treating a goal as proof of a good process.</strong> A deflected shot from distance can go in without being a repeatable chance.</li>
</ul>
<p>The common thread is the difference between a picture and an explanation. A shot map shows where the attempts came from. It does not explain why they came from there, or what the team should change.</p>`
    },
    {
      id: "limits",
      heading: "Limits and practical use",
      html: `<p>Shot maps are most useful when they are used to ask questions. Why did this team shoot from wide areas? Did the opponent force those shots by protecting the centre? Did the team create good positions but fail to shoot? The map can prompt the question, and video can answer it.</p>
<p>The map also inherits the limits of the data. A blocked shot may be recorded at the point of the block rather than the point of the attempt. A header may be mapped at the player's feet. A shot that is deflected may be assigned to the original shooter or to the deflector, depending on the provider. These details matter when the dots are close together.</p>
<p>For a broader view of chance creation, pair the map with <a href="/articles/expected-threats-xt.html">expected threat</a>, which values the danger of a possession before the shot. The combination shows how a team moved the ball into shooting positions, not just what happened once it got there.</p>
<p>Used with care, a shot map is a compact and honest visual. It shows the attempts, their locations, and their estimated value. It does not show the whole match, and it should never be presented as if it does.</p>`
    }
  ],
  faq: [
    {
      q: "What does a bigger dot mean on a shot map?",
      a: "In most charts, a bigger dot means a higher expected goals value for that shot. The exact convention depends on the provider, so check the legend before comparing maps."
    },
    {
      q: "Are shot maps the same as xG?",
      a: "No. A shot map displays individual shots and their locations, often sized by expected goals. An xG total adds those values into one number. The map shows the distribution that the total hides."
    },
    {
      q: "Can a shot map show which team played better?",
      a: "Not on its own. A shot map shows the attempts a team produced, not the chances it failed to create, the pressure it faced, or the game state. Use it with other data and match context."
    }
  ],
  related: ["what-is-xg-football", "xg-models-differences", "expected-threats-xt"]
};
