import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    if (process.env.NODE_ENV !== "production") {
      return [];
    }

    return [
      {
        source: "/:path*",
        missing: [
          {
            type: "host",
            value: "minyakpamboang\\.dekatlokal\\.com",
          },
        ],
        destination: "https://minyakpamboang.dekatlokal.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
