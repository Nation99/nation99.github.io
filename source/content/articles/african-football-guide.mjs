export default {
  slug: "african-football-guide",
  title: "African Football Analysis Guide",
  metaTitle: "African Football Analysis Guide: CAF, Travel and Data",
  description: "A careful guide to African football analysis: CAF competitions, travel, squad availability, data gaps and the discipline of uncertainty.",
  category: "Leagues",
  tags: ["African football", "CAF", "travel", "data quality"],
  published: "2026-08-19",
  updated: "2026-08-19",
  author: "Nyasha",
  dek: "African football is not a single competition or a single style. Good analysis begins with the competition, the journey and the players who are actually available.",
  takeaways: [
    "Name the competition and stage before comparing teams, because a league match and a knockout tie ask different questions.",
    "Travel is a logistical variable, not a moral one. Measure the journey and the recovery window.",
    "Squad availability is wider than injuries: registration, permits, call-ups and late arrivals all matter.",
    "When data is thin, widen the uncertainty instead of inventing precision."
  ],
  intro: `<p>African football is not one league or one style. It is a network of domestic leagues, continental club competitions and international tournaments, each with its own calendar, resources and analytical problems. Treating the continent as a single competition is the first mistake an analyst can make.</p>
<p>The second is assuming that a European template will fit. The questions are often the same, but the constraints are different. Travel can be longer, data can be thinner, and the players available for a given match can change later than expected. Good analysis starts by naming those constraints.</p>`,
  sections: [
    {
      id: "competition-first",
      heading: "Start with the competition, not the badge",
      html: `<p>A domestic league match and a continental knockout tie are different analytical objects. The league offers a larger sample, a familiar fixture list and a clearer table. A two-legged tie offers a small sample, a specific scoreline to manage and the possibility of extra time or penalties. The same two clubs can produce very different matches depending on the competition.</p>
<p>Continental football also brings rotation. A club may prioritise a tie, rest players in the league, or travel with a smaller squad. International windows interrupt training and add late arrivals. The analyst needs to know which competition is being played, what stage it is at, and what the result means for the next match.</p>
<p>This is why a league table is only a starting point. <a href="/articles/league-table-beyond-points.html">Reading a table beyond points</a> is useful in a domestic league with a balanced schedule. In a knockout tie, the table tells you almost nothing about the specific task. Start with the format, then the teams.</p>`
    },
    {
      id: "travel",
      heading: "Travel is a structural variable",
      html: `<p>Travel in African football can be a significant part of the match. Distances are long, connections may be indirect, and border formalities can add hours. A club with a direct charter flight and a club with two commercial connections are not preparing in the same way, even if the match is played at the same venue.</p>
<p>Measure the journey rather than assuming it. Flight time, connection time, arrival time, time-zone changes and the number of rest days all belong in the note. A twelve-hour journey that arrives in the early hours is a different input from a two-hour flight that arrives in the afternoon.</p>
<p>Travel is not an excuse and it is not a fixed penalty. It is a variable that can be measured and weighed. <a href="/articles/travel-fatigue-football.html">Travel and fatigue</a> interact with squad depth, the age of the squad and the importance of the fixture. The effect is usually modest, but the uncertainty around it is real.</p>`
    },
    {
      id: "availability",
      heading: "Squad availability across borders",
      html: `<p>Availability is a bigger source of uncertainty than in a settled domestic league. Players may be on international duty, awaiting a registration or a work permit, recovering from injury, or arriving late after a long journey. A squad list can look deep and still be missing the roles that matter.</p>
<p>Sort the absences by function. A missing goalkeeper is different from a missing winger. A missing holding midfielder changes the protection in front of the defence. A missing centre-back who organizes the line changes the whole defensive shape. The replacement's quality matters, but so does the change in mechanism.</p>
<p>Registration and eligibility rules add another layer. A player may be signed but not available for a particular competition. A squad can be strengthened on paper without being strengthened for the next match. Check the competition rules and the official squad list rather than assuming that a transfer solves the problem.</p>`
    },
    {
      id: "data-gap",
      heading: "The data gap and how to work around it",
      html: `<p>Data coverage across the continent is uneven. Some leagues and competitions have detailed event data, including shot locations and passing sequences. Others offer basic match reports, goals and lineups. Expected goals may not be available at all. The analyst has to work with what exists.</p>
<p>Start with the simplest reliable facts: the venue, the score, the scorers, the lineups and the dates. Add shots and possession where they are available. Use video to describe the shape and the patterns, and record what you actually watched rather than what you remember. A structured note is more useful than a vague impression.</p>
<p>Data hygiene matters more when sources are scarce. Do not mix providers without checking definitions. Do not compare a league with detailed event data to one with basic reports as if the numbers were equivalent. <a href="/articles/football-data-sources.html">Football data sources</a> need to be judged by coverage and definition, not by how modern the website looks.</p>`
    },
    {
      id: "venue-context",
      heading: "Home advantage and venue context",
      html: `<p>Home advantage is a bundle of effects: the crowd, the pitch, the climate, the travel endured by the away team and the familiarity of the surroundings. In continental football the bundle can be larger than usual, because the away journey may be longer and the conditions less familiar. It can also be smaller, because the home team may be the one travelling more in a different sense.</p>
<p>Check the actual venue. A final may be played at a neutral ground. A club may use a different stadium for continental fixtures because of eligibility or capacity. A match moved away from home can lose the crowd effect entirely. The fixture list may say "home", but the venue is the fact that matters.</p>
<p>Climate and kick-off time belong in the same note. Heat, humidity, altitude and the time of day affect tempo and recovery. These are not exotic details. They are part of the conditions that shape the match, and they should be described with the same care as the formation.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The clubs, journeys and numbers below are illustrative. They are not a real fixture or a claim about any team. The aim is to show how preparation can be recorded without pretending it is precise.</p>
<table>
  <thead>
    <tr><th>Factor</th><th>Club A</th><th>Club B</th></tr>
  </thead>
  <tbody>
    <tr><td>Rest days</td><td>5</td><td>3</td></tr>
    <tr><td>Travel</td><td>2-hour direct flight</td><td>12-hour journey, one connection</td></tr>
    <tr><td>Absences</td><td>2</td><td>4, including two late arrivals</td></tr>
    <tr><td>Training sessions</td><td>4</td><td>2</td></tr>
    <tr><td>Venue adjustment</td><td>+0.15</td><td>-0.05</td></tr>
    <tr><td>Preparation adjustment</td><td>+0.05</td><td>-0.10</td></tr>
    <tr><td>Availability adjustment</td><td>0.00</td><td>-0.05</td></tr>
    <tr><td>Adjusted expectancy</td><td>1.55</td><td>1.15</td></tr>
  </tbody>
</table>
<p>The arithmetic starts from a neutral baseline of 1.35 goals per team. Club A: 1.35 + 0.15 + 0.05 + 0.00 = 1.55. Club B: 1.35 - 0.05 - 0.10 - 0.05 = 1.15. The total is 2.70 goals. The preparation and availability rows move Club B from 1.30 to 1.15, a 0.15 adjustment.</p>
<p>That 0.10 is a judgement, not a measurement. It should be written down with its reasoning, and it should be sensitive to new information. If Club B's late arrivals start, the availability row changes. If the journey was actually direct, the preparation row changes. The table is a way to make those assumptions visible.</p>
<p>Given the thin data, a range is more honest than a point estimate. Club A might be 1.4 to 1.7; Club B might be 1.0 to 1.3. The overlap is the message. The analysis has not established a clear edge. It has described a set of conditions that could produce one.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Treating the continent as one league.</strong> Domestic football, CAF club competitions and international tournaments have different calendars, samples and incentives.</li>
<li><strong>Importing European averages.</strong> A scoring rate or possession figure from another competition may not transfer. Start with local evidence.</li>
<li><strong>Ignoring the stage.</strong> A group match and a knockout tie are different problems. Rotation and risk change with the format.</li>
<li><strong>Assuming no data means no analysis.</strong> Video, lineups, venue and schedule still support a structured note.</li>
<li><strong>Overreacting to travel.</strong> The journey matters, but it is one input among many. Avoid turning it into a fixed penalty.</li>
<li><strong>Using reputation instead of availability.</strong> A famous squad list is not the same as the players available for this match.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and the case for humility",
      html: `<p>The main limit is information. Coverage varies, team news can arrive late, and the details of travel are often private. Competition rules can change, and a squad that looks settled can be reshaped by registration deadlines or international call-ups. The analyst is often working with a partial picture.</p>
<p>Sample size is the second limit. Knockout ties are short. Domestic leagues may have unbalanced schedules. A single result can carry more weight than it deserves, especially in a two-legged tie where one red card changes the shape of both matches. The temptation is to over-explain a small sample with a confident story.</p>
<p>Humility is not a disclaimer. It is a method. State what is known, separate it from what is inferred, and widen the range when the evidence is thin. That approach is more useful than a precise number built on assumptions that cannot be checked.</p>`
    },
    {
      id: "thin-data-note",
      heading: "Building a note when data is thin",
      html: `<p>Begin with the competition, the stage and the venue. Then map the schedule: rest days, travel, arrival time and training sessions. List the available players by role, and mark the ones whose participation is uncertain. Watch at least two recent matches, if footage exists, and write down the shape and the patterns rather than the score.</p>
<p>Use simple counts where you can: shots, corners, goals by source, and the number of players committed to attacks. These are not as rich as expected goals, but they are better than impressions. Record the source and the date for every number, so the note can be audited later.</p>
<p>Finish with a range and three uncertainties. One about the data, one about availability, one about the match state. The note will not be complete. It will be honest, and that is the more useful standard when the information is scarce.</p>`
    }
  ],
  faq: [
    {
      q: "Why is data harder to find for African football?",
      a: "Coverage and investment vary across leagues and competitions. Some have detailed event data, while others offer basic reports. Use multiple sources, record definitions and state confidence rather than treating all numbers as equivalent."
    },
    {
      q: "How much does travel affect CAF matches?",
      a: "It can matter, especially when a long journey with connections reduces recovery and training time. But it is not a fixed penalty. Check the route, the rest days, the squad's resources and the player availability before adjusting."
    },
    {
      q: "Can European club form be used for African players?",
      a: "It is one input, not a direct transfer. Role, system, travel and international commitments change the context. Use club form to describe the player's qualities, then check whether the national team asks for the same job."
    }
  ],
  related: ["league-table-beyond-points", "travel-fatigue-football", "football-data-sources"]
};
