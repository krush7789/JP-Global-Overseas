# 11 — Visa & Documentation page

**What to build:** `/visa-documentation`, per Section 9: headline "DOCUMENTATION SUPPORT FOR YOUR INTERNATIONAL JOURNEY.", structured assistance blocks (document guidance, application preparation assistance, process guidance, destination-specific information where verified, applicant support), and the mandatory disclaimer line that final visa/immigration decisions are made by the relevant government authority.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] Headline matches Section 9 verbatim
- [ ] All five listed content blocks render
- [ ] The government-authority disclaimer sentence renders prominently on this page, worded exactly as the blueprint states the intent ("final visa/immigration decisions are made by the relevant government authority")
- [ ] "Destination-specific information" block only shows content explicitly marked verified in the CMS — nothing unverified renders
- [ ] Page is reachable from the header nav ("Visa & Documentation") and from the footer/sitemap
- [ ] Route-render seam test asserts the disclaimer text is present
