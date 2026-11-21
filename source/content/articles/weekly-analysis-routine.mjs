export default {
  slug: "weekly-analysis-routine",
  title: "A Weekly Football Analysis Routine",
  metaTitle: "A Weekly Football Analysis Routine",
  description: "A repeatable weekly process for beginners: collect data, watch with purpose, record forecasts, and review errors without overreacting to one result.",
  category: "Beginner Guides",
  tags: ["analysis routine", "match analysis", "record keeping", "beginners"],
  published: "2026-11-27",
  updated: "2026-11-27",
  author: "Nyasha",
  dek: "A good analyst is not the person who watches the most football. It is the person who watches with a repeatable process and writes down what they expected before the result.",
  takeaways: [
    "A weekly routine gives collecting, watching, forecasting, and reviewing their own time, so each task actually happens.",
    "Collect a small, consistent dataset instead of trying to track every league and every metric.",
    "Watch with a question and take specific notes, because vague impressions cannot be reviewed.",
    "Record probabilities before kick-off and keep the original forecast even when team news changes your view.",
    "Review the process separately from the result, and look for patterns across several weeks rather than one match."
  ],
  intro: `<p>Most beginners start with enthusiasm and no structure. They watch a few matches, read a handful of threads, and form strong opinions. A month later, they cannot remember what they expected, why they expected it, or which of their ideas were tested. The missing ingredient is not more football. It is a repeatable process.</p>
<p>A weekly routine does three things. It gives each task a time, so the work actually happens. It separates collecting, watching, forecasting, and reviewing, so each gets attention. And it leaves a written trail that can be checked later, which is the only way to learn from mistakes rather than remember them selectively.</p>
<p>This guide sets out a simple week for someone with a job, a family, or a full study load. The whole routine takes about four hours, plus the matches themselves. The times are a guide, not a contract.</p>`,
  sections: [
    {
      id: "why-a-routine",
      heading: "Why a weekly routine beats sporadic effort",
      html: `<p>Analysis is easy to do badly. A beginner can watch five matches in a weekend and come away with a dozen opinions, none of which is written down or tied to a question. The next weekend brings a new set of matches and a new set of opinions. Nothing accumulates.</p>
<p>A routine fixes that by making the work small and regular. One data update, one or two focused match watches, one set of match notes, one forecast log, and one review. Each task is short enough to finish and specific enough to leave a record.</p>
<p>The routine also protects against the biggest beginner trap: reacting to the last result. When the review happens a day or two after the match, and when it compares the outcome with a forecast written beforehand, the result loses some of its power to rewrite the story.</p>`
    },
    {
      id: "monday-collect",
      heading: "Monday: collect and clean the data",
      html: `<p>Start the week by collecting results and the underlying numbers for the matches you care about. The aim is a clean, consistent dataset, not a comprehensive one. Pick a small number of leagues and a small number of measures: goals, expected goals, shots, and perhaps possession or pressing data if you trust the source.</p>
<p>Store the data in one place. A spreadsheet with one row per match is enough. Include the date, the teams, the score, the expected goals for each side, and the source. The source column matters because providers define and calculate things differently. Mixing sources without recording them creates a dataset that looks tidy and is not comparable.</p>
<p>Monday is also the day to update your forecast log from the previous weekend. Do not edit the original forecasts. Add the outcome and a short note. Our guide to <a href="/articles/football-data-sources.html">football data sources</a> explains how to choose a provider and keep the data clean.</p>`
    },
    {
      id: "tuesday-wednesday-watch",
      heading: "Tuesday and Wednesday: watch with a purpose",
      html: `<p>Watch one or two matches with a specific question. This is different from watching for entertainment. Before kick-off, write down what you want to learn: how a team builds from the back, how it defends crosses, or how its shape changes when it loses the ball.</p>
<p>During the match, take short notes with the minute. Do not try to describe everything. Five or six observations per match are enough if they are specific. "Their left-back steps inside when the winger drops" is useful. "They pressed well" is not.</p>
<p>After the match, spend ten minutes turning the notes into three or four sentences. What did you expect? What happened? What surprised you? This is the raw material for the weekend review. Watching two matches a week is plenty for a beginner. The goal is depth, not coverage.</p>`
    },
    {
      id: "thursday-match-notes",
      heading: "Thursday: write the match notes",
      html: `<p>Thursday is for the matches you plan to analyse in detail. Start with the basics: recent results, home and away form, availability, and the tactical shape each team is likely to use. Then write a short match note for each fixture, no more than 150 words.</p>
<p>The note should include the questions you think will decide the game. Can the home team's press reach the away team's deep midfielders? Does the away team defend set pieces well? Is one side playing a third match in seven days? These questions turn a vague interest into a testable view.</p>
<p>Our guide to <a href="/articles/pre-match-analysis-guide.html">pre-match analysis</a> sets out a fuller checklist. The weekly routine is not meant to replace that checklist. It is the slot in the week where the checklist gets used consistently.</p>`
    },
    {
      id: "friday-forecasts",
      heading: "Friday: record forecasts before kick-off",
      html: `<p>Before the weekend, record a forecast for the matches you have analysed. A forecast is a probability, not a verdict. "The home team has a 58 per cent chance of winning" can be scored. "The home team will win" cannot.</p>
<p>Record the event clearly, the probability, the date, and a one-line reason. Keep the reason short enough that you will actually write it. "Home press versus a makeshift back line" is enough. The reason is not there to justify the forecast. It is there to show what you believed at the time.</p>
<p>Do not change the forecast after team news unless the news genuinely changes the question. If it does, record a second forecast with a timestamp and keep the first one. Our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a> explains how to score the log later.</p>`
    },
    {
      id: "weekend-review",
      heading: "The weekend: review and log errors",
      html: `<p>Watch the matches you forecast, but do not review them immediately. Emotions distort memory. Wait until Sunday evening or Monday morning, then open the log and compare the forecast with the outcome.</p>
<p>For each match, write one sentence about the process and one about the result. Separate the two. A forecast can be reasonable and still lose. A poor forecast can win. The review should ask whether the reasoning was sound, not whether the scoreline cooperated.</p>
<p>Look for patterns across several weeks. Are you consistently overconfident about home teams? Do you underrate teams after a heavy defeat? Do you change forecasts too often when team news arrives? These patterns are more useful than a single correct or incorrect call.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows one week's forecast log for a beginner who follows two leagues. The probabilities are invented for teaching.</p>
<table>
<caption>Illustrative weekly forecast log</caption>
<thead><tr><th>Match</th><th>Event</th><th>Forecast</th><th>Outcome</th><th>Brier contribution</th><th>Review note</th></tr></thead>
<tbody>
<tr><td>1</td><td>Home win</td><td>0.62</td><td>1</td><td>0.1444</td><td>Midfield absence was priced in too late.</td></tr>
<tr><td>2</td><td>Over 2.5 goals</td><td>0.55</td><td>0</td><td>0.3025</td><td>Two early goals, then the game state changed. Process was reasonable.</td></tr>
<tr><td>3</td><td>Draw</td><td>0.28</td><td>1</td><td>0.5184</td><td>Underrated the low-block matchup.</td></tr>
<tr><td>4</td><td>Away win</td><td>0.41</td><td>0</td><td>0.1681</td><td>Forecast was fair; a late set piece decided it.</td></tr>
</tbody>
</table>
<p>The mean Brier contribution is (0.1444 + 0.3025 + 0.5184 + 0.1681) divided by 4, which equals 1.1334 divided by 4, or about 0.283. A flat 0.50 forecast for each event would have scored 0.25 on this sample. The log is worse than that baseline, but four forecasts is far too few to judge the analyst.</p>
<p>The value of the table is in the review column. The first and third rows point to specific planning errors: late team news and a matchup that was dismissed too quickly. The second and fourth rows look like reasonable forecasts that did not land. That distinction is the whole point of the routine. It separates decisions that need fixing from outcomes that simply happened.</p>
<p>Over a season, group the rows by confidence band. If forecasts around 60 per cent come true about 60 per cent of the time, the process is roughly calibrated. If they come true 80 per cent of the time, the analyst is underconfident. If they come true 40 per cent of the time, the analyst is overconfident. The weekly log makes that check possible.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Collecting too much data.</strong> A small dataset you understand beats a large one you do not. Track a few measures consistently.</li>
<li><strong>Watching without a question.</strong> Entertainment is fine, but it is not analysis. Write the question down before kick-off.</li>
<li><strong>Recording verdicts instead of probabilities.</strong> "They will win" cannot be scored or reviewed. Use a number.</li>
<li><strong>Editing forecasts after the result.</strong> The log is only useful if the original forecast survives contact with the outcome.</li>
<li><strong>Reviewing only the wins.</strong> The misses are where the assumptions are tested.</li>
<li><strong>Changing the process every week.</strong> A routine needs enough repetition to show its own patterns. Give it a month before redesigning it.</li>
</ul>
<p>The common thread is honesty. The log is not a performance for an audience. It is a private record of what you thought, what happened, and what you would do differently.</p>`
    }
  ],
  faq: [
    {
      q: "How much time does a weekly routine take?",
      a: "About four hours a week, plus the matches themselves. The time is split across short tasks: data collection, one or two focused watches, match notes, forecasts, and a review."
    },
    {
      q: "Do I need paid football data to start?",
      a: "No. A free source with clear definitions is enough for a beginner. The important things are consistency, a note of the source, and a small set of measures you understand."
    },
    {
      q: "What should I do if I miss a week?",
      a: "Pick up at the next task rather than trying to catch up on everything. A routine that bends is more useful than one that breaks. Mark the gap in the log so the record stays honest."
    }
  ],
  related: ["pre-match-analysis-guide", "football-data-sources", "track-prediction-accuracy"]
};
