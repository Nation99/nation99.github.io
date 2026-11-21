export default {
  slug: "football-data-sources",
  title: "Football Data Sources for Beginners",
  metaTitle: "Football Data Sources for Beginners",
  description: "A practical guide to football data sources, provider differences, data hygiene, and the questions to ask before trusting a statistic.",
  category: "Beginner Guides",
  tags: ["data sources", "data quality", "research", "analytics"],
  published: "2026-09-07",
  updated: "2026-09-07",
  author: "Nyasha",
  dek: "The hardest part of football analysis is not the calculation. It is knowing where the numbers came from, what they count, and whether two sources are answering the same question.",
  takeaways: [
    "Primary data is collected close to the event; secondary data is compiled by someone else.",
    "Two providers can give different xG values for the same shot because their models differ.",
    "Definitions matter: a progressive pass in one dataset may not meet the threshold in another.",
    "Good data hygiene includes versioning, source notes, and a distinction between observed and modelled values.",
    "No public dataset is complete, and a larger file is not automatically a better one."
  ],
  intro: `<p>Football analysis begins with a deceptively simple question: where did the number come from? A shot count feels objective until you ask which provider counted it, how they defined a shot, and whether the match data was collected live or corrected afterwards. The answer shapes every calculation that follows.</p>
<p>This guide is a map of the data landscape for beginners. It covers the main types of football data, the differences between providers, the hygiene habits that prevent embarrassing errors, and the limits that no dataset can remove.</p>`,
  sections: [
    {
      id: "primary-and-secondary",
      heading: "Primary data and secondary data",
      html: `<p>Primary data is collected at the source. In football, that usually means event data recorded by a provider at the match, either through human coding, automated tracking, or a combination of both. The provider decides what counts as a pass, a tackle, a shot on target, and a clear chance. Those definitions become the foundation of every downstream metric.</p>
<p>Secondary data is compiled from primary sources. A website that publishes league tables, xG totals, or player heat maps may be repackaging data from a specialist provider. That is not automatically a problem, but it matters for attribution and for understanding definitions. If a secondary source changes a provider's shot model or rounds a number, the output may not match the original.</p>
<p>For a beginner, the practical rule is to name the source. "The league table says" is weaker than "the competition's official site says" or "the provider's event feed says", because the second version can be checked.</p>`
    },
    {
      id: "types-of-data",
      heading: "The main types of football data",
      html: `<p><strong>Results and fixtures</strong> are the simplest layer. They include scorelines, dates, venues, and competition information. They are widely available and usually reliable, though lower-league coverage can be patchy.</p>
<p><strong>Event data</strong> records actions in sequence: passes, carries, shots, tackles, interceptions, fouls, and substitutions, each with a location and often a qualifier such as body part or pressure. Event data supports possession metrics, passing networks, and shot maps. Its quality depends on the provider's coding rules and the density of its coverage.</p>
<p><strong>Tracking data</strong> records the position of players and the ball many times per second, supporting physical metrics and positional structure. It is expensive and less accessible to independent analysts.</p>
<p><strong>Modelled data</strong> includes xG, xGA, expected threats, and similar metrics. These are not observations. They are outputs from a model that uses observed events plus assumptions. A modelled value should always carry the model's name and, where possible, its version.</p>`
    },
    {
      id: "provider-differences",
      heading: "Why providers disagree",
      html: `<p>Two providers can watch the same match and publish different xG totals. This is not necessarily a sign that one is wrong. They may use different shot locations, different pressure variables, different goalkeeper positioning data, or different calibration samples. One may include penalties in its match total; another may separate them. One may use a post-shot model for shots on target; another may not.</p>
<p>The differences are often small, but they matter when you compare across sources. A team's xG per match from Provider A cannot be mixed with an xGA per match from Provider B and treated as a single coherent dataset. The definitions may not align. The sample may not align. The model may not align.</p>
<p>The safest habit is to pick one provider for a given analysis and stay with it. If you need to compare providers, show both numbers and explain the difference rather than averaging them into a false consensus. The same principle applies to possession, progressive passes, and defensive actions. A number without a definition is a rumour with a decimal point.</p>`
    },
    {
      id: "data-hygiene",
      heading: "Data hygiene for independent analysts",
      html: `<p>Data hygiene is the unglamorous work that makes analysis reproducible. It starts with a source note: the provider, the competition, the season, the date accessed, and the definition used. If the provider updates its model, record the version. If you clean or transform the data, record the step.</p>
<p>Next, separate observed values from modelled values. A scoreline is observed. An xG total is modelled. A player's market value is modelled. Mixing them without labels creates false confidence. A table that places a measured quantity beside an estimated one should say so in the caption.</p>
<p>Check for missing matches before calculating averages. A team with 18 matches in a 20-match sample is not directly comparable to a team with 20. Check for duplicate rows, postponed fixtures, and neutral venues; these sound minor until they change a per-match average enough to alter a conclusion.</p>
<p>Finally, keep a simple version of the raw data. If you only keep the cleaned spreadsheet, you cannot audit your own work later. A small archive of source files and a short note about each transformation is enough.</p>`
    },
    {
      id: "free-and-paid",
      heading: "Free sources, paid sources, and the trade-offs",
      html: `<p>Free sources are useful for learning, but they come with limits. Official competition sites usually provide results, fixtures, and basic tables. General sports sites add match reports and some event summaries. Public analytics sites may publish xG and shot maps for selected competitions, often with their own model and their own coverage gaps.</p>
<p>Paid sources offer deeper event data, historical archives, and API access, but they are not automatically better. A paid dataset with excellent top-league coverage may be weak in the lower divisions or in women's football.</p>
<p>Before paying for data, write down the question you want to answer. If it needs shot locations, check that the provider includes them. If it needs lineups and minutes, check the coverage. If it needs historical seasons, check the start date. Cost is only one part of the trade-off; coverage, definitions, and licence terms matter too.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The table below is illustrative. It shows how two providers might describe the same hypothetical match without either one being dishonest.</p>
<div class="table-wrap">
<table>
<thead><tr><th>Metric</th><th>Provider A</th><th>Provider B</th><th>Likely reason for the difference</th></tr></thead>
<tbody>
<tr><td>Shots</td><td>14</td><td>13</td><td>One provider counts a blocked cross as a shot; the other does not.</td></tr>
<tr><td>Shots on target</td><td>5</td><td>4</td><td>Different definitions of a save and a blocked effort.</td></tr>
<tr><td>xG</td><td>1.62</td><td>1.48</td><td>Different shot model and pressure inputs.</td></tr>
<tr><td>Possession</td><td>54%</td><td>52%</td><td>Different treatment of dead-ball time and contested possession.</td></tr>
<tr><td>Passes</td><td>487</td><td>472</td><td>Different thresholds for a completed pass.</td></tr>
</tbody>
</table>
</div>
<p>Suppose an analyst downloads Provider A's xG for the home team and Provider B's xGA for the away team, then averages them to estimate a match total. The calculation looks clean, but it combines two different models. The resulting number is not a neutral average. It is a hybrid with no defined meaning.</p>
<p>A better approach is to use one provider for both sides, label the model, and note the sample. If the analyst wants to compare providers, the comparison should be presented as a sensitivity check: "Provider A gives 1.62, Provider B gives 1.48, and the difference is consistent with model variation." That is more useful than a single number that hides the disagreement.</p>`
    },
    {
      id: "using-sources",
      heading: "Turning sources into a repeatable process",
      html: `<p>Start with a small, well-defined dataset. Pick one competition, one season, and one provider. Build a table of matches with the fields you need: date, teams, goals, xG, xGA, and a source identifier. Add notes for postponements, neutral venues, and definitional quirks.</p>
<p>Then calculate simple summaries before attempting anything complex. Goals per match, xG per match, and the difference between the two are enough to reveal whether the data is behaving as expected. If a team has 40 goals from 12 matches, check the source before building a model around it. Extreme values are often data errors, not insights.</p>
<p>When you move to modelling, keep the source layer separate from the model layer. Record which xG provider and version you used. If the provider changes its model mid-season, use a consistent historical version or acknowledge the break. This is the same discipline described in our guide to <a href="/articles/track-prediction-accuracy.html">tracking prediction accuracy</a>, where the record matters as much as the result.</p>
<p>Finally, do not confuse volume with quality. A dataset with a million rows can still be useless if the definitions are inconsistent or the coverage is skewed. A smaller, well-documented dataset is usually more valuable for independent analysis than a large, opaque one.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Mixing providers without saying so.</strong> A total built from two models is not a neutral total.</li>
<li><strong>Treating modelled values as observations.</strong> xG is an estimate, not a measured quantity like a scoreline.</li>
<li><strong>Ignoring definition changes.</strong> A provider's update can break a time series.</li>
<li><strong>Assuming free data is always worse.</strong> Fit for purpose matters more than price.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "Limits and responsible use",
      html: `<p>No public dataset captures everything that happens on a football pitch. Off-ball movement, tactical instructions, and injury severity are often invisible or inconsistently recorded. Even tracking data does not capture intent.</p>
<p>That is not a reason to abandon data. It is a reason to be precise about what the data can support. A shot model can describe chance quality. It cannot tell you whether a manager's team talk worked. A possession metric can describe territory. It cannot tell you whether a team controlled the match in the way that matters.</p>
<p>The best habit is to pair every dataset with a question and a limit. What does this source measure? What does it miss? How was it collected? What would change my mind? If those questions cannot be answered, the analysis is not ready. Readers who want to apply this discipline to match previews can use our <a href="/articles/pre-match-analysis-guide.html">pre-match analysis guide</a>, and readers new to chance quality can start with <a href="/articles/what-is-xg-football.html">what xG means</a>.</p>`
    }
  ],
  faq: [
    {
      q: "What is the best free football data source?",
      a: "There is no single best source. It depends on the competition, the metrics, and the historical coverage. Start with official competition data for results, then choose one analytics provider for modelled metrics and stay consistent."
    },
    {
      q: "Why do two websites show different xG for the same match?",
      a: "They may use different shot models, different inputs, different pressure data, or different definitions of a shot. The difference is usually a modelling choice, not proof that one source is lying."
    },
    {
      q: "Can I scrape football data for my own analysis?",
      a: "That depends on the site's terms, the robots file, and local law. Scraping can breach terms of service and may produce incomplete or inconsistent data. Prefer official APIs or licensed datasets where possible, and always credit the source."
    }
  ],
  related: ["pre-match-analysis-guide", "what-is-xg-football", "track-prediction-accuracy"]
};
