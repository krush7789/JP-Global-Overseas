"use client";

import { useRef } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { STEPS } from "@/content";
import { HIW_WAYPOINTS } from "@/lib/scene/route";
import { sceneRig } from "@/lib/scroll/rig";
import { useAct } from "@/lib/scroll/useAct";

/**
 * S4.09 — the centerpiece. Scrolling through this tall section flies one aircraft along a
 * four-waypoint route with the camera chasing it; each step is one waypoint. Pure native
 * scroll: the section is tall, nothing is pinned or blocked, scrolling back reverses cleanly.
 * Without the scene the steps are just a numbered vertical list (same copy).
 */
export function HowItWorksAct() {
  const ref = useRef<HTMLElement>(null);

  useAct(ref, {
    start: "top 40%",
    end: "bottom 60%",
    scrub: (p) => {
      sceneRig.hiw = p;
      sceneRig.chase = p > 0 && p < 1;
    },
  });

  return (
    <section id="how-it-works" ref={ref} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <Eyebrow>How It Works</Eyebrow>
      </Reveal>
      <ol className="mt-10 space-y-[38svh]">
        {STEPS.map((step, i) => (
          <li key={step} data-waypoint={HIW_WAYPOINTS[i]}>
            <Reveal className="max-w-md">
              <GlassPanel>
                <span className="font-display text-5xl text-brass-400">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-3xl leading-snug text-white">{step}</h3>
              </GlassPanel>
            </Reveal>
          </li>
        ))}
      </ol>
      <div className="h-[30svh]" aria-hidden />
    </section>
  );
}
