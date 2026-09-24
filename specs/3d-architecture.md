# JM Global Overseas — 3D Static Experience: Architecture

Source of truth for business, content, sections and IA: `JM_Global_Overseas_Simple_Modern_Website_Blueprint.docx`.
Superseded: the Payload/Neon prototype (archived in `specs/archive-v1/`). The client wants a **static frontend only**.

## 0. Blueprint analysis — what carries over, what is dropped

**Carried over (verbatim content, structure, IA):** Sections 3–14 (hero, homepage structure, destination architecture, page templates), 16 (sitemap), 19 (final copy), tone (Section 2), visual identity (navy/white + one brass accent, Instrument Serif + Inter, Section 14), and every prohibition in Section 15 (no guarantee claims, no fake counters, no invented country/service claims).

**Dropped per client instruction (ignore the blueprint where it asks for these):** CMS/admin (S18), enquiry-form submission/CRM/email routing (S12, S18), spam protection (S18), analytics/Search Console (S18), backups/security updates (S18), maps *embed* (a plain link replaces it — no third-party frame), any login/upload/dashboard (already excluded by S15).

**Consequences of "static":**
- All content lives in typed TypeScript modules transcribed from the docx (`content/`). Empty data = the section/CTA does not render (docx: "only after confirming", "genuine testimonials only", "only currently offered programs").
- Next.js `output: 'export'` → `out/` deployable to any static host. No API routes, no server actions, no database.
- The enquiry path is client-side only: a panel that builds a prefilled WhatsApp / email link from the visitor's choices and opens their own app. Nothing is stored anywhere.

## 1. Experience concept — "The Journey Globe"

One persistent 3D Earth is the whole site's stage. The hero copy is literal: *"YOUR JOURNEY TO A GLOBAL FUTURE STARTS HERE."* Scrolling **is** the journey. The camera leaves orbit, lands on each of the three regions, and follows a flight path that becomes the blueprint's four-step process. The origin of every route is the real office location from Section 14 — **Kankhal, Haridwar (29.95°N, 78.16°E)** — so the story is "from here, to there".

Design rules, from the brief:
- 3D carries meaning: camera moves = navigation; routes = the process; beacons = regions. No decorative spinning object per section.
- Real HTML for all reading content (accessible, indexable, readable with the scene off). Canvas is a fixed layer behind it.
- Tone stays premium and restrained (S2/S14): dark navy space, restrained brass route light, no neon.

Region anchors are **region-level glow points, not country polygons and not city claims** (S5/S10: do not imply service in a country until confirmed): Russia ≈ (58°N, 60°E), Europe ≈ (50°N, 12°E), Middle East ≈ (27°N, 45°E), Origin Haridwar (29.95°N, 78.16°E). Coordinates are tunable constants.

## 2. Section-by-section 3D interaction plan (Homepage, S4)

| # | Blueprint section | Scene behaviour | HTML layer |
|---|---|---|---|
| 01 | Header/Nav | Persistent; nav clicks trigger Lenis scroll + camera transition, never a hard cut | Sticky header, compact mobile menu, "Book Consultation" |
| 02 | Hero | Orbit view of the globe from Origin's hemisphere; slow drift; cursor parallax | Headline + supporting copy + two CTAs reveal in sequence |
| 03 | Trust/Intro | Camera eases back and tilts; atmosphere brightens | Intro line (S4.03 copy) |
| 04 | Our Services | Six small nodes orbit the globe (one per service); hovering a card lights its node and vice-versa | Six service cards (S4.04 copy) |
| 05+10 | Explore/Destinations highlight (merged, as previously decided) | Three pinned scroll beats: camera flies to Russia → Europe → Middle East, beacon pulses, halo grows | Region name + sub-line panel per beat; click → region page. Reduced/mobile: stacked panels |
| 06 | Why JM Global | Camera holds wide; five points light five small ring markers around the route origin | 5 factual value props |
| 07 | Study Abroad | Arc from Haridwar to the regions in **brass**; plane runs it once | Teaser copy + CTA |
| 08 | Overseas Careers | Second set of arcs in a **lighter tone**; second plane run | Teaser copy + CTA |
| 09 | How It Works | **Centerpiece.** One route with four waypoints; camera chases the plane along it; each waypoint lights as reached | 4 steps, revealed per waypoint |
| 11 | Testimonials | Scene calms (no motion beyond slow drift) | Renders only if `content/testimonials` has entries |
| 12 | FAQ | Globe dims/blurs to background | Accessible accordion |
| 13 | Final CTA | Camera pulls back to the full globe; brass arcs pulse once | Large banner, magnetic CTA |
| 14 | Contact | Static globe, Origin beacon highlighted | Address (S4.14 copy), channels only if configured |

