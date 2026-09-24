"use client";

import { useEffect } from "react";
import { sceneRig } from "@/lib/scroll/rig";

/** Draws a route-arc set fully while its page is open (Study Abroad / Overseas Careers pages). */
export function ShowArcs({ kind }: { kind: "study" | "careers" }) {
  useEffect(() => {
    sceneRig[kind] = 1;
    return () => {
      sceneRig[kind] = 0;
    };
  }, [kind]);
  return null;
}
