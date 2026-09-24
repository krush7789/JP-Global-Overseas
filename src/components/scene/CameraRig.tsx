"use client";

import { useFrame } from "@react-three/fiber";
import { type PerspectiveCamera, Vector3 } from "three";
import { latLonToVec3 } from "@/lib/scene/geo";
import { POSES } from "@/lib/scene/poses";
import { hiwArc, pointAt } from "@/lib/scene/route";
import { sceneRig } from "@/lib/scroll/rig";
import { useSceneStore } from "@/lib/store";

const target = new Vector3();
const dir = new Vector3();
const CHASE_DIST = 1.85;
/** Fraction of the screen width the globe is shifted right in the split layout. */
const SPLIT_SHIFT = 0.2;
const MOBILE_PULLBACK = 0.9;
let offset = 0;
let offsetY = 0;
let lastOffset = -1;
let lastOffsetY = -1;
let lastW = 0;

/**
 * Eases the camera towards the active pose (or, during How It Works, the plane).
 * Direction and distance are interpolated separately (an arc around the globe, never a
 * straight line through it) with frame-rate-independent damping, so scrubbing and route
 * changes never jerk.
 */
export function CameraRig({ parallax = true }: { parallax?: boolean }) {
  useFrame(({ camera, size }, dt) => {
    let want: number;
    if (sceneRig.chase) {
      pointAt(hiwArc(), sceneRig.hiw, target).normalize();
      want = CHASE_DIST;
    } else {
      const p = POSES[useSceneStore.getState().pose];
      target.copy(latLonToVec3(p.lat, p.lon, 1)).normalize();
      want = p.dist;
    }

    // Subtle cursor depth: nudge the aim direction, not the distance.
    if (parallax) {
      target.x += sceneRig.pointerX * 0.03;
      target.y -= sceneRig.pointerY * 0.03;
      target.normalize();
    }

    // Phones are portrait: the same distance crops the globe, so back off with the aspect.
    if (size.width < 1024) want *= 1 + (1 - Math.min(1, size.width / size.height)) * (want > 3 ? MOBILE_PULLBACK : MOBILE_PULLBACK / 2);

    const k = 1 - Math.exp(-dt * (sceneRig.chase ? 4.5 : 3.2));
    const cur = camera.position.length();
    dir.copy(camera.position).normalize().lerp(target, k).normalize();
    camera.position.copy(dir).multiplyScalar(cur + (want - cur) * k);
    camera.lookAt(0, 0, 0);

    // Split layout: shift the projection so the globe sits in the right half of a wide
    // screen and the copy has clean dark space on the left. Damped, so switching between
    // the homepage and inner pages slides rather than snaps. (Camera still looks at the
    // globe's centre — only the image window moves.)
    const { width, height } = size;
    const split = useSceneStore.getState().layout === "split";
    const wide = width >= 1024;
    const wantOff = split && wide ? SPLIT_SHIFT : 0; // desktop: globe right of copy
    const wantUp = split && !wide ? 0.2 : 0; // phone: globe up top, copy below
    offset += (wantOff - offset) * k;
    offsetY += (wantUp - offsetY) * k;
    if (Math.abs(offset - lastOffset) > 1e-4 || Math.abs(offsetY - lastOffsetY) > 1e-4 || width !== lastW) {
      (camera as PerspectiveCamera).setViewOffset(width, height, -offset * width, offsetY * height, width, height);
      lastOffset = offset;
      lastOffsetY = offsetY;
      lastW = width;
    }
  });
  return null;
}
