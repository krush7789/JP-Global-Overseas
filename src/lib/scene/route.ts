import type { Vector3 } from "three";
import { arcPoints, latLonToVec3 } from "./geo";
import { ORIGIN, REGION_ANCHORS } from "./poses";

export type RegionId = keyof typeof REGION_ANCHORS;
export type ArcKind = "study" | "careers";

/** Study arcs sit low (brass); Careers arcs fly higher so both sets read distinctly. */
export const ARC_LIFT: Record<ArcKind, number> = { study: 0.22, careers: 0.34 };
export const SEGMENTS = 96;

const cache = new Map<string, Vector3[]>();

/** Great-circle arc from the office to a region, memoised (shared by lines, planes, camera). */
export function arcFor(kind: ArcKind, region: RegionId): Vector3[] {
  const key = `${kind}:${region}`;
  let pts = cache.get(key);
  if (!pts) {
    pts = arcPoints(
      latLonToVec3(ORIGIN.lat, ORIGIN.lon, 1),
      latLonToVec3(REGION_ANCHORS[region].lat, REGION_ANCHORS[region].lon, 1),
      SEGMENTS,
      ARC_LIFT[kind],
    );
    cache.set(key, pts);
  }
  return pts;
}

/**
 * How It Works: ONE route from the office to a destination with four waypoints (the four
 * steps). The route ends at the Europe anchor as a neutral example destination — the
 * steps are generic, not tied to a region.
 */
export const HIW_REGION: RegionId = "europe";
export const hiwArc = () => arcFor("study", HIW_REGION);
/** Fractions along the route where each of the four steps lights up. */
export const HIW_WAYPOINTS = [0, 1 / 3, 2 / 3, 1] as const;

/** Point at fraction t (0..1) along an arc, linearly interpolated between samples. */
export function pointAt(points: Vector3[], t: number, out: Vector3): Vector3 {
  const f = Math.min(1, Math.max(0, t)) * (points.length - 1);
  const i = Math.min(points.length - 2, Math.floor(f));
  return out.copy(points[i]).lerp(points[i + 1], f - i);
}
