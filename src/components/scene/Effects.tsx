"use client";

import { Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

/**
 * High tier only. Restrained: bloom picks up the brass beacons/arcs, vignette frames the
 * globe, faint brass dust. NOTE: `mipmapBlur` and `multisampling={0}` on the composer
 * rendered a blank canvas in a real browser (verified with scripts/shot.mjs) — don't add
 * them back without re-checking.
 */
export function Effects() {
  return (
    <>
      <Sparkles count={70} scale={[3.6, 3.6, 3.6]} size={1.4} speed={0.2} opacity={0.4} color="#d9bb70" />
      <EffectComposer>
        <Bloom intensity={0.55} luminanceThreshold={0.82} luminanceSmoothing={0.2} />
        <Vignette eskil={false} offset={0.25} darkness={0.55} />
      </EffectComposer>
    </>
  );
}
