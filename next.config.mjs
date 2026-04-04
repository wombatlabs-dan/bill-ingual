/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/bill-ingual',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
