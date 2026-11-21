# Elite Football Predictor

A dependency-free static site for football analytics education and a transparent Poisson match outcome model.

The live site is <https://nation99.github.io/>, published from the `Nation99/nation99.github.io` repository. GitHub Pages serves the built files from the root of the `main` branch.

The site is built for static hosting. There is no database, no server-side form handler, and no build dependency beyond Node.js 20 or newer. Internal links are relative, so the same `dist/` output works at a domain root or under a GitHub Pages repository path.

## Quick start

```powershell
cd elite-football-predictor
npm run build
npm run serve
```

Open http://localhost:4173.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run build` | Validate articles and generate the complete `dist/` site. |
| `npm run serve` | Serve `dist/` locally on port 4173. |
| `npm run assets` | Regenerate the favicon, app icons, logo, and Open Graph image. Requires Windows PowerShell with System.Drawing. |
| `npm run status` | Check that all planned article modules exist and pass the article contract. |
| `npm run queue` | Show due and queued articles for the current CAT date. |
| `npm run slots -- 6` | Print the next publication slots, two per day at 08:00 CAT. |
| `npm run wordcount -- content/articles/slug.mjs` | Count words in one article and check its required sections. |

## Publishing cadence

The standing schedule is two new articles every day at 08:00 CAT (06:00 UTC), starting 22 November 2026. The generator source is deployed under `source/`, and `.github/workflows/daily-publish.yml` rebuilds the site every day at 06:00 UTC, publishing only articles whose date has arrived. See `PUBLISHING.md` for the process, queue rules, article requirements, and current status. Run `npm run slots -- 6` to print the next open dates.

## Before deployment

Edit `site.config.mjs` and replace every placeholder:

1. `url`: the live HTTPS origin, with no trailing slash. You can set this through the `SITE_URL` environment variable instead. For a GitHub Pages project site, include the repository path, for example `https://username.github.io/repo-name`.
2. `email`: the monitored editorial contact address.
3. `adsenseClient`: the approved AdSense client ID, for example `ca-pub-1234567890123456`.
4. `adsensePublisher`: the publisher ID used by `ads.txt`.
5. `adsenseSlots`: the approved slot IDs for hero, inline, sidebar, and end placements.
6. `social`: optional profile URLs. Empty values are omitted from structured data.

Then rebuild:

```powershell
npm run build
```

The build writes `ads.txt`, `robots.txt`, `sitemap.xml`, and `site.webmanifest` into `dist/`.

## GitHub Pages deployment

The current live deployment publishes the contents of `dist/` from the root of `main` in `Nation99/nation99.github.io`. The Actions workflow described below is optional and can replace that setup later.

The generated site uses relative links for internal pages, assets, and the web manifest. It can therefore be served from the domain root or from a repository subpath such as `https://username.github.io/repo-name/` without rewriting the HTML.

Canonical URLs, structured data, and sitemap URLs still need the correct public address. Set `SITE_URL` before building:

```powershell
$env:SITE_URL = "https://username.github.io/repo-name"
npm run build
```

`SITE_URL` must not have a trailing slash. If you prefer to keep `SITE_URL` as the origin, set `BASE_PATH` separately:

```powershell
$env:SITE_URL = "https://username.github.io"
$env:BASE_PATH = "/repo-name"
npm run build
```

Do not set both to the same path. If `SITE_URL` already ends with `BASE_PATH`, the build does not append it twice.

### Automatic deployment with GitHub Actions

The repository includes `.github/workflows/deploy-pages.yml`. It builds the site and deploys `dist/` with the official GitHub Pages actions.

1. Push the project to a GitHub repository. The workflow expects the default branch to be `main`.
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Run the workflow from the Actions tab, or push a commit to `main`.
5. The site will be published at `https://username.github.io/repo-name/` for a project site, or `https://username.github.io/` for a user site repository.

The workflow uses `steps.pages.outputs.base_url` from `actions/configure-pages` as the default `SITE_URL`. To override it, create a repository variable named `SITE_URL` under **Settings > Secrets and variables > Actions > Variables**. This is the recommended approach for a custom domain. You can also create a `BASE_PATH` variable if you keep `SITE_URL` as an origin and want to append the repository path separately.

A user site repository must be named `username.github.io`. The workflow handles that case because `configure-pages` returns the correct base URL.

### Manual deployment

You can also deploy without Actions:

1. Run `npm run build`.
2. Upload the contents of `dist/` to the root of a publishing branch, or to a `/docs` folder.
3. In **Settings > Pages**, set the source to that branch and folder.
4. Confirm that `.nojekyll` was uploaded. The build creates it automatically so that GitHub Pages serves the generated files without Jekyll processing.
5. Confirm that `404.html` is present. GitHub Pages uses it for unknown paths.
6. For a project site, set `SITE_URL` to the full repository URL before building. The 404 page uses the path from `SITE_URL` as its base so that its styles and links work at any missing path.

The `dist/` folder is complete on its own. Do not upload the source folders unless you also want to keep the generator in the repository.

### Custom domain

