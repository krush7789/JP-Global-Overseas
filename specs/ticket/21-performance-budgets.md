# 21 — Performance & asset budgets (+ WebGPU spike)

**What to build:** Enforce the architecture budgets and run a time-boxed WebGPU evaluation with a written go/no-go.

**Blocked by:** 19, 20

**Status:** not started

- [ ] Pre-scene JS ≤ 200 KB gz, scene chunk ≤ 250 KB gz, textures within budget (measured)
- [ ] Draco/KTX2 applied to any shipped GLB/texture; no unnecessary high-poly assets
- [ ] Lighthouse mobile/desktop results recorded
- [ ] WebGPU spike ≤ 1 day; adopt only if a measurable win with a clean WebGL fallback; decision written down
