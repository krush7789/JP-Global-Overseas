"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/lib/env";
import { gsap } from "@/lib/scroll/gsap";

/**
 * Fade/rise once when scrolled into view. Content is visible by default (SSR / no JS /
 * reduced motion) — the hidden start state is only applied by GSAP after mount, so a
 * script failure can never leave the page blank.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;
    // gsap.context + revert(): cleanup must RESTORE the element's original styles.
    // Just kill()ing the tween leaves it stuck at opacity:0 — under React StrictMode's
    // double-mount the second run then animates 0 -> 0 and the content never appears.
    const ctx = gsap.context(() => {
      gsap.from(el, {
        opacity: 0,
        y,
        duration: 0.9,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    }, el);
    return () => ctx.revert();
  }, [reduced, delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
