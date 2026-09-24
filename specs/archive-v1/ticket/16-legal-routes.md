# 16 — Legal routes

**What to build:** Four routes (`/privacy-policy`, `/terms`, `/disclaimer`, `/refund-cancellation-policy`), each backed by a `LegalPages` CMS collection entry with a rich-text body field, linked from the footer. No body copy is authored in this ticket — pages ship with an empty/placeholder-state body until the client or their legal counsel supplies real text.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] `LegalPages` collection exists with one entry per route (slug, title, richTextBody)
- [ ] All four routes render their title and, if `richTextBody` is empty, a clear "content pending" state rather than a broken/blank page
- [ ] Footer links to all four routes correctly
- [ ] Filling in `richTextBody` for one entry in `/admin` renders that content without a code change
- [ ] Route-render seam test covers the empty-body state for at least one legal route
- [ ] No legal copy is authored as part of this ticket — confirmed by code review, not just by the empty-state test
