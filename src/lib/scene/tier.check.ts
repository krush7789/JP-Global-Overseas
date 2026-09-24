// Run: node src/lib/scene/tier.check.ts
import assert from "node:assert/strict";
import { pickTier } from "./tier.ts";

const desktop = { reducedMotion: false, webgl2: true, coarsePointer: false, memoryGb: 8, cores: 12 };
assert.equal(pickTier(desktop), "high");
assert.equal(pickTier({ ...desktop, reducedMotion: true }), "high"); // still globe, not no globe
assert.equal(pickTier({ ...desktop, webgl2: false }), "none");
assert.equal(pickTier({ ...desktop, coarsePointer: true }), "mid");
assert.equal(pickTier({ ...desktop, memoryGb: 2 }), "low");
assert.equal(pickTier({ ...desktop, saveData: true }), "low");
assert.equal(pickTier({ ...desktop, cores: 4 }), "mid");
// Safari/Firefox expose no deviceMemory: must not be misread as low-memory.
assert.equal(pickTier({ ...desktop, memoryGb: undefined }), "high");
// reduced motion never removes the globe; no WebGL2 always does.
assert.equal(pickTier({ ...desktop, reducedMotion: true, webgl2: false }), "none");
console.log("tier OK");
