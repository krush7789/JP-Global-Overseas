"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Line2 } from "three/examples/jsm/lines/Line2.js";
import { ARC_LIFT, SEGMENTS, arcFor, type ArcKind, type RegionId } from "@/lib/scene/route";
import { REGION_ANCHORS } from "@/lib/scene/poses";
import { sceneRig } from "@/lib/scroll/rig";

const STYLE: Record<ArcKind, { color: string; width: number }> = {
  study: { color: "#c9a24b", width: 2 },
  careers: { color: "#f6ecd6", width: 1.4 },
};

/** One arc from the office to a region; only the first `sceneRig[kind]` of it is drawn (scroll scrubs it). */
function Arc({ kind, region }: { kind: ArcKind; region: RegionId }) {
  const ref = useRef<Line2>(null);
  const points = arcFor(kind, region);

  // Draw a prefix of the arc via instanced segments — no geometry rebuild per frame.
  useFrame(() => {
    const g = ref.current?.geometry as unknown as { instanceCount: number } | undefined;
    if (g) g.instanceCount = Math.max(0, Math.ceil(sceneRig[kind] * SEGMENTS));
  });

  return <Line ref={ref} points={points} color={STYLE[kind].color} lineWidth={STYLE[kind].width} transparent opacity={0.95} toneMapped={false} />;
}

/** Study arcs (brass, low) and Careers arcs (lighter, higher) from Haridwar to each region. */
export function Routes() {
  const regions = Object.keys(REGION_ANCHORS) as RegionId[];
  return (
    <group>
      {(Object.keys(ARC_LIFT) as ArcKind[]).flatMap((k) => regions.map((r) => <Arc key={`${k}-${r}`} kind={k} region={r} />))}
    </group>
  );
}
