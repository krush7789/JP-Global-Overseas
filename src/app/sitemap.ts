import type { MetadataRoute } from "next";
import { ROUTES } from "@/content";

export const dynamic = "force-static";

// No domain has been supplied yet: set SITE_URL at build time (e.g. SITE_URL=https://example.com npm run build).
const BASE = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

/** Every S16 route; the internal /style-guide is deliberately absent. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({ url: `${BASE}${r}` }));
}
