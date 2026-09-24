# 18 — Pre-launch content gate

**What to build:** A final audit ticket that exists specifically because testimonials shipped as visible placeholders (ticket 14). Before this ticket can be marked done, every placeholder testimonial must be replaced with a genuine, permission-confirmed one or removed entirely, and a full sweep of the live site must confirm no Section 15 prohibited claim or unverified content is present.

**Blocked by:** 17 — SEO, analytics & performance

**Status:** ready-for-agent

- [ ] Zero testimonials with `isPlaceholder: true` remain on any publicly deployed page — either replaced with real, `permissionConfirmed: true` entries or removed
- [ ] Text-search the full built site for prohibited phrasings: "No.1", "100%", "guaranteed", "guarantee" — any hit is either removed or confirmed as a legitimate non-claim use (e.g. inside legal boilerplate) and documented
- [ ] No country renders in any Destinations content that isn't explicitly marked "service available" in the CMS
- [ ] No `TrainingProgram` renders unless marked `isCurrentlyOffered: true`
- [ ] Contact CTAs (call/WhatsApp/map) reflect only currently-confirmed data — no leftover empty-state artifacts
- [ ] Accessibility pass: keyboard navigation reaches every interactive element; colour contrast of gold-on-navy and gold-on-white meets WCAG AA for text use
- [ ] Full mobile pass (375px) across every route: no horizontal scroll, no clipped CTAs
- [ ] Sign-off recorded in this ticket confirming the site is ready for real client contact data and legal copy to be dropped in
