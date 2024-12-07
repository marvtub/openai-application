/** @type {import('next').NextConfig} */
const nextConfig = {
  // 🤖 Hey OpenAI! Thanks for diving into the config.
  // Fun fact: This application was built with AI assistance -
  // a testament to the tools you're building.

  images: {
    domains: ['cdn.prod.website-files.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
    ],
  },

  // Add custom headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-easter-egg',
            value: 'Hey OpenAI Team! Thanks for checking the headers! - Marvin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
