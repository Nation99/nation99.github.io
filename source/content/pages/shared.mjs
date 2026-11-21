import { site } from "../../site.config.mjs";
import {
  renderPage,
  renderBreadcrumbs,
  esc,
  formatDate,
} from "../../lib/layout.mjs";

export function pageHeader({ eyebrow, title, intro, meta = "" }) {
  return `
  <header class="page-header">
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ""}
    <h1>${esc(title)}</h1>
    ${intro ? `<p>${esc(intro)}</p>` : ""}
    ${meta ? `<p class="small muted">${meta}</p>` : ""}
  </header>`;
}

export function prosePage({
  title,
  description,
  canonicalPath,
  eyebrow,
  intro,
  body,
  updated = "",
  schema = [],
  currentPath = canonicalPath,
  noindex = false,
  showProgress = false,
  baseHref = "",
  skipHref = "#main",
}) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title },
  ];

  const html = `
  <main id="main">
    <div class="wrap">
      ${renderBreadcrumbs(crumbs)}
      ${pageHeader({
        eyebrow,
        title,
        intro,
        meta: updated ? `Last updated ${esc(formatDate(updated))}` : "",
      })}
      <div class="prose">${body}</div>
    </div>
  </main>`;

  return renderPage({
    title,
    description,
    canonicalPath,
    body: html,
    currentPath,
    schema,
    noindex,
    showProgress,
    baseHref,
    skipHref,
  });
}

export function responsibleNotice({ compact = false } = {}) {
  return `
  <aside class="callout danger ${compact ? "callout-compact" : ""}" aria-labelledby="responsible-notice-title">
    <h2 id="responsible-notice-title">18+ and responsible use</h2>
    <p>This site is for football analytics education and entertainment. Every output is an estimate, not advice, and no model can remove uncertainty from football. We do not accept bets, process payments, or link to bookmakers.</p>
    <p>If gambling is affecting your money, relationships, work, or health, stop and seek independent support. Help is available at <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware</a>, <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">GambleAware</a>, and <a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener noreferrer">Gamblers Anonymous</a>.</p>
    <p><a href="/responsible-gambling.html">Read our responsible gambling page</a>.</p>
  </aside>`;
}

