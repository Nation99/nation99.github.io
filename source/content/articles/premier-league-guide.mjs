export default {
  slug: "premier-league-guide",
  title: "Premier League Analysis Guide",
  metaTitle: "Premier League Analysis Guide: Pace, Pressing and Depth",
  description: "A structural guide to Premier League analysis: tempo, pressing styles, squad depth, fixture congestion and the limits of public data.",
  category: "Leagues",
  tags: ["Premier League", "pressing", "squad depth", "fixture congestion"],
  published: "2026-02-10",
  updated: "2026-02-10",
  author: "Nyasha",
  dek: "The Premier League's speed is not a single style. It is a set of structural pressures that shape pressing, rotation, fixture load and the way results should be read.",
  takeaways: [
    "Speed compresses decisions, so per-possession and per-90 rates are usually more informative than raw totals.",
    "Pressing is a set of choices about height, triggers and risk, not a single measure of aggression.",
    "Squad depth matters most in the roles that carry the highest physical load.",
    "Fixture congestion belongs in the sample, because the same team can look different on three days' rest."
  ],
  intro: `<p>The Premier League is often described as fast, and the description is true in a way that matters. Speed is not just sprinting. It is the time a defender has on the ball, the distance between a midfield line and its back four, the number of decisions compressed into a transition. That compression changes what the data means.</p>
<p>This guide is about structure rather than the current table. It looks at recurring questions: how pressing styles differ, why depth matters in some positions more than others, how the calendar distorts form, and where public data stops being useful.</p>`,
  sections: [
    {
      id: "speed-as-a-baseline",
      heading: "Why speed changes the analytical baseline",
      html: `<p>A faster game produces more events per minute: more passes, more duels, more transitions, more shots. Raw totals therefore rise for reasons that have little to do with quality. A team that plays one extra match does not become more creative. A team that faces a high-tempo opponent may record more passes simply because the ball is in play more often.</p>
<p>This is why per-90 and per-possession rates are usually safer than season totals. It is also why possession percentage needs care. A side that leads for an hour may concede the ball deliberately, protecting a result rather than losing control. The same team can post very different possession numbers in two matches without changing its identity.</p>
<p>The practical question is not "who is faster?" but "who benefits from the speed?" A direct team may want a chaotic game. A possession team may want a slower one. The matchup often decides which version appears.</p>`
    },
    {
      id: "pressing-styles",
      heading: "Pressing comes in different shapes",
      html: `<p>Pressing is not one behaviour. A team can press high after a goal kick, sit in a mid block, or counterpress for five seconds after a turnover. Each choice carries a different risk. A high line compresses space in midfield but leaves the space behind the defence. A mid block protects that space but allows the opposition to build.</p>
<p>Metrics such as passes allowed per defensive action are useful starting points, but they describe the average, not the plan. Two teams can share a similar figure while pressing in completely different zones. Watch for the trigger: a back pass, a heavy touch, a pass to a full-back, a switch. The trigger tells you what the coach is trying to trap.</p>
<p>The matchup question follows from that. Can the opponent's goalkeeper pass under pressure? Does the deepest midfielder receive on the half-turn? Is there a striker who can hold the ball long enough for runners to join? <a href="/articles/pressing-intensity-ppda.html">Pressing intensity</a> is only meaningful when you know who is being pressed and why.</p>`
    },
    {
      id: "squad-depth",
      heading: "Depth is tested in specific positions",
      html: `<p>Squad depth is often measured by counting available players. That is a weak measure. What matters is the drop in quality at a specific role, in a specific system. A team with six wingers may still be short of a full-back who can defend the wide channel in a high line.</p>
<p>The roles under the greatest load are usually the ones that cover the most ground or make the most repeated sprints: full-backs in an aggressive system, midfielders asked to press and recover, centre-backs asked to defend large spaces. Depth in those positions is worth more than a crowded bench elsewhere.</p>
<p>Rotation is not automatically a weakness. A coach may choose to protect a player before a decisive run of fixtures. The analytical task is to distinguish a planned rotation from a forced one. <a href="/articles/squad-depth-football-prediction.html">Squad depth</a> is about the quality of the replacement in the role, not the number of names on the sheet.</p>`
    },
    {
      id: "fixture-load",
      heading: "The fixture calendar is part of the data",
      html: `<p>The league's calendar is dense, and the density is uneven. A team can play Sunday, Wednesday and Saturday, then wait a week. Another can play the same number of matches with an extra day between each. Those are different physical tasks, even if the table treats them as the same six points.</p>
<p>Rest days are only one input. Travel, extra time, the intensity of the previous match and the number of minutes played by key players all matter. A short turnaround after a comfortable win is not the same as a short turnaround after a 120-minute cup tie. The calendar interacts with the style: a pressing team pays a higher price for congestion than a low-block team.</p>
<p>This is why raw form over a busy period can mislead. A dip may reflect the schedule rather than a loss of quality. Before drawing a conclusion, check who played, how many minutes they carried, and who was rested. The same team can produce different pressing numbers because it is protecting energy, not because it has abandoned its identity.</p>`
    },
    {
      id: "tactical-patchwork",
      heading: "A tactical patchwork in the middle",
      html: `<p>The league is not a single tactical culture. Clubs with similar resources choose different solutions. One may defend in a low block and attack through fast transitions. Another may dominate the ball but struggle to convert territory into clear chances. A third may build its game around set pieces and second balls.</p>
<p>That diversity makes league averages a rough tool. An average possession figure describes the mix of the league, not the behaviour of the next opponent. A mid-table side may press at home and counter away. That is not inconsistency. It is a game model with different settings for different problems.</p>
<p>When comparing two teams, condition on the opponent. A team's attacking numbers against deep blocks say little about how it will fare against a side that leaves space behind. <a href="/articles/league-table-beyond-points.html">A league table beyond points</a> is a better starting point than a single ranking, because it shows the conditions behind the results.</p>`
    },
    {
      id: "public-data",
      heading: "What public data can and cannot show",
      html: `<p>Public event data for the league is relatively rich. Shot locations, pass networks, pressing proxies and possession sequences are widely available. Tracking data is less uniform: some clubs and providers collect it, but public access varies. Even where the data exists, definitions differ between providers.</p>
<p>Expected goals is the clearest example. Two models can assign different values to the same shot because they weight distance, angle, pressure and shot type differently. Neither is wrong in principle, but mixing models in one comparison is a mistake. Pick a provider, learn its definition, and stay consistent.</p>
<p>What the data cannot show is equally important. It does not know the tactical instruction, the player's fitness, or the reason a full-back hesitated. It records the event, not the intention. A number is a prompt for watching, not a replacement for it.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table is illustrative. Club A is a hypothetical pressing side, and the numbers show a method, not a real team.</p>
<table>
  <thead>
    <tr><th>Match</th><th>Rest days</th><th>Midfield trio minutes</th><th>PPDA</th><th>Second-half xGA</th></tr>
  </thead>
  <tbody>
    <tr><td>One</td><td>5</td><td>270</td><td>8.2</td><td>0.4</td></tr>
    <tr><td>Two</td><td>3</td><td>268</td><td>8.6</td><td>0.5</td></tr>
    <tr><td>Three</td><td>2</td><td>254</td><td>9.3</td><td>0.8</td></tr>
    <tr><td>Four</td><td>2</td><td>270</td><td>10.1</td><td>1.0</td></tr>
  </tbody>
</table>
<p>The pattern is simple. The first two matches average 8.4 on PPDA, the last two average 9.7, a rise of 1.3. Second-half expected goals against move from an average of 0.45 to 0.90. The midfield trio played 1,062 of a possible 1,080 minutes, or 98 per cent of available time.</p>
<p>Fatigue is the tempting explanation. The table does not support it on its own. The last two opponents may have been stronger. The team may have led and chosen to defend. A four-match sample is tiny. What the table does is generate a specific question: did the press drop because the same three midfielders were asked to sustain it, or because the game state changed?</p>
<p>To answer that, add opponent quality, the score at the time of each pressing sequence, and the number of high-intensity runs. If the pattern survives those controls, it becomes a hypothesis worth carrying forward. If it disappears, the original story was too simple.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating fast as one style.</strong> A direct team and a high-pressing team can both play quickly, but they create different problems.</li>
<li><strong>Assuming a high press is always good.</strong> A press without cover behind it is an invitation. The risk matters as much as the aggression.</li>
<li><strong>Reading points over a congested run as form.</strong> Check rest days, minutes and opponent quality before drawing a conclusion.</li>
<li><strong>Judging depth by reputation.</strong> A well-known substitute in the wrong role is not depth. Ask who covers the specific load.</li>
<li><strong>Using league averages on a mismatch.</strong> Averages describe the league, not the next fixture. Condition on style, venue and availability.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and open questions",
      html: `<p>This guide describes structural tendencies, not the current season. Coaches arrive and leave, squads turn over, and a style that defined one campaign can disappear in the next. Any claim about a club should be rebuilt from recent evidence rather than borrowed from a general description.</p>
<p>Public data also has blind spots. Medical information, tactical instructions and training load are not visible. Tracking data is uneven. A pressing proxy can be distorted by score effects, opponent style and the quality of the press. The confident reading is usually the one that names its uncertainty.</p>
<p>The financial range across the league is another limit. Averages blend clubs with very different resources, and a model trained on the whole league may fit no single team well. Segment the data and treat every comparison as conditional. That is less satisfying than a clean answer, but it is closer to how the league behaves.</p>`
    }
  ],
  faq: [
    {
      q: "Why does fixture congestion matter so much in the Premier League?",
      a: "The calendar is dense and the playing style is physically demanding, so rest days interact with pressing and recovery. The effect is not uniform: squad quality, position and the previous match all change the cost. Use rest days and minutes as inputs, not a blanket penalty."
    },
    {
      q: "Is a high press always a sign of a well-coached team?",
      a: "No. Pressing is a tool with a risk profile. A high line can compress space or expose it, depending on the trigger, the cover behind and the opponent's ability to play through. The question is whether the press creates more problems than it solves."
    },
    {
      q: "How should I use league averages in analysis?",
      a: "As a baseline, not an answer. Adjust for opponent style, venue, availability and game state. Averages hide the league's tactical diversity and its resource gaps, so they are weakest when two very different teams meet."
    }
  ],
  related: ["league-table-beyond-points", "pressing-intensity-ppda", "squad-depth-football-prediction"]
};
