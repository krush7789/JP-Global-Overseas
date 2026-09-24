"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, type Group, type Mesh, type MeshBasicMaterial } from "three";
import { latLonToVec3 } from "@/lib/scene/geo";
import { ORIGIN, REGION_ANCHORS } from "@/lib/scene/poses";
import { useSceneStore } from "@/lib/store";

const BRASS = new Color("#d9bb70");

/** A glowing point on the surface with a pulsing ring lying flat on the globe. */
function Beacon({ id, lat, lon, size }: { id: string; lat: number; lon: number; size: number }) {
  const pos = useMemo(() => latLonToVec3(lat, lon, 1.004), [lat, lon]);
  const ring = useRef<Mesh>(null);
  const grp = useRef<Group>(null);
  const phase = useMemo(() => Math.random(), []);

  useFrame(({ clock, camera }) => {
    // Keep the marker a point, not a donut, when the camera flies in close.
    grp.current?.scale.setScalar(Math.min(1.2, Math.max(0.3, camera.position.length() / 3.4)));
    const r = ring.current;
    if (!r) return;
    const hot = useSceneStore.getState().highlight === id;
    const t = (clock.elapsedTime * (hot ? 0.9 : 0.5) + phase) % 1;
    r.scale.setScalar(size * (1 + t * (hot ? 3.2 : 2.6)));
    (r.material as MeshBasicMaterial).opacity = (1 - t) * (hot ? 0.95 : 0.6);
  });

  return (
    <group ref={grp} position={pos} onUpdate={(g) => g.lookAt(pos.clone().multiplyScalar(2))}>
      <mesh>
        <sphereGeometry args={[size * 0.35, 16, 16]} />
        <meshBasicMaterial color={BRASS} toneMapped={false} />
      </mesh>
      <mesh ref={ring}>
        <ringGeometry args={[0.7, 1, 40]} />
        <meshBasicMaterial color={BRASS} transparent depthWrite={false} toneMapped={false} />
      </mesh>
    </group>
  );
}

/** Office origin (Kankhal, Haridwar) + the three region-level anchors. */
export function Beacons() {
  return (
    <group>
      <Beacon id="origin" lat={ORIGIN.lat} lon={ORIGIN.lon} size={0.028} />
      {Object.entries(REGION_ANCHORS).map(([id, a]) => (
        <Beacon key={id} id={id} lat={a.lat} lon={a.lon} size={0.034} />
      ))}
    </group>
  );
}
