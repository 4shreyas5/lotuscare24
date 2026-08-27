import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      // Default is 1MB. The sollicitatie form accepts a cv up to 5MB (see
      // lib/forms/blob.ts); 8mb leaves headroom for multipart overhead plus
      // the form's other text fields.
      bodySizeLimit: "8mb",
    },
  },
};

export default nextConfig;
