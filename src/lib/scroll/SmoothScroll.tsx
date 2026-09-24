"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "./gsap";
import { usePrefersReducedMotion } from "@/lib/env";
import { sceneRig } from "./rig";


let lenis: Lenis | null = null;

/** Animated scroll to a selector/element/offset. Falls back to native smooth scroll. */
export function scrollToTarget(target: string | HTMLElement | number) {
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.4, easing: (t) => 1 - Math.pow(1 - t, 4) });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: "smooth" });
    return;
  }
  const el = typeof target === "string" ? document.querySelector<HTMLElement>(target) : target;
  el?.scrollIntoView({ behavior: "smooth" });
}

/**
 * Lenis smooth scroll, driven by GSAP's ticker so ScrollTrigger scrubs stay exact.
 * Reduced motion: no smoothing, no pointer tracking (native scroll only).
 * Also turns same-page `#anchor` links into animated scrolls (no hard cuts).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const l = new Lenis({ lerp: 0.09, smoothWheel: true });
    lenis = l;
    l.on("scroll", ScrollTrigger.update);
    const tick = (t: number) => l.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const onMove = (e: PointerEvent) => {
      sceneRig.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
      sceneRig.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href]");
      if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const el = document.querySelector<HTMLElement>(url.hash);
      if (!el) return;
      e.preventDefault();
      scrollToTarget(el);
      history.pushState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("pointermove", onMove);
      gsap.ticker.remove(tick);
      l.destroy();
      lenis = null;
    };
  }, [reduced]);

  return <>{children}</>;
}
