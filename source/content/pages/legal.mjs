import { site } from "../../site.config.mjs";
import {
  esc,
  absoluteUrl,
  breadcrumbNode,
} from "../../lib/layout.mjs";
import { prosePage } from "./shared.mjs";

export function renderPrivacyPage() {
  const title = "Privacy Policy";
  const description =
    "How Elite Football Predictor uses cookies, Google Analytics, AdSense, and contact messages, and how you can control your data.";
  const body = `
  <p class="lead">This policy explains what data this site collects, why it is collected, how long it is kept, and what choices you have. It covers cookies, analytics, advertising, contact messages, and your rights under GDPR and California privacy law.</p>

  <h2>Who we are</h2>
  <p>${esc(site.name)} is an independent football analytics and education site. For privacy questions, contact <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. The site does not have a public phone number.</p>
  <p>This policy applies to ${esc(site.url)} and its subpages. It does not apply to third-party sites that we link to, including support organisations and data providers.</p>

  <h2>Data we collect</h2>
  <h3>Information you send us</h3>
  <p>If you use the contact form or email us, we receive the name, email address, subject, and message you choose to send. The contact form opens a draft in your email app. The site itself does not store the form contents. Email messages are stored in the email provider's system so that we can reply and keep a record of editorial or privacy requests.</p>

  <h3>Analytics data</h3>
  <p>If you accept analytics cookies, Google Analytics 4 may collect information such as pages viewed, approximate location derived from IP address, device and browser type, referral source, and interactions with the site. We use this information to understand which guides are useful and to find technical problems. We do not use analytics to identify you by name.</p>

  <h3>Advertising data</h3>
  <p>If advertising is enabled and you accept advertising cookies, Google AdSense and its partners may use cookies and similar technologies to measure ads and, where permitted, personalize them. Advertising data may include an approximate location, device information, and browser signals. We do not receive your name, email address, or payment details from Google.</p>

  <h3>Server and security logs</h3>
  <p>Our hosting provider may process standard server logs, including IP address, request time, requested URL, browser user agent, and error information. These logs are used for security, reliability, and abuse prevention. Retention depends on the hosting provider.</p>

  <h2>Legal bases for processing</h2>
  <p>Where GDPR or UK GDPR applies, we rely on the following legal bases:</p>
  <ul>
    <li><strong>Consent</strong> for analytics cookies, advertising cookies, and any optional measurement.</li>
    <li><strong>Legitimate interests</strong> for site security, basic technical operation, and responding to messages, balanced against your rights.</li>
    <li><strong>Legal obligation</strong> where we must keep a record or respond to a lawful request.</li>
    <li><strong>Contract or pre-contract steps</strong> if you ask us to provide a service that requires it. The site currently has no paid accounts.</li>
  </ul>

  <h2>Cookies and similar technologies</h2>
  <p>Cookies are small files stored by your browser. We also use local storage for your theme and consent choice. The table below describes the categories this site may use. Durations are typical and can change if providers update their products.</p>
  <div class="table-wrap">
    <table>
      <caption class="visually-hidden">Cookie categories, purposes, and typical durations</caption>
      <thead>
        <tr><th scope="col">Name or category</th><th scope="col">Purpose</th><th scope="col">Typical duration</th></tr>
      </thead>
      <tbody>
        <tr><td><code>efp-theme</code></td><td>Stores your light or dark theme preference in local storage.</td><td>Until you clear site data.</td></tr>
        <tr><td><code>efp-consent-v1</code></td><td>Stores your cookie choice so the banner does not reappear on every visit.</td><td>Until you clear site data.</td></tr>
        <tr><td><code>_ga</code>, <code>_ga_${esc(site.gaId)}</code></td><td>Google Analytics 4 measurement of page views and site usage.</td><td>Up to about 2 years.</td></tr>
        <tr><td><code>_gid</code></td><td>Google Analytics session distinction.</td><td>About 24 hours.</td></tr>
        <tr><td><code>__gads</code>, <code>__gpi</code></td><td>Google advertising measurement and frequency controls.</td><td>Up to about 13 months.</td></tr>
        <tr><td><code>IDE</code>, <code>test_cookie</code></td><td>DoubleClick and Google advertising delivery, measurement, and personalization where permitted.</td><td>Up to about 13 months.</td></tr>
      </tbody>
    </table>
  </div>
  <p class="small muted">Essential storage is used to remember your theme and consent choice and to keep the site secure. Optional analytics and advertising storage stays off until you accept. You can change your choice at any time.</p>
  <p><button class="btn btn-ghost btn-sm" type="button" data-open-consent>Manage cookie settings</button></p>

  <h2>Google Analytics</h2>
  <p>We use Google Analytics 4 with the measurement ID <code>${esc(site.gaId)}</code>. IP anonymization is enabled. Google may process analytics data on servers outside your country. We do not combine analytics data with information that identifies you personally.</p>
  <p>You can opt out of Google Analytics across websites by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>. You can also block analytics cookies in your browser or reject them in our banner.</p>

  <h2>Google AdSense and DoubleClick</h2>
  <p>The site may use Google AdSense to display advertising. Google and its partners may use cookies, including the DoubleClick cookie, to serve ads based on your visits to this and other websites, to limit how often you see an ad, and to measure ad performance. Where required, personalized advertising is used only after you consent.</p>
  <p>You can learn more in <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Google's advertising policies</a> and <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's privacy policy</a>. You can manage personalized advertising in <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>

  <h3>Consent Mode v2</h3>
  <p>The site sets Google Consent Mode v2 defaults to denied for advertising and analytics storage. If you accept, the site sends a consent update that grants the relevant categories. If you reject, optional storage remains denied and advertising data is redacted where supported. Consent Mode helps Google tags respect your choice, but it does not replace the banner or this policy.</p>

  <h2>Third-party vendors and opt-outs</h2>
  <p>Third-party vendors, including Google, may place and read cookies on your browser or use web beacons as a result of ad serving. You can opt out of personalized advertising from many providers through these industry tools:</p>
  <ul>
    <li><a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">Digital Advertising Alliance opt-out</a></li>
    <li><a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out</a></li>
    <li><a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer">Your Online Choices (Europe)</a></li>
    <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a></li>
  </ul>
  <p>Opting out of personalized advertising does not mean you will see no ads. It means ads may be less relevant to your interests.</p>

  <h2>How we use data</h2>
  <ul>
    <li>To operate the site and remember your theme and consent choices.</li>
    <li>To understand which articles are useful and improve navigation and content.</li>
    <li>To measure advertising and fund hosting and editing, where ads are enabled.</li>
    <li>To respond to messages, corrections, and privacy requests.</li>
    <li>To detect abuse, maintain security, and comply with legal obligations.</li>
  </ul>

  <h2>Sharing and international transfers</h2>
  <p>We do not sell your name, email address, or contact message for money. We share data with service providers that help run the site, including hosting, email, analytics, and advertising providers. These providers process data under their own terms and, where required, appropriate safeguards for international transfers.</p>
  <p>Google may process data in the United States and other countries. Where required, Google relies on legal transfer mechanisms such as standard contractual clauses. You can read more in Google's privacy policy.</p>

  <h2>Retention</h2>
  <p>Contact emails are kept for as long as needed to handle the request and maintain a record of corrections or privacy decisions. Analytics data is retained according to the Google Analytics settings for the property. Advertising data is retained according to Google's policies. Server logs are retained according to the hosting provider's policy. Consent choices remain in your browser until you clear site data or change your choice.</p>

  <h2>Your rights under GDPR and UK GDPR</h2>
  <p>If you are in the European Economic Area, the United Kingdom, or another jurisdiction with similar law, you may have the right to:</p>
  <ul>
    <li>Access the personal data we hold about you.</li>
    <li>Request correction of inaccurate data.</li>
    <li>Request deletion of data in certain circumstances.</li>
    <li>Request restriction of processing.</li>
    <li>Object to processing based on legitimate interests.</li>
    <li>Request portability of data you provided.</li>
    <li>Withdraw consent at any time, without affecting processing that already happened.</li>
    <li>Lodge a complaint with your local supervisory authority.</li>
  </ul>
  <p>To make a request, email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a> with "Privacy request" in the subject line. We may need to verify your identity before acting. We aim to respond within one month, though complex requests may take longer.</p>

  <h2>California privacy rights</h2>
  <p>If you are a California resident, the CCPA and CPRA may give you the right to know what personal information is collected, to request deletion, to request correction, to opt out of the sale or sharing of personal information, and to limit the use of sensitive personal information. We do not sell personal information for money.</p>
  <p>Some advertising cookies may count as "sharing" for cross-context behavioral advertising under California law. You can opt out through the cookie banner, Google Ads Settings, or the industry opt-out links above. To exercise other rights, email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. We will not discriminate against you for exercising a privacy right.</p>

  <h2>Children and age limits</h2>
  <p>The site is intended for adults aged 18 or over. It is not directed at children, and we do not knowingly collect personal data from children. If you believe a child has sent us personal data, contact us and we will delete it.</p>

  <h2>Security</h2>
  <p>We use HTTPS and reputable service providers, and we keep the site's software updated. No method of transmission or storage is completely secure. Please do not send sensitive personal information, passwords, or financial details through the contact form or email.</p>

  <h2>Changes to this policy</h2>
  <p>We may update this policy when the site, the law, or our providers change. The "last updated" date at the top of the page shows the latest revision. Material changes will be highlighted on the site where practical.</p>

  <h2>Contact</h2>
  <p>Privacy questions and requests: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>. You can also use the <a href="/contact.html">contact page</a>. For general editorial questions, please use the same address and include the relevant article URL.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Privacy policy" }], "/privacy.html"),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/privacy.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/privacy.html",
    eyebrow: "Legal",
    intro: "What we collect, why we collect it, and how to control cookies and personal data.",
    body,
    updated: "2026-11-18",
    schema,
  });
}

export function renderTermsPage() {
  const title = "Terms of Use";
  const description =
    "The terms that govern use of Elite Football Predictor, including educational purpose, acceptable use, and liability limits.";
  const body = `
  <p class="lead">These terms govern your use of ${esc(site.name)}. By using the site, you agree to them. If you do not agree, please do not use the site.</p>

  <h2>1. Educational purpose</h2>
  <p>The site provides football analytics education, commentary, and a statistical model for exploration. It is not a betting service, a financial service, a news organisation, or a source of professional advice. All outputs are estimates. They are not recommendations to place a bet or make a financial decision.</p>

  <h2>2. No advice and no guarantees</h2>
  <p>We do not guarantee that any article, calculation, or model output is accurate, complete, or suitable for your purposes. Football is uncertain. A probability distribution can be well constructed and still produce a losing outcome. You are responsible for how you use the information on the site.</p>
  <p>Nothing on the site is financial, legal, medical, or psychological advice. If you need professional help, consult a qualified professional in your jurisdiction.</p>

  <h2>3. Age limit</h2>
  <p>The site is intended for adults aged 18 or over. By using the site, you confirm that you meet that age requirement. If you are under 18, please leave the site.</p>

  <h2>4. Intellectual property</h2>
  <p>The text, design, code, graphics, and original analysis on this site are owned by or licensed to ${esc(site.name)}. You may read, link to, and quote short extracts with clear attribution and a link to the original page. You may not republish substantial portions, scrape the site at scale, or use the content to train a commercial model without written permission.</p>
  <p>Third-party names, competition names, and trademarks belong to their respective owners. References are for identification and commentary only. The site is not affiliated with any league, club, governing body, or bookmaker.</p>

  <h2>5. Acceptable use</h2>
  <p>You agree not to:</p>
  <ul>
    <li>Use the site for unlawful purposes or to promote unlawful gambling.</li>
    <li>Attempt to gain unauthorised access to the site, its servers, or its accounts.</li>
    <li>Interfere with the site's operation, security, or availability.</li>
    <li>Scrape, copy, or republish content at scale without permission.</li>
    <li>Upload malware, spam, or misleading content through contact channels.</li>
    <li>Harass, threaten, or impersonate another person.</li>
  </ul>

  <h2>6. Contact messages and submissions</h2>
  <p>If you send a correction, source suggestion, or other message, you confirm that the information is accurate to the best of your knowledge and that you have the right to share it. Do not send confidential information, passwords, or sensitive personal data. We may use feedback to improve the site, but we do not promise to publish or respond to every message.</p>

  <h2>7. Third-party links</h2>
  <p>The site links to external organisations, including support services and data providers. We do not control those sites and are not responsible for their content, availability, or privacy practices. A link is not an endorsement of every statement on the destination site.</p>

  <h2>8. Advertising</h2>
  <p>The site may display advertising. Advertisements are labelled and kept separate from editorial content. We do not endorse advertised products or services, and we are not responsible for transactions between you and an advertiser. Advertising does not change our editorial standards.</p>

  <h2>9. Disclaimer of warranties</h2>
  <p>The site is provided on an "as is" and "as available" basis. To the fullest extent permitted by law, we disclaim all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, and non-infringement. We do not warrant that the site will be uninterrupted, secure, or error-free.</p>

  <h2>10. Limitation of liability</h2>
  <p>To the fullest extent permitted by law, ${esc(site.name)}, its owner, and its contributors are not liable for any indirect, incidental, special, consequential, or punitive loss, or for any loss of profits, data, goodwill, or opportunity, arising from your use of the site. This includes losses related to betting, financial decisions, or reliance on an estimate. Where liability cannot be excluded, it is limited to the amount you paid to use the site, which is zero for the free content.</p>

  <h2>11. Indemnity</h2>
  <p>You agree to indemnify and hold harmless ${esc(site.name)}, its owner, and its contributors from claims, damages, losses, and expenses arising from your breach of these terms or misuse of the site.</p>

  <h2>12. Governing law</h2>
  <p>These terms are governed by the laws of ${esc(site.legalJurisdiction)}, without regard to conflict of law principles. Courts in that jurisdiction have exclusive jurisdiction, except where mandatory consumer law gives you the right to bring a claim elsewhere. If you access the site from another country, local law may also apply.</p>

  <h2>13. Changes to the terms</h2>
  <p>We may update these terms when the site or the law changes. The latest version is always on this page. Continued use after a change means you accept the updated terms. If a change is material, we will try to highlight it on the site.</p>

  <h2>14. Severability</h2>
  <p>If a provision of these terms is found unenforceable, the remaining provisions stay in effect. The unenforceable provision will be interpreted as narrowly as possible to reflect the original intent.</p>

  <h2>15. Contact</h2>
  <p>Questions about these terms: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a> or the <a href="/contact.html">contact page</a>.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Terms of use" }], "/terms.html"),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/terms.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/terms.html",
    eyebrow: "Legal",
    intro: "The rules that apply when you use this site.",
    body,
    updated: "2026-11-18",
    schema,
  });
}

