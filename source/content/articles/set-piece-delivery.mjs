export default {
  slug: "set-piece-delivery",
  title: "Set-Piece Delivery: Corners and Free Kicks",
  metaTitle: "Set-Piece Delivery: Corners and Free Kicks",
  description: "Corners and free kicks live or die on delivery. Learn the main delivery types, near and far post routines, and how to judge a small sample fairly.",
  category: "Tactics",
  tags: ["set pieces", "corners", "free kicks", "delivery"],
  published: "2026-11-27",
  updated: "2026-11-27",
  author: "Nyasha",
  dek: "A corner is only as good as the ball into the box. Delivery type, target zone, and the movement around it decide whether a routine creates a chance.",
  takeaways: [
    "Delivery is the most controllable part of a set piece, which makes it worth scouting separately from the goals it produces.",
    "Inswingers, outswingers, driven balls, floated balls, and short corners all ask different questions of a defence.",
    "Near-post and far-post deliveries are different problems, and neither is automatically better.",
    "First-contact rate and expected goals per delivery repeat more reliably than a season's set-piece goal count.",
    "Judge delivery over enough corners to see a pattern, and split the sample by taker, opponent, and game state."
  ],
  intro: `<p>A corner looks like a pause in the game. In practice it is a small, rehearsed problem: one team delivers the ball, the other tries to clear it, and a crowd of players competes for the first contact. The delivery is the input that starts the whole sequence.</p>
<p>That input is more controllable than most parts of football. The taker chooses the height, the speed, the curve, and the target. The runners know their starting positions. The defending team knows the routine is coming. Delivery analysis is the study of how that controlled input meets the uncontrolled chaos of the penalty area.</p>
<p>This guide explains the main delivery types, the difference between near-post and far-post targets, the role of short corners, and how to assess a routine without overreading a small sample.</p>`,
  sections: [
    {
      id: "why-delivery-matters",
      heading: "Why delivery is the starting point",
      html: `<p>A set piece is a small system with four parts: the delivery, the movement around it, the first contact, and the second ball. The delivery shapes the other three. A flat ball into the near post asks for a glancing header; a high ball to the far post asks for a contested aerial duel.</p>
<p>Delivery is also the part a team can control most directly. The taker knows the target, the runners know their starting positions, and the training ground has repeated the pattern. That repeatability makes delivery a useful thing to scout, even when the goals are noisy.</p>
<p>The question is not simply whether a team has a good corner taker. It is whether the delivery matches the players attacking it and the defence they face. Our broader guide to <a href="/articles/set-pieces-football-prediction.html">set pieces in football analysis</a> covers the full routine.</p>`
    },
    {
      id: "delivery-types",
      heading: "The main delivery types",
      html: `<p>Most corners fall into a few families. An inswinger curves towards the goal, an outswinger curves away from it, a driven ball is flat and fast, and a floated ball hangs in the air. A short corner is not a cross at all, but a pass to a nearby teammate that changes the angle.</p>
<p>Each type creates a different problem. The inswinger can land in the corridor between the goalkeeper and the first defender, where a header can go towards goal without much of an angle. The outswinger travels away from the keeper and towards attackers arriving from deeper, which can make the far post easier to attack. The driven ball gives defenders less time to adjust but is harder to head with control. The floated ball gives attackers time but also gives the goalkeeper time to come and claim.</p>
<p>The taker's foot matters. A right-footed taker on the right corner will usually produce an inswinger, while the same player on the left will produce an outswinger. That changes the delivery mix without changing the routine on the training ground.</p>`
    },
    {
      id: "near-and-far-post",
      heading: "Near post and far post",
      html: `<p>The near post is the space between the corner taker's side and the goalkeeper. A delivery there can be flicked on, glanced towards goal, or used to create a knock-down for a teammate. It is crowded, because the defending team usually places a player on the near post and a goalkeeper nearby. Timing has to be precise.</p>
<p>The far post is the longer target. A delivery there gives attackers more time to arrive, but it also gives defenders and the goalkeeper more time to read the flight. Outswingers are often aimed at the far post because the ball moves away from the keeper and towards the back-post runner.</p>
<p>Neither target is inherently better. The near post is a shorter, sharper problem. The far post is a longer, more contested one. The right choice depends on the goalkeeper's positioning, the defenders' marking scheme, and the players making the runs.</p>`
    },
    {
      id: "short-corners",
      heading: "Short corners and variation",
      html: `<p>A short corner takes two players out of the box and creates a new angle. The aim is not usually to score directly from the short pass. It is to drag a defender out of the block, create a two-against-one on the flank, and deliver from a better position or cut the ball back into the area.</p>
<p>Short corners are useful against zonal defences that protect space rather than players. Pulling one defender towards the corner opens a gap in the zone. They are less useful against a man-marking side that can follow the runner without losing its shape. The routine needs a clear second action: a cross, a cutback, or a return pass to the taker.</p>
<p>The risk is that a short corner consumes a set piece without producing a delivery. A team that takes many short corners and rarely gets the ball into the box is not necessarily clever. It may simply be avoiding the contest. Against a <a href="/articles/low-block-defending.html">deep, compact block</a>, the short option can still be the right choice, but it needs a purpose.</p>`
    },
    {
      id: "movement-and-first-contact",
      heading: "Movement, screening, and the first contact",
      html: `<p>Delivery only works if the movement creates space. A near-post runner can pull a defender away from the far post. A screen can block a marker for a moment, enough for a teammate to reach the ball. A decoy run can occupy the goalkeeper's attention while the real target is attacked from another angle.</p>
<p>The first contact is the moment that decides whether the delivery succeeded. A team can win the first header and still lose the phase, if the header goes straight up or to an opponent. A team can lose the first contact and still create a chance from the second ball. That is why first-contact rate is a useful input, not a verdict.</p>
<p>Goalkeeper positioning is part of the contest. A keeper who starts on his line gives attackers a bigger target. A keeper who comes to claim reduces it but risks being caught out by a flat delivery. Our guide to <a href="/articles/goalkeeper-performance-prediction.html">goalkeeper performance</a> explains why those decisions are hard to capture in save numbers.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It describes two teams over twelve matches. The numbers are invented for teaching.</p>
<table>
<caption>Illustrative corner delivery profile over twelve matches</caption>
<thead><tr><th>Measure</th><th>Team A</th><th>Team B</th></tr></thead>
<tbody>
<tr><td>Corners</td><td>78</td><td>64</td></tr>
<tr><td>Inswingers</td><td>38</td><td>20</td></tr>
<tr><td>Outswingers</td><td>28</td><td>30</td></tr>
<tr><td>Short corners</td><td>12</td><td>14</td></tr>
<tr><td>First contact won</td><td>44%</td><td>39%</td></tr>
<tr><td>Shots from corners</td><td>31</td><td>24</td></tr>
<tr><td>Expected goals</td><td>5.6</td><td>5.8</td></tr>
<tr><td>Expected goals per corner</td><td>0.072</td><td>0.091</td></tr>
<tr><td>Goals</td><td>3</td><td>2</td></tr>
</tbody>
</table>
<p>Team A took more corners and won the first contact more often. Team B produced slightly more expected goals from fewer deliveries. The per-corner figures show why: 5.6 divided by 78 is about 0.072, while 5.8 divided by 64 is about 0.091. B's deliveries created better chances per corner, even though A won more first headers.</p>
<p>That does not prove B's delivery was better. First contact is only one step. B may have been aiming at a smaller number of higher-value zones, or its runners may have arrived in better positions after the first header. A's extra volume may also reflect game states: a team chasing a goal takes more corners and often forces more deliveries.</p>
<p>Over twelve matches, the goal difference of 3 to 2 is close to noise. If the two teams repeated the same delivery mix for another twelve matches, the goal count could easily reverse. The per-corner chance quality is the steadier signal, and even that needs more matches before it becomes a reliable description.</p>`
    },
    {
      id: "judging-delivery",
      heading: "Assessing delivery without overreading",
      html: `<p>A team might take five or six corners in a match. A season of 40 matches gives roughly 200 to 250 corners, which is enough to describe a delivery mix but still not enough to trust a goal count. Early in a season, a handful of corners is a description of what happened, not a ranking of quality.</p>
<p>Track inputs that repeat. Count the delivery types, the target zones, the first-contact wins, and the shots and expected goals that follow. Split the sample by opponent marking style and by goalkeeper. A team that looks strong against zonal defences may struggle against a side that man-marks the runners.</p>
<p>Watch the takers separately. One player may deliver inswingers well and outswingers poorly. Another may be excellent at the near post but inconsistent at the far post. A team's overall corner numbers can hide that difference.</p>
<p>Free kicks follow the same logic with a different geometry. A wide free kick is a delivery from an angle, and the defence has more time to set its line. A direct free kick attempt is a shot, not a delivery, so judge it with shot quality rather than first-contact data.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Judging delivery by goals.</strong> Conversion is noisy. Look at first contact and expected goals per delivery before making a claim.</li>
<li><strong>Treating all corners as one type.</strong> Inswingers, outswingers, and short corners are different routines with different risks.</li>
<li><strong>Ignoring the taker's foot.</strong> The same player can produce a different shape from the left and the right.</li>
<li><strong>Assuming the near post is always best.</strong> It depends on the goalkeeper, the defence, and the runs being made.</li>
<li><strong>Forgetting the second ball.</strong> A clearance is not the end of the phase. The recycle often decides whether the set piece worked.</li>
<li><strong>Overreading a small sample.</strong> A few corners cannot separate a good routine from a lucky one.</li>
</ul>
<p>The common thread is that delivery is a means, not an outcome. Judge the process that produced the chance, then wait for enough repetitions before making a strong claim.</p>`
    }
  ],
  faq: [
    {
      q: "What is the difference between an inswinger and an outswinger?",
      a: "An inswinger curves towards the goal, while an outswinger curves away from it. The shape changes which part of the box the ball reaches and how the goalkeeper can attack it."
    },
    {
      q: "Are short corners less effective than crosses?",
      a: "Not inherently. Short corners can pull a defender out of shape and create a better crossing angle. They are a variation, not a replacement, and they work best when the team has a clear second action."
    },
    {
      q: "How many corners are needed before delivery data is useful?",
      a: "More than a handful. A few hundred corners give a steadier picture of the delivery mix, though conversion will still vary. Early in a season, treat the numbers as a description rather than a ranking."
    }
  ],
  related: ["set-pieces-football-prediction", "expected-threats-xt", "goalkeeper-performance-prediction"]
};
