# 07 — Homepage core sections (Services, Why Us, How It Works)

**What to build:** The remaining structural homepage sections that aren't destinations/testimonials/FAQ/final-CTA: Section 04 (Our Services — six cards, CMS-driven from the `Services` collection), Section 06 (Why JM Global Overseas — 4–5 value props), and Section 09 (How It Works — 4 numbered steps). Verifiable by viewing the homepage in sequence.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] `Services` collection exists in Payload; homepage renders exactly the six services from Section 4.04 (title, description, icon, optional learn-more link) sourced from the CMS, not hardcoded
- [ ] Why Us section renders the 4–5 factual value propositions from Section 4.06 verbatim
- [ ] How It Works renders the 4 steps from Section 4.09 verbatim, in order
- [ ] Each section uses the design-system card/section primitives from ticket 02
- [ ] Route-render seam test: homepage renders all three sections with their expected copy when given stubbed `Services` data
- [ ] Editing a service's description in `/admin` changes the rendered homepage without a code change
