/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clerk.house.gov',
        port: '',
        pathname: '**/*',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
