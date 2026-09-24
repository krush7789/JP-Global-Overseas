# 20 — Mobile, reduced-motion & no-WebGL pass

**What to build:** End-to-end verification and fixes for tiers mid/low/none, touch input, reduced motion and scene failure across every route.

**Blocked by:** 09, 10, 11, 12, 13, 14, 16, 17, 18

**Status:** partial — tier logic unit-checked; on-device behaviour unverified

- [ ] Every route fully usable and readable in tier `none`
- [ ] Reduced-motion: no camera flights, parallax or scrub motion
- [ ] Mid/low tiers meet ≥ 30fps on a mid mobile profile (noted)
- [ ] Live `PerformanceMonitor` downgrade works without visual glitches

**Open:** measure fps on a mid-mobile profile; verify PerformanceMonitor live downgrade (not implemented yet — tier is chosen once at load).
