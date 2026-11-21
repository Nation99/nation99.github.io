export default {
  slug: "pressing-intensity-ppda",
  title: "Pressing Intensity and PPDA Explained",
  metaTitle: "Pressing Intensity and PPDA Explained",
  description: "PPDA measures pressing volume, not pressing quality. Learn how the ratio works, what it misses, and how to pair it with triggers and pitch zones.",
  category: "Tactics",
  tags: ["PPDA", "pressing", "defensive actions", "tactics"],
  published: "2026-01-26",
  updated: "2026-01-26",
  author: "Nyasha",
  dek: "PPDA is a ratio before it is a judgement. Read it as a description of where and how often a team engages, then ask the separate question of whether the pressure worked.",
  takeaways: [
    "PPDA divides the opponent's passes by the defender's actions in a defined pressing area.",
    "A lower value means more engagement per pass, not automatically better defending.",
    "Pressing volume, pressing height and pressing success are three different measurements.",
    "A single PPDA figure should always be read alongside territory, turnovers and the game state."
  ],
  intro: `<p>PPDA is one of the most quoted numbers in pressing analysis and one of the easiest to misread. It sounds like a measure of aggression, and in a loose way it is. But it does not tell you whether the pressure was well organised, whether it created turnovers in useful places, or whether the team had the legs to sustain it.</p>
<p>The ratio is still worth understanding. Used carefully, it turns a vague impression of a team "pressing high" into a concrete description of how often they engage relative to the passes they allow. The value comes from the questions that follow, not from the number on its own.</p>`,
  sections: [
    {
      id: "what-ppda-actually-measures",
      heading: "What PPDA actually measures",
      html: `<p>PPDA stands for passes allowed per defensive action. The idea is simple: count how many passes the opponent completes in a chosen area of the pitch, then divide that by the number of defensive actions the pressing team makes in the same area. A lower result means the defending team is engaging more often for each pass it concedes.</p>
<p>The important phrase is "chosen area". Providers differ. Some count passes and actions in the opponent's 60 per cent of the pitch. Others use the attacking half, or exclude the defending team's own penalty area. A PPDA of 8.0 from one source is not necessarily comparable with a PPDA of 8.0 from another.</p>
<p>This is not a reason to ignore the metric. It is a reason to know which version you are reading. A consistent definition over a season tells you something about a team's behaviour. A mixture of definitions tells you more about the providers than the team.</p>`
    },
    {
      id: "building-the-ratio",
      heading: "Building the ratio",
      html: `<p>The arithmetic is deliberately plain. If Club A allows 180 passes in the pressing area and makes 60 defensive actions there, its PPDA is 180 divided by 60, which equals 3.0. If Club B allows the same 180 passes but makes only 30 actions, its PPDA is 6.0. Club A is engaging twice as often per pass.</p>
<p>Defensive actions usually include tackles, interceptions, fouls and challenges, though the exact list depends on the provider. That matters because a team that commits many fouls can lower its PPDA without winning the ball. A team that prefers to contain and screen passing lanes can post a higher PPDA while defending exactly as its coach intended.</p>
<p>The ratio also depends on the opponent. A side that passes patiently in its own half will inflate the pass count. A side that goes long will reduce it. PPDA is therefore best compared within similar styles and game states, not treated as a universal ranking.</p>`
    },
    {
      id: "volume-is-not-success",
      heading: "Volume is not success",
      html: `<p>Two teams can post the same PPDA and produce very different outcomes. One presses to force a long ball, accepts the turnover and builds from there. Another presses to win the ball in the final third and create a shot within seconds. The ratio records the engagement, not the reward.</p>
<p>A useful companion measure is the location of regains. Count how many times the pressing team wins the ball in the attacking third, and how many of those regains lead to a shot within the next few passes. That turns pressure into a chain of events: engage, recover, progress, shoot. PPDA only describes the first link.</p>
<p>Another companion is the opponent's pass completion in the pressing area. If a team presses often but the opponent still completes most of its passes, the pressure may be energetic without being disruptive. If the completion rate falls and the regain count rises, the volume is doing real work.</p>`
    },
    {
      id: "triggers-and-the-geography-of-pressure",
      heading: "Triggers and the geography of pressure",
      html: `<p>Pressing is not a constant. Most teams press in bursts, triggered by a backward pass, a poor first touch, a pass into a player facing his own goal, or a receiver with limited options. The trigger is the instruction that turns passive containment into an aggressive press.</p>
<p>Watching triggers explains why a team's PPDA can look moderate while its press feels intense. A side may spend long spells containing, then jump together when the ball travels to a full-back. The average ratio hides those spikes. A side that presses constantly but never with coordination can post an impressive PPDA and still be easy to play through.</p>
<p>This is where the <a href="/articles/tactical-matchups-vs-reputation.html">matchup view</a> helps. The question is not simply "does this team press?" but "which pass does this team want to force, and can the opponent avoid it?" A press that funnels the ball towards a specific touchline is a plan. A press that runs at the nearest player is a reaction.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The numbers below are illustrative and describe two hypothetical matches involving Club A.</p>
<table>
<thead><tr><th>Match</th><th>Passes allowed in pressing area</th><th>Defensive actions</th><th>PPDA</th><th>Regains in attacking third</th><th>Shots from regains</th></tr></thead>
<tbody>
<tr><td>Match one</td><td>180</td><td>60</td><td>3.0</td><td>9</td><td>3</td></tr>
<tr><td>Match two</td><td>240</td><td>48</td><td>5.0</td><td>4</td><td>1</td></tr>
</tbody>
</table>
<p>In match one, Club A engages once every three opponent passes and recovers the ball high nine times. Three of those regains produce a shot. In match two, the engagement rate falls to once every five passes, the high regains drop to four, and only one becomes a shot.</p>
<p>Run the division: 180 divided by 60 equals 3.0, and 240 divided by 48 equals 5.0. A lower PPDA is usually read as more intense pressure, but the more interesting detail is the shape of the chain. Match one produced 9 high regains from 60 actions, a rate of 15 per cent. Match two produced 4 from 48, a rate of 8.3 per cent. The pressure was less frequent and less productive.</p>
<p>Now add a caveat. Suppose Club A led 2-0 early in match one and the opponent had to chase the game. The press may have looked better because the opponent took more risks. In match two, suppose Club A trailed and faced a compact side happy to pass sideways. The lower engagement could reflect the game state as much as the intent. The ratio is a description; the context supplies the meaning.</p>`
    },
    {
      id: "pairing-ppda-with-other-signals",
      heading: "Pairing PPDA with other signals",
      html: `<p>A sensible pressing profile uses at least four pieces of information: PPDA, the height of regains, the share of regains that become shots, and the opponent's pass completion in the pressing area. Together they describe effort, territory, reward and disruption.</p>
<p>Physical context matters too. A team that presses intensely in August may not sustain the same volume through a congested winter. Rotation, travel and squad depth all affect how much pressing a coach can ask for. Our article on <a href="/articles/squad-depth-football-prediction.html">squad depth</a> explains why the same tactical idea can look different across a long season.</p>
<p>Finally, connect pressing to possession. A high press is often a way of generating possession in better areas, not an end in itself. The guide to <a href="/articles/possession-data-football.html">using possession data correctly</a> shows how to check whether the turnovers actually turned into control.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Ranking teams by PPDA alone.</strong> A low number can mean coordinated pressure or a team that fouls constantly. The ratio needs a definition and a context.</li>
<li><strong>Comparing across providers.</strong> Different pitch zones and action types produce different values. Keep the source consistent.</li>
<li><strong>Ignoring the scoreline.</strong> Trailing teams press more, leading teams sit deeper, and both change the ratio without any change in coaching philosophy.</li>
<li><strong>Assuming pressing is free.</strong> High engagement costs energy and can leave space behind the first line. A successful press is a trade, not a pure gain.</li>
</ul>`
    },
    {
      id: "limits-of-a-single-pressing-number",
      heading: "Limits of a single pressing number",
      html: `<p>PPDA cannot see the quality of a press. It does not know whether the front two worked together, whether the midfield screened the passing lane, or whether the back line stepped up at the right moment. It also cannot separate deliberate containment from a team that is simply too tired to press.</p>
<p>Use the ratio as a starting point for observation. Watch the triggers, note where the regains happen, and check what follows. If the number and the pictures agree, you have a useful description. If they disagree, the pictures usually deserve the final word.</p>`
    }
  ],
  faq: [
    {
      q: "Is a lower PPDA always better?",
      a: "No. A lower value means more defensive actions per opponent pass, which can reflect an organised press or a reckless one. The useful question is whether those actions produced regains in dangerous areas without opening space behind."
    },
    {
      q: "Why do different websites show different PPDA values?",
      a: "They often use different pitch zones, different definitions of a defensive action, and different filters for game state. A value is only comparable with another value built the same way."
    },
    {
      q: "Can PPDA be used for a single match?",
      a: "It can, but treat it as a description of that match rather than a stable trait. One game is easily distorted by an early goal, a red card or an opponent's unusual approach."
    }
  ],
  related: ["tactical-matchups-vs-reputation", "possession-data-football", "squad-depth-football-prediction"]
};
