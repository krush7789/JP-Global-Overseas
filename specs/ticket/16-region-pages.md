# 16 — Region pages + Destinations index

**What to build:** Destinations index and /destinations/russia, /europe, /middle-east on the S6 template with the S5 per-region service lists, each parking the camera over its region on the persistent scene.

**Blocked by:** 05, 06, 07, 08, 02

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Service lists per region exactly as S5 (Middle East differs from Russia/Europe)
- [ ] Only S6 blocks that have supplied text render; no invented copy
- [ ] Camera pose changes on navigation without remounting the canvas
- [ ] No per-country pages

**Notes:** S6 blocks with no supplied body text (intro, study, career, who-can-apply, process) are omitted on region pages; the S5 service list, generic FAQ and CTAs render.
