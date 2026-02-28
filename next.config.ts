import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacyPolicy",
        destination: "/datenschutz",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/agb",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