1. Add the domain in **Settings > Pages > Custom domain**.
2. Create the required DNS records with your domain provider.
3. Set the `SITE_URL` repository variable to the custom domain, for example `https://www.example.com`.
4. Rebuild and redeploy so that canonical URLs, structured data, and the sitemap use the new address.
5. Enable **Enforce HTTPS** after GitHub has issued the certificate.

For an Actions deployment, the custom domain setting in the repository is enough. A `CNAME` file is not required for the Actions workflow, though it may be useful if you later switch to branch deployment.

### The `ads.txt` limitation

AdSense expects `ads.txt` at the domain root, for example `https://example.com/ads.txt`. A project site published at `https://username.github.io/repo-name/` serves the file at `/repo-name/ads.txt`, which is not the domain root.

Use one of these options if AdSense requires root-level `ads.txt`:

- Publish the site from a user site repository named `username.github.io`, so the site is served at the domain root.
- Use a custom domain, where the site becomes the root of that domain.
- Keep the main site on a custom domain and treat the GitHub Pages project site as a preview.

The build still writes `ads.txt` into `dist/` so that a root deployment or custom domain is ready without further changes.

On the current `nation99.github.io` repository, the production `ads.txt` already contains live publisher entries. When uploading `dist/` manually, keep that repository copy instead of overwriting it with the placeholder generated from `site.config.mjs`. Replace `adsensePublisher` with the real publisher ID before allowing the build output to replace it.

## What the build validates

The build fails on:

- Missing or extra article modules relative to `content/articles/plan.mjs`.
- Article word counts outside 1,200 to 1,800 words.
- Missing worked example or common mistakes sections.
- Duplicate section IDs, duplicate headings, or duplicate page IDs.
- More than one `html`, `head`, `body`, or `h1` element per page.
- Titles over 60 characters or descriptions over 155 characters.
- Invalid JSON-LD.
- Broken internal links, including relative links resolved against each page route.
- Links that would escape `dist/`.
- Em dashes and en dashes.
- Banned promotional language, including certainty claims and tipster language.
- Missing skip links, primary navigation labels, and advertisement labels.
- Missing required image assets.

The build also reports article pages with more than three inline internal article links.

## Structure

```text
elite-football-predictor/
  build.mjs                     Static generator and validation
  site.config.mjs               Site identity, analytics, AdSense, contact
  package.json                  Build, serve, asset, status, word count scripts
  .github/workflows/
    deploy-pages.yml            GitHub Pages build and deployment workflow
  assets/
    css/styles.css              Design system, responsive layout, dark mode
    js/main.js                  Theme, navigation, filters, consent, AdSense loader
    js/predictor.js             Poisson model and result rendering
    favicon.svg                 Browser icon
    icon-192.png                Manifest icon
    icon-512.png                Manifest icon
    apple-touch-icon.png        Apple touch icon
    logo.png                    Square brand mark
    og-default.png              1200x630 social card
  content/
    articles/                   53 article modules plus plan.mjs and README.md
    pages/                      Home, predictor, articles hub, company, legal, glossary, 404
  lib/layout.mjs                Head, schema, header, footer, article, page templates
  scripts/
    make-assets.ps1             Brand asset generator
    serve.mjs                   Dependency-free static server
    status.mjs                  Article inventory and contract checker
    wordcount.mjs               Single-article word count and contract checker
  dist/                         Generated deployment output
```

## Page inventory

- `/` Home
- `/predictor.html` Match outcome model and method explainer
- `/articles/` Article library with category filters and search
- `/articles/<slug>.html` 53 individual articles
- `/about.html`
- `/contact.html`
- `/editorial-policy.html`
- `/privacy.html`
- `/terms.html`
- `/disclaimer.html`
- `/responsible-gambling.html`
- `/glossary.html`
- `/404.html`

## Article inventory

The editorial plan contains 53 articles across five categories:

- xG and Stats: 10
- Tactics: 16
- Betting Education: 12
- Leagues: 8
- Beginner Guides: 7

Every article includes:

- One H1 and a unique meta title.
- A byline, publish date, last updated date, and reading time.
- Key takeaways.
- A worked numerical example.
- A common mistakes section.
- A three-question FAQ.
- Two or three inline links to other articles.
- Related reading.
- A model limitations or editorial caveat section.
- Illustrative examples labelled as illustrative.

## Predictor model

`assets/js/predictor.js` implements:

- Expected goals from recent attacking and defensive averages.
- Venue, form, absence, rest, and sample-size adjustments.
- A Poisson scoreline grid from 0-0 to 4-4 for display, with a larger internal grid for totals.
- Home, draw, and away probabilities.
- Over 2.5 and under 2.5 goals.
- Both teams to score.
- Model confidence as a description of distribution shape, not a win probability.
- A lower-variance market comparison.
- Copy and share actions for the current result.

The model is educational. It does not use live data, does not know lineups or injuries beyond the inputs, and does not produce advice.

## Consent, analytics, and advertising

