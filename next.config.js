/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      enabled: false, // Disable Turbopack
    },
  },
  images: {
    // Using remotePatterns instead of domains (deprecated)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // For GitHub profile images
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com', // For GitHub profile images
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com', // For Google profile images
      },
    ],
  },
};

module.exports = nextConfig;