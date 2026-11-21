import fs from "node:fs";
import path from "node:path";
import { plan } from "../content/articles/plan.mjs";
import { articleWordCount } from "../lib/layout.mjs";

const dir = path.join(process.cwd(), "content", "articles");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mjs") && !["plan.mjs", "_template.mjs"].includes(f));
const slugs = files.map((f) => f.replace(/\.mjs$/, ""));
const missing = plan.filter((p) => !slugs.includes(p.slug)).map((p) => p.slug);
const extra = slugs.filter((s) => !plan.some((p) => p.slug === s));

console.log("PLAN", plan.length, "FILES", files.length);
console.log("MISSING", missing.length, missing.join(", "));
console.log("EXTRA", extra.length, extra.join(", "));

const rows = [];
for (const file of files) {
  try {
    const mod = await import(new URL(`../content/articles/${file}`, import.meta.url).href);
    const a = mod.default ?? mod.article;
    const total = articleWordCount(a);
    const issue = [];
    if (!a.slug) issue.push("no-slug");
    if (total < 1200) issue.push("short-" + total);
    if (total > 1800) issue.push("long-" + total);
    if ((a.faq ?? []).length !== 3) issue.push("faq-" + (a.faq ?? []).length);
    if ((a.related ?? []).length !== 3) issue.push("related-" + (a.related ?? []).length);
    if (!(a.sections ?? []).some((s) => s.id === "worked-example")) issue.push("no-worked-example");
    if (!(a.sections ?? []).some((s) => s.id === "common-mistakes")) issue.push("no-common-mistakes");
    if ((a.metaTitle ?? "").length > 60) issue.push("metaTitle-" + a.metaTitle.length);
    if ((a.description ?? "").length > 155) issue.push("description-" + a.description.length);
    const all = JSON.stringify(a);
    if (all.includes("\u2014")) issue.push("em-dash");
    if (all.includes("\u2013")) issue.push("en-dash");
    const banned = ["high-probability selections", "institutional-grade", "AI-powered", "safe prediction", "safest bet", "value bet", "guaranteed", "sure win", "risk-free", "beat the bookmaker", "easy money", "winning system", "banker"];
    for (const b of banned) if (all.toLowerCase().includes(b)) issue.push("banned:" + b);
    rows.push({ file, slug: a.slug, total, issue: issue.join(" ") });
  } catch (e) {
    rows.push({ file, slug: "", total: 0, issue: "ERROR " + e.message });
  }
}

rows.sort((a, b) => a.file.localeCompare(b.file));
for (const r of rows) console.log(String(r.total).padStart(5), r.file.padEnd(48), r.issue);
