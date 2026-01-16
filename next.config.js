/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
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
  env: {
    // Environment variables that will be available in the browser
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
};

module.exports = nextConfig;