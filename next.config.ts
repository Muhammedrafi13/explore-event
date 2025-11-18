import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns:[
      {
        protocol:"https",
        hostname:'res.cloudinary.com'
      }
    ]
  },
  /* config options here */
  cacheComponents:true,
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: true
  }
};

export default nextConfig;
