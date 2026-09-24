# 02 — Design system

**What to build:** The shared visual and motion foundation every later page/component builds on: navy/white/gold-brass colour tokens, Instrument Serif + Inter typography loaded and applied, base UI primitives (button, card, section container, badge), and Framer Motion reveal/hover primitives that respect `prefers-reduced-motion`. Verifiable by a single internal style-guide route (not linked in nav) rendering every token and primitive.

**Blocked by:** 01 — Project foundation

**Status:** ready-for-agent

- [ ] Colour tokens defined (navy base, white, one warm gold/brass accent) and consumed via a single source (CSS variables or Tailwind theme config), not hardcoded hex values in components
- [ ] Instrument Serif (display) and Inter (body) are loaded with correct fallbacks and applied via typographic scale utilities/components
- [ ] Primary/secondary button, card, and section-container primitives exist and are used consistently
- [ ] A `<Reveal>` (fade/slide-in on scroll) and hover-lift primitive exist, built on Framer Motion
- [ ] With `prefers-reduced-motion: reduce` simulated, all motion primitives render their final state immediately with no animation
- [ ] Internal `/style-guide` (or similar, excluded from sitemap/nav) route renders all tokens and primitives for visual review
