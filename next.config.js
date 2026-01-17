/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
    },
  },
};

module.exports = nextConfig;
