export default {
  slug: "squad-depth-football-prediction",
  title: "How Squad Depth Shapes Football Seasons",
  metaTitle: "Squad Depth in Football: Rotation and Quality Drops",
  description: "How to measure squad depth beyond the starting eleven, why rotation differs from quality, and where depth shapes a long season.",
  category: "Tactics",
  tags: ["squad depth", "rotation", "fixture congestion", "analysis"],
  published: "2026-03-04",
  updated: "2026-03-04",
  author: "Nyasha",
  dek: "Depth is not the number of senior players on the books. It is the size of the drop when the first choice is missing, and the shape of that drop across positions.",
  takeaways: [
    "Squad size and squad depth answer different questions.",
    "The most useful measure is the quality drop from first choice to replacement.",
    "Positional chains can turn one absence into two weaknesses.",
    "A deep bench only helps if the manager uses it without breaking the structure.",
    "Depth matters most in congested runs, not across a whole season evenly."
  ],
  intro: `<p>Squad depth is usually discussed in the transfer window, when it is counted in signings, and forgotten in February, when it is counted in available bodies. The two counts are not the same. A club can add three senior players and still be exposed by one injury in the wrong position. Another can look thin on paper and cope because its replacements fit the system.</p>
<p>For analysis, depth is best treated as a conditional property: how much does the team change when a particular player is unavailable? That question is more useful than a headline squad size, and it is answerable with a little structure.</p>`,
  sections: [
    {
      id: "what-depth-means",
      heading: "What depth actually means",
      html: `<p>Depth is the quality of the players outside the strongest eleven, plus the cover they provide in each position. A squad can have twenty-five senior players and still be thin at left-back, in central midfield or in the specific role the manager needs. Counting bodies answers a registration question, not a football question.</p>
<p>Three things matter. The first is the size of the drop from the first choice to the replacement. The second is positional coverage: whether the replacement is a natural fit or a compromise. The third is stylistic fit: a capable player can be a poor replacement if the team's build-up depends on a skill he does not have. Depth is therefore a property of the squad relative to a system, not a standalone number.</p>`
    },
    {
      id: "why-congestion-exposes-depth",
      heading: "Why congestion exposes depth",
      html: `<p>Depth matters most when the calendar stops being polite. A team playing once a week can hide a thin squad for months. Add a midweek competition, a long domestic trip and two injuries in the same position, and the same squad looks different. The effect is not just fatigue; it is the loss of the specific qualities that make the starting eleven work.</p>
<p>Congestion also changes training. A squad with fewer reliable players trains fewer intense sessions, because the same bodies are needed for matches. That can reduce sharpness and increase the risk of soft-tissue problems. The <a href="/articles/travel-fatigue-football.html">guide to travel and fatigue</a> covers the load side; depth is the supply side of the same problem.</p>`
    },
    {
      id: "measuring-the-drop",
      heading: "Measuring the drop-off",
      html: `<p>The most useful starting point is a minutes distribution. List the outfield players by minutes played, then group them into bands: the first eleven, the next five, the next five, and the rest. A healthy squad usually has a gradual slope. A squad with a cliff after the thirteenth player is more exposed than its total size suggests.</p>
<p>Then estimate the quality drop in each band. You can use a scouting rating, a role-specific metric or a simple internal grade, provided you are consistent and honest about the uncertainty. On/off numbers are tempting but noisy: a replacement often plays against weaker opposition or alongside other substitutes, so his raw numbers are not a clean comparison. Treat them as a prompt for further watching, not a verdict.</p>`
    },
    {
      id: "rotation-is-a-separate-skill",
      heading: "Rotation is a separate skill",
      html: `<p>Rotation is a separate skill from depth. A manager with five capable substitutes can still overuse the same eleven, or can rotate so heavily that the team loses its rhythm. The relevant question is not how many players he has, but whether he uses them in a way that preserves the team's structure.</p>
<p>Some managers trust a small core and ask the bench to change games; others prefer to keep the same shape and swap personnel. Both can work. The <a href="/articles/manager-impact-football.html">guide to manager impact</a> looks at how to judge those choices without reducing them to win rate.</p>`
    },
    {
      id: "positional-chains",
      heading: "One absence, two weaknesses",
      html: `<p>Injuries rarely arrive one at a time. A missing defensive midfielder can force a centre-back into midfield, which weakens the defence and the build-up at once. A missing full-back can push a winger deeper, reducing the team's threat on that flank. These positional chains are why depth is not a simple count of replacements.</p>
<p>The same logic applies to suspensions and fatigue. A squad with two adequate options in each position can absorb one absence; a squad with one specialist and two compromises cannot. Before a congested run, map the chain for the three or four most important roles rather than the whole squad.</p>`
    },
    {
      id: "worked-example",
      heading: "A worked example",
      html: `<p>The ratings below are illustrative and describe two hypothetical squads with the same first-choice quality.</p>
<table>
<thead><tr><th>Unit</th><th>Club A rating</th><th>Club B rating</th></tr></thead>
<tbody>
<tr><td>First eleven</td><td>80</td><td>80</td></tr>
<tr><td>Rotation five</td><td>76</td><td>72</td></tr>
<tr><td>Fringe five</td><td>71</td><td>68</td></tr>
<tr><td>Emergency cover</td><td>64</td><td>60</td></tr>
</tbody>
</table>
<p>Assume a normal season gives the first eleven 70% of outfield minutes, the rotation five 20%, the fringe five 8% and the emergency group 2%. The weighted rating is the sum of each share multiplied by its rating. For Club A: 0.70 x 80 = 56.0, 0.20 x 76 = 15.2, 0.08 x 71 = 5.68 and 0.02 x 64 = 1.28, for a total of 78.16. Club B: 56.0 + 14.4 + 5.44 + 1.2 = 77.04. The gap is 1.12 rating points.</p>
<p>Now make the first eleven less available. If they play only 55% of minutes, and the rotation and fringe shares rise to 30% and 13%, Club A falls to 77.31 and Club B to 75.64. The gap widens to 1.67. At a 40% share, with rotation at 38% and fringe at 20%, the totals are 76.36 and 74.16, a gap of 2.20.</p>
<table>
<thead><tr><th>Scenario</th><th>First eleven share</th><th>Club A</th><th>Club B</th><th>Gap</th></tr></thead>
<tbody>
<tr><td>Normal</td><td>70%</td><td>78.16</td><td>77.04</td><td>1.12</td></tr>
<tr><td>Injury-hit</td><td>55%</td><td>77.31</td><td>75.64</td><td>1.67</td></tr>
<tr><td>Crisis</td><td>40%</td><td>76.36</td><td>74.16</td><td>2.20</td></tr>
</tbody>
</table>
<p>The arithmetic shows the mechanism: when the first choice is available, the squads are close; when it is not, the weaker bench is exposed. The absolute gap is modest, and the ratings are not a currency that converts neatly into points. The point is the direction and the widening, not the second decimal place.</p>`
    },
    {
      id: "what-to-check",
      heading: "What to check before a busy run",
      html: `<p>Before a congested run, check four things. First, the fixture list: how many matches in how many days, and how much travel is involved. Second, the positional map: which roles have one specialist and which have two. Third, the age profile: older players may need more recovery, while younger players may be inconsistent when asked to start repeatedly. Our guide to <a href="/articles/squad-age-demographics.html">squad age profiles</a> explains why average age is a poor shortcut.</p>
<p>Fourth, the manager's history. Some coaches protect minutes proactively; others wait for a problem. Neither approach is automatically right, but the pattern tells you how much rotation to expect.</p>`
    },
    {
      id: "common-mistakes",
      heading: "Common mistakes",
      html: `<ul>
<li><strong>Counting bodies.</strong> Twenty-five senior players can still leave one position with no natural cover.</li>
<li><strong>Using transfer fees as a quality score.</strong> A fee reflects age, contract and market conditions as much as current ability.</li>
<li><strong>Reading on/off numbers as causal.</strong> Substitutes often play in different contexts from the players they replace.</li>
<li><strong>Assuming depth is only about attack.</strong> Defensive and midfield cover usually decides whether a team can keep its shape.</li>
<li><strong>Overreacting to one injury.</strong> The question is the replacement chain, not the absence alone.</li>
</ul>`
    },
    {
      id: "limits",
      heading: "What depth analysis cannot tell you",
      html: `<p>Quality ratings are judgements, not measurements. Different scouts can grade the same player differently, and a rating that works for one system may mislead in another. Minutes also depend on the manager, the scoreline and the opposition, so a low-minute player is not necessarily a weak one.</p>
<p>Young players improve during a season, and a squad that looks thin in August may look adequate by March. Conversely, a deep squad can be unsettled by players who want more minutes. Depth is a useful lens on risk, not a forecast of points.</p>`
    }
  ],
  faq: [
    {
      q: "Does a bigger squad always mean better depth?",
      a: "No. A large squad can be unbalanced, with several similar players in one position and none in another. Depth depends on the quality of the replacements, their fit to the system and the number of natural options in each role."
    },
    {
      q: "How many senior players does a squad need?",
      a: "There is no universal number. It depends on the number of competitions, registration rules, the age profile and the manager's rotation habits. Two natural options in each outfield role is a useful planning benchmark, but not a rule."
    },
    {
      q: "Can squad depth be summarised in one number?",
      a: "Not reliably. A minutes-weighted quality score can describe the overall drop, but it hides positional gaps. Use it alongside a positional map and a check on stylistic fit."
    }
  ],
  related: ["squad-age-demographics", "travel-fatigue-football", "manager-impact-football"]
};
