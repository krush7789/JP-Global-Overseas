"use client";

import Link from "next/link";
import { useRef } from "react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { Reveal } from "@/components/ui/Reveal";
import { Eyebrow } from "@/components/ui/Section";
import { INTRO, SERVICES } from "@/content";
import { sceneRig } from "@/lib/scroll/rig";
import { useAct } from "@/lib/scroll/useAct";
import { useSceneStore } from "@/lib/store";

/** S4.03 intro (camera eases back) + S4.04 six service cards (nodes orbit in; hover links card ↔ node). */
export function ServicesAct() {
  const intro = useRef<HTMLElement>(null);
  const services = useRef<HTMLElement>(null);
  const setHighlight = useSceneStore((s) => s.setHighlight);

  useAct(intro, { pose: "intro" });
  useAct(services, {
    pose: "services",
    start: "top 70%",
    end: "bottom 40%",
    scrub: (p) => (sceneRig.services = Math.min(1, p * 3)),
  });

  return (
    <>
      <section id="intro" ref={intro} className="mx-auto flex min-h-[80svh] max-w-4xl items-center px-4 py-24 sm:px-6">
        <Reveal>
          <p className="font-display text-3xl leading-snug text-white [text-shadow:0_2px_24px_rgba(6,15,31,0.9)] sm:text-4xl lg:text-5xl">
            {INTRO}
          </p>
        </Reveal>
      </section>

      <section id="services" ref={services} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>Our Services</Eyebrow>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 3) * 0.08}>
                <Link
                  href={s.href}
                  className="block h-full focus-visible:outline-offset-4"
                  onPointerEnter={() => setHighlight(s.id)}
                  onPointerLeave={() => setHighlight(null)}
                  onFocus={() => setHighlight(s.id)}
                  onBlur={() => setHighlight(null)}
                >
                  <GlassPanel as="article" className="h-full transition-colors hover:border-brass-400/50">
                    <h2 className="text-2xl text-white">{s.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-white/75">{s.text}</p>
                  </GlassPanel>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
