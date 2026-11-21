# Standing instructions

The generator source and the full publishing rules are in `source/AGENTS.md` and `source/PUBLISHING.md`.

- Publish two new articles every day at 08:00 CAT (06:00 UTC), starting 22 November 2026.
- The scheduled workflow in `.github/workflows/daily-publish.yml` rebuilds from `source/` and publishes only articles whose date is due.
- Before finishing a session, run `npm run queue` inside `source/` and write any missing articles for the next slots.
- Keep the production `ads.txt` intact. The build writes a placeholder, so restore the live file after any manual deployment.
- Keep the site in plain HTML, education-first, AdSense-safe, with 18+ and responsible gambling notices.
