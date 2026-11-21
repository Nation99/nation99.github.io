# Publishing schedule

## Standing cadence

- Live site: <https://nation99.github.io/>
- Start date: 22 November 2026
- Frequency: 2 new articles every day
- Publish time: 08:00 CAT (Zimbabwe), which is 06:00 UTC
- Article date: use the scheduled CAT date for both `published` and `updated`

## How automatic publishing works

The site is static, so the 08:00 CAT publish runs as a scheduled GitHub Action.

- The generator source lives in `source/` in the live repository.
- `.github/workflows/daily-publish.yml` runs every day at 06:00 UTC.
- `source/build.mjs` validates every article in the queue, then renders only articles whose `published` date is on or before the publish date.
- The publish date is the current date in `Africa/Harare`. Set `PUBLISH_DATE=YYYY-MM-DD` to override it for a test build.
- The workflow copies `source/dist/` to the site root, restores the production `ads.txt`, commits, and pushes. GitHub Pages then serves the update.
- The workflow can also be started manually from the Actions tab. Leave the date input empty for the real CAT date, or enter a date to test the queue filter.

Future articles stay in the repository and in `content/articles/plan.mjs`, but they are excluded from the built HTML, the article hub, the sitemap, and structured data until their date arrives. This means one deploy can publish a batch of queued articles on the correct day without exposing them early.

## Keeping the queue stocked

The scheduler does not write articles. It publishes articles that are already in `source/content/articles/`. Two articles must be added for every scheduled day. If the queue runs dry, the daily workflow simply finds no new articles and the site stays unchanged.

Run:

```powershell
npm run queue
```

This shows how many articles are due and how many are queued, with their dates. The standing instructions in `AGENTS.md` require every session to check the queue before finishing and to write any missing articles.

## Next slots

Run:

```powershell
npm run slots -- 6
```

This prints the next six publication slots, two per day, starting tomorrow in CAT. Use the printed date in the article module.

## Adding an article

1. Pick the next open slot from `npm run slots`.
2. Create `source/content/articles/<slug>.mjs`.
3. Add the same slug and category to `source/content/articles/plan.mjs`.
4. Set `published` and `updated` to the slot date.
5. Run `npm run wordcount -- content/articles/<slug>.mjs`.
6. Run `npm run build` and confirm the article is counted as queued, not due.
7. Run `PUBLISH_DATE=<slot date> npm run build` to confirm it renders and passes validation.
8. Commit the source. The scheduled workflow will publish it on the slot date.

## Article requirements

- 1,200 to 1,800 words
- Exactly 3 FAQ entries
- Exactly 3 related article slugs
- A `worked-example` section
- A `common-mistakes` section
- Two or three inline links to other articles
- No em dashes or en dashes
- No betting tips, bookmaker links, certainty claims, or affiliate content
- 18+ and responsible gambling notices remain in the site layout

## Current status

- Articles live: 54
- Latest live article: 21 November 2026
- Queued articles: 24
- 22 November 2026: `elo-ratings-football`, `build-up-play-analysis`
- 23 November 2026: `shot-maps-football`, `low-block-defending`
- 24 November 2026: `penalties-expected-goals`, `fixture-congestion-rotation`
- 25 November 2026: `crossing-cutbacks-analysis`, `shot-quality-vs-quantity`
- 26 November 2026: `derby-matches-analysis`, `defensive-actions-data`
- 27 November 2026: `set-piece-delivery`, `weekly-analysis-routine`
- 28 November 2026: `high-defensive-line-analysis`, `post-shot-expected-goals`
- 29 November 2026: `counter-attacking-football`, `league-competitive-balance`
- 30 November 2026: `var-impact-analysis`, `field-tilt-analysis`
- 1 December 2026: `two-legged-ties-analysis`, `zonal-vs-man-marking`
- 2 December 2026: `penalty-shootout-analysis`, `scouting-with-data`
- 3 December 2026: `relegation-run-in-analysis`, `goalkeeper-distribution-analysis`
- The queue is empty after 3 December 2026 until the next six modules are added
- The workflow was tested on 21 November 2026 with `publish_date=2026-11-21`; it built 54 due articles, excluded the queued articles, and made no commit
