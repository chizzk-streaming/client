/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'chzzk.naver.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nng-phinf.pstatic.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'livecloud-thumb.akamaized.net',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'ssl.pstatic.net',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
