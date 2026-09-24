# 06 — Enquiry pipeline

**What to build:** The Section 12 enquiry form (Full Name, Mobile Number, Email, Interested In, Preferred Region, Preferred Country (optional), Message) and its full submission pipeline end to end: client validation → Cloudflare Turnstile verification → persistence to the `Enquiries` collection → staff email notification via Resend → on-screen confirmation with call/WhatsApp options (only for channels with data, per ticket 04).

**Blocked by:** 03 — Site shell, 04 — Contact globals

**Status:** ready-for-agent

- [ ] `Enquiries` collection exists in Payload with all form fields plus timestamp and a spam-check result field
- [ ] Submitting valid data persists a record, sends a staff notification email, and shows the confirmation message with call/WhatsApp options reflecting current `Contact` global data
- [ ] Submitting invalid data (missing required field, malformed email/mobile) is rejected with a clear inline error, no record persisted
- [ ] A failed Turnstile verification rejects the submission before persistence
- [ ] A simulated email-send failure still leaves the enquiry persisted (email failure never loses the lead)
- [ ] Enquiry-submission seam tests cover: valid submit, invalid input, failed Turnstile, failed email send
- [ ] Turnstile and Resend clients are stubbed at their module boundary in tests — no real network calls in the test suite
- [ ] The reusable form component is built once and consumed wherever the enquiry form appears (homepage, contact page, elsewhere)
