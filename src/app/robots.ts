import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = (process.env.SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/style-guide/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
