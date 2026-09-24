// node scripts/probe.mjs — inspects the WebGL canvas layout/state in a real browser.
import { chromium } from "playwright-core";

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"],
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const logs = [];
page.on("console", (m) => logs.push(`[${m.type()}] ${m.text()}`));
page.on("pageerror", (e) => logs.push(`[pageerror] ${e.message}`));
await page.goto(process.argv[2] ?? "http://localhost:3000/", { waitUntil: "load" });
await page.waitForTimeout(9000);

const r = await page.evaluate(() => {
  const c = document.querySelector("canvas");
  if (!c) return { canvas: null };
  const rect = (e) => { const b = e.getBoundingClientRect(); return [Math.round(b.x), Math.round(b.y), Math.round(b.width), Math.round(b.height)]; };
  const chain = [];
  for (let e = c; e && e !== document.body; e = e.parentElement) {
    const s = getComputedStyle(e);
    chain.push({ tag: e.tagName, cls: (e.className || "").toString().slice(0, 60), rect: rect(e), pos: s.position, z: s.zIndex, bg: s.backgroundColor, op: s.opacity, vis: s.visibility });
  }
  const gl = c.getContext("webgl2");
  return { attrs: [c.width, c.height], chain, glLost: gl ? gl.isContextLost() : "no-ctx-getter", topAtCentre: document.elementFromPoint(720, 450)?.tagName };
});
console.log(JSON.stringify(r, null, 1));
console.log([...new Set(logs)].slice(0, 20).join("\n"));
await browser.close();
