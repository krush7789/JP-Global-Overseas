# 19 — Post-processing, particles & cursor polish

**What to build:** Light bloom + vignette, route-dust particles, subtle cursor depth — high tier only, verified against the fps budget.

**Blocked by:** 09, 10, 11, 12, 13

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Post-processing off below `high`
- [ ] Particles/stars instanced; measured draw-call count noted
- [ ] Effects pause when the canvas is off-screen or the tab is hidden
- [ ] Restrained brass glow only — no neon

**Open:** Bloom/vignette/sparkles run on the high tier only; effect strength and fps not yet measured on real hardware.
