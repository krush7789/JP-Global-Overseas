// Run: node src/content/check.ts   (Node type-stripping; no test framework)
import assert from "node:assert/strict";
import * as c from "./index.ts";

assert.equal(c.NAV.length, 8);
assert.equal(c.SERVICES.length, 6);
assert.equal(c.REGIONS.length, 3);
assert.equal(c.STEPS.length, 4);
assert.equal(c.WHY_US.length, 5);
assert.equal(new Set(c.ROUTES).size, c.ROUTES.length, "duplicate routes");
assert.equal(c.ROUTES.length, 17);

// Nothing invented: unsupplied content stays empty so the UI hides it.
assert.equal(c.TESTIMONIALS.length, 0);
assert.equal(c.TRAINING_PROGRAMS.length, 0);
assert.ok(c.LEGAL.every((l) => l.body === ""));
assert.equal(c.CONTACT.offices.length, 2);
assert.ok(c.CONTACT.whatsapp.replace(/D/g, "").length >= 10);
assert.match(c.CONTACT.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
assert.ok(c.CONTACT.phone.replace(/\D/g, "").length >= 10);

// S5: Middle East differs from Russia/Europe.
assert.deepEqual(c.REGION_SERVICES.russia, c.REGION_SERVICES.europe);
assert.notDeepEqual(c.REGION_SERVICES["middle-east"], c.REGION_SERVICES.russia);
assert.ok(c.REGIONS.every((r) => c.REGION_SERVICES[r.id]));

// Every internal link points at a real route (or the #services anchor).
const links = [
  ...c.NAV, ...c.FOOTER, ...c.SERVICES, ...c.REGIONS,
  c.HERO.primaryCta, c.HERO.secondaryCta, c.TEASERS.study.cta, c.TEASERS.careers.cta, c.FINAL_CTA.cta,
].map((l) => l.href.split("#")[0] || "/");
for (const href of links) assert.ok((c.ROUTES as readonly string[]).includes(href), `dead link ${href}`);

// FAQ answers are unapproved by default.
assert.ok(c.FAQS.every((f) => f.needsClientApproval));
console.log("content OK");