export function renderPredictor({ idPrefix = "model", compact = false } = {}) {
  const id = (name) => `${idPrefix}-${name}`;
  return `
  <div class="predictor-app" data-predictor-app>
    <div class="tool-grid">
      <div class="card card-lg">
        <div class="tool-head">
          <p class="eyebrow">Transparent model</p>
          <h2 id="${id("title")}">${compact ? "Try a match estimate" : "Build a match estimate"}</h2>
          <p class="muted">Enter recent per-match averages. The model turns them into expected goals, then a Poisson scoreline distribution. It does not know team identities, lineups, injuries, or live prices.</p>
        </div>
        <form class="predictor-form" data-predictor-form novalidate>
          <div class="field-grid">
            <div class="field">
              <label for="${id("home-team")}">Home team</label>
              <input id="${id("home-team")}" name="homeTeam" type="text" value="Club A" maxlength="40" autocomplete="off">
            </div>
            <div class="field">
              <label for="${id("away-team")}">Away team</label>
              <input id="${id("away-team")}" name="awayTeam" type="text" value="Club B" maxlength="40" autocomplete="off">
            </div>
            <div class="field">
              <label for="${id("home-xg")}">Home xG created per match</label>
              <input id="${id("home-xg")}" name="homeXgFor" type="number" min="0" max="5" step="0.1" value="1.7" inputmode="decimal">
              <span class="hint">Average expected goals created.</span>
            </div>
            <div class="field">
              <label for="${id("away-xg")}">Away xG created per match</label>
              <input id="${id("away-xg")}" name="awayXgFor" type="number" min="0" max="5" step="0.1" value="1.2" inputmode="decimal">
              <span class="hint">Average expected goals created.</span>
            </div>
            <div class="field">
              <label for="${id("home-xga")}">Home xGA per match</label>
              <input id="${id("home-xga")}" name="homeXgAgainst" type="number" min="0" max="5" step="0.1" value="1.0" inputmode="decimal">
              <span class="hint">Expected goals conceded.</span>
            </div>
            <div class="field">
              <label for="${id("away-xga")}">Away xGA per match</label>
              <input id="${id("away-xga")}" name="awayXgAgainst" type="number" min="0" max="5" step="0.1" value="1.4" inputmode="decimal">
              <span class="hint">Expected goals conceded.</span>
            </div>
            <div class="field">
              <label for="${id("home-form")}">Home form score <span class="hint">0 is poor, 10 is strong</span></label>
              <div class="range-row">
                <input id="${id("home-form")}" name="homeForm" type="range" min="0" max="10" step="1" value="6" aria-describedby="${id("home-form-hint")}">
                <output class="range-val" for="${id("home-form")}" id="${id("home-form-value")}">6</output>
              </div>
              <span class="hint" id="${id("home-form-hint")}">A subjective recent-performance score, not a league position.</span>
            </div>
            <div class="field">
              <label for="${id("away-form")}">Away form score <span class="hint">0 is poor, 10 is strong</span></label>
              <div class="range-row">
                <input id="${id("away-form")}" name="awayForm" type="range" min="0" max="10" step="1" value="5" aria-describedby="${id("away-form-hint")}">
                <output class="range-val" for="${id("away-form")}" id="${id("away-form-value")}">5</output>
              </div>
              <span class="hint" id="${id("away-form-hint")}">A subjective recent-performance score, not a league position.</span>
            </div>
            <div class="field">
              <label for="${id("home-absences")}">Home key absences</label>
              <input id="${id("home-absences")}" name="homeAbsences" type="number" min="0" max="5" step="1" value="1" inputmode="numeric">
              <span class="hint">Count only players who normally start.</span>
            </div>
            <div class="field">
              <label for="${id("away-absences")}">Away key absences</label>
              <input id="${id("away-absences")}" name="awayAbsences" type="number" min="0" max="5" step="1" value="2" inputmode="numeric">
              <span class="hint">Count only players who normally start.</span>
            </div>
            <div class="field">
              <label for="${id("home-rest")}">Home rest days</label>
              <input id="${id("home-rest")}" name="homeRest" type="number" min="2" max="10" step="1" value="5" inputmode="numeric">
              <span class="hint">Days since the previous match.</span>
            </div>
            <div class="field">
              <label for="${id("away-rest")}">Away rest days</label>
              <input id="${id("away-rest")}" name="awayRest" type="number" min="2" max="10" step="1" value="4" inputmode="numeric">
              <span class="hint">Days since the previous match.</span>
            </div>
            <div class="field">
              <label for="${id("venue")}">Venue context</label>
              <select id="${id("venue")}" name="venue">
                <option value="normal" selected>Normal home advantage</option>
                <option value="neutral">Neutral venue</option>
                <option value="closed">Behind closed doors</option>
              </select>
            </div>
            <div class="field">
              <label for="${id("sample")}">Sample behind the averages</label>
              <select id="${id("sample")}" name="sample">
                <option value="5">5 matches</option>
                <option value="10" selected>10 matches</option>
                <option value="20">20 matches</option>
              </select>
              <span class="hint">A larger sample increases model confidence slightly.</span>
            </div>
          </div>
          <div class="tool-actions">
            <button class="btn btn-primary" type="submit">Run model</button>
            <button class="btn btn-ghost" type="reset">Reset example</button>
          </div>
        </form>
        <p class="footer-note">The model is deliberately simple. It is a teaching tool, not a scouting system, a tipster, or a substitute for watching football.</p>
      </div>

      <div class="card card-lg result-panel" id="${id("results")}" data-predictor-results aria-live="polite" aria-atomic="false">
        <div class="result-head">
          <div>
            <p class="eyebrow">Estimated outcome</p>
            <h2 id="${id("results-title")}" data-output="matchTitle">Club A vs Club B</h2>
            <p class="muted" data-output="summary">Run the model to see the probability distribution.</p>
          </div>
          <span class="badge badge-muted" data-output="confidenceBadge">Waiting</span>
        </div>

        <div class="stat-grid">
          <div class="stat"><span>Estimated outcome</span><strong data-output="outcome">-</strong></div>
          <div class="stat"><span>Model confidence</span><strong data-output="confidence">-</strong></div>
          <div class="stat"><span>Expected goals</span><strong data-output="expectedGoals">-</strong></div>
        </div>

        <div class="prob-list" data-output="probabilities"></div>

        <div class="xg-bars" data-output="xgBars"></div>

        <div class="stat-grid">
          <div class="stat"><span>Over 2.5 goals</span><strong data-output="over25">-</strong></div>
          <div class="stat"><span>Under 2.5 goals</span><strong data-output="under25">-</strong></div>
          <div class="stat"><span>Both teams score</span><strong data-output="btts">-</strong></div>
        </div>

        <div class="lower-variance" data-output="lowerVariance"></div>

        <div class="table-wrap" data-output="scorelineTable"></div>

        <div class="result-actions">
          <button class="btn btn-ghost btn-sm" type="button" data-action="copy-result">Copy result</button>
          <button class="btn btn-ghost btn-sm" type="button" data-action="share-result">Share result</button>
          <span class="copy-status" data-output="copyStatus" role="status" aria-live="polite"></span>
        </div>

        <div class="limits">
          <strong>Model limitations.</strong> The model assumes goals follow independent Poisson distributions. It ignores lineups, injuries, weather, referee, tactical matchups, and game state. It uses the numbers you enter, so bad inputs produce confident nonsense. This is an educational estimate, not advice.
        </div>
        <noscript><p class="small muted">The interactive model needs JavaScript. You can still read the <a href="/predictor.html">full explainer</a>.</p></noscript>
      </div>
    </div>
  </div>`;
}
