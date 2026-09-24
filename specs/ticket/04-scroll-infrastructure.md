# 04 — Scroll infrastructure (Lenis + GSAP ScrollTrigger)

**What to build:** Smooth scrolling with Lenis bridged to ScrollTrigger, a shared `sceneRig` progress object, an act/section registry, and anchor navigation that animates instead of jumping.

**Blocked by:** 03

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Lenis drives scroll; ScrollTrigger scrub is exact (scroller proxy)
- [ ] Nav/anchor clicks call `lenis.scrollTo` with eased duration; no hard cuts
- [ ] Scroll writes to a mutable rig, not React state; no per-tick re-renders
- [ ] Reduced-motion disables Lenis smoothing and scrub-driven motion
- [ ] No `preventDefault` scroll blocking anywhere (structural pinning only)
