import { Vector3 } from "three";

/**
 * lat/lon (degrees) -> point on a sphere. Matches three's SphereGeometry UV layout
 * for an equirectangular texture (u=0 at lon -180), so beacons line up with the map.
 */
export function latLonToVec3(lat: number, lon: number, r = 1): Vector3 {
  const la = (lat * Math.PI) / 180;
  const lo = (lon * Math.PI) / 180;
  return new Vector3(r * Math.cos(la) * Math.cos(lo), r * Math.sin(la), -r * Math.cos(la) * Math.sin(lo));
}

/**
 * Great-circle arc between two surface points, lifted off the globe by `lift` at its
 * midpoint (sin curve), so flight paths read as arcs rather than chords through Earth.
 */
export function arcPoints(a: Vector3, b: Vector3, segments = 64, lift = 0.25): Vector3[] {
  const A = a.clone().normalize();
  const B = b.clone().normalize();
  const angle = A.angleTo(B);
  const sin = Math.sin(angle);
  const pts: Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    // spherical interpolation (falls back to lerp for ~coincident points)
    const p =
      sin < 1e-6
        ? A.clone().lerp(B, t)
        : A.clone().multiplyScalar(Math.sin((1 - t) * angle) / sin).add(B.clone().multiplyScalar(Math.sin(t * angle) / sin));
    pts.push(p.normalize().multiplyScalar(1 + lift * Math.sin(Math.PI * t) * Math.min(1, angle)));
  }
  return pts;
}
