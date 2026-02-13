import type { NextConfig } from "next";

// Deploying to GitHub Pages (project pages)
const repo = "DiammdM.github.io";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // For project pages: https://<user>.github.io/<repo>/
  // If you use user/organization pages (<user>.github.io), basePath should be "".
  basePath: isProd ? "" : "",
  assetPrefix: isProd ? "" : "",
};

export default nextConfig;
