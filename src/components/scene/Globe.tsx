"use client";

import { useTexture } from "@react-three/drei";
import { useMemo } from "react";
import { AdditiveBlending, BackSide, Color, SRGBColorSpace, type Texture } from "three";
import { latLonToVec3 } from "@/lib/scene/geo";
import type { Tier } from "@/lib/scene/tier";

/** Fixed sun (lat/lon) — only used for a gentle sun-side lift and to dim city lights on the lit side. */
const SUN = latLonToVec3(15, 30, 1).normalize();

const earthVert = /* glsl */ `
  varying vec2 vUv; varying vec3 vN; varying vec3 vNv; varying vec3 vView;
  void main() {
    vUv = uv;
    vN = normalize(mat3(modelMatrix) * normal);           // world normal (sun lighting)
    vNv = normalize(normalMatrix * normal);               // view normal (rim)
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    vView = normalize(-mv.xyz);
    gl_Position = projectionMatrix * mv;
  }`;

/**
 * "Dark premium Earth": deep-navy oceans and land shaded by the NASA day map's luminance
 * (so continents keep their shape and relief), NASA Black Marble city lights re-tinted
 * brass so bloom makes them glow, and a cool rim. Nothing bright behind the copy.
 */
const earthFrag = /* glsl */ `
  uniform sampler2D uDay; uniform sampler2D uNight; uniform vec3 uSun;
  varying vec2 vUv; varying vec3 vN; varying vec3 vNv; varying vec3 vView;
  void main() {
    vec3 day = texture2D(uDay, vUv).rgb;
    float lumD = dot(day, vec3(0.299, 0.587, 0.114));
    float land = smoothstep(0.10, 0.30, lumD);            // oceans are dark in the day map

    vec3 ocean = vec3(0.0035, 0.011, 0.028);
    vec3 landC = vec3(0.010, 0.022, 0.045) + lumD * vec3(0.016, 0.026, 0.040);
    vec3 base = mix(ocean, landC, land);

    float l = dot(normalize(vN), uSun);
    base *= 0.72 + 0.55 * smoothstep(-0.4, 0.8, l);        // gentle sun-side lift

    vec3 night = texture2D(uNight, vUv).rgb;
    float lumN = dot(night, vec3(0.299, 0.587, 0.114));
    float lights = smoothstep(0.40, 0.82, lumN);           // city lights only, not the base map
    vec3 glow = vec3(1.0, 0.76, 0.40) * lights * (2.3 - 0.9 * smoothstep(-0.2, 0.5, l));

    float rim = pow(1.0 - max(dot(normalize(vNv), normalize(vView)), 0.0), 3.0);
    vec3 col = base + glow + vec3(0.10, 0.22, 0.45) * rim * 0.30;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }`;

const atmoVert = /* glsl */ `
  varying vec3 vN;
  void main() {
    vN = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }`;
const atmoFrag = /* glsl */ `
  uniform vec3 uColor; varying vec3 vN;
  void main() {
    float i = pow(max(0.0, 0.66 - dot(vN, vec3(0.0, 0.0, 1.0))), 3.0);
    gl_FragColor = vec4(uColor, 1.0) * i * 1.15;
    #include <colorspace_fragment>
  }`;

export function Globe({ tier }: { tier: Exclude<Tier, "none"> }) {
  const [day, night] = useTexture(["/textures/earth-day.jpg", "/textures/earth-night.jpg"]) as Texture[];
  day.colorSpace = SRGBColorSpace;
  night.colorSpace = SRGBColorSpace;
  day.anisotropy = night.anisotropy = tier === "high" ? 8 : 2;

  const seg = tier === "high" ? 128 : tier === "mid" ? 96 : 64;
  const earthUniforms = useMemo(() => ({ uDay: { value: day }, uNight: { value: night }, uSun: { value: SUN } }), [day, night]);
  const atmoUniforms = useMemo(() => ({ uColor: { value: new Color("#3f6fb5") } }), []);

  return (
    <group>
      <mesh>
        <sphereGeometry args={[1, seg, seg]} />
        <shaderMaterial uniforms={earthUniforms} vertexShader={earthVert} fragmentShader={earthFrag} />
      </mesh>

      <mesh scale={1.09}>
        <sphereGeometry args={[1, 64, 64]} />
        <shaderMaterial
          uniforms={atmoUniforms}
          vertexShader={atmoVert}
          fragmentShader={atmoFrag}
          side={BackSide}
          blending={AdditiveBlending}
          transparent
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
