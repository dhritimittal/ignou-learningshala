import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d34odytkc8nsi8.cloudfront.net",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
