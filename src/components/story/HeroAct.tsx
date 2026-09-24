"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { HERO } from "@/content";
import { usePrefersReducedMotion } from "@/lib/env";
import { gsap } from "@/lib/scroll/gsap";
import { useAct } from "@/lib/scroll/useAct";

/** S3 / S4.02. Orbit view of the globe; copy and CTAs reveal in sequence (headline → copy → CTAs). */
export function HeroAct() {
  const ref = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  useAct(ref, { pose: "hero" });

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    // context + revert() so StrictMode's double-mount can't strand the copy at opacity:0.
    const ctx = gsap.context(() => {
      gsap.from("[data-reveal]", {
        opacity: 0,
        y: 34,
        duration: 1,
        ease: "power3.out",
        stagger: 0.22,
        delay: 0.5,
      });
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section id="hero" ref={ref} className="relative flex min-h-[100svh] items-end lg:items-center">
      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <h1 data-reveal className="max-w-2xl text-5xl leading-[1.05] text-white [text-shadow:0_2px_30px_rgba(6,15,31,0.8)] sm:text-6xl">
          {HERO.headline}
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-base leading-relaxed text-white/85 [text-shadow:0_1px_18px_rgba(6,15,31,0.9)] sm:text-lg">
          {HERO.copy}
        </p>
        <div data-reveal className="mt-10 flex flex-wrap gap-4">
          <Button href={HERO.primaryCta.href} magnetic>
            {HERO.primaryCta.label}
          </Button>
          <Button href={HERO.secondaryCta.href} variant="outline">
            {HERO.secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
