/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.prod.website-files.com'],
  },
  onDemandEntries: {
    // Suppress WebSocket connection warnings
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

export default nextConfig
