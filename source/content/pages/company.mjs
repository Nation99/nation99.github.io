import { site } from "../../site.config.mjs";
import {
  esc,
  absoluteUrl,
  breadcrumbNode,
} from "../../lib/layout.mjs";
import { prosePage } from "./shared.mjs";

export function renderAboutPage() {
  const title = "About Elite Football Predictor";
  const description =
    "Who writes Elite Football Predictor, how the model works, what we publish, and the editorial standards behind every guide.";
  const body = `
  <p class="lead">Elite Football Predictor is an independent football analytics and education site. It exists to explain how match data is collected, modelled, and misread, and to show a transparent alternative to tipster culture.</p>

  <h2>Why this site exists</h2>
  <p>Football analysis is full of confident claims. A team is "due" a win. A price is "too good to miss". A model is described as intelligent and therefore assumed to be objective. Most of that language hides the same problem: uncertainty is being sold as certainty.</p>
  <p>This site takes the opposite approach. We publish explanations, not tips. We show the arithmetic behind a claim. We label illustrative numbers. We explain what a model cannot see, and we do not pretend that a probability distribution is a promise.</p>
  <p>The project began in 2026 as a rewrite of a single-page football predictor. The original page mixed valid questions about chance quality with invalid HTML, AMP components on a non-AMP page, and language that promised more than any model can deliver. The rebuild separates the tool from the education, removes bookmaker promotion, and treats readers as adults who can handle nuance.</p>

  <h2>Who writes the site</h2>
  <p><strong>${esc(site.author)}</strong> is the founder and editor. He writes about football data, tactical structure, and the psychology of prediction. His interest is in the gap between what a number measures and what people assume it measures: why xG is not a scoreline forecast, why possession is not control, and why a well-calibrated model can still lose a single match.</p>
  <p>He does not claim a professional scouting licence, a bookmaker partnership, or a verified betting record. The site does not sell tips, subscriptions, or affiliate offers. The goal is to make analytical ideas legible, not to build a personality cult around a forecast.</p>

  <h2>What we publish</h2>
  <ul>
    <li><strong>Explainers</strong> on xG, xGA, expected threats, PPDA, post-shot xG, and other commonly misused metrics.</li>
    <li><strong>Tactical notes</strong> on formations, pressing, set pieces, goalkeeping, and matchup structure.</li>
    <li><strong>League guides</strong> that describe styles, data quality, and competition context rather than pretending to know current form from memory.</li>
    <li><strong>Betting education</strong> about probability, market prices, bias, and risk. We do not publish selections, staking plans, or profit claims.</li>
    <li><strong>Beginner guides</strong> that define terms and walk through a worked example without assuming a statistics background.</li>
  </ul>

  <h2>How we work</h2>
  <p>Every article follows a repeatable structure. We define the idea, explain the mechanism, show a worked example with clearly labelled illustrative numbers, list common mistakes, and state the limits. The model page follows the same principle: the inputs, the arithmetic, the scoreline grid, and the assumptions are all visible.</p>
  <p>We prefer primary concepts over recycled conclusions. If an article discusses a metric, it explains what the metric counts, what it ignores, and what kind of error it invites. If an article uses a numeric example, the arithmetic is shown so a reader can check it.</p>
  <p>We use software for calculations, editing, and site construction. We do not present automated text as a substitute for judgement. Published analysis is reviewed for clarity, consistency, and policy safety before it goes live.</p>

  <h2>Editorial standards</h2>
  <p>Our full standards are on the <a href="/editorial-policy.html">editorial policy page</a>. In short: original writing, no scraped articles, no invented records, no hidden affiliate relationships, no gambling promotion, and no claims that a model can guarantee an outcome.</p>
  <p>We correct errors when we find them. If a correction changes the meaning of an article, we note it on the page rather than quietly editing the past. The "last updated" date on each article is there to make the revision history visible.</p>

  <h2>What we do not do</h2>
  <ul>
    <li>We do not accept bets, hold funds, or process payments.</li>
    <li>We do not link to bookmakers, affiliate offers, or tipster services.</li>
    <li>We do not publish certainties, near-certainties, or claims of a repeatable winning method.</li>
    <li>We do not scrape live statistics and present them as our own dataset.</li>
    <li>We do not offer personal financial, legal, or medical advice.</li>
  </ul>

  <h2>Contact and corrections</h2>
  <p>For a correction, a source suggestion, a privacy request, or a general question, use the <a href="/contact.html">contact page</a> or email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. We cannot answer requests for betting tips.</p>
  <p>If you are looking for support with gambling harm, start with the <a href="/responsible-gambling.html">responsible gambling page</a>. It lists independent organisations that can help.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "About" }], "/about.html"),
    {
      "@type": "AboutPage",
      name: title,
      url: absoluteUrl("/about.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: {
        "@type": "Person",
        name: site.author,
        jobTitle: "Founder and editor",
        url: absoluteUrl("/about.html"),
        description:
          "Football analytics writer and editor covering chance quality, tactical structure, and the limits of prediction.",
      },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/about.html",
    eyebrow: "About",
    intro: "An independent project about football data, clear reasoning, and the limits of prediction.",
    body,
    schema,
  });
}

export function renderContactPage() {
  const title = "Contact Elite Football Predictor";
  const description =
    "Contact the editor about corrections, sources, privacy requests, or editorial questions. No betting tips or promotion requests.";
  const body = `
  <p class="lead">Email is the best way to reach us. We read corrections, source suggestions, privacy requests, and editorial questions. We do not answer requests for tips or promote bookmakers.</p>

  <div class="contact-grid">
    <div>
      <h2>Send a message</h2>
      <form class="contact-form" data-contact-form data-email="${esc(site.email)}" novalidate>
        <div class="field-grid">
          <div class="field">
            <label for="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" autocomplete="name" required maxlength="80">
          </div>
          <div class="field">
            <label for="contact-email">Your email</label>
            <input id="contact-email" name="email" type="email" autocomplete="email" required maxlength="120">
          </div>
          <div class="field full">
            <label for="contact-subject">Subject</label>
            <select id="contact-subject" name="subject">
              <option value="General question">General question</option>
              <option value="Correction or source">Correction or source</option>
              <option value="Privacy request">Privacy request</option>
              <option value="Editorial feedback">Editorial feedback</option>
              <option value="Advertising question">Advertising question</option>
            </select>
          </div>
          <div class="field full">
            <label for="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="7" required maxlength="2000"></textarea>
            <span class="hint">Please do not include sensitive personal information.</span>
          </div>
          <div class="field full checkbox-row">
            <input id="contact-consent" name="consent" type="checkbox" required>
            <label for="contact-consent">I understand that this form opens an email draft and that the site does not store the message.</label>
          </div>
          <div class="hp" aria-hidden="true">
            <label for="contact-website">Website</label>
            <input id="contact-website" name="website" type="text" tabindex="-1" autocomplete="off">
          </div>
        </div>
        <div class="tool-actions">
          <button class="btn btn-primary" type="submit">Open email draft</button>
          <a class="btn btn-ghost" href="mailto:${esc(site.email)}">Email directly</a>
        </div>
        <p class="footer-note">This form uses a mailto link. Nothing is sent until you confirm in your email app. Read the <a href="/privacy.html">privacy policy</a> for how contact messages are handled.</p>
        <p class="form-status" data-form-status role="status" aria-live="polite"></p>
      </form>
    </div>
    <aside class="card">
      <h2>Direct email</h2>
      <p><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></p>
      <h3>What we can help with</h3>
      <ul class="small muted">
        <li>Corrections and factual challenges</li>
        <li>Source suggestions and data questions</li>
        <li>Privacy and data requests</li>
        <li>Editorial or advertising questions</li>
      </ul>
      <h3>What we cannot help with</h3>
      <ul class="small muted">
        <li>Betting tips or match selections</li>
        <li>Personal financial advice</li>
        <li>Bookmaker disputes or account issues</li>
        <li>Requests to publish promotional content</li>
      </ul>
      <p class="small muted">We usually reply within five working days. There is no public phone number.</p>
    </aside>
  </div>

  <h2>Support with gambling harm</h2>
  <p>This site is not a counselling service. If gambling is affecting your life, contact <a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">BeGambleAware</a>, <a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">GambleAware</a>, or <a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener noreferrer">Gamblers Anonymous</a>. The <a href="/responsible-gambling.html">responsible gambling page</a> lists more options.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Contact" }], "/contact.html"),
    {
      "@type": "ContactPage",
      name: title,
      url: absoluteUrl("/contact.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      mainEntity: { "@id": `${site.url}/#organization` },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/contact.html",
    eyebrow: "Contact",
    intro: "Corrections, sources, privacy requests, and editorial questions. No tips and no promotion.",
    body,
    schema,
  });
}

