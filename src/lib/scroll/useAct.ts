"use client";

import { useEffect, type RefObject } from "react";
import type { PoseName } from "@/lib/scene/poses";
import { useSceneStore } from "@/lib/store";
import { ScrollTrigger } from "./gsap";

type ActOptions = {
  /** Camera pose to ease to while this act is in view. */
  pose?: PoseName;
  /** Called with 0..1 progress through the act (also at the clamps, so scrolling back resets cleanly). */
  scrub?: (progress: number) => void;
  /** Fired when the act becomes (in)active — e.g. to light its beacon. */
  onActive?: (active: boolean) => void;
  start?: string;
  end?: string;
};

/**
 * Binds a homepage section to the scene: when it's active the camera eases to `pose`;
 * `scrub` receives scroll progress. Native scroll only — nothing is pinned or blocked.
 * (`scrub`/`pose` are read once per mount: pass stable values.)
 */
export function useAct(ref: RefObject<HTMLElement | null>, { pose, scrub, onActive, start = "top 55%", end = "bottom 45%" }: ActOptions) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      end,
      onToggle: (self) => {
        if (self.isActive && pose) useSceneStore.getState().setPose(pose);
        onActive?.(self.isActive);
      },
      onUpdate: scrub ? (self) => scrub(self.progress) : undefined,
    });
    return () => st.kill();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}
