# 22 — Static SEO + launch gate

**What to build:** Static metadata per route, sitemap.xml and robots.txt from the S16 sitemap, a scan for prohibited claims/placeholders, and a final static-export check.

**Blocked by:** 21, 17, 18

**Status:** partial — sitemap, robots, claims scan done; launch checklist open

- [ ] Unique title/description per route matching S17 topic clusters; sitemap lists every S16 route
- [ ] Scan finds no 'No.1', '100%', or guarantee claims (S15)
- [ ] No unconfirmed contact values, invented testimonials or invented country claims ship
- [ ] `out/` serves correctly from a plain static file server; no network calls at runtime beyond static assets
- [ ] Open client items list (phone/email/WhatsApp, testimonials, programmes, legal text, FAQ approval) attached

**Open before launch:** client items (phone/WhatsApp/email, testimonials, training programmes, legal text, FAQ approval, domain for SITE_URL). `node scripts/scan-claims.mjs` passes on the current build.
