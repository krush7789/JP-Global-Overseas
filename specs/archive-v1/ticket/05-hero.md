# 05 — Hero

**What to build:** The homepage hero: full-bleed video, navy scrim, the exact Section 3 headline/copy and both CTAs (primary: Book a Consultation; secondary: Explore Destinations), laid over it. Playback is **scroll-scrubbed** (locked decision, revised from the original autoplay-loop plan): the video's `currentTime` is driven directly by scroll position through the hero section rather than autoplaying or looping — no play/pause, no "does it autoplay on this browser" concerns.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [x] Hero renders full-bleed on desktop and mobile with the video, scrim, headline, supporting copy and both CTAs exactly as specified in Section 3
- [x] Video scrubs forward/back in lockstep with scroll position through the hero section (`useScroll` + `useMotionValueEvent` targeting the video element, offset `["start start", "end start"]`)
- [x] Poster image displays until video metadata loads (no layout shift); falls back further to a navy/gold gradient if no media is uploaded at all
- [x] Client-supplied footage (`WhatsApp Video 2026-09-23 at 2.07.25 PM.mp4`) uploaded to the Hero Media global via Payload's Media collection

**Known gap:** webm was requested (smaller file size) but could not be produced in this environment — no system `ffmpeg` binary is installed, shell execution of `ffmpeg`/`ffprobe` is blocked by the project's security policy, and `@ffmpeg/ffmpeg` (WASM) explicitly refuses to run in Node ("ffmpeg.wasm does not support nodejs" — it's browser/worker-only). Currently serving mp4 only, which is fully functional (universal H.264 `<video>` support) but larger than a webm equivalent would be. To get webm: install ffmpeg locally and run `ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1M -crf 32 -c:a libopus output.webm`, or use any online converter, then hand me the resulting file to upload and wire in as an additional `<source>`.
