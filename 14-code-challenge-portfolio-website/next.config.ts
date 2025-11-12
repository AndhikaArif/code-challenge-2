import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wwd.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname:
          "encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKVr3zyJbO44-3QoqdmmsQUMp1pIAaGtgAA&s",
      },
    ],
  },
};

export default nextConfig;
