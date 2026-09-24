"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registered once, imported by everything that scripts scroll.
gsap.registerPlugin(ScrollTrigger);
export { gsap, ScrollTrigger };
