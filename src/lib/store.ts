import { create } from "zustand";
import type { PoseName } from "@/lib/scene/poses";
import type { Tier } from "@/lib/scene/tier";

/**
 * Coarse, rarely-changing state only. Per-frame values (scroll progress, pointer)
 * live in the mutable `sceneRig`, never here.
 */
type SceneState = {
  /** null until detected on the client. */
  tier: Tier | null;
  setTier: (t: Tier) => void;
  /** Camera pose the rig eases towards. */
  pose: PoseName;
  setPose: (p: PoseName) => void;
  /** "split": globe in the right half, copy on the left (homepage, desktop). "center": inner pages. */
  layout: "split" | "center";
  setLayout: (l: "split" | "center") => void;
  /** Reduced motion: render the globe but with no flights, pulses, orbits, dust or parallax. */
  still: boolean;
  setStill: (s: boolean) => void;
  /** Last scene error (why the canvas fell back to the plain backdrop), for the ?scene=debug overlay. */
  sceneError: string | null;
  setSceneError: (e: string | null) => void;
  /** Service node / region currently highlighted by HTML hover (cross-linking 3D <-> UI). */
  highlight: string | null;
  setHighlight: (id: string | null) => void;
};

export const useSceneStore = create<SceneState>((set) => ({
  tier: null,
  setTier: (tier) => set({ tier }),
  pose: "hero",
  setPose: (pose) => set({ pose }),
  layout: "split",
  setLayout: (layout) => set({ layout }),
  still: false,
  setStill: (still) => set({ still }),
  sceneError: null,
  setSceneError: (sceneError) => set({ sceneError }),
  highlight: null,
  setHighlight: (highlight) => set({ highlight }),
}));
