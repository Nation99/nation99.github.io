/* Elite Football Predictor: shared interface logic */
(function () {
  "use strict";

  var root = document.documentElement;
  var CONSENT_KEY = "efp-consent-v1";
  var THEME_KEY = "efp-theme";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  /* Theme ---------------------------------------------------------------- */

  var themeToggle = document.getElementById("themeToggle");
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateThemeButton() {
    if (!themeToggle) return;
    var dark = currentTheme() === "dark";
    themeToggle.setAttribute("aria-pressed", dark ? "true" : "false");
    themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.setAttribute("title", dark ? "Switch to light theme" : "Switch to dark theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#060f1d" : "#0b1b33");
  }

  function setTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    updateThemeButton();
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (error) {
        /* Storage can be unavailable in private modes. */
      }
    }
  }

  if (themeToggle) {
    updateThemeButton();
    themeToggle.addEventListener("click", function () {
      setTheme(currentTheme() === "dark" ? "light" : "dark", true);
    });
  }

  systemDark.addEventListener("change", function (event) {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (error) {
      saved = null;
    }
    if (!saved) setTheme(event.matches ? "dark" : "light", false);
  });

  /* Mobile navigation ---------------------------------------------------- */

  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  var header = document.querySelector(".site-header");

  function navIsOpen() {
    return mobileNav && !mobileNav.hasAttribute("hidden");
  }

  function openNav() {
    if (!mobileNav || !navToggle) return;
    mobileNav.removeAttribute("hidden");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
    var firstLink = mobileNav.querySelector("a, button");
    if (firstLink) firstLink.focus();
  }

  function closeNav(returnFocus) {
    if (!mobileNav || !navToggle) return;
    mobileNav.setAttribute("hidden", "");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
    if (returnFocus) navToggle.focus();
  }

  if (navToggle && mobileNav) {
    navToggle.addEventListener("click", function () {
      if (navIsOpen()) closeNav(true);
      else openNav();
    });

    mobileNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navIsOpen()) closeNav(true);
    });

    document.addEventListener("click", function (event) {
      if (!navIsOpen()) return;
      if (header && !header.contains(event.target)) closeNav(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && navIsOpen()) closeNav(false);
    });
  }

  /* Dropdown navigation -------------------------------------------------- */

  var moreMenus = Array.prototype.slice.call(document.querySelectorAll(".nav-more"));

  function closeMoreMenus(except) {
    moreMenus.forEach(function (item) {
      if (item !== except) item.removeAttribute("open");
    });
  }

  moreMenus.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (item.hasAttribute("open")) closeMoreMenus(item);
    });
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-more")) closeMoreMenus(null);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMoreMenus(null);
  });

  /* Reading progress ----------------------------------------------------- */

  var progressBar = document.getElementById("readingProgress");
  var articleBody = document.querySelector(".article-body");

  if (progressBar && articleBody) {
    var ticking = false;

    function updateProgress() {
      var rect = articleBody.getBoundingClientRect();
      var total = articleBody.offsetHeight - window.innerHeight;
      var scrolled = -rect.top;
      var percent = total > 0 ? clamp((scrolled / total) * 100, 0, 100) : 0;
      progressBar.style.width = percent.toFixed(2) + "%";
      ticking = false;
    }

    function requestProgress() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    }

    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress);
  }

  /* Table of contents ---------------------------------------------------- */

  var tocLinks = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));

  if (tocLinks.length && articleBody && "IntersectionObserver" in window) {
    var linkById = {};
    tocLinks.forEach(function (link) {
      linkById[link.getAttribute("href").slice(1)] = link;
    });

    var headings = Array.prototype.slice.call(articleBody.querySelectorAll("h2[id]"));

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          tocLinks.forEach(function (link) {
            link.removeAttribute("aria-current");
          });
          var active = linkById[entry.target.id];
          if (active) active.setAttribute("aria-current", "true");
        });
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach(function (heading) {
      observer.observe(heading);
    });
  }

  /* Article filters ------------------------------------------------------ */

  var articleGrid = document.getElementById("articleGrid");
  var filterButtons = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var searchInput = document.getElementById("articleSearch");
  var articleCount = document.getElementById("articleCount");
  var emptyState = document.querySelector("[data-empty-state]");
  var clearFilters = document.querySelector("[data-clear-filters]");

  if (articleGrid && filterButtons.length) {
    var cards = Array.prototype.slice.call(articleGrid.querySelectorAll(".article-card"));
    var activeCategory = "all";
    var query = "";

    function setActiveButton(category) {
      filterButtons.forEach(function (button) {
        var isActive = button.getAttribute("data-filter") === category;
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }

    function applyFilters(updateUrl) {
      var visible = 0;
      cards.forEach(function (card) {
        var categoryMatch = activeCategory === "all" || card.getAttribute("data-category") === activeCategory;
        var haystack = (card.getAttribute("data-title") || "") + " " + card.textContent.toLowerCase();
        var queryMatch = !query || haystack.indexOf(query) !== -1;
        var show = categoryMatch && queryMatch;
        card.hidden = !show;
        if (show) visible += 1;
      });

      if (articleCount) {
        articleCount.textContent = visible + (visible === 1 ? " article" : " articles");
      }
      if (emptyState) emptyState.hidden = visible !== 0;
      setActiveButton(activeCategory);

      if (updateUrl !== false) {
        var url = new URL(window.location.href);
        if (activeCategory === "all") url.searchParams.delete("category");
        else url.searchParams.set("category", activeCategory);
        if (query) url.searchParams.set("q", query);
        else url.searchParams.delete("q");
        window.history.replaceState({}, "", url);
      }
    }

    var params = new URLSearchParams(window.location.search);
    var initialCategory = params.get("category");
    if (initialCategory && filterButtons.some(function (button) {
      return button.getAttribute("data-filter") === initialCategory;
    })) {
      activeCategory = initialCategory;
    }
    var initialQuery = params.get("q") || "";
    if (initialQuery && searchInput) {
      query = initialQuery.toLowerCase();
      searchInput.value = initialQuery;
    }

    filterButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeCategory = button.getAttribute("data-filter") || "all";
        applyFilters(true);
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        query = searchInput.value.trim().toLowerCase();
        applyFilters(true);
      });
    }

    if (clearFilters) {
      clearFilters.addEventListener("click", function () {
        activeCategory = "all";
        query = "";
        if (searchInput) searchInput.value = "";
        applyFilters(true);
      });
    }

    applyFilters(false);
  }

  /* Contact form --------------------------------------------------------- */

  var contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = contactForm.querySelector("[data-form-status]");
      var honeypot = contactForm.querySelector('[name="website"]');

      if (honeypot && honeypot.value) {
        if (status) status.textContent = "The message could not be prepared. Please email us directly.";
        return;
      }

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      var data = new FormData(contactForm);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var subject = String(data.get("subject") || "General question").trim();
      var message = String(data.get("message") || "").trim();
      var to = contactForm.getAttribute("data-email") || "editor@elitefootballpredictor.com";

      var bodyText =
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        message + "\n\n" +
        "Sent from the Elite Football Predictor contact form.";

      var mailto =
        "mailto:" + encodeURIComponent(to) +
        "?subject=" + encodeURIComponent("[Elite Football Predictor] " + subject) +
        "&body=" + encodeURIComponent(bodyText);

      window.location.href = mailto;
      if (status) {
        status.textContent = "Email draft opened. If nothing happened, email " + to + " directly.";
      }
    });
  }

  /* Cookie consent ------------------------------------------------------- */

  var consentBanner = document.getElementById("cookieBanner");
  var consentTriggers = Array.prototype.slice.call(document.querySelectorAll("[data-open-consent]"));
  var lastConsentTrigger = null;
  var adsLoaded = false;

  function readConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && (parsed.choice === "accept" || parsed.choice === "reject")) return parsed;
      return null;
    } catch (error) {
      return null;
    }
  }

  function writeConsent(choice) {
    try {
      localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({
          choice: choice,
          ts: new Date().toISOString(),
          version: 1
        })
      );
    } catch (error) {
      /* The choice still applies for this page view. */
    }
  }

  function consentUpdate(choice) {
    var granted = choice === "accept";
    var state = granted ? "granted" : "denied";

    if (typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: state,
        ad_user_data: state,
        ad_personalization: state,
        analytics_storage: state
      });
      window.gtag("set", "ads_data_redaction", !granted);
    }

    root.setAttribute("data-consent", choice);
    if (granted) loadAdSense();
  }

  function loadAdSense() {
    if (adsLoaded) return;
    var meta = document.querySelector('meta[name="adsense-client"]');
    var client = meta ? meta.getAttribute("content") : "";
    if (!client || /X{4,}/i.test(client)) return;

    var existing = document.querySelector('script[src*="adsbygoogle.js"]');
    if (existing) {
      pushAds();
      return;
    }

    var script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + encodeURIComponent(client);
    script.addEventListener("load", pushAds);
    document.head.appendChild(script);
    adsLoaded = true;
  }

  function pushAds() {
    var slots = document.querySelectorAll(".adsbygoogle");
    if (!slots.length) return;
    window.adsbygoogle = window.adsbygoogle || [];
    Array.prototype.forEach.call(slots, function (slot) {
      if (slot.getAttribute("data-adsbygoogle-status")) return;
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        /* Ad blockers and missing inventory should not break the page. */
      }
    });
  }

  function showConsent(trigger) {
    if (!consentBanner) return;
    lastConsentTrigger = trigger || null;
    consentBanner.removeAttribute("hidden");
    var first = consentBanner.querySelector("[data-consent]");
    if (first) first.focus();
  }

  function hideConsent() {
    if (!consentBanner) return;
    consentBanner.setAttribute("hidden", "");
    if (lastConsentTrigger && typeof lastConsentTrigger.focus === "function") {
      lastConsentTrigger.focus();
      lastConsentTrigger = null;
    }
  }

  function chooseConsent(choice) {
    writeConsent(choice);
    consentUpdate(choice);
    hideConsent();
  }

  if (consentBanner) {
    consentBanner.addEventListener("click", function (event) {
      var button = event.target.closest("[data-consent]");
      if (!button) return;
      chooseConsent(button.getAttribute("data-consent") === "accept" ? "accept" : "reject");
    });

    consentTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        showConsent(trigger);
      });
    });

    var storedConsent = readConsent();
    if (storedConsent) {
      consentUpdate(storedConsent.choice);
    } else {
      window.setTimeout(function () {
        consentBanner.removeAttribute("hidden");
      }, 250);
    }
  }

  /* Small quality checks ------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll('a[target="_blank"]'), function (link) {
    if (!link.getAttribute("rel")) link.setAttribute("rel", "noopener noreferrer");
  });
})();
