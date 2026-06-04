import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
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
