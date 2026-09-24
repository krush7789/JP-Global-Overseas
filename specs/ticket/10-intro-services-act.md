# 10 — Intro + Services act

**What to build:** S4.03 intro line and the six S4.04 service cards, with six orbiting service nodes that light up in sync with card hover/focus.

**Blocked by:** 09

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Six cards use the exact blueprint descriptions
- [ ] Hover/focus on a card highlights its node and vice-versa
- [ ] Nodes are instanced and appear in one staggered orbit-in
- [ ] Cards work without the scene (tier `none`)

**Notes:** The canvas is intentionally non-interactive (fixed behind content, pointer-events none) so all content stays clickable. Card→node highlight is implemented; node→card (hovering the 3D node) is dropped for that reason.
