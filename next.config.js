/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com', 'images.unsplash.com'], // Add your image domains here
  },
};

module.exports = nextConfig;