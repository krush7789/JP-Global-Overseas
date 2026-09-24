// Blueprint S15 gate: no "No.1", "100%", or guarantee claims in what visitors can read.
// Run after `npm run build`:  node scripts/scan-claims.mjs
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const BAD = /\bno\.?\s?1\b|\b100\s?%|guarante/i;
const files = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".html")) files.push(p);
  }
})("out");

let hits = 0;
for (const f of files) {
  // Visible text only: drop scripts/styles/tags (CSS like `width:100%` is not a claim).
  const text = readFileSync(f, "utf8")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ");
  const m = text.match(BAD);
  if (m) {
    hits++;
    const i = m.index ?? 0;
    console.error(`CLAIM in ${f}: …${text.slice(Math.max(0, i - 40), i + 60).replace(/\s+/g, " ")}…`);
  }
}
if (hits) process.exit(1);
console.log(`claims scan OK (${files.length} pages)`);
