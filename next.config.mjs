/** @type {import('next').NextConfig} */
const isGh = process.env.DEPLOY_TARGET === "gh"; // Only set in GH Pages CI

const base = process.env.NEXT_PUBLIC_BASE_PATH || ""; // e.g. "/nirantara-site" for GH Pages

export default {
  // For Vercel (default): SSR/ISR works, image optimization on.
  // For GH Pages: set DEPLOY_TARGET=gh in the workflow to enable export mode.
  output: isGh ? "export" : undefined,
  images: { unoptimized: isGh },
  basePath: isGh ? base : "",
  assetPrefix: isGh ? `${base}/` : undefined,
  trailingSlash: isGh ? true : undefined,
};
