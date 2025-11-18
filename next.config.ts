import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'res.cloudinary.com'
      }
    ]
  },
  /* config options here */
  cacheComponents: true,
  reactCompiler: true,
};

export default nextConfig;
