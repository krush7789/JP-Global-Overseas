import { useSceneStore } from "@/lib/store";
import type { PoseName } from "./poses";

/**
 * Camera-fly API. Sets the target pose; the damped CameraRig eases there. Because the
 * rig only ever chases a target, calling this again mid-flight redirects smoothly —
 * it can never snap or restart.
 */
export const flyTo = (pose: PoseName) => useSceneStore.getState().setPose(pose);
