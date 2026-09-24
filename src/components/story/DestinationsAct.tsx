"use client";

import Link from "next/link";
import { useRef } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { REGIONS } from "@/content";
import type { PoseName } from "@/lib/scene/poses";
import { useAct } from "@/lib/scroll/useAct";
import { useSceneStore } from "@/lib/store";

type Region = (typeof REGIONS)[number];

/** One scroll beat: camera lands on the region, its beacon pulses hard, the panel links to its page. */
function Beat({ region }: { region: Region }) {
  const ref = useRef<HTMLElement>(null);
  const setHighlight = useSceneStore((s) => s.setHighlight);
  useAct(ref, {
    pose: region.id as PoseName,
    start: "top 60%",
    end: "bottom 40%",
    onActive: (a) => setHighlight(a ? region.id : null),
  });

  return (
    <section
      ref={ref}
      aria-labelledby={`dest-${region.id}`}
      className={`mx-auto flex min-h-[100svh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8`}
    >
      <Reveal className="w-full max-w-md">
        <GlassPanel>
          <h3 id={`dest-${region.id}`} className="text-4xl uppercase tracking-wide text-white">
            {region.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-white/80">{region.text}</p>
          <Link href={region.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brass-400 hover:text-brass-100">
            Explore {region.name} <span aria-hidden>→</span>
          </Link>
        </GlassPanel>
      </Reveal>
    </section>
  );
}

/** S4.05 + S4.10 (merged): three region beats, Russia → Europe → Middle East. */
export function DestinationsAct() {
  return (
    <div id="destinations">
      <div className="mx-auto max-w-6xl px-4 pt-24 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Explore Your Destination</Eyebrow>
          <h2 className="mt-2 text-4xl text-white [text-shadow:0_2px_24px_rgba(6,15,31,0.9)] sm:text-5xl">
            Russia · Europe · Middle East
          </h2>
        </Reveal>
      </div>
      {REGIONS.map((r) => (
        <Beat key={r.id} region={r} />
      ))}
    </div>
  );
}
