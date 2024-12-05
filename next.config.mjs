/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
  // Disable WebSocket in development to prevent polling warnings
  webSocketTimeout: 0,
}

export default nextConfig
