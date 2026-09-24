export type Tier = "high" | "mid" | "low" | "none";

export type Capabilities = {
  reducedMotion: boolean;
  webgl2: boolean;
  /** Touch-first device. */
  coarsePointer: boolean;
  /** navigator.deviceMemory (GB) — undefined where unsupported (Safari/Firefox). */
  memoryGb?: number;
  cores?: number;
  saveData?: boolean;
};

/**
 * Pure capability -> render tier. `none` = no canvas at all (poster + CSS backdrop,
 * identical content). Order matters: hard fallbacks first.
 */
export function pickTier(c: Capabilities): Tier {
  // Reduced motion does NOT remove the globe (that just looked like "no globe"): it renders
  // still — see `still` in the store. Only a missing WebGL2 means no canvas.
  if (!c.webgl2) return "none";
  if (c.saveData) return "low";
  if (c.memoryGb !== undefined && c.memoryGb <= 2) return "low";
  if (c.coarsePointer) return "mid";
  if ((c.memoryGb !== undefined && c.memoryGb <= 4) || (c.cores !== undefined && c.cores <= 4)) return "mid";
  return "high";
}

/** Read capabilities from the browser (client only). */
export function detectCapabilities(): Capabilities {
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  let webgl2 = false;
  try {
    webgl2 = !!document.createElement("canvas").getContext("webgl2");
  } catch {}
  return {
    reducedMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    webgl2,
    coarsePointer: matchMedia("(pointer: coarse)").matches,
    memoryGb: nav.deviceMemory,
    cores: nav.hardwareConcurrency,
    saveData: nav.connection?.saveData,
  };
}

/** Per-tier render settings, single source. */
export const TIER = {
  high: { dpr: [1, 2] as [number, number], stars: 4000 },
  mid: { dpr: [1, 1.5] as [number, number], stars: 1500 },
  low: { dpr: [1, 1] as [number, number], stars: 600 },
} as const;