export function renderDisclaimerPage() {
  const title = "Disclaimer";
  const description =
    "Elite Football Predictor provides estimates and education, not advice. Read the limits of the model and the site's content.";
  const body = `
  <p class="lead">This page explains the limits of the information on ${esc(site.name)}. Please read it before relying on an article, a calculation, or a model output.</p>

  <h2>Estimates, not advice</h2>
  <p>Every probability, expected-goals figure, scoreline estimate, and analytical statement on this site is an estimate. None of it is a recommendation to place a bet, invest money, or make a financial decision. The site does not know your circumstances, your risk tolerance, or your financial position.</p>

  <h2>No guarantee of accuracy or outcome</h2>
  <p>We work to make the content clear and the arithmetic correct, but we do not guarantee that any statement is accurate, complete, or current. Football matches are influenced by events that no model can reliably predict, including red cards, injuries, refereeing decisions, weather, and individual errors. A well-reasoned estimate can be wrong.</p>

  <h2>No invented track record</h2>
  <p>We do not publish a win rate, a return on investment, or a "proof" record for the model. Any numeric example on the site is illustrative and labelled as such. It is not evidence of future performance. If we ever publish a backtest, we will state the sample, the method, the assumptions, and the limitations.</p>

  <h2>Data and sources</h2>
  <p>The interactive model uses numbers entered by the user. It does not fetch live data. Articles may use hypothetical clubs and simplified numbers to explain a concept. We do not claim to have access to a proprietary dataset unless we say so explicitly. Where we link to an external source, we do not control it and cannot guarantee that it remains available or accurate.</p>

  <h2>Gambling risk</h2>
  <p>Betting involves financial risk. The built-in margin in market prices means that most people who gamble repeatedly over time lose money. A statistical estimate does not change that. Never risk money you cannot afford to lose, never chase losses, and never treat gambling as a source of income.</p>
  <p>The site is intended for adults aged 18 or over. We do not accept bets, process payments, or link to bookmakers. If gambling is causing harm, seek support from the organisations listed on our <a href="/responsible-gambling.html">responsible gambling page</a>.</p>

  <h2>External links</h2>
  <p>External links are provided for reference and support. They do not imply endorsement of the entire destination site. We are not responsible for third-party content, products, services, or privacy practices.</p>

  <h2>Professional advice</h2>
  <p>Nothing on this site is financial, legal, medical, or psychological advice. If you need help with a gambling problem, a financial difficulty, or a mental health concern, contact a qualified professional or a recognised support service. If you are in immediate danger, contact local emergency services.</p>

  <h2>Contact</h2>
  <p>If you believe something on the site is inaccurate or misleading, please tell us through the <a href="/contact.html">contact page</a> or email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a>.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Disclaimer" }], "/disclaimer.html"),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/disclaimer.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/disclaimer.html",
    eyebrow: "Legal",
    intro: "What the site's estimates can and cannot tell you.",
    body,
    updated: "2026-11-18",
    schema,
  });
}

export function renderResponsibleGamblingPage() {
  const title = "Responsible Gambling";
  const description =
    "Support, warning signs, and practical steps if gambling is causing harm. Elite Football Predictor is for adults aged 18 or over.";
  const body = `
  <p class="lead">This site is football analytics education, not a betting service. We do not accept bets, process payments, or link to bookmakers. If gambling is affecting your life, please stop and use the independent support below.</p>

  <div class="callout danger">
    <h2>18+ only</h2>
    <p>The site is intended for adults aged 18 or over. It is not directed at children, and we do not knowingly collect data from children. If you are under 18, please leave the site.</p>
  </div>

  <h2>Our position</h2>
  <p>Football analysis can be interesting without being a reason to gamble. We publish education about probability, uncertainty, and market structure because those ideas are useful for understanding football. We do not publish selections, staking plans, or claims that a model can produce reliable income.</p>
  <p>Betting markets contain a built-in margin. Over many repeated bets, that margin makes losing the most likely outcome for most participants, even when individual analysis is sound. No amount of modelling removes the risk of financial loss.</p>

  <h2>Warning signs</h2>
  <p>Gambling may be becoming harmful if you recognise any of the following:</p>
  <ul>
    <li>Spending more money or time than you intended.</li>
    <li>Chasing losses with larger or more frequent bets.</li>
    <li>Hiding gambling from family, friends, or work.</li>
    <li>Borrowing money, selling possessions, or missing bills to gamble.</li>
    <li>Feeling anxious, irritable, or low when you cannot gamble.</li>
    <li>Neglecting sleep, work, studies, relationships, or health.</li>
    <li>Believing that a system, model, or "sure thing" will recover your losses.</li>
    <li>Thinking about gambling constantly, even when you want to stop.</li>
  </ul>
  <p>If any of these apply, it is not a character failure. It is a signal to get support.</p>

  <h2>Independent support organisations</h2>
  <div class="support-grid">
    <article class="card">
      <h3>BeGambleAware</h3>
      <p>Free, confidential information, advice, and support for people affected by gambling in the UK.</p>
      <p><a href="https://www.begambleaware.org/" target="_blank" rel="noopener noreferrer">begambleaware.org</a></p>
    </article>
    <article class="card">
      <h3>GambleAware</h3>
      <p>Independent charity funding research, education, and treatment for gambling harm in Great Britain.</p>
      <p><a href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">gambleaware.org</a></p>
    </article>
    <article class="card">
      <h3>Gamblers Anonymous</h3>
      <p>Fellowship-based support groups for people who want to stop gambling, with meetings in many countries.</p>
      <p><a href="https://www.gamblersanonymous.org/" target="_blank" rel="noopener noreferrer">gamblersanonymous.org</a></p>
    </article>
    <article class="card">
      <h3>GamCare</h3>
      <p>Free helpline, live chat, and counselling for anyone affected by gambling in the UK.</p>
      <p><a href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">gamcare.org.uk</a></p>
    </article>
    <article class="card">
      <h3>GAMSTOP</h3>
      <p>A free UK self-exclusion scheme that blocks access to licensed online gambling sites for a chosen period.</p>
      <p><a href="https://www.gamstop.co.uk/" target="_blank" rel="noopener noreferrer">gamstop.co.uk</a></p>
    </article>
    <article class="card">
      <h3>National Gambling Helpline</h3>
      <p>Free, confidential support in the UK, available every day. Call 0808 8020 133 or visit the helpline site.</p>
      <p><a href="https://www.gamcare.org.uk/get-support/" target="_blank" rel="noopener noreferrer">gamcare.org.uk/get-support</a></p>
    </article>
  </div>

  <h2>Practical steps</h2>
  <ol>
    <li><strong>Pause.</strong> Stop gambling for a day, a week, or longer. A pause makes it easier to see the pattern.</li>
    <li><strong>Remove access.</strong> Delete gambling apps, block sites, and consider a self-exclusion scheme such as GAMSTOP in the UK.</li>
    <li><strong>Tell someone.</strong> Speak to a trusted friend, family member, or support worker. Secrecy makes harm worse.</li>
    <li><strong>Protect your money.</strong> Ask your bank about gambling blocks, lower limits, or a trusted person helping with finances.</li>
    <li><strong>Get professional support.</strong> Contact one of the organisations above. Counselling and peer support are free and confidential in many countries.</li>
    <li><strong>Treat relapses as information.</strong> A relapse does not mean you have failed. It means the support plan needs adjusting.</li>
  </ol>

  <h2>If you are outside the UK</h2>
  <p>Support services vary by country. Search for a national gambling helpline or a recognised counselling service in your region. Gamblers Anonymous has meetings in many countries. If you are in immediate danger, contact local emergency services.</p>

  <h2>For family and friends</h2>
  <p>Gambling harm affects more than the person gambling. Partners, family members, and friends can also get confidential support from BeGambleAware and GamCare. You do not have to manage alone, and you are not responsible for fixing another adult's behaviour.</p>

  <h2>Our advertising policy</h2>
  <p>We do not accept bookmaker advertising, affiliate links, bonus offers, or sponsored betting content. If general display advertising appears on the site, it is labelled and kept separate from editorial content. We do not target ads at children or use gambling-related creative.</p>

  <h2>Contact</h2>
  <p>For a correction or a question about this page, use the <a href="/contact.html">contact page</a>. We cannot provide counselling or betting advice, but we can point you to the support organisations above.</p>`;

  const schema = [
    breadcrumbNode(
      [{ name: "Home", path: "/" }, { name: "Responsible gambling" }],
      "/responsible-gambling.html",
    ),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/responsible-gambling.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ];

  return prosePage({
    title,
    description,
    canonicalPath: "/responsible-gambling.html",
    eyebrow: "Support",
    intro: "Help, warning signs, and practical steps if gambling is causing harm.",
    body,
    updated: "2026-11-18",
    schema,
  });
}
