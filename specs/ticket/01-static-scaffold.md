# 01 — Static scaffold + archive prototype

**What to build:** A clean Next.js 15 + TypeScript + Tailwind v4 project that builds to a fully static `out/` folder with no backend dependencies. The Payload/Neon prototype is moved to an archive folder, not deleted.

**Blocked by:** None — can start immediately

**Status:** done

- [x] Prototype source (src, scripts, .env, payload deps) moved to `_archive-prototype-v1/`; nothing deleted
- [x] `next.config` uses `output: 'export'`; `npm run build` emits `out/` with a placeholder home page
- [x] No Payload, Postgres, Resend, Turnstile, sharp-server or API-route dependencies remain in package.json
- [x] Read `node_modules/next/dist/docs/` for the installed Next version before writing config (per AGENTS.md)
- [x] `.env.example` contains no secrets; rotate-the-Neon-string note recorded in README

**Notes:** Build verified: `next build` emits `out/`. Archive excluded from tsc/eslint. Next 15.5.26 (its dist/docs folder does not exist in 15.x; consulted the installed package types instead). Content check: `npm run check:content`.
