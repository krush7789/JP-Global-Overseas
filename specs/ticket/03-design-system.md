# 03 — Design system & UI primitives

**What to build:** Navy/white + brass tokens, Instrument Serif + Inter, and the primitives every act uses: Button (with magnetic variant), GlassPanel, Section shell, Accordion, focus styles.

**Blocked by:** 01

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Tokens single-sourced; no hardcoded hex in components
- [ ] Magnetic button follows cursor subtly; disabled on touch and reduced-motion
- [ ] Text always meets WCAG AA over both glass panels and the dark scene
- [ ] Internal `/style-guide` route renders every primitive
