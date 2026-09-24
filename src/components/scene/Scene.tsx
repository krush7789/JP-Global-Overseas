"use client";

import { Component, Suspense, type ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { TIER, type Tier } from "@/lib/scene/tier";
import { useSceneStore } from "@/lib/store";
import { CameraRig } from "./CameraRig";
import { Effects } from "./Effects";
import { Beacons } from "./Beacons";
import { HowItWorksRoute, Planes } from "./Flights";
import { Globe } from "./Globe";
import { HudLabels } from "./HudLabels";
import { Routes } from "./Routes";
import { ServiceNodes } from "./ServiceNodes";

/** Any scene error falls back to tier `none` (poster + CSS backdrop); the page keeps working. */
class SceneBoundary extends Component<{ children: ReactNode; onError: (e: Error) => void }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch(error: Error) {
    this.props.onError(error);
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function Scene({ tier }: { tier: Exclude<Tier, "none"> }) {
  const setTier = useSceneStore((s) => s.setTier);
  const setSceneError = useSceneStore((s) => s.setSceneError);
  const cfg = TIER[tier];
  const still = useSceneStore((s) => s.still);

  return (
    <SceneBoundary
      onError={(e) => {
        console.error("[scene] falling back to the plain backdrop:", e);
        setSceneError(`${e.name}: ${e.message}`.slice(0, 300));
        setTier("none");
      }}
    >
      <Canvas
        dpr={cfg.dpr}
        camera={{ fov: 40, near: 0.1, far: 200, position: [0, 0.6, 3.4] }}
        gl={{ antialias: tier !== "low", powerPreference: "high-performance", alpha: false }}
        onCreated={({ gl }) =>
          gl.domElement.addEventListener("webglcontextlost", () => {
            setSceneError("WebGL context lost (GPU reset or out of memory)");
            setTier("none");
          })
        }
      >
        <color attach="background" args={["#060f1f"]} />
        <Stars radius={80} depth={40} count={cfg.stars} factor={3.2} fade speed={0.3} />
        <Suspense fallback={null}>
          <Globe tier={tier} />
          <Beacons />
          <HudLabels />
          <Routes />
          {!still && <Planes />}
          {!still && <HowItWorksRoute />}
          {!still && <ServiceNodes />}
        </Suspense>
        {tier === "high" && !still && <Effects />}
        <CameraRig parallax={tier === "high" && !still} />
      </Canvas>
    </SceneBoundary>
  );
}
