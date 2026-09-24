# 15 — Contact page

**What to build:** `/contact`, per Section 4.14: the verified address, a conditional map embed slot (renders only once `mapsLink` is set in the `Contact` global), and the enquiry form from ticket 06 embedded directly on the page.

**Blocked by:** 06 — Enquiry pipeline

**Status:** ready-for-agent

- [ ] Address renders from the `Contact` global
- [ ] Map embed renders only when `mapsLink` is set; otherwise no broken/empty map placeholder shows
- [ ] Click-to-call and WhatsApp buttons render only when their respective fields are set
- [ ] The enquiry form (from ticket 06) is embedded and fully functional on this page
- [ ] Page is reachable from the header nav ("Contact Us") and from the footer/sitemap
- [ ] Route-render seam tests cover: all contact fields empty, all contact fields filled
