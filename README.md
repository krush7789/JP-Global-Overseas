# JM Global Overseas — Static 3D Website

Static Next.js site (`output: 'export'`) with a persistent React Three Fiber scene. No backend, database, API routes or server actions.

- Source of truth: `JM_Global_Overseas_Simple_Modern_Website_Blueprint.docx`
- Architecture: `specs/3d-architecture.md` · Spec: `specs/jm-global-overseas-3d-static.md` · Tickets: `specs/ticket/`

## Commands
- `npm run dev` — local dev server
- `npm run build` — static export to `out/` (serve with any static file server)

## Notes
- The previous CMS prototype is archived in `_archive-prototype-v1/` (git-ignored; contains a `.env` with credentials).
- **Rotate the Neon database credentials** from that prototype — the connection string was pasted into a chat. This project does not use it.
- 3rd-party 3D assets must be recorded in `public/CREDITS.md` with source and licence.

## Deploy
Static export — no server or env vars required.
- **Vercel / Netlify / Cloudflare Pages:** import the repo; build command `npm run build`, output directory `out`.
- **Any static host:** upload the contents of `out/`.
- Optional: set `SITE_URL=https://your-domain` at build time so `sitemap.xml` and `robots.txt` use the real domain.
