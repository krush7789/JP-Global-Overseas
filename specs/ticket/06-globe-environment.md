# 06 — Globe & environment

**What to build:** Photoreal Earth: day map, night lights blended by light direction, cloud layer, atmosphere glow, stars, lighting — quality-tiered.

**Blocked by:** 05

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Earth textures from NASA or Solar System Scope with licence rows in `public/CREDITS.md`
- [ ] 2k/1k textures on mid/low tiers, 4k on high; compressed (KTX2/WebP)
- [ ] Atmosphere and clouds are procedural shaders, no extra assets
- [ ] Holds ≥ 60fps desktop / ≥ 30fps mid mobile at hero pose (measured, noted)

**Notes:** One texture set ships (NASA day 2048 + night 3600x1800 JPG) — no separate 4k/1k variants and no KTX2 yet (no image tooling in this environment); revisit in ticket 21.
