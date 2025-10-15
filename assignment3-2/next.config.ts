import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "boringapi.com"
      }
    ]
  }
};

export default nextConfig;
