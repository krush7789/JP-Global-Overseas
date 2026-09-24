import { CONTACT } from "@/content";

/**
 * Scene anchors. Region anchors are REGION-LEVEL glow points, not country polygons or
 * city claims (blueprint S5/S10: don't imply service in a country until confirmed).
 * Origin is the office in Kankhal, Haridwar (S4.14). All tunable here, nowhere else.
 */
export const ORIGIN = CONTACT.origin;
export const REGION_ANCHORS = {
  russia: { lat: 58, lon: 60 },
  europe: { lat: 50, lon: 12 },
  "middle-east": { lat: 27, lon: 45 },
} as const;

/** Camera sits above (lat, lon) at `dist` from the globe centre (radius 1), looking at the centre. */
export type Pose = { lat: number; lon: number; dist: number };

export const POSES = {
  hero: { lat: 22, lon: 68, dist: 3.9 },
  intro: { lat: 24, lon: 62, dist: 3.8 },
  services: { lat: 26, lon: 58, dist: 4.2 },
  russia: { ...REGION_ANCHORS.russia, dist: 1.9 },
  europe: { ...REGION_ANCHORS.europe, dist: 1.9 },
  "middle-east": { ...REGION_ANCHORS["middle-east"], dist: 1.9 },
  journey: { lat: 32, lon: 60, dist: 3.0 },
  wide: { lat: 25, lon: 60, dist: 4.0 },
  final: { lat: 24, lon: 66, dist: 4.4 },
} as const satisfies Record<string, Pose>;

export type PoseName = keyof typeof POSES;

/** Route path -> camera pose (inner pages park the camera; the homepage is scroll-driven). */
export function poseForPath(pathname: string): PoseName {
  if (pathname.startsWith("/destinations/russia")) return "russia";
  if (pathname.startsWith("/destinations/europe")) return "europe";
  if (pathname.startsWith("/destinations/middle-east")) return "middle-east";
  if (pathname === "/" || pathname === "") return "hero";
  return "wide";
}
