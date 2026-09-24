# 07 — Routes, region beacons & camera-fly API

**What to build:** Haridwar origin marker, three region-level beacons (Russia, Europe, Middle East), route arcs, a lat/lon→3D helper and a `flyTo(region|pose)` camera API on the damped camera rig.

**Blocked by:** 06

**Status:** implemented — builds and prerenders; visual and runtime check in a browser still pending (no browser tool available here)

- [ ] Beacons are region-level glow points, not country polygons or city claims
- [ ] Arcs built as instanced/line geometry from Haridwar; study and careers arcs styled distinctly
- [ ] `flyTo` moves the camera with damping; cancelling mid-flight never snaps
- [ ] Anchor coordinates live in one constants file
