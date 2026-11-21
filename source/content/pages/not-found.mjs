import { site } from "../../site.config.mjs";
import { absoluteUrl, breadcrumbNode } from "../../lib/layout.mjs";
import { prosePage } from "./shared.mjs";

export function renderNotFoundPage() {
  const title = "Page Not Found | Elite Football Predictor";
  const description =
    "The page you requested does not exist. Browse the football analytics library, try the model, or contact the editor.";
  const body = `
  <p class="lead">That page does not exist, or it has moved. The link may be old, mistyped, or pointing to an article that has not been published.</p>

  <h2>Useful places to start</h2>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/articles/">All football analytics articles</a></li>
    <li><a href="/predictor.html">The match outcome model</a></li>
    <li><a href="/glossary.html">The analytics glossary</a></li>
    <li><a href="/about.html">About the site</a></li>
    <li><a href="/contact.html">Contact the editor</a></li>
  </ul>

  <h2>Looking for a specific guide?</h2>
  <p>Try the <a href="/articles/">article library</a> and use the category filters or search box. If you followed a link from another site and expected a particular page, please <a href="/contact.html">tell us</a> so we can check it.</p>

  <h2>Support</h2>
  <p>If you need help with gambling harm, visit the <a href="/responsible-gambling.html">responsible gambling page</a>. It lists independent organisations that offer free and confidential support.</p>`;

  const schema = [
    breadcrumbNode([{ name: "Home", path: "/" }, { name: "Page not found" }], "/404.html"),
    {
      "@type": "WebPage",
      name: title,
      url: absoluteUrl("/404.html"),
      description,
      isPartOf: { "@id": `${site.url}/#website` },
    },
  ];

  const publicPath = (() => {
    try {
      const pathname = new URL(site.url).pathname;
      return pathname.endsWith("/") ? pathname : `${pathname}/`;
    } catch (error) {
      return "/";
    }
  })();

  return prosePage({
    title,
    description,
    canonicalPath: "/404.html",
    eyebrow: "404",
    intro: "The page you requested is not here.",
    body,
    schema,
    noindex: true,
    baseHref: publicPath,
    skipHref: "/404.html#main",
  });
}
