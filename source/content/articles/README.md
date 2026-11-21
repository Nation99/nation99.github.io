# Article authoring contract

Every article is a JavaScript module in this folder. The build imports every `.mjs` file except `plan.mjs` and `_template.mjs`.

## File shape

```js
export default {
  slug: "what-is-xg-football",
  title: "What Is xG in Football? Expected Goals Explained",
  metaTitle: "What Is xG in Football? Expected Goals Explained",
  description: "A clear, practical explanation of expected goals, how xG is calculated, and how to use it without overclaiming.",
  category: "xG and Stats",
  tags: ["xG", "chance quality", "analytics"],
  published: "2026-02-04",
  updated: "2026-11-12",
  author: "Nyasha",
  dek: "One or two sentences that explain the promise of the article.",
  takeaways: [
    "Three to five short, specific takeaways.",
    "Each takeaway should stand alone.",
    "No hype and no promises about outcomes."
  ],
  intro: `<p>One or two opening paragraphs. No heading here.</p>`,
  sections: [
    {
      id: "unique-section-id",
      heading: "A unique H2 heading",
      html: `<p>Body copy with <strong>emphasis</strong>, lists, tables, and links such as <a href="/articles/what-is-xga.html">our guide to xGA</a>.</p>`
    }
  ],
  faq: [
    { q: "Question one?", a: "Answer one, two or three sentences." },
    { q: "Question two?", a: "Answer two." },
    { q: "Question three?", a: "Answer three." }
  ],
  related: ["what-is-xga", "expected-threats-xt", "goal-difference-vs-xg-difference"]
};
```

## Hard rules

1. Every article must contain one section with `id: "worked-example"` and `heading: "A worked example"`.
2. Every article must contain one section with `id: "common-mistakes"` and `heading: "Common mistakes"`.
3. The rendered article supplies the only H1. Never put an `<h1>` inside `intro` or `html`.
4. Do not repeat an H2 heading inside the same article. Keep section ids unique and kebab-case.
5. Body length must be 1,200 to 1,800 words. Run `node scripts/wordcount.mjs content/articles/<slug>.mjs` and fix any shortfall.
6. Exactly three FAQ entries per article.
7. Exactly three related slugs, all present in `content/articles/plan.mjs`.
8. Include two or three inline internal links to other published articles. Use root-relative URLs such as `/articles/what-is-xga.html`.
9. Use only original prose. No copied text, no scraped tables, no invented real-world records.
10. Illustrative numbers are allowed when labelled as illustrative. Use hypothetical clubs such as "Club A" and "Club B" when a numeric example is needed.
11. No em dashes or en dashes. Use commas, full stops, colons, or brackets.
12. Banned phrases and claims: high-probability selections, institutional-grade, AI-powered, safe prediction, safest bet, value bet, guaranteed, sure win, risk-free, beat the bookmaker, easy money, profit, ROI, winning system, lock, banker.
13. Do not tell readers to place a bet. Do not link to a bookmaker, affiliate, tipster, or betting offer. The site is football analytics education.
14. Use "match outcome estimate", "lower-variance market", "model confidence", and "analytical insight" where those ideas are needed.
15. British English spelling: analyse, organisation, behaviour, defence, licence (noun), practise (verb). Keep it consistent.
16. Meta title must be 60 characters or fewer. Meta description must be 155 characters or fewer.
17. Dates use ISO format `YYYY-MM-DD`. Published must be earlier than or equal to updated.
18. Author is always `"Nyasha"`.
19. Category must be one of: `xG and Stats`, `Tactics`, `Betting Education`, `Leagues`, `Beginner Guides`.
20. Do not use `—` or `–` anywhere, including inside HTML entities. Use `&ndash;` only if a range truly needs a dash, but prefer "to".

## Section recipe

A strong article usually has eight to eleven sections:

1. What the idea is.
2. Why it matters.
3. How it is calculated or observed.
4. A worked example with a table or clear arithmetic.
5. How to apply it in analysis.
6. Common mistakes.
7. Limits and what it cannot tell you.
8. FAQ (rendered separately from `faq`).
9. Related reading (rendered automatically).

The worked example and common mistakes sections are mandatory. A short "Limits" section is strongly recommended so the article stays honest.
