"use client";

import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { type Group, type Mesh, type MeshBasicMaterial, Vector3 } from "three";
import { HIW_WAYPOINTS, arcFor, hiwArc, pointAt, type ArcKind, type RegionId } from "@/lib/scene/route";
import { REGION_ANCHORS } from "@/lib/scene/poses";
import { sceneRig } from "@/lib/scroll/rig";

const a = new Vector3();
const b = new Vector3();

/** Tiny stylised procedural aircraft (no asset). Rides `points` at `progress()`; hidden outside 0..1. */
function Aircraft({ points, progress, always = false }: { points: Vector3[]; progress: () => number; always?: boolean }) {
  const g = useRef<Group>(null);
  useFrame(() => {
    const grp = g.current;
    if (!grp) return;
    const t = progress();
    grp.visible = always ? t > 0 : t > 0.004 && t < 0.996;
    if (!grp.visible) return;
    pointAt(points, t, a);
    pointAt(points, Math.min(1, t + 0.012), b);
    grp.position.copy(a);
    grp.up.copy(a).normalize(); // belly toward the globe
    grp.lookAt(b);
  });
  return (
    <group ref={g} visible={false}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.0065, 0.04, 8]} />
        <meshBasicMaterial color="#fff6dc" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0, -0.004]}>
        <boxGeometry args={[0.046, 0.0016, 0.012]} />
        <meshBasicMaterial color="#f6ecd6" toneMapped={false} />
      </mesh>
      <mesh position={[0, 0.005, -0.017]}>
        <boxGeometry args={[0.0016, 0.012, 0.009]} />
        <meshBasicMaterial color="#f6ecd6" toneMapped={false} />
      </mesh>
    </group>
  );
}

/** Study + Careers plane passes: one aircraft per arc, driven by the rig's arc progress. */
export function Planes() {
  const regions = Object.keys(REGION_ANCHORS) as RegionId[];
  const kinds: ArcKind[] = ["study", "careers"];
  return (
    <group>
      {kinds.flatMap((k) =>
        regions.map((r) => <Aircraft key={`${k}-${r}`} points={arcFor(k, r)} progress={() => sceneRig[k]} />),
      )}
    </group>
  );
}

/**
 * How It Works: one route, four waypoints (the four steps), one aircraft the chase camera
 * follows. Waypoints light as the plane reaches them; scrolling back reverses cleanly
 * (everything is a pure function of `sceneRig.hiw`).
 */
export function HowItWorksRoute() {
  const points = useMemo(() => hiwArc(), []);
  const marks = useRef<(Mesh | null)[]>([]);
  const root = useRef<Group>(null);
  const pts = useMemo(() => HIW_WAYPOINTS.map((t) => pointAt(points, t, new Vector3())), [points]);

  useFrame(() => {
    const p = sceneRig.hiw;
    if (root.current) root.current.visible = sceneRig.chase || p > 0; // only exists during its act
    marks.current.forEach((m, i) => {
      if (!m) return;
      const lit = p >= HIW_WAYPOINTS[i] - 1e-6 && p > 0;
      (m.material as MeshBasicMaterial).color.set(lit ? "#ffe9a8" : "#5a6a86");
      m.scale.setScalar(lit ? 1.5 : 1);
    });
  });

  return (
    <group ref={root}>
      <Line points={points} color="#5a6a86" lineWidth={1.2} transparent opacity={0.55} dashed dashSize={0.02} gapSize={0.016} toneMapped={false} />
      {pts.map((p, i) => (
        <mesh key={i} position={p} ref={(m) => void (marks.current[i] = m)}>
          <sphereGeometry args={[0.011, 16, 16]} />
          <meshBasicMaterial color="#5a6a86" toneMapped={false} />
        </mesh>
      ))}
      <Aircraft points={points} progress={() => (sceneRig.chase ? sceneRig.hiw : 0)} always />
    </group>
  );
}

