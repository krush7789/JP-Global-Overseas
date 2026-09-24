# JM Global Overseas — Website Spec

Source of truth: `JM_Global_Overseas_Simple_Modern_Website_Blueprint.docx` (20 sections, read in full). This spec transcribes and structures that document — no content is invented beyond what the blueprint states, except where a design or technical choice was explicitly delegated to and decided by the client (see Implementation Decisions).

## Problem Statement

JM GLOBAL OVERSEAS is an international education, career and overseas-opportunity consultancy operating across Russia, Europe and the Middle East, offering overseas education guidance, visa & immigration documentation assistance, overseas employment/recruitment, manpower placement, international training & skill development, student support, and travel/allied consultancy. The business currently has no website capable of communicating these services with the trust and clarity an international audience of students, graduates, skilled professionals and job seekers requires, and no way to capture and route enquiries from that audience into a consultation pipeline. Without a premium, credible web presence, prospective applicants have no self-serve way to understand what JM Global offers, which regions it covers, or how to start a consultation — and the business has no structured channel for qualified leads.

## Solution

Build a premium, modern, trustworthy consultancy website for JM GLOBAL OVERSEAS that communicates its services, destination expertise (Russia / Europe / Middle East) and enquiry process without unnecessary technology or complex features. The site is content-editable by non-developer staff (services, destinations, FAQs, training programmes, testimonials, legal pages, enquiries) via a CMS admin panel, is mobile-first and fast-loading, and funnels visitors toward two conversions: booking a consultation and submitting a short enquiry form. The architecture deliberately excludes AI assistants, chatbots, document-upload portals, applicant dashboards and login/account systems (blueprint Section 15), and never makes guarantee claims about admission, jobs, salary or visa approval.

## User Stories

