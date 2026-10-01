"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { poseForPath } from "@/lib/scene/poses";
import { detectCapabilities, pickTier, type Capabilities, type Tier } from "@/lib/scene/tier";
import { useSceneStore } from "@/lib/store";

// three.js is a separate chunk that only loads once a tier says a canvas can run.
const Scene = dynamic(() => import("./Scene"), { ssr: false });

/** Static backdrop: the fallback for tier `none`, and what shows while the canvas loads. */
function Poster() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(ellipse 55% 55% at 62% 48%, #16304f 0%, #0a1830 45%, #060f1f 75%)",
      }}
    />
  );
}

const TIERS = ["high", "mid", "low", "none"] as const;

/**
 * Mounted ONCE in the root layout, so the canvas survives client navigation.
 * Fixed behind all content; the page is fully usable with the canvas absent.
 *
 * Diagnostics: the chosen tier + capabilities are always logged to the console. Open the
 * site with `?scene=debug` to see them on screen, or `?scene=high|mid|low|none` to force a
 * tier (e.g. to test the 3D scene on a machine with reduced-motion switched on).
 */
export function SceneRoot() {
  const tier = useSceneStore((s) => s.tier);
  const sceneError = useSceneStore((s) => s.sceneError);
  const setTier = useSceneStore((s) => s.setTier);
  const setPose = useSceneStore((s) => s.setPose);
  const setLayout = useSceneStore((s) => s.setLayout);
  const path = usePathname();
  const [caps, setCaps] = useState<Capabilities | null>(null);
  const [debug, setDebug] = useState(false);

  // Decide the tier on idle so first paint isn't blocked by capability probing.
  useEffect(() => {
    const run = () => {
      const c = detectCapabilities();
      const q = new URLSearchParams(location.search).get("scene");
      const forced = TIERS.find((t) => t === q) as Tier | undefined;
      const picked = forced ?? pickTier(c);
      setCaps(c);
      useSceneStore.getState().setStill(c.reducedMotion);
      setDebug(q === "debug");
      console.info("[scene] tier:", picked, forced ? "(forced)" : "", c);
      setTier(picked);
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(run);
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(run, 1);
    return () => clearTimeout(id);
  }, [setTier]);

  // Route sets the base pose (inner pages park the camera). On the homepage the scroll
  // story overrides it act by act.
  useEffect(() => {
    setPose(poseForPath(path));
    setLayout(path === "/" ? "split" : "center");
  }, [path, setPose, setLayout]);

  return (
    <>
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-navy-950">
        <Poster />
        {tier && tier !== "none" ? <Scene tier={tier} /> : null}
        {/* Phones only: soft scrim so copy stays legible over bright map detail. */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-navy-950/20 to-navy-950/55 lg:hidden" />
      </div>
      {debug && (
        <pre className="pointer-events-none fixed bottom-2 left-2 z-[100] max-w-[92vw] whitespace-pre-wrap rounded bg-black/80 p-3 text-[11px] leading-snug text-white">
          {`scene tier: ${tier ?? "(detecting…)"}\nerror: ${sceneError ?? "none"}\ncaps: ${JSON.stringify(caps)}`}
        </pre>
      )}
    </>
  );
}
