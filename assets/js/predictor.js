/* Elite Football Predictor: transparent Poisson model
   Educational tool. No live data, no bookmaker links, no advice. */
(function () {
  "use strict";

  var MAX_GOALS = 10;
  var TABLE_GOALS = 4;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function number(value, fallback) {
    var parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function factorial(n) {
    var result = 1;
    for (var i = 2; i <= n; i += 1) result *= i;
    return result;
  }

  function poisson(k, mean) {
    if (mean <= 0) return k === 0 ? 1 : 0;
    return (Math.pow(mean, k) * Math.exp(-mean)) / factorial(k);
  }

  function percent(value) {
    return (value * 100).toFixed(1) + "%";
  }

  function two(value) {
    return value.toFixed(2);
  }

  function buildGrid(homeMean, awayMean) {
    var home = [];
    var away = [];
    var i;
    var j;
    for (i = 0; i <= MAX_GOALS; i += 1) {
      home.push(poisson(i, homeMean));
      away.push(poisson(i, awayMean));
    }
    var grid = [];
    for (i = 0; i <= MAX_GOALS; i += 1) {
      grid[i] = [];
      for (j = 0; j <= MAX_GOALS; j += 1) {
        grid[i][j] = home[i] * away[j];
      }
    }
    return grid;
  }

  function summarise(grid) {
    var homeWin = 0;
    var draw = 0;
    var awayWin = 0;
    var over25 = 0;
    var btts = 0;
    var best = { home: 0, away: 0, probability: -1 };
    var i;
    var j;
    var probability;

    for (i = 0; i <= MAX_GOALS; i += 1) {
      for (j = 0; j <= MAX_GOALS; j += 1) {
        probability = grid[i][j];
        if (i > j) homeWin += probability;
        else if (i === j) draw += probability;
        else awayWin += probability;
        if (i + j >= 3) over25 += probability;
        if (i > 0 && j > 0) btts += probability;
        if (probability > best.probability) {
          best = { home: i, away: j, probability: probability };
        }
      }
    }

    var total = homeWin + draw + awayWin;
    if (total > 0) {
      homeWin /= total;
      draw /= total;
      awayWin /= total;
    }

    return {
      homeWin: homeWin,
      draw: draw,
      awayWin: awayWin,
      over25: over25,
      under25: 1 - over25,
      btts: btts,
      bttsNo: 1 - btts,
      best: best
    };
  }

  function confidence(summary, sample) {
    var ordered = [summary.homeWin, summary.draw, summary.awayWin].sort(function (a, b) {
      return b - a;
    });
    var spread = ordered[0] - ordered[1];
    var sampleBonus = (clamp(sample, 5, 20) - 10) * 0.35;
    return clamp(50 + spread * 180 + sampleBonus, 20, 95);
  }

  function lowerVariance(summary) {
    var options = [
      { label: "Home win or draw (1X)", probability: summary.homeWin + summary.draw },
      { label: "Draw or away win (X2)", probability: summary.draw + summary.awayWin },
      { label: "Home win or away win (12)", probability: summary.homeWin + summary.awayWin },
      { label: "Over 2.5 goals", probability: summary.over25 },
      { label: "Under 2.5 goals", probability: summary.under25 },
      { label: "Both teams to score: yes", probability: summary.btts },
      { label: "Both teams to score: no", probability: summary.bttsNo }
    ];
    return options.reduce(function (best, option) {
      return option.probability > best.probability ? option : best;
    });
  }

  function renderProbabilities(summary, homeName, awayName) {
    var rows = [
      { key: "home", label: homeName, value: summary.homeWin },
      { key: "draw", label: "Draw", value: summary.draw },
      { key: "away", label: awayName, value: summary.awayWin }
    ];
    return rows.map(function (row) {
      return (
        '<div class="prob-row ' + row.key + '">' +
          '<span>' + escapeHtml(row.label) + '</span>' +
          '<span class="track" aria-hidden="true"><i style="width:' + (row.value * 100).toFixed(2) + '%"></i></span>' +
          '<output>' + percent(row.value) + '</output>' +
        '</div>'
      );
    }).join("");
  }

  function renderXgBars(homeXg, awayXg, homeName, awayName) {
    var ceiling = Math.max(homeXg, awayXg, 0.1);
    return (
      '<div class="xg-bar">' +
        '<span>' + escapeHtml(homeName) + ' xG</span>' +
        '<span class="track" aria-hidden="true"><i style="width:' + ((homeXg / ceiling) * 100).toFixed(2) + '%"></i></span>' +
        '<strong>' + two(homeXg) + '</strong>' +
      '</div>' +
      '<div class="xg-bar away">' +
        '<span>' + escapeHtml(awayName) + ' xG</span>' +
        '<span class="track" aria-hidden="true"><i style="width:' + ((awayXg / ceiling) * 100).toFixed(2) + '%"></i></span>' +
        '<strong>' + two(awayXg) + '</strong>' +
      '</div>'
    );
  }

  function renderScorelineTable(grid, best) {
    var header = "<tr><th scope=\"col\">Home \\ Away</th>";
    var i;
    var j;
    for (j = 0; j <= TABLE_GOALS; j += 1) {
      header += '<th scope="col">' + j + "</th>";
    }
    header += "</tr>";

    var rows = "";
    for (i = 0; i <= TABLE_GOALS; i += 1) {
      rows += '<tr><th scope="row">' + i + "</th>";
      for (j = 0; j <= TABLE_GOALS; j += 1) {
        var isBest = best.home === i && best.away === j;
        rows += '<td' + (isBest ? ' class="hi"' : "") + ">" + percent(grid[i][j]) + "</td>";
      }
      rows += "</tr>";
    }

    return (
      '<table class="scoreline-table">' +
        '<caption class="table-caption">Scoreline probabilities from 0-0 to 4-4. Home goals run down the left column, away goals across the top. The highlighted cell is the single most likely score. Totals elsewhere include goals above four.</caption>' +
        "<thead>" + header + "</thead>" +
        "<tbody>" + rows + "</tbody>" +
      "</table>"
    );
  }

  function estimate(inputs) {
    var homeXgFor = clamp(number(inputs.homeXgFor, 1.5), 0, 5);
    var awayXgFor = clamp(number(inputs.awayXgFor, 1.2), 0, 5);
    var homeXgAgainst = clamp(number(inputs.homeXgAgainst, 1.2), 0, 5);
    var awayXgAgainst = clamp(number(inputs.awayXgAgainst, 1.4), 0, 5);
    var homeForm = clamp(number(inputs.homeForm, 5), 0, 10);
    var awayForm = clamp(number(inputs.awayForm, 5), 0, 10);
    var homeAbsences = clamp(number(inputs.homeAbsences, 0), 0, 5);
    var awayAbsences = clamp(number(inputs.awayAbsences, 0), 0, 5);
    var homeRest = clamp(number(inputs.homeRest, 5), 2, 10);
    var awayRest = clamp(number(inputs.awayRest, 5), 2, 10);
    var venue = inputs.venue || "normal";
    var sample = clamp(number(inputs.sample, 10), 5, 20);

    var homeBase = (homeXgFor + awayXgAgainst) / 2;
    var awayBase = (awayXgFor + homeXgAgainst) / 2;

    var homeVenue = venue === "normal" ? 1.06 : venue === "closed" ? 1.02 : 1;
    var awayVenue = venue === "normal" ? 0.97 : venue === "closed" ? 0.99 : 1;

    var homeFormAdjust = (homeForm - 5) * 0.025;
    var awayFormAdjust = (awayForm - 5) * 0.025;

    var restAdjust = clamp((homeRest - awayRest) * 0.012, -0.08, 0.08);

    var homeMean = homeBase * homeVenue + homeFormAdjust + restAdjust - homeAbsences * 0.05;
    var awayMean = awayBase * awayVenue + awayFormAdjust - restAdjust - awayAbsences * 0.05;

    homeMean = clamp(homeMean, 0.2, 4);
    awayMean = clamp(awayMean, 0.2, 4);

    var grid = buildGrid(homeMean, awayMean);
    var summary = summarise(grid);

    return {
      homeMean: homeMean,
      awayMean: awayMean,
      grid: grid,
      summary: summary,
      confidence: confidence(summary, sample),
      lower: lowerVariance(summary)
    };
  }

  function outcomeLabel(summary, homeName, awayName) {
    var top = Math.max(summary.homeWin, summary.draw, summary.awayWin);
    if (top === summary.homeWin) return homeName + " win";
    if (top === summary.awayWin) return awayName + " win";
    return "Draw";
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (error) {
        reject(error);
      } finally {
        document.body.removeChild(area);
      }
    });
  }

  function initPredictor(app) {
    var form = app.querySelector("[data-predictor-form]");
    var results = app.querySelector("[data-predictor-results]");
    if (!form || !results) return;

    var output = {};
    Array.prototype.forEach.call(results.querySelectorAll("[data-output]"), function (node) {
      output[node.getAttribute("data-output")] = node;
    });

    function currentInputs() {
      var data = new FormData(form);
      return {
        homeTeam: String(data.get("homeTeam") || "Club A").trim().slice(0, 40) || "Club A",
        awayTeam: String(data.get("awayTeam") || "Club B").trim().slice(0, 40) || "Club B",
        homeXgFor: data.get("homeXgFor"),
        awayXgFor: data.get("awayXgFor"),
        homeXgAgainst: data.get("homeXgAgainst"),
        awayXgAgainst: data.get("awayXgAgainst"),
        homeForm: data.get("homeForm"),
        awayForm: data.get("awayForm"),
        homeAbsences: data.get("homeAbsences"),
        awayAbsences: data.get("awayAbsences"),
        homeRest: data.get("homeRest"),
        awayRest: data.get("awayRest"),
        venue: data.get("venue"),
        sample: data.get("sample")
      };
    }

    var lastResultText = "";

    function render() {
      var inputs = currentInputs();
      var model = estimate(inputs);
      var summary = model.summary;
      var homeName = inputs.homeTeam;
      var awayName = inputs.awayTeam;
      var outcome = outcomeLabel(summary, homeName, awayName);
      var score = summary.best.home + "-" + summary.best.away;
      var confidenceValue = Math.round(model.confidence);

      if (output.matchTitle) output.matchTitle.textContent = homeName + " vs " + awayName;
      if (output.summary) {
        output.summary.textContent =
          "Most likely score " + score + ". The estimate is a probability distribution, not a forecast.";
      }
      if (output.confidenceBadge) {
        var tone = confidenceValue >= 70 ? "badge-good" : confidenceValue >= 50 ? "badge-warn" : "badge-muted";
        output.confidenceBadge.className = "badge " + tone;
        output.confidenceBadge.textContent = confidenceValue >= 70 ? "Clearer shape" : confidenceValue >= 50 ? "Moderate shape" : "Flat distribution";
      }
      if (output.outcome) output.outcome.textContent = outcome;
      if (output.confidence) output.confidence.textContent = confidenceValue + "/100";
      if (output.expectedGoals) {
        output.expectedGoals.textContent = two(model.homeMean) + " - " + two(model.awayMean);
      }
      if (output.probabilities) {
        output.probabilities.innerHTML = renderProbabilities(summary, homeName, awayName);
      }
      if (output.xgBars) {
        output.xgBars.innerHTML = renderXgBars(model.homeMean, model.awayMean, homeName, awayName);
      }
      if (output.over25) output.over25.textContent = percent(summary.over25);
      if (output.under25) output.under25.textContent = percent(summary.under25);
      if (output.btts) output.btts.textContent = percent(summary.btts);
      if (output.lowerVariance) {
        output.lowerVariance.innerHTML =
          '<span class="label">Lower-variance market estimate</span>' +
          "<strong>" + escapeHtml(model.lower.label) + " at " + percent(model.lower.probability) + "</strong>" +
          "<p>This is the highest-probability option in a small set of combined outcomes. A higher probability is not a guarantee, and every option can lose.</p>";
      }
      if (output.scorelineTable) {
        output.scorelineTable.innerHTML = renderScorelineTable(model.grid, summary.best);
      }

      lastResultText =
        "Elite Football Predictor estimate (educational)\n" +
        homeName + " vs " + awayName + "\n" +
        "Outcome: " + outcome + "\n" +
        "Home win: " + percent(summary.homeWin) + "\n" +
        "Draw: " + percent(summary.draw) + "\n" +
        "Away win: " + percent(summary.awayWin) + "\n" +
        "Expected goals: " + two(model.homeMean) + " - " + two(model.awayMean) + "\n" +
        "Over 2.5: " + percent(summary.over25) + ", under 2.5: " + percent(summary.under25) + "\n" +
        "Both teams to score: " + percent(summary.btts) + "\n" +
        "Lower-variance comparison: " + model.lower.label + " at " + percent(model.lower.probability) + "\n" +
        "Model confidence: " + confidenceValue + "/100\n" +
        "Estimate only. Not advice. 18+.";

      var status = output.copyStatus;
      if (status && status.dataset.sticky !== "true") status.textContent = "";
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      render();
      var status = output.copyStatus;
      if (status) {
        status.dataset.sticky = "false";
        status.textContent = "Estimate updated.";
      }
    });

    form.addEventListener("input", function (event) {
      if (event.target && event.target.type === "range") {
        var valueNode = app.querySelector("#" + event.target.id + "-value");
        if (valueNode) valueNode.textContent = event.target.value;
      }
    });

    form.addEventListener("reset", function () {
      window.setTimeout(function () {
        Array.prototype.forEach.call(form.querySelectorAll('input[type="range"]'), function (range) {
          var valueNode = app.querySelector("#" + range.id + "-value");
          if (valueNode) valueNode.textContent = range.value;
        });
        render();
      }, 0);
    });

    app.addEventListener("click", function (event) {
      var button = event.target.closest("[data-action]");
      if (!button) return;
      var action = button.getAttribute("data-action");
      var status = output.copyStatus;

      if (action === "copy-result") {
        copyText(lastResultText).then(function () {
          if (status) status.textContent = "Result copied to the clipboard.";
        }).catch(function () {
          if (status) status.textContent = "Copy failed. Select the text and copy it manually.";
        });
      }

      if (action === "share-result") {
        if (navigator.share) {
          navigator.share({
            title: "Elite Football Predictor estimate",
            text: lastResultText
          }).then(function () {
            if (status) status.textContent = "Result shared.";
          }).catch(function () {
            /* Cancelling the share sheet is not an error worth reporting. */
          });
        } else {
          copyText(lastResultText).then(function () {
            if (status) status.textContent = "Sharing is not available here. Result copied instead.";
          }).catch(function () {
            if (status) status.textContent = "Sharing is not available in this browser.";
          });
        }
      }
    });

    render();
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-predictor-app]"), initPredictor);
})();