1. As a prospective student in Russia, Europe or the Middle East, I want to see a clear headline and hero explaining what JM Global offers, so that I immediately understand the site is relevant to me.
2. As a visitor, I want a sticky header with the primary navigation (Home, About Us, Study Abroad, Overseas Careers, Visa & Documentation, Training, Destinations, Contact Us) and a persistent "Book Consultation" CTA, so that I can navigate or convert from anywhere on the site.
3. As a visitor, I want a short trust/introduction section explaining what JM Global does, so that I can quickly assess credibility before exploring further.
4. As a visitor, I want six clear service cards (Overseas Education, Visa & Documentation, Overseas Employment, Manpower Placement, Training & Skill Development, Student & Travel Support), each with a short description, so that I can identify which service applies to me.
5. As a visitor, I want a visually strong destinations section grouped into three regions (Russia, Europe, Middle East) rather than a wall of country flags, so that I can explore by region without being overwhelmed.
6. As a visitor, I want to see 4–5 factual value propositions for why I should choose JM Global, so that I can evaluate the business without exaggerated claims.
7. As a prospective student, I want a dedicated Study Abroad section/page describing destination, course/programme, university guidance, application guidance, documentation assistance, visa documentation assistance and pre-departure support, so that I understand the full study-abroad journey.
8. As a job seeker, I want a dedicated Overseas Careers section/page describing international employment opportunities, recruitment assistance, manpower placement, profile guidance, documentation coordination, interview preparation (where offered) and pre-departure guidance, so that I understand the recruitment journey.
9. As a visitor, I want a simple 4-step "How It Works" process (Consultation → Profile & Opportunity Discussion → Application/Documentation Guidance → Next Steps & Pre-Departure Support), so that I know what to expect after enquiring.
10. As a visitor, I want a destinations highlight with three regional cards and premium photography, so that I can see the countries/destinations covered per region — understanding that a country is only listed once JM Global confirms the service is actually available there.
11. As a visitor, I want to see genuine testimonials (name, destination, service, shown only with permission) once they exist, so that I can trust the experiences of past clients — and I want the site to never show fabricated or placeholder testimonials as if they were real.
12. As a visitor, I want a concise FAQ section (6–8 questions) covering education, employment, visa/documentation support, destinations, consultation and process, so that I can self-serve common questions.
13. As a visitor, I want a large final CTA banner before the footer inviting me to speak with JM Global, so that I have one more clear conversion point before leaving the page.
14. As a visitor, I want a contact section/page showing the verified office address (Shop No. 110, 1st Floor, Maruti Vatika, Jageetpur Road, Kankhal, Haridwar, Uttarakhand – 249408), so that I know where the business is based — with phone, WhatsApp, email and map appearing only once JM Global has confirmed those details are current.
15. As a prospective applicant from Russia, I want a Russia destination landing page covering Study Abroad, Career/Employment Opportunities, Visa & Documentation Assistance, Student Support and Travel/Pre-Departure Guidance, so that I can explore everything relevant to that region in one place.
16. As a prospective applicant from Europe, I want an equivalent Europe destination landing page with the same structure, so that I get the same depth of information for that region.
17. As a prospective applicant interested in the Middle East, I want a Middle East destination landing page covering Study Abroad, Overseas Employment, Recruitment/Manpower Placement, Visa & Documentation Assistance and Training/Skill Development, so that I get the region-specific service mix that actually applies there.
18. As a visitor on any destination page, I want a consistent template (hero, intro, study opportunities, career opportunities, visa & documentation assistance, who-can-apply guidance, JM Global's process, FAQs, consultation CTA, contact CTA), so that I can navigate any region page with the same mental model.
19. As a prospective student, I want a Study Abroad page with the headline "STUDY ABROAD. THINK GLOBAL." and supporting copy, plus destination selection, course/programme guidance, university/institution guidance, application guidance, documentation assistance, visa documentation assistance and pre-departure support, so that I get full detail on the education service.
20. As a job seeker, I want an Overseas Careers page with the headline "TAKE YOUR CAREER GLOBAL." plus international employment opportunities, recruitment assistance, manpower placement, profile guidance, documentation coordination, interview/preparation support (where offered) and pre-departure guidance, so that I get full detail on the careers service.
21. As a visitor, I want a Visa & Documentation page with the headline "DOCUMENTATION SUPPORT FOR YOUR INTERNATIONAL JOURNEY." that clearly states final visa/immigration decisions are made by the relevant government authority, so that I don't mistake JM Global's role for that of the deciding authority.
22. As a visitor, I want a Training & Skill Development page with the headline "BUILD SKILLS. OPEN GLOBAL OPPORTUNITIES." showing only currently-offered programmes (name, duration, mode, who it's for, key outcomes, registration/enquiry CTA), so that I never see a programme that isn't actually running.
23. As a visitor, I want an About Us page with the headline "CONNECTING PEOPLE WITH GLOBAL OPPORTUNITIES.", a description of all of JM Global's services, an "Our Focus" section (Russia | Europe | Middle East) and an "Our Approach" section (Understand → Guide → Prepare → Support), so that I understand who the business is and how it works.
24. As a visitor, I want a short enquiry form (Full Name, Mobile Number, Email, Interested In, Preferred Region, Preferred Country (optional), Message) with a "Submit Enquiry" CTA, so that submitting a lead takes minimal effort.
25. As a visitor who has just submitted an enquiry, I want a simple confirmation message with call/WhatsApp options, so that I know the submission worked and have an immediate alternative channel.
26. As a visitor, I want the footer to contain JM Global Overseas, Services, Destinations, About, Contact, Privacy Policy, Terms, Disclaimer and Refund/Cancellation Policy links, so that I can find legal and secondary information from any page.
27. As a mobile visitor, I want every page and CTA to be designed mobile-first and easy to tap, so that the experience is not degraded on a phone.
28. As a visitor with motion sensitivity, I want animations limited to subtle fade/slide/hover effects that respect my reduced-motion preference, so that the site doesn't cause discomfort.
29. As a staff member at JM Global, I want a CMS admin panel where I can update services, destinations, FAQs, training programmes, testimonials, legal page text and contact details myself, so that I don't need a developer for routine content changes.
30. As a staff member, I want every submitted enquiry stored in the CMS and to receive an email notification when one arrives, so that no lead is lost even if email delivery fails.
31. As a staff member, I want the enquiry form protected against spam submissions, so that the enquiries I review are genuine.
32. As a search engine, I want SEO-friendly URLs, titles, descriptions and a sitemap built around the three core regions and actual services offered, so that JM Global's pages can be indexed and found for relevant queries.
33. As the business owner, I want Google Analytics and Search Console connected, so that I can measure traffic and enquiry conversion.
34. As the business owner, I want the site secured with SSL/HTTPS and kept up to date with backups and security updates, so that visitor data and business reputation are protected.
35. As a visitor, I want the site to never claim guaranteed admission, guaranteed jobs, guaranteed salaries, guaranteed visa approval, "No.1" status or unsubstantiated "100% success" claims, so that I am not misled about outcomes that are ultimately decided by third parties (universities, employers, government authorities).
36. As a visitor, I want the site to never present an AI assistant, chatbot, document-upload portal, applicant dashboard or account/login system, so that the experience stays simple and matches what was actually promised.

## Implementation Decisions

**Stack.** Next.js (App Router) with Payload CMS 3 embedded in the same application (single repo, single Vercel deployment). Database: Neon Postgres (serverless). Media storage: local disk via Payload's default upload handling (revised — R2/S3 dropped at the client's request; flagged risk: an ephemeral-filesystem host like Vercel won't persist uploads across deploys, revisit with a persistent adapter if that matters in production). Hosting: Vercel.

**Design tokens.** Navy/white base palette with a single restrained accent: warm gold/brass, used sparingly for CTAs, underlines and active nav states. Typography: Instrument Serif for display/headings, Inter for body text and forms. One consistent icon style across all service/value-prop icons.

**Hero.** Full-bleed video (webm primary, mp4 fallback, static poster image for slow connections/first paint) with a navy scrim, the Section 3 headline and both CTAs (primary: Book a Consultation; secondary: Explore Destinations) laid over it. The component exposes a playback-control seam (e.g. a `playbackMode` prop) so that scroll- or hover-driven playback can be added later without restructuring the component; ships initially as autoplay-muted-loop with `prefers-reduced-motion` support (falls back to the poster image, no motion).

**Destinations layout.** Three full-height photo panels (Russia / Europe / Middle East) side by side on desktop, each a full-bleed photograph with the region name overlaid; hover lifts the image and reveals a one-line sub-description. Stacks to three tall cards on mobile. Used identically on the homepage (Section 4.05, 4.10) and linked through to the three regional landing pages.

**Imagery.** Free licensed stock photography (Unsplash/Pexels), realistic and high-quality (education, professional, travel contexts) per Section 14. Every image used is recorded in-repo with its source URL and licence terms. No AI-generated or collage-style stock imagery.

**Motion.** Framer Motion for scroll-reveal fade/slide and hover interactions only — no page-transition gimmicks, no parallax beyond what's described above. All animation respects `prefers-reduced-motion: reduce` (falls back to instant, static states).

**CMS content model (Payload collections/globals).**
- `Services` — the six homepage service cards (title, short description, icon, optional learn-more link)
- `Destinations` — the three regions, each with: hero copy, study/career/visa/support content blocks (per the Section 6 template), and a list of confirmed countries (a country only appears once explicitly marked "service available")
- `TrainingPrograms` — name, duration, mode, who-it's-for, key outcomes, registration/enquiry CTA; only programmes marked "currently offered" render on the Training page
- `Testimonials` — name, destination, service, permission-confirmed flag, `isPlaceholder` flag (see below)
- `FAQs` — question, answer, category (used across homepage FAQ and the standalone FAQs page)
- `LegalPages` — one document per legal route (Privacy Policy, Terms & Conditions, Disclaimer, Refund/Cancellation Policy), rich-text body field, ships empty (see Out of Scope)
- `Enquiries` — every form submission (full name, mobile, email, interested-in, preferred region, preferred country, message, timestamp, spam-check result)
- `Contact` (global) — address (pre-filled with the verified Haridwar address), phone, email, WhatsApp number, Google Maps link — all optional except address; any CTA depending on an empty field does not render

**Testimonials at launch.** Ships with visibly-marked placeholder entries (`isPlaceholder: true`), never presented as genuine. A dedicated pre-launch ticket (18) audits and requires every placeholder be replaced or removed before the site goes live, honouring Section 11's "genuine testimonials only" instruction.

**Contact details at launch.** Only the verified address from the blueprint is seeded. Phone, email, WhatsApp and map are left as empty CMS fields; the site conditionally hides click-to-call, WhatsApp float/button and the map embed until staff fill them in. Nothing unverified ships.

**Legal pages.** Routes, footer links and CMS rich-text fields are built for all four (Privacy Policy, Terms & Conditions, Disclaimer, Refund/Cancellation Policy). No body copy is authored as part of this build — legal text must come from the client or their legal counsel, consistent with keeping the docx (which contains no such text) as the sole content source.

**Enquiry pipeline.** Server action validates input, verifies Cloudflare Turnstile (spam protection, no user-facing puzzle), persists the submission to the `Enquiries` collection, and sends a notification email to staff via Resend. On success, the form shows a confirmation message with call/WhatsApp options (only the options for which contact data exists).

**Visa & Documentation page.** Must explicitly state that final visa/immigration decisions are made by the relevant government authority (Section 9 requirement) — this is treated as a fixed, non-optional line of copy taken directly from the blueprint, not invented content.

## Testing Decisions

Good tests here assert observable, external behaviour — what a page renders given its content, what a form submission returns given its input — never internal implementation details (component state, CSS classes, Payload internals).

Two seams cover the whole build, plus a build-level smoke check:

1. **Route render seam.** Render any page route against a stubbed content layer (fake `Services`, `Destinations`, `Contact`, etc.) and assert on the rendered output. Covers all 15 routes with one seam. Includes negative-case tests: no WhatsApp/call CTA renders when the corresponding contact field is empty; no `TrainingProgram` renders unless marked currently-offered; testimonial placeholders are visibly marked, never rendered as genuine.
2. **Enquiry submission seam.** The `submitEnquiry` server action, entered with form data and exited with a typed result. Covers validation, Turnstile verification, persistence and email dispatch as one boundary. Turnstile and Resend clients are stubbed at their module boundary — the seam is the action, not the third-party SDKs.
3. **Build smoke.** `next build` succeeds and every route in the Section 16 sitemap resolves (200, not 404/500).

No per-component test seam is introduced. Browser-level end-to-end testing (e.g. via Playwright) is out of scope for this pass — the Playwright MCP server was unavailable this session; revisit if/when reconnected.

Prior art: none yet — this is a greenfield repo (no commits, no existing test setup).

## Out of Scope

Per blueprint Section 15, explicitly excluded from this build, permanently unless a future spec revises it:
- AI assistant or chatbot/chatbox of any kind
- Document upload portal
- Complicated applicant dashboard
- Logins or account creation
- Dozens of individual country pages at launch (only Russia/Europe/Middle East regional pages, plus country pages later only where JM Global has active, verified service)
- Fake counters or unsupported success percentages
- Guaranteed-admission, guaranteed-jobs, guaranteed-salary or guaranteed-visa-approval claims
- "No.1", "100% success" or similar claims unless legally substantiated

Also out of scope for this build (deferred to later, separate work):
- Legal page body copy (Privacy Policy, Terms & Conditions, Disclaimer, Refund/Cancellation Policy) — client/legal-counsel supplied
- Real testimonial content — client-supplied, gated by ticket 18
- Phone/email/WhatsApp/map data — client-supplied when confirmed
- The detailed hero-video generation prompt — a separate task to follow this spec/ticket set
- Browser-level E2E testing via Playwright — MCP server unavailable this session
- CRM integration beyond Payload storage + email notification (no CRM was named/authorized)

## Further Notes

- The docx is the sole source of truth for all content. Where it specifies a heading or line of copy verbatim (e.g. "YOUR JOURNEY TO A GLOBAL FUTURE STARTS HERE.", "STUDY ABROAD. THINK GLOBAL.", the Section 19 final homepage copy block), that exact text is used — not a paraphrase.
- Every design decision not specified by the docx (colour, typography, hero treatment, destinations layout, imagery source, motion library, testimonial/contact/legal handling at launch, hosting, ticket granularity) was raised as an explicit question and decided by the client before this spec was finalized; none were made unilaterally.
- Country-level destination pages beyond the three regions are intentionally deferred — Section 5 states not to create a page per country at launch, only adding one once JM Global confirms active, verified service there.
- SEO topic clusters (Section 17) and analytics/search console wiring (Section 18) are functional requirements captured in tickets, not separate content to draft now.
