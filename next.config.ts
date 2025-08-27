import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["londonbookpublishers.com"], // ✅ no https://
  },
};

export default nextConfig;
