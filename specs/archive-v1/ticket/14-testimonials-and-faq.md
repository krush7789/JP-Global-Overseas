# 14 — Testimonials & FAQ

**What to build:** The `Testimonials` and `FAQs` CMS collections; the homepage testimonials block (Section 11) and FAQ block (Section 12); and the two standalone pages `/success-stories` and `/faqs`. Testimonials ship as visibly-marked placeholders (`isPlaceholder: true`) per the locked decision — never rendered as if genuine.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] `Testimonials` collection exists with fields: name, destination, service, permissionConfirmed (boolean), isPlaceholder (boolean)
- [ ] `FAQs` collection exists with fields: question, answer, category
- [ ] Homepage and `/success-stories` render testimonials with a clear, visible "placeholder" indicator when `isPlaceholder: true` (e.g. a visible badge/label) — this is a hard requirement per Section 15/11's "genuine only" instruction and the pre-launch gate (ticket 18)
- [ ] A testimonial with `permissionConfirmed: false` never renders on any public page even if `isPlaceholder: false`
- [ ] Homepage FAQ block and `/faqs` render 6–8 concise FAQs covering education, employment, visa/documentation, destinations, consultation and process (Section 4.12 examples)
- [ ] Route-render seam tests cover: placeholder-marked testimonial (badge visible), permission-not-confirmed testimonial (hidden), and the FAQ list
