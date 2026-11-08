import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/locations",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/locations/:slug",
        destination: "/service-areas/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
