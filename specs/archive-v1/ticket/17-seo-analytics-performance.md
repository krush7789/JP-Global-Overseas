# 17 — SEO, analytics & performance

**What to build:** Section 17/18 requirements across every route built so far: per-page metadata (title/description), a generated sitemap.xml and robots.txt, structured data where applicable (Organization/LocalBusiness), Google Analytics 4 and Search Console wiring, image optimization (Next.js `<Image>` everywhere images render), and a performance budget check.

**Blocked by:** 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16

**Status:** ready-for-agent

- [ ] Every route has a unique, SEO-appropriate title and meta description reflecting its actual content (region/service), matching the Section 17 topic clusters (e.g. "Study in Russia", "Overseas jobs in the Middle East")
- [ ] `sitemap.xml` includes every route from the Section 16 sitemap; `robots.txt` is present and not blocking indexable pages
- [ ] Organization/LocalBusiness structured data (JSON-LD) is present on the homepage/contact page with only verified data (address; no unverified phone/email)
- [ ] Google Analytics 4 and Search Console verification are wired via environment-configurable IDs (no hardcoded tracking ID)
- [ ] All images use Next.js `<Image>` (or equivalent optimization) — no raw unoptimized `<img>` tags for content imagery
- [ ] Lighthouse (mobile) on the homepage scores ≥ 90 performance, ≥ 90 accessibility, ≥ 90 SEO — recorded in the PR/ticket notes
- [ ] Build smoke test: `next build` succeeds and every sitemap route returns 200
