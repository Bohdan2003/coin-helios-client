import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.un.org',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8010',
        pathname: '/crypto-logos/**',
      },
      {
        protocol: 'https',
        hostname: 'investingnews.com',
      },
    ],
  },
};

export default nextConfig;
