# 08 — Destinations (homepage panels + regional landing pages)

**What to build:** The `Destinations` CMS collection (Russia, Europe, Middle East), the three full-height photo panel component used on the homepage (Sections 4.05 and 4.10), and the three regional landing pages built on the Section 6 template (hero, intro, study opportunities, career opportunities, visa & documentation assistance, who-can-apply guidance, JM Global process, FAQs, consultation CTA, contact CTA). Region-specific service mix follows Section 5 exactly (e.g. Middle East gets Recruitment/Manpower Placement and Training, Russia/Europe don't).

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] `Destinations` collection exists with fields for hero copy, each Section 6 template block, and a list of confirmed countries per region
- [ ] Homepage renders three full-height panels (Russia/Europe/Middle East), hover-lift on desktop, stacked full-width cards on mobile viewport (375px)
- [ ] Each panel links to its corresponding regional landing page
- [ ] `/destinations/russia`, `/destinations/europe`, `/destinations/middle-east` each render the full Section 6 template with region-appropriate content per Section 5's service mix
- [ ] A country only appears in a region's country list if explicitly marked "service available" in the CMS — an unmarked country never renders
- [ ] No individual country has its own route at this stage (Section 5: regional pages first, country pages only later where verified)
- [ ] Route-render seam tests cover all three regional pages plus the homepage panel component
