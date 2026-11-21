// Central configuration. Replace the placeholders before deployment.
// SITE_URL and BASE_PATH can be supplied by CI. SITE_URL should be the public
// origin, optionally including a repository path for GitHub Pages project sites.
// BASE_PATH appends a repository path when SITE_URL is only an origin.
const origin = (process.env.SITE_URL || "https://nation99.github.io").replace(/\/+$/, "");
const basePath = (process.env.BASE_PATH || "").replace(/\/+$/, "");
const siteUrl = basePath && !origin.endsWith(basePath) ? `${origin}${basePath}` : origin;

export const site = {
  name: "Elite Football Predictor",
  shortName: "EFP",
  url: siteUrl,
  basePath,
  tagline: "Football analytics and education, without the hype",
  description:
    "Football analytics education and a transparent match outcome model. Learn xG, xGA, odds, Poisson probabilities, and structured pre-match analysis.",
  email: "usatonlinetools@gmail.com",
  author: "Nyasha",
  locale: "en_GB",
  language: "en-GB",
  themeColor: "#0b1b33",
  gaId: "G-DHC4SNTD6B",
  adsenseClient: "ca-pub-XXXXXXXXXXXXXXXX",
  adsensePublisher: "pub-XXXXXXXXXXXXXXXX",
  adsenseSlot: "0000000000",
  adsenseSlots: {
    hero: "0000000001",
    inline: "0000000002",
    sidebar: "0000000003",
    end: "0000000004",
  },
  ogImage: "/assets/og-default.png",
  founded: "2026",
  legalJurisdiction: "Zimbabwe",
  social: {
    x: "",
    linkedin: "",
  },
};
