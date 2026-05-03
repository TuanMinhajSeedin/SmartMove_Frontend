/** @type {import('next').NextConfig} */
const backend =
  process.env.SMARTMOVE_BACKEND_URL ||
  "https://smartmovebackend-production.up.railway.app";

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${backend}/api/:path*`,
      },
    ];
  },
};

export default nextConfig;
