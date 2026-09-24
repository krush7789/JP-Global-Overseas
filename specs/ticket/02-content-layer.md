# 02 — Content layer (verbatim from the blueprint)

**What to build:** Typed static modules under `content/` holding every piece of blueprint copy: nav, hero, services, regions and per-region service lists, value props, four steps, FAQs, page copy for all sitemap pages, contact, legal titles. Empty arrays mean 'do not render'.

**Blocked by:** 01

**Status:** done

- [x] Copy matches the docx verbatim (headlines, S4, S5, S6, S7–S11, S19); no invented text
- [x] FAQ answers composed only from blueprint statements; each flagged `needsClientApproval`
- [x] `testimonials`, `trainingPrograms`, `legal.*.body`, contact phone/email/whatsapp default to empty
- [x] Unit check: every sitemap route in S16 has a content entry; empty collections yield no rendered section

**Notes:** FAQ answers are composed from blueprint statements and flagged `needsClientApproval`; the blueprint supplies question examples only. Teaser titles reuse the S7/S8 headlines.
