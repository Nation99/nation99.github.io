// Count rendered words in an article module.
// Usage: node scripts/wordcount.mjs content/articles/what-is-xg-football.mjs
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("Pass an article module path.");
  process.exit(1);
}

const mod = await import(pathToFileURL(resolve(file)).href);
const article = mod.default;

function strip(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const parts = [
  article.dek,
  article.intro,
  ...(article.takeaways || []),
  ...(article.sections || []).flatMap((section) => [section.heading, section.html]),
  ...(article.faq || []).flatMap((item) => [item.q, item.a]),
];

const words = strip(parts.join(" ")).split(" ").filter(Boolean);
const headings = (article.sections || []).map((section) => section.heading);
const duplicateHeadings = headings.filter((heading, index) => headings.indexOf(heading) !== index);
const dashes = /\u2014|\u2013/.test(JSON.stringify(article));

console.log(`File: ${file}`);
console.log(`Slug: ${article.slug}`);
console.log(`Words: ${words.length}`);
console.log(`Sections: ${headings.length}`);
console.log(`FAQ: ${(article.faq || []).length}`);
console.log(`Related: ${(article.related || []).length}`);
console.log(`Duplicate headings: ${duplicateHeadings.length ? duplicateHeadings.join(", ") : "none"}`);
console.log(`Em/en dashes: ${dashes ? "FOUND" : "none"}`);

const required = ["worked-example", "common-mistakes"];
for (const id of required) {
  console.log(`Required section ${id}: ${(article.sections || []).some((s) => s.id === id) ? "ok" : "MISSING"}`);
}

if (words.length < 1200) {
  console.error(`Too short by ${1200 - words.length} words.`);
  process.exitCode = 1;
}
if (words.length > 1800) {
  console.error(`Too long by ${words.length - 1800} words.`);
  process.exitCode = 1;
}
