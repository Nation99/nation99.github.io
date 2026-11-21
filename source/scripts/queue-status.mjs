// Show the publication queue for the current CAT date.
// Usage: npm run queue
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { planBySlug } from "../content/articles/plan.mjs";

function currentCatDate(date = new Date()) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Harare",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

const publishDate = process.env.PUBLISH_DATE || currentCatDate();
if (!/^\d{4}-\d{2}-\d{2}$/.test(publishDate)) {
  console.error(`PUBLISH_DATE must use YYYY-MM-DD, received "${publishDate}"`);
  process.exit(1);
}

const dir = path.join(process.cwd(), "content", "articles");
const files = fs
  .readdirSync(dir)
  .filter((file) => file.endsWith(".mjs") && !["plan.mjs", "_template.mjs"].includes(file));

const rows = [];
for (const file of files) {
  const article = (await import(pathToFileURL(path.join(dir, file)).href)).default;
  if (!planBySlug[article.slug]) {
    console.warn(`Not in plan.mjs: ${file} (${article.slug})`);
  }
  rows.push({
    file,
    slug: article.slug,
    title: article.title,
    category: article.category,
    published: article.published,
  });
}

rows.sort((a, b) => {
  if (a.published !== b.published) return a.published.localeCompare(b.published);
  return a.title.localeCompare(b.title);
});

const due = rows.filter((row) => row.published <= publishDate);
const queued = rows.filter((row) => row.published > publishDate);

console.log(`Publish date: ${publishDate} (Africa/Harare)`);
console.log(`Due: ${due.length}`);
console.log(`Queued: ${queued.length}`);

if (queued.length) {
  console.log("");
  for (const row of queued) {
    console.log(`${row.published}  ${row.category.padEnd(18)} ${row.slug}`);
  }
}

if (queued.length < 2) {
  console.log("");
  console.log("WARNING: fewer than two articles are queued. The daily publish will make no changes until new articles are added.");
}