**Inner pages** reuse the same persistent scene with a route-specific *camera pose* (no reload, no new canvas): Russia/Europe/Middle East pages park the camera over their region; Study Abroad/Careers show the matching arcs; Visa & Documentation, About, Training, FAQ, Contact, Success Stories, legal use a calm wide pose.

## 3. Camera choreography

- Globe radius 1. Camera on a `CatmullRomCurve3` through waypoints; separate look-at curve. Progress `t∈[0,1]` per act comes from ScrollTrigger; the camera **lerps toward** the target each frame (damping ≈ 0.08), so scrubbing never jerks.
- Poses (distance from origin, target): Hero 3.4 (Origin hemisphere) · Intro 3.8 · Services 4.2 · Russia 1.9 · Europe 1.9 · Middle East 1.9 (each with ~25° pitch) · Journey 3.0 · HowItWorks 2.2→1.6 chase · Final 4.4.
- Transitions between acts: 0.9–1.4 s eased (`power3.inOut`-equivalent), overlapping HTML opacity fades so text never appears over a moving camera mid-cut.
- Cursor parallax: ±0.03 rad camera offset, disabled on touch and reduced-motion.

## 4. 3D asset requirements

| Asset | Source | Notes |
|---|---|---|
| Earth day map | NASA Visible Earth Blue Marble (public domain) or Solar System Scope (CC BY, attribution) | 2k for mobile, 4k desktop; WebP/KTX2 |
| Earth night lights | NASA Black Marble (public domain) | Blended by sun direction |
| Clouds, atmosphere | Procedural (shader) | No asset |
| Routes, arcs, beacons, halos, orbiting service nodes, stars, particles | Procedural (Three.js) | Instanced points/lines; no GLB |
| Aircraft | Kenney / Quaternius (CC0) or stylised procedural mesh | ≤ 5k tris, Draco if GLB |
| Environment light | Poly Haven HDRI (CC0), 1k | Optional; can be replaced by 3 lights |

Every third-party asset gets a row in `public/CREDITS.md` (source, licence, URL). Nothing is downloaded until its licence is confirmed at download time. No client-supplied GLBs assumed; placeholders are procedural.

## 5. Animation timeline (homepage, approximate scroll length ≈ 900vh)

| Scroll % | Act | Notes |
|---|---|---|
| 0–8 | Hero | Intro reveal: globe fade-in 1.2s → headline → CTAs (staggered) |
| 8–14 | Intro | |
| 14–26 | Services | Nodes appear in one staggered orbit-in |
| 26–46 | Destinations | 3 × ≈6.5% pinned beats |
| 46–54 | Why JM Global | |
| 54–68 | Journey (Study, Careers) | 2 plane runs |
| 68–84 | How It Works | 4 waypoints ≈ 4% each |
| 84–100 | Testimonials(if any) / FAQ / Final CTA / Contact | HTML-heavy |

One GSAP master timeline per act (`useActTimeline`), all scrubbed by ScrollTrigger with Lenis as the scroller proxy.

## 6. Scroll interaction map