export function renderEditorialPolicyPage() {
  const title = "Editorial Policy and Standards";
  const description =
    "How Elite Football Predictor researches, writes, reviews, corrects, and labels its football analytics content.";
  const body = `
  <p class="lead">This page explains how we decide what to publish, how we use data, how the model is presented, and how readers can hold us to a consistent standard.</p>

  <h2>Our purpose</h2>
  <p>We publish football analytics education. The site is not a tipping service, a gambling operator, or a news wire. Our job is to explain ideas clearly enough that a reader can evaluate them, including the parts that are uncertain or contested.</p>

  <h2>Authorship and review</h2>
  <p>Articles are written and edited by <strong>${esc(site.author)}</strong>, the founder and editor. Each article carries a byline, a publish date, a last updated date, and an estimated reading time. We do not use fake author names or invented credentials.</p>
  <p>We use software for calculations, drafting, editing, and site construction. Published analysis is reviewed by a human before it goes live. Automated output is never presented as a substitute for judgement, and the model is described as a statistical tool rather than an intelligence or an authority.</p>

  <h2>How we use data</h2>
  <p>We prefer conceptual explanations and transparent arithmetic over a blizzard of numbers. When we use a numeric example, it is either a simple calculation that a reader can reproduce or a clearly labelled illustrative scenario using hypothetical clubs such as Club A and Club B.</p>
  <p>We do not scrape articles or statistics and republish them as original work. We do not invent win rates, returns, track records, or "proof" screenshots. If a claim depends on a live dataset, we say so and point readers toward the kind of source they should check rather than pretending that our page is the source of truth.</p>

  <h2>How we make predictions</h2>
  <p>We do not publish match selections. The predictor is an educational model that produces estimates. Its method is visible on the <a href="/predictor.html">predictor page</a>:</p>
  <ol>
    <li>Combine each side's attacking and defensive averages into an expected-goals pair.</li>
    <li>Apply small, explicit adjustments for venue, form, availability, and rest.</li>
    <li>Use two Poisson distributions to generate a scoreline grid.</li>
    <li>Sum the grid into home, draw, away, over/under, and both-teams-to-score estimates.</li>
    <li>Label the output as an estimate and list the assumptions it cannot test.</li>
  </ol>
  <p>We do not claim that this method is novel, complete, or superior to professional models. It is a teaching model. Its value is that a reader can see every step and argue with it.</p>

  <h2>Original content and sourcing</h2>
  <p>Every article is written for this site. We do not copy text from other publications. When an idea has a well-known origin, such as the Poisson model or expected goals, we explain the concept in our own words and focus on application and limitations rather than reproducing a paper.</p>
  <p>We encourage readers to check primary sources, including match data providers, competition rules, and published research. We do not claim to have access to proprietary datasets unless we explicitly say so.</p>

  <h2>Corrections and updates</h2>
  <p>If you find a factual error, a broken link, a misleading example, or a policy problem, please <a href="/contact.html">contact us</a>. We review corrections and update the article when a change is warranted. When an update changes the substance of a piece, we change the "last updated" date and, where useful, add a short note explaining what changed.</p>
  <p>We do not silently rewrite an article to win an argument. The goal is accuracy, not the appearance of consistency.</p>

  <h2>Advertising and independence</h2>
  <p>The site may display advertising to fund hosting and editing. Advertisements are labelled "Advertisement" and kept separate from editorial content. Advertisers do not review articles, choose topics, or receive approval over what we write. We do not accept paid links, sponsored articles disguised as editorial, or affiliate arrangements with bookmakers.</p>
  <p>If advertising is present, it does not change our analysis. If an advertisement is misleading or incompatible with our standards, we can remove the placement or the partner.</p>

  <h2>Responsible language</h2>
  <p>We avoid language that promises outcomes. We do not use terms that suggest certainty, a promised result, or easy returns. We describe outputs as estimates, probabilities, or analytical insights. We remind readers that football is uncertain and that a model can be wrong even when its reasoning is sound.</p>
  <p>We do not publish staking plans, chase losses, or imply that a statistical edge removes the risk of financial loss. Our betting education content explains concepts such as implied probability, overround, and variance; it does not tell readers what to do.</p>

  <h2>What we will not publish</h2>
  <ul>
    <li>Bookmaker promotions, affiliate offers, or bonus code pages.</li>
    <li>Match-fixing claims or unverified allegations against named individuals.</li>
    <li>Medical, legal, or financial advice.</li>
    <li>Content that targets children or encourages underage gambling.</li>
    <li>Scraped articles, fabricated quotes, or invented statistics.</li>
    <li>Personal data about private individuals without a lawful basis.</li>
  </ul>

  <h2>Contact</h2>
  <p>Editorial questions and corrections: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. You can also use the <a href="/contact.html">contact form</a>. For privacy requests, please include "Privacy request" in the subject line.</p>`;

  const schema = [
    breadcrumbNode(
      [{ name: "Home", path: "/" }, { name: "Editorial policy" }],
      "/editorial-policy.html",
    ),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/editorial-policy.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": `${site.url}/#organization` },
      publishingPrinciples: absoluteUrl("/editorial-policy.html"),
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/editorial-policy.html",
    eyebrow: "Standards",
    intro: "How the site is written, reviewed, corrected, and kept independent.",
    body,
    updated: "2026-11-18",
    schema,
  });
}
