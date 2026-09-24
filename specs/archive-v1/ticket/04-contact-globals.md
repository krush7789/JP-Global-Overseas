# 04 — Contact globals

**What to build:** The `Contact` global in Payload (address, phone, email, WhatsApp number, Google Maps link), pre-seeded with only the verified Haridwar address. A reusable `useContact()`/data-fetch pattern that later tickets (hero, header, footer, contact page, enquiry confirmation) consume, where any CTA depending on an empty field simply does not render.

**Blocked by:** 01 — Project foundation

**Status:** ready-for-agent

- [ ] `Contact` global exists in Payload admin with fields: address (pre-filled, required), phone (optional), email (optional), whatsapp (optional), mapsLink (optional)
- [ ] Address renders wherever contact info is shown
- [ ] With phone/email/whatsapp/mapsLink all empty, no click-to-call, mailto, WhatsApp, or map UI renders anywhere that consumes this global
- [ ] Filling in any one field in the admin panel makes its corresponding CTA appear without a code change
- [ ] Route-render seam test covers both the "all empty" and "all filled" states
