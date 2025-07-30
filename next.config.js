/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
}

module.exports = nextConfig