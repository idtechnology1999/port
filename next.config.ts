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


// git init
// git add .
// git commit -m "Initial commit"

// # 4. set main branch and connect remote
// git branch -M main
// git remote add origin https://github.com/idtechnology1999/web.git

// # 5. push
// git push -u origin main