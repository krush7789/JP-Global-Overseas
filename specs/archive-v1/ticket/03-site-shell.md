# 03 — Site shell (header, footer, nav)

**What to build:** The sticky header with full primary navigation and persistent "Book Consultation" CTA, a compact mobile menu, and the full footer (JM Global Overseas | Services | Destinations | About | Contact | Privacy Policy | Terms | Disclaimer | Refund/Cancellation Policy), wrapping every route. Verifiable by visiting the placeholder home route and any dummy sub-route and seeing the identical shell.

**Blocked by:** 02 — Design system

**Status:** ready-for-agent

- [ ] Header shows: Logo (JM GLOBAL OVERSEAS), Home | About Us | Study Abroad | Overseas Careers | Visa & Documentation | Training | Destinations | Contact Us, and a right-side "Book Consultation" CTA
- [ ] Header is sticky on scroll on both desktop and mobile
- [ ] Mobile viewport (375px) collapses navigation into a compact menu; all tap targets are easily tappable
- [ ] Footer contains all links listed in Section 13, each pointing at its real (even if content-empty) route
- [ ] Header/footer render identically across at least two different routes, confirming they're shared layout, not per-page copies
- [ ] Route-render seam test: shell renders with the nav links and CTA present on any page
