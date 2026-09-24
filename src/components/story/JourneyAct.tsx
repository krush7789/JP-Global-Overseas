"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { TEASERS, WHY_US } from "@/content";
import { sceneRig } from "@/lib/scroll/rig";
import { useAct } from "@/lib/scroll/useAct";

type Teaser = (typeof TEASERS)[keyof typeof TEASERS];

function TeaserBlock({ teaser, field, align }: { teaser: Teaser; field: "study" | "careers"; align: "left" | "right" }) {
  const ref = useRef<HTMLElement>(null);
  // Scroll draws this act's arc set from the office outwards and flies the aircraft along it.
  useAct(ref, { pose: "journey", start: "top 75%", end: "bottom 35%", scrub: (p) => (sceneRig[field] = p) });
  return (
    <section ref={ref} className={`mx-auto flex min-h-[90svh] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8 ${align === "right" ? "justify-end" : ""}`}>
      <Reveal className="w-full max-w-lg">
        <GlassPanel>
          <h2 className="text-4xl leading-tight text-white sm:text-5xl">{teaser.title}</h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">{teaser.text}</p>
          <div className="mt-8">
            <Button href={teaser.cta.href}>{teaser.cta.label}</Button>
          </div>
        </GlassPanel>
      </Reveal>
    </section>
  );
}

/** S4.06 five value props, then S4.07 Study Abroad and S4.08 Overseas Careers as two route runs. */
export function JourneyAct() {
  const why = useRef<HTMLElement>(null);
  useAct(why, { pose: "journey" });

  return (
    <>
      <section id="why" ref={why} className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Why JM Global Overseas</Eyebrow>
        </Reveal>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_US.map((w, i) => (
            <li key={w}>
              <Reveal delay={i * 0.07} className="h-full">
                <GlassPanel as="article" className="h-full p-5 sm:p-6">
                  <span className="font-display text-3xl text-brass-400">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-sm font-medium leading-snug text-white">{w}</p>
                </GlassPanel>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <div id="study">
        <TeaserBlock teaser={TEASERS.study} field="study" align="left" />
      </div>
      <div id="careers">
        <TeaserBlock teaser={TEASERS.careers} field="careers" align="left" />
      </div>
    </>
  );
}
