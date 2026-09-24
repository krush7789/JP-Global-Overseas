// Run: node src/lib/scene/geo.check.ts
import assert from "node:assert/strict";
import { arcPoints, latLonToVec3 } from "./geo.ts";

const close = (a: number, b: number, e = 1e-9) => assert.ok(Math.abs(a - b) < e, `${a} !~ ${b}`);

const o = latLonToVec3(0, 0);
close(o.x, 1); close(o.y, 0); close(o.z, 0);
const np = latLonToVec3(90, 0);
close(np.y, 1);
// lon +90 (east) is -z in three's SphereGeometry layout (u=0 at lon -180).
close(latLonToVec3(0, 90).z, -1);
close(latLonToVec3(33, 44, 2).length(), 2);

const a = latLonToVec3(29.9457, 78.1642);
const b = latLonToVec3(58, 60);
const arc = arcPoints(a, b, 32, 0.25);
assert.equal(arc.length, 33);
close(arc[0].length(), 1); close(arc[32].length(), 1);          // starts/ends on the surface
assert.ok(arc[16].length() > 1.05, "midpoint should be lifted above the globe");
for (const p of arc) assert.ok(p.length() >= 1 - 1e-9, "arc must never dip inside the globe");
console.log("geo OK");
