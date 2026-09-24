# JM Global Overseas — Static 3D Website Spec (v2)

Source of truth: `JM_Global_Overseas_Simple_Modern_Website_Blueprint.docx`. Architecture: `specs/3d-architecture.md`. Supersedes `specs/archive-v1/` (Payload/Neon prototype, rejected by the client).

## Problem Statement
The client rejected the CMS-backed prototype. They want a premium, immersive, **static** frontend for JM GLOBAL OVERSEAS — no backend of any kind — that makes a visitor feel they are exploring an interactive 3D world rather than scrolling a normal consultancy site, while still communicating the blueprint's services, three regions, four-step process and enquiry path.

## Solution
A statically exported Next.js site with one persistent React Three Fiber scene — "The Journey Globe" — behind real HTML content. Scroll drives camera flights from the Haridwar office to Russia, Europe and the Middle East, and the four-step process is a flight path. All copy is transcribed from the blueprint into typed static content modules. Content is always readable without the 3D scene (reduced motion, no WebGL, low-end devices).

## User Stories
1. As a prospective student/professional, I want the hero to state "YOUR JOURNEY TO A GLOBAL FUTURE STARTS HERE." with Book a Consultation / Explore Destinations CTAs, so I understand the offer at once.
2. As a visitor, I want scrolling to fly a 3D globe camera between regions, so the journey metaphor is felt rather than read.
3. As a visitor, I want the six services shown with their blueprint descriptions, and to see which 3D node relates to which service on hover.
4. As a visitor, I want Russia, Europe and the Middle East presented as three distinct destinations I can click into.
5. As a visitor, I want the four-step process (Consultation → Profile & Opportunity Discussion → Application/Documentation Guidance → Next Steps & Pre-Departure Support) shown as a route I follow.
6. As a visitor, I want five factual reasons to choose JM Global, with no exaggerated claims.
7. As a visitor, I want Study Abroad and Overseas Careers teasers linking to their full pages.
8. As a visitor, I want a short FAQ answered only with facts stated in the blueprint.
9. As a visitor, I want Study Abroad, Overseas Careers, Visa & Documentation (with the government-authority disclaimer), Training, About, region pages, Success Stories, FAQs, Contact and legal pages, exactly as the sitemap lists.
10. As a visitor, I want the header to be sticky and nav clicks to animate smoothly to their target, never hard-cutting.
11. As a mobile visitor, I want a lighter, working experience — and if my device can't run WebGL, the same content on a static backdrop.
12. As a visitor with reduced-motion preference, I want no camera flights or parallax.
13. As a visitor, I want to start an enquiry (Interested In / Region / Country / Message) and have it open WhatsApp or email prefilled, since nothing can be submitted to a server.
14. As a visitor, I want the office address shown, and phone/email/WhatsApp only if the client has confirmed them.
15. As the client, I want no backend, database, login, upload, chatbot or analytics — just static files I can host anywhere.
16. As the client, I want no guarantee/“No.1”/fake-counter claims anywhere (S15).
17. As the client, I want testimonials, training programmes and legal text to appear only when I supply real content.

## Implementation Decisions
- Next.js 15 + TypeScript, `output: 'export'`, Tailwind v4, React 19. Read `node_modules/next/dist/docs/` before writing Next code (project AGENTS.md).
- 3D: three, @react-three/fiber, @react-three/drei, @react-three/postprocessing; GSAP + ScrollTrigger; Lenis; Zustand for coarse state; Framer Motion only for small UI transitions. WebGL2 default; WebGPU = time-boxed spike.
- Visual identity carried over: navy/white + brass accent, Instrument Serif + Inter.
- Persistent canvas in the root layout; route → camera-pose map; per-frame values in a mutable rig, not React state.
- Assets: procedural first (globe geometry, routes, beacons, particles), NASA/Poly Haven/Kenney-Quaternius only where needed, each licence recorded in `public/CREDITS.md`.
- Content: typed modules under `content/`; empty ⇒ not rendered. FAQ answers composed only from blueprint statements and flagged for client approval.
- Enquiry: client-side prefilled `wa.me` / `mailto:` builder; hidden if no channel configured.
- Region markers are region-level glow points, not country polygons or city claims.
- Hero video prototype clip is retired from v2 (kept out of the build).

## Testing Decisions
- Test external behaviour only. Seams: (1) **content→page render** (each route renders its blueprint copy; empty data hides sections/CTAs); (2) **enquiry link builder** (inputs → exact `wa.me`/`mailto` URL, encoding, hidden when unconfigured); (3) **tier selection** (capability inputs → tier, reduced-motion/no-WebGL → `none`); (4) build smoke: `next build` produces `out/` and every sitemap route exists.
- 3D visual quality is verified manually per ticket on desktop + a mid mobile profile; Playwright is unavailable this session.

## Out of Scope
CMS/admin, database, server actions/API routes, form submission storage, email routing, spam protection, analytics/Search Console, backups, maps embed, auth/uploads/dashboard/chatbot, per-country pages, fake counters, any guarantee/superlative claims, WebGPU as a hard requirement.

## Further Notes
- Prototype code in the working tree is archived, not deleted (ticket 01). The Neon connection string in `.env` should be rotated by the client since it was pasted into a chat; v2 does not use it.
- Open items needing the client: real phone/WhatsApp/email, testimonials, training programmes, legal text, FAQ answer approval, "Sacred-G" reference URL.
