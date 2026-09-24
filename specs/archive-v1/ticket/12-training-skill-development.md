# 12 — Training & Skill Development page

**What to build:** `/training`, per Section 10: headline "BUILD SKILLS. OPEN GLOBAL OPPORTUNITIES.", and a listing of `TrainingProgram` CMS entries (program name, duration, mode, who it's for, key outcomes, registration/enquiry CTA) — showing only programmes explicitly marked as currently offered.

**Blocked by:** 03 — Site shell

**Status:** ready-for-agent

- [ ] `TrainingPrograms` collection exists with fields: name, duration, mode, whoItsFor, keyOutcomes, isCurrentlyOffered (boolean)
- [ ] Page headline matches Section 10 verbatim
- [ ] Only programmes with `isCurrentlyOffered: true` render; unmarking a programme in `/admin` removes it from the page without a code change
- [ ] Each rendered programme shows all five fields plus a registration/enquiry CTA linking to the enquiry form
- [ ] With zero currently-offered programmes, the page still renders sensibly (no broken empty state)
- [ ] Route-render seam test covers both "programmes present" and "zero programmes" states