- Lenis owns scroll (lerp ≈ 0.09), `ScrollTrigger.scrollerProxy`-integrated so scrub is exact.
- Anchor/nav click → `lenis.scrollTo(target, {duration: 1.4})`; sections are real DOM nodes with ids.
- Pinned acts (Destinations, How It Works) use `pin: true` + `scrub: 1`. Structural pinning only — no `preventDefault` scroll blocking (this was the source of the prototype's jitter/lock bugs).
- Scroll writes to a mutable `sceneRig` object (not React state) → no re-render per scroll tick.
- Keyboard/anchor users always reach every section; nothing is scroll-jacked.

## 7. Mobile fallback strategy

Capability tiers, decided once at load (`detect-gpu`-style heuristics + `PerformanceMonitor` for live downgrade):

| Tier | Trigger | Scene |
|---|---|---|
| `high` | desktop GPU | Full: 4k globe, bloom+vignette, particles, cursor parallax |
| `mid` | modern mobile / iGPU | 2k globe, dpr ≤ 1.5, no bloom, reduced particles |
| `low` | weak device / battery saver | 1k globe, dpr 1, camera moves only, no plane animation |
| `none` | no WebGL2, `prefers-reduced-motion`, or scene error | No canvas: static poster (pre-rendered globe frame) + CSS gradient; all content identical |

Touch: no cursor parallax; destination beats become stacked panels if pinning is unsafe on the viewport.

## 8. Performance strategy

- Content renders and is interactive **without** three.js; the scene is a lazy chunk loaded on idle, with the poster shown first.
- Budgets (targets to verify): pre-scene JS ≤ 200 KB gz; scene chunk ≤ 250 KB gz; textures ≤ 2.5 MB desktop / ≤ 1 MB mobile; desktop 60 fps target, mobile 30+.
- Instancing for stars/particles/beacon rings; single draw call per repeated type; ≤ 1 post-processing pass chain (bloom + vignette), off below `high`.
- `frameloop="demand"`/pause when the canvas is off-screen or tab hidden; drei `PerformanceMonitor` lowers dpr/effects live.
- Draco/KTX2 applied to any GLB/texture that ships; no unnecessary high-poly models.
- WebGPU: time-boxed spike only (ticket 21). Default renderer is WebGL2 (react-three-fiber default). Adopt WebGPU only if the spike shows a measurable win with a clean fallback.

## 9. Component architecture

```
app/                       (Next 15, static export)
  layout.tsx               <SceneRoot/> (persistent) + <SiteShell/> + Lenis provider
  page.tsx                 <HomeStory/> (acts)
  [routes...]/page.tsx     static pages, each declares its sceneState
content/                   typed docx transcription (services, steps, faqs, regions, contact, legal, ...)
components/
  scene/
    SceneRoot.tsx          lazy Canvas, tier detect, fallback poster
    Globe.tsx  Atmosphere.tsx  Stars.tsx
    Beacons.tsx  Routes.tsx  Plane.tsx  ServiceNodes.tsx
    CameraRig.tsx          reads sceneRig, damped follow, cursor parallax
    Effects.tsx            bloom + vignette (high tier only)
  story/                   HeroAct, IntroAct, ServicesAct, DestinationsAct, JourneyAct, HowItWorksAct, WhyAct, FaqAct, CtaAct
  ui/                      Button(magnetic), GlassPanel, Section, Accordion, ...
lib/
  scene/rig.ts             mutable sceneRig + route->pose map
  scene/geo.ts             lat/lon -> Vector3, arc builders
  scroll/lenis.ts  scroll/timelines.ts
  store.ts                 Zustand: { tier, reducedMotion, activeAct, focusRegion, pointer }
```

State split: **Zustand** for coarse, rarely-changing state (tier, active act, focus region). **Mutable ref (`sceneRig`)** for per-frame values (camera target, progress).

## 10. Implementation plan

Tracer-bullet order, see `specs/ticket/`: static scaffold → content layer → design system → scroll infra → persistent scene shell → globe → routes/beacons → site shell → acts (hero → services → destinations → journey → how-it-works → rest) → enquiry panel → inner pages → effects → mobile/fallback → performance → SEO/launch gate. Each ticket is demoable on its own.

## Reference repos (patterns only — not copied)

Listed in the brief: 3d-web-pack, jawad-portfolio-v2, coffee-portfolio, 3d-interactive-portfolio-site, threejsresources R3F showcase. **Not opened yet**; ticket 05 (scene shell) and 19 (effects) start with a short review of camera/scroll/post-processing patterns. The "Sacred-G" link in the brief is broken (only `c` was pasted) — send the URL if it matters.
