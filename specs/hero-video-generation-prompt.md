# Hero Video — Generation Prompt

Companion to `specs/ticket/05-hero.md`. Source of truth for tone/palette: blueprint Sections 2 ("Professional, trustworthy, knowledgeable, welcoming and internationally focused"), 3 (hero headline) and 14 ("premium, minimal, international and trustworthy... avoid generic collage-style consultancy graphics").

This is a **generation prompt for an AI video tool** (or a creative brief for a videographer/stock-footage edit — it works either way). It is not itself code; it's the input to whatever produces the actual video file.

---

## 1. Master concept

One continuous, unhurried camera move through a single symbolic journey — not a slideshow of disconnected stock clips, not a flag/collage montage. The idea: **a person's path from departure to arrival**, standing in for the "journey to a global future" headline. No dialogue, no on-screen text, no logos — the site overlays its own headline and CTAs on top.

Emotional register: quiet confidence, forward motion, calm optimism. Not corporate-stiff, not travel-agency-cheerful. Closer to an editorial documentary than an advertisement.

## 2. Shot-by-shot sequence (12–18 seconds, designed to loop)

1. **0:00–0:04 — Departure.** Wide, slightly low-angle shot inside a modern, light-filled airport terminal at early morning or golden hour. A young adult (20s, professional or student presentation — smart-casual, one carry-on bag, no branded clothing/logos) walks away from camera toward a gate, unhurried pace. Large windows, soft directional sunlight, shallow depth of field on background travelers (out of focus, non-distracting).
2. **0:04–0:08 — Transition through motion.** Cut or smooth match-dissolve to an exterior shot: the same figure (or a visually consistent stand-in) walking across a modern university campus courtyard or a clean international city plaza — contemporary architecture, glass and stone, no identifiable national landmarks, no flags, no signage with real institution names. Midday, neutral-to-cool light.
3. **0:08–0:12 — Arrival / connection.** A brief handshake or a seated one-on-one conversation across a desk in a bright, minimal office/consultation-room setting — two people, professional attire, genuine unscripted-looking body language (not a stiff stock-photo pose). Warm, soft window light.
4. **0:12–0:16 — Forward motion / horizon.** Closing shot: the figure from the opening scene now viewed from a three-quarter angle, walking toward large windows or an open walkway with a city skyline or airfield visible beyond — open, aspirational, forward-facing composition. Golden-hour warmth returning, echoing the opening light to set up the loop.
5. **0:16–end → loop back to 0:00.** Final frame's composition, light direction and camera height are matched to the opening frame so the loop reads as continuous motion, not a hard cut.

## 3. Visual & camera direction

- **Camera movement:** slow gimbal/dolly moves only — steady lateral tracking or a gentle push-in. No handheld shake, no whip pans, no drone/aerial unless it's a smooth, slow establishing glide.
- **Lens feel:** shallow-to-medium depth of field, natural focal lengths (35–85mm equivalent). No fisheye, no extreme wide-angle distortion.
- **Lighting:** natural, directional, soft — golden hour for the bookend shots, bright neutral daylight for the middle. Avoid flat, shadowless "stock footage" lighting.
- **Color grading:** cool-neutral base with warm highlights — this should sit comfortably under a navy scrim overlay and warm gold/brass accent color once composited on the site. Do not pre-grade the footage itself toward navy or gold; keep it true-to-life so the site's CSS scrim (per ticket 05) does the darkening for text legibility. Avoid oversaturated, teal-and-orange "commercial" grading.
- **Pace:** unhurried throughout. No fast cuts, no snap-zooms, no speed ramps.

## 4. Subjects & wardrobe

- Real-feeling adults in their 20s–30s, a mix of presentations, professional/smart-casual dress in neutral or muted tones (navy, grey, white, camel) — nothing that reads as a specific national dress, uniform, religious garment worn as a costume, or branded clothing/logo.
- Expressions: calm, focused, quietly positive — not smiling-at-camera stock-photo energy.
- No children, no crowds-as-subject (background crowd is fine, out of focus).

## 5. Setting

- Airport terminal interior (modern, generic — no airline branding, no country flags, no visible signage in a specific script/language that ties it to one country).
- University campus courtyard or city plaza (contemporary architecture, no identifiable landmark, no institution names/crests).
- Bright minimal office/consultation room (a desk, two chairs, large window — no signage, no logo on the wall).
- Optional: airfield/tarmac glimpse through glass for the closing shot.

## 6. Explicit exclusions (negative prompt / do-not list)

Include this block verbatim in whatever tool you use — it's the "without any AI faults" requirement:

> No warped or extra fingers, no malformed or asymmetric faces, no flickering or morphing background elements, no unnatural blinking or frozen/dead eyes, no text or watermarks burned into frame, no logos, brand names, airline liveries, or national flags, no real institution names or crests, no glitching or frame-to-frame identity drift on the main subject, no uncanny-valley skin texture, no duplicated limbs or crowd-clone artifacts, no lens flares or light leaks that weren't in the original plan, no oversaturated or neon color cast, no fisheye/wide-angle warping, no jump cuts or speed ramps, no on-screen captions or lower-thirds.

If the generation tool supports a strength/fidelity pass, run a second refinement pass specifically targeting hands, faces and background pedestrians — these are the most common AI-video failure points.

## 7. Technical delivery spec (must match `specs/ticket/05-hero.md`)

- **Aspect ratio:** 16:9 source, cropped/reframed to work full-bleed at both ultra-wide desktop and 9:16 mobile safe-area (keep the main subject roughly centered so mobile cropping doesn't lose them).
- **Resolution:** minimum 1920×1080; prefer 3840×2160 (4K) source for headroom, downscaled on export.
- **Duration:** 12–18 seconds, seamlessly loopable (see §2.5).
- **Frame rate:** 24 or 30fps, consistent throughout — no variable frame rate.
- **Audio:** none required — the hero ships muted/autoplay-loop.
- **Exports needed:**
  - `hero.mp4` — H.264, target ≤ 6MB for a ~15s clip at 1080p (compress for web; this feeds the mp4 fallback)
  - `hero.webm` — VP9, similar or smaller size (primary format per ticket 05)
  - `hero-poster.jpg` — a single still frame (pick the most visually complete moment, e.g. the 0:12 arrival shot) for instant first paint before video loads, and as the `prefers-reduced-motion` fallback

## 8. Optional regional variants

If you later want a rotating or per-region hero (e.g. different clip on `/destinations/russia` vs `/destinations/europe` vs `/destinations/middle-east`) rather than one universal loop, reuse §1–§7 unchanged and swap only the setting in shot 2:

- **Russia variant:** contemporary Russian university campus or Moscow-style modern architecture — glass/stone, winter or early-spring light, no flags/crests.
- **Europe variant:** a generic contemporary European city plaza or campus — warm stone or glass-and-steel, midday light.
- **Middle East variant:** a modern Gulf-style skyline or campus courtyard — bright, high-contrast daylight, contemporary architecture (avoid any single country's specific national landmark).

Do not build these variants until the client actually asks for per-region heroes — the single universal loop is the default per the locked hero decision.
