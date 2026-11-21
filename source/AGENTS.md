# Standing instructions

These instructions apply to every session in this project.

## Publishing cadence

- Live site: <https://nation99.github.io/>
- Publish two new articles every day at 08:00 CAT (06:00 UTC), starting 22 November 2026.
- The automatic publisher is `.github/workflows/daily-publish.yml` in the live repository. It rebuilds from `source/` and publishes only articles whose `published` date is due.
- The workflow cannot write articles. Before finishing a session, run `npm run queue`.
- If fewer than two articles are queued for the next open slots, write the missing articles now and add them to `content/articles/plan.mjs`.
- Queue at least the next two slots, and preferably the next six, so the daily action never runs dry.
- Use `npm run slots -- 6` for the next dates. Use the CAT date for both `published` and `updated`.
- After adding articles, run `npm run wordcount -- content/articles/<slug>.mjs`, `npm run build`, and `PUBLISH_DATE=<date> npm run build` to confirm the article is valid and renders on its date.
- Commit the source to the live repository under `source/`. The daily workflow handles the public HTML.

## Article contract

- 1,200 to 1,800 words
- Exactly 3 FAQ entries
- Exactly 3 related article slugs
- A `worked-example` section
- A `common-mistakes` section
- Two or three inline links to other articles
- Title and meta title at most 60 characters
- Description at most 155 characters
- No em dashes or en dashes
- No betting tips, bookmaker links, affiliate links, certainty claims, or promotional language
- Keep the education positioning, 18+ notices, responsible gambling links, and AdSense-safe tone

## Site rules

- Contact email: `usatonlinetools@gmail.com`
- Never overwrite the production `ads.txt`. The build writes a placeholder, so restore the live file after any manual deployment.
- Preserve `google69636db1fb78b68f.html`.
- Deploy built files from the root of `main` in `Nation99/nation99.github.io`. GitHub Pages uses legacy branch publishing.
- Do not expose future articles before their `published` date. The build filter handles this.
