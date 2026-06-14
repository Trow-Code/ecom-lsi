import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  allowedDevOrigins: ["192.168.29.243","192.168.1.4", "localhost"]
};

export default nextConfig;
