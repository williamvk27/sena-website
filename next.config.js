/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/sena-website',
  assetPrefix: '/sena-website',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
