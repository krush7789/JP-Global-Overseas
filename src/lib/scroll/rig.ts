/**
 * Mutable per-frame scene state. Scroll and pointer WRITE here; the R3F camera
 * rig READS it inside useFrame. Deliberately not React state: nothing re-renders
 * per scroll tick or per mouse move.
 */
export const sceneRig = {
  /** 0..1 progress through the homepage story. */
  scroll: 0,
  /** Active homepage act id (coarse; mirrored into the Zustand store on change). */
  act: "hero" as string,
  /** Normalised pointer, -1..1. */
  pointerX: 0,
  pointerY: 0,
  /** How much of each route arc set is drawn, 0..1 (acts scrub these). */
  study: 0,
  careers: 0,
  /** Services act: 0..1 orbit-in of the six service nodes. */
  services: 0,
  /** How It Works: plane position along the route, 0..1, and whether the camera is chasing it. */
  hiw: 0,
  chase: false,
};
