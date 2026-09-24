"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { type Group, type Mesh, type MeshBasicMaterial } from "three";
import { SERVICES } from "@/content";
import { sceneRig } from "@/lib/scroll/rig";
import { useSceneStore } from "@/lib/store";

const R = 1.42;

/**
 * Six nodes orbiting the globe — one per service (S4.04). They orbit in as the services act
 * is scrolled in, and light up in sync with the matching HTML card (store.highlight), and
 * vice-versa. Six meshes: instancing isn't worth it at this count.
 */
export function ServiceNodes() {
  const spin = useRef<(Group | null)[]>([]);
  const nodes = useRef<(Mesh | null)[]>([]);

  useFrame(({ clock }) => {
    const hot = useSceneStore.getState().highlight;
    const t = clock.elapsedTime;
    SERVICES.forEach((s, i) => {
      const grp = spin.current[i];
      const m = nodes.current[i];
      if (!grp || !m) return;
      const enter = Math.min(1, Math.max(0, sceneRig.services * 1.4 - i * 0.08)); // staggered orbit-in
      grp.visible = enter > 0.001;
      grp.rotation.y = t * (0.12 + i * 0.015) + (i * Math.PI * 2) / SERVICES.length;
      const lit = hot === s.id;
      m.scale.setScalar(enter * (lit ? 2.1 : 1));
      (m.material as MeshBasicMaterial).color.set(lit ? "#ffe9a8" : "#d9bb70");
    });
  });

  return (
    <group>
      {SERVICES.map((s, i) => (
        // outer group tilts the orbit plane; inner group spins the node round the globe
        <group key={s.id} rotation={[0, 0, ((i % 3) - 1) * 0.5 + (i > 2 ? 0.25 : -0.25)]}>
          <group ref={(g) => void (spin.current[i] = g)}>
            <mesh ref={(m) => void (nodes.current[i] = m)} position={[R, 0, 0]}>
              <octahedronGeometry args={[0.028, 0]} />
              <meshBasicMaterial color="#d9bb70" toneMapped={false} />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}
