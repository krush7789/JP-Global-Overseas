"use client";

import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Vector3 } from "three";
import { REGIONS } from "@/content";
import { latLonToVec3 } from "@/lib/scene/geo";
import { ORIGIN, REGION_ANCHORS } from "@/lib/scene/poses";
import { useSceneStore } from "@/lib/store";

const cam = new Vector3();
const smooth = (a: number, b: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

/**
 * HUD-style tag on a beacon: a hairline leader rising from the point with a small-caps name.
 * Purely visual (pointer-events none); fades out as its beacon turns to the far side of the
 * globe, and brightens when its region is the active homepage beat.
 */
function Tag({ id, text, lat, lon, flip }: { id: string; text: string; lat: number; lon: number; flip?: boolean }) {
  const pos = useMemo(() => latLonToVec3(lat, lon, 1.012), [lat, lon]);
  const unit = useMemo(() => pos.clone().normalize(), [pos]);
  const el = useRef<HTMLDivElement>(null);

  useFrame(({ camera, size }) => {
    if (!el.current) return;
    const facing = unit.dot(cam.copy(camera.position).normalize());
    const hot = useSceneStore.getState().highlight === id;
    // Phones: at the far "wide/final" poses the tags collide, so only the office stays.
    const { pose } = useSceneStore.getState();
    const phone = size.width < 1024;
    const crowded = phone && (useSceneStore.getState().layout === "center" || (!flip && (pose === "wide" || pose === "final")));
    el.current.style.opacity = crowded ? "0" : String(smooth(0.25, 0.5, facing) * (hot ? 1 : 0.7));
  });

  return (
    <Html position={pos} zIndexRange={[0, 0]} style={{ pointerEvents: "none" }}>
      <div ref={el} className={`flex -translate-y-full flex-col items-start opacity-0 transition-none ${flip ? "max-lg:-translate-x-full max-lg:items-end" : ""}`}>
        <span className={`whitespace-nowrap pl-2 ${flip ? "max-lg:pl-0 max-lg:pr-2" : ""} text-[10px] font-medium uppercase tracking-[0.28em] text-brass-100`}>
          {text}
        </span>
        <span className={`${flip ? "max-lg:h-16" : ""} h-10 w-px bg-linear-to-t from-brass-400/80 to-brass-400/0`} />
      </div>
    </Html>
  );
}

/** Office origin (Haridwar; Dehradun is ~50 km away, too close to mark separately) + the three region anchors. */
export function HudLabels() {
  return (
    <group>
      <Tag id="origin" flip text="Dehradun · Haridwar" lat={ORIGIN.lat} lon={ORIGIN.lon} />
      {REGIONS.map((r) => (
        <Tag key={r.id} id={r.id} text={r.name} lat={REGION_ANCHORS[r.id].lat} lon={REGION_ANCHORS[r.id].lon} />
      ))}
    </group>
  );
}
