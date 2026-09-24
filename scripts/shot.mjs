// Real-browser check: node scripts/shot.mjs [url] [outPrefix] [scrollY,...]
// Uses the Chrome already installed on this machine (playwright-core downloads nothing),
// software WebGL so the 3D scene can run headless. Prints console/page errors + canvas info.
import { chromium } from "playwright-core";

const url = process.argv[2] ?? "http://localhost:3000/";
const out = process.argv[3] ?? "shot";
const scrolls = (process.argv[4] ?? "0").split(",").map(Number);

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--enable-webgl"],
});
const page = await browser.newPage({ reducedMotion: process.env.REDUCED ? "reduce" : "no-preference", viewport: { width: Number(process.env.VW ?? 1440), height: Number(process.env.VH ?? 900) } });

const logs = [];
page.on("console", (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
page.on("requestfailed", (r) => logs.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`));

await page.goto(url, { waitUntil: "load" });
await page.waitForTimeout(9000); // idle-detect tier, load scene chunk + textures

const info = await page.evaluate(() => {
  const c = document.querySelector("canvas");
  const gl2 = !!document.createElement("canvas").getContext("webgl2");
  return {
    webgl2: gl2,
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    canvas: c ? { w: c.width, h: c.height, css: getComputedStyle(c).display } : null,
    heroOpacity: document.querySelector("#hero h1") ? getComputedStyle(document.querySelector("#hero h1")).opacity : null,
    scrollHeight: document.documentElement.scrollHeight,
  };
});
console.log("INFO", JSON.stringify(info));

for (const y of scrolls) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(3500);
  const p = `${process.env.SHOT_DIR ?? "."}/${out}-${y}.png`;
  await page.screenshot({ path: p });
  console.log("SHOT", p);
}

const uniq = [...new Set(logs)];
console.log(`LOGS (${uniq.length} unique)`);
for (const l of uniq.slice(0, 40)) console.log(l.slice(0, 300));
await browser.close();
