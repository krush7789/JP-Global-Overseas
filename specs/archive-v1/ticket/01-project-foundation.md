# 01 — Project foundation

**What to build:** A working Next.js (App Router) application with Payload CMS 3 embedded in the same app, backed by Neon Postgres, deployed to Vercel. Visiting the deployed URL shows a placeholder home route; visiting `/admin` shows a working Payload login and, once logged in, an empty admin panel. Media uploads use local disk storage (revised decision — R2/S3 dropped; see Further Notes).

**Blocked by:** None — can start immediately.

**Status:** ready-for-agent

- [x] `next build` succeeds locally and on Vercel
- [x] `/admin` loads, an admin user can be created and can log in
- [x] A test media file can be uploaded through Payload (local disk storage)
- [x] Neon Postgres connection is configured via environment variable, no hardcoded credentials
- [x] `.env.example` documents every required environment variable
- [ ] Deployed preview URL on Vercel is reachable and serves the placeholder home route

**Further Notes (revised after initial build):** R2/S3 cloud storage was removed at the client's request to drop that external dependency. Local disk storage works for local dev and any host with a persistent filesystem, but if this deploys to a serverless platform with an ephemeral filesystem (Vercel included), uploaded media will not survive a redeploy or scale across instances. Revisit with a persistent storage adapter (R2, S3, or Vercel Blob) before relying on staff-uploaded media in that kind of production deployment.
