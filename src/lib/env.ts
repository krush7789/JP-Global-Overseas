"use client";

import { useSyncExternalStore } from "react";


function useMedia(query: string, serverValue = false) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => serverValue, // same on server + first client render → no hydration mismatch
  );
}

/** True when the user asked for reduced motion. */
export const usePrefersReducedMotion = () => useMedia("(prefers-reduced-motion: reduce)");
/** True on touch-first devices (no hover/cursor). */
export const useCoarsePointer = () => useMedia("(pointer: coarse)");
