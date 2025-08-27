import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // 🚀 Ignore ESLint errors during builds
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["londonbookpublishers.com", "res.cloudinary.com", "images.unsplash.com"],
  },
};

export default nextConfig;
