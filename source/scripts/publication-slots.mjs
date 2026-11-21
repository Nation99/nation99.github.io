const args = process.argv.slice(2);
const countArg = args.find((arg) => /^\d+$/.test(arg));
const count = Math.max(1, Number(countArg || 6));

const dayFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: "Africa/Harare",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const todayInCat = dayFormatter.format(new Date());
const [year, month, day] = todayInCat.split("-").map(Number);
const start = new Date(Date.UTC(year, month - 1, day + 1));

function isoDate(date) {
  return date.toISOString().slice(0, 10);
}

function formatDay(date) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

console.log(`Today in CAT: ${todayInCat}`);
console.log(`Cadence: 2 articles per day at 08:00 CAT (06:00 UTC)`);
console.log("");

const days = Math.ceil(count / 2);
let printed = 0;

for (let index = 0; index < days && printed < count; index += 1) {
  const date = new Date(start.getTime() + index * 86400000);
  const dateOnly = isoDate(date);
  console.log(`${formatDay(date)} (${dateOnly})`);
  for (let slot = 0; slot < 2 && printed < count; slot += 1) {
    printed += 1;
    console.log(`  Slot ${slot + 1}: ${dateOnly}T08:00:00+02:00  |  ${dateOnly}T06:00:00Z`);
  }
  console.log("");
}
