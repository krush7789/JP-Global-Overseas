import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits ./out, deployable to any static host.
  output: "export",
  // The image optimizer needs a server; static export must serve images as-is.
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
