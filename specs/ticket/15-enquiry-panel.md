# 15 — Enquiry panel (no backend)

**What to build:** A short panel with the S12 fields (Interested In, Preferred Region, Preferred Country optional, Message) that builds a prefilled WhatsApp or email link and opens the visitor's own app. Nothing is stored or sent by the site.

**Blocked by:** 03, 02

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Options match S12 exactly; country optional
- [ ] Link builder is a pure function: inputs → exact `wa.me` / `mailto:` URL with correct encoding (unit-checked)
- [ ] If no channel is configured, the panel is hidden and 'Book a Consultation' falls back to the Contact page
- [ ] No fetch/XHR/form POST anywhere in the codebase

**Notes:** The panel renders nothing until the client confirms a WhatsApp number or email in `content` (CONTACT). Link builder unit-checked: `npm run check:all`.
