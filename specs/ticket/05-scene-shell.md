# 05 — Persistent scene shell + capability tiers

**What to build:** A lazy-loaded React Three Fiber canvas mounted once in the root layout, surviving route changes, with a Zustand store, tier detection (high/mid/low/none) and a static poster fallback. Starts with a starfield only.

**Blocked by:** 01, 03

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Canvas persists across client navigation (no remount)
- [ ] Tier chosen from GPU/device/reduced-motion/WebGL2; `none` renders poster + CSS backdrop, content unchanged
- [ ] Scene chunk loads on idle; page is interactive without three.js loaded
- [ ] Scene errors fall back to `none` without breaking the page
- [ ] Short review of the brief's reference repos' camera/scroll patterns recorded in the PR notes (patterns only, nothing copied)