- Google Analytics uses `G-DHC4SNTD6B`.
- Google Consent Mode v2 defaults are denied for advertising and analytics storage.
- Accept and reject choices are stored in `localStorage` under `efp-consent-v1`.
- The footer includes a "Manage cookie settings" control.
- AdSense loads only after consent and only when the configured client ID is not a placeholder.
- Advertisement blocks are labelled "Advertisement" and reserve space with `min-height`.
- AdSense is never placed in pop-ups, interstitials, or sticky overlays.
- The approved AdSense script is inserted automatically after the publisher ID is replaced and the site is rebuilt.

## AdSense pre-submission checklist

Use this before requesting review.

### Content and policy

- [ ] Confirm every article is original and written for this site.
- [ ] Confirm no article copies scraped statistics, tables, or text.
- [ ] Confirm no page offers tips, selections, staking plans, or claims of reliable income.
- [ ] Confirm no page links to bookmakers, affiliate offers, or bonus codes.
- [ ] Confirm no page promises a result, a win rate, a return, or a track record.
- [ ] Confirm all examples are labelled illustrative.
- [ ] Confirm the 18+ and responsible gambling notices are visible.
- [ ] Confirm support links work: BeGambleAware, GambleAware, and Gamblers Anonymous.
- [ ] Confirm the site does not present estimates as financial, legal, or medical advice.

### Required pages

- [ ] About page explains who runs the site and why.
- [ ] Contact page provides a monitored email address.
- [ ] Editorial policy describes sourcing, corrections, and advertising independence.
- [ ] Privacy policy covers cookies, analytics, advertising, and user choices.
- [ ] Terms page covers acceptable use and liability.
- [ ] Disclaimer covers estimates, uncertainty, and external links.
- [ ] Responsible gambling page lists support options.
- [ ] Glossary supports readers who are new to analytics.

### Technical and ownership

- [ ] Replace the canonical domain and contact email in `site.config.mjs`, or set `SITE_URL` before building.
- [ ] Replace the AdSense client ID and slot IDs.
- [ ] Replace the publisher ID in `ads.txt`.
- [ ] Rebuild and confirm the AdSense script appears in the page head.
- [ ] Confirm `https://your-domain/ads.txt` returns one valid line.
- [ ] Verify the domain in AdSense.
- [ ] Confirm the site loads over HTTPS without mixed content.
- [ ] Confirm `robots.txt` allows crawling and points to the sitemap.
- [ ] Submit `sitemap.xml` in Google Search Console.
- [ ] Confirm the 404 page returns a 404 status on the host.
- [ ] Confirm canonical URLs use the preferred www or non-www host and redirect the other.
- [ ] Test on a phone and a desktop browser.
- [ ] Run Lighthouse and fix any regression below the target scores.
- [ ] Confirm ads are labelled and never disguised as navigation or content.
- [ ] Confirm no more than three ad units can appear in one mobile viewport.
- [ ] Confirm there are no pop-ups, interstitials, or sticky ads.
- [ ] Confirm legal pages do not carry intrusive advertising.
- [ ] Keep a dated record of the review and any changes requested by AdSense.

### Analytics and consent

- [ ] Confirm Google Analytics receives page views.
- [ ] Confirm Consent Mode reports denied before a choice is made.
- [ ] Confirm Accept grants analytics and advertising storage.
- [ ] Confirm Reject keeps non-essential storage denied.
- [ ] Confirm "Manage cookie settings" reopens the banner.
- [ ] Confirm the consent choice survives a reload.
- [ ] Confirm the site works when analytics or AdSense is blocked.

## Manual launch steps

1. Replace all placeholders in `site.config.mjs`.
2. Run `npm run build` and confirm the build finishes without errors.
3. Upload the contents of `dist/` to the static host.
4. Point the domain at the host and enable HTTPS.
5. Choose one canonical host and redirect the other.
6. Confirm `ads.txt`, `robots.txt`, `sitemap.xml`, and `site.webmanifest` are reachable.
7. Submit the sitemap in Google Search Console and Bing Webmaster Tools.
8. Verify the analytics property and consent behaviour in a private browser window.
9. Create the AdSense account, add the site, and verify ownership.
10. Paste the approved publisher and slot IDs into the config, rebuild, and redeploy.
11. Request AdSense review only after the content and policy checks pass.
12. Have the privacy policy, terms, disclaimer, and responsible gambling page reviewed for the jurisdiction you operate from.
13. Decide whether the contact form should stay as a `mailto:` fallback or be replaced with a server-side handler.
14. Add a real author biography and any relevant credentials to the About page if available.
15. Set a review schedule for dated articles and correct anything that becomes stale.

## Known limitations

- The contact form opens the visitor's email client. There is no server-side delivery.
- The model is a teaching tool, not a live forecasting service.
- The legal pages are templates and are not legal advice.
- Brand assets are generated locally and can be replaced with designed versions.
- The site uses system fonts to avoid third-party font requests and layout shift.
- AdSense IDs, the domain, and the contact email are placeholders until replaced.
- A project site under a repository path cannot serve `ads.txt` at the domain root. Use a custom domain or a user site repository if AdSense requires it.
- The GitHub Actions workflow deploys from `main`. Change the branch filter if your repository uses a different default branch.
- No claim is made about future search rankings, traffic, or advertising revenue.
