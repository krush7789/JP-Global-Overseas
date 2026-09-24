// Run: node src/lib/enquiry.check.ts
import assert from "node:assert/strict";
import { enquiryLinks, enquiryText, validateEnquiry } from "./enquiry.ts";

const base = { fullName: "Asha Rao", interestedIn: "Study Abroad", region: "Europe" };

assert.equal(validateEnquiry(base), null);
assert.ok(validateEnquiry({ ...base, fullName: "  " }));
assert.ok(validateEnquiry({ ...base, interestedIn: "" }));
assert.ok(validateEnquiry({ ...base, region: "" }));
assert.ok(validateEnquiry({ ...base, email: "nope" }));
assert.equal(validateEnquiry({ ...base, email: "a@b.co" }), null);

// Optional fields are omitted, not printed blank.
const t = enquiryText(base);
assert.ok(t.includes("Name: Asha Rao") && t.includes("Preferred region: Europe"));
assert.ok(!t.includes("Mobile") && !t.includes("Message"));

// Nothing configured -> no links at all (the panel hides / falls back to the Contact page).
assert.deepEqual(enquiryLinks(base, { whatsapp: null, email: null }), { whatsapp: null, email: null });

// Configured: exact, correctly encoded URLs. Formatting in the number is stripped.
const f = { ...base, message: "Need help & advice? 100%" };
const l = enquiryLinks(f, { whatsapp: "+91 98765-43210", email: "info@example.com" });
assert.ok(l.whatsapp!.startsWith("https://wa.me/919876543210?text="));
assert.ok(l.whatsapp!.includes(encodeURIComponent("Need help & advice? 100%")));
assert.ok(!l.whatsapp!.includes("&advice"), "raw & must be encoded");
assert.ok(l.email!.startsWith("mailto:info@example.com?subject="));
assert.equal(decodeURIComponent(l.whatsapp!.split("?text=")[1]), enquiryText(f), "round-trips exactly");
console.log("enquiry OK");
