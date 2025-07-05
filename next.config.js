/** @type {import('next').NextConfig} */

// Define se estamos em ambiente de produção (para o build do GitHub Pages)
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Define 'output', 'basePath' e 'assetPrefix' apenas em produção
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/sena-website' : undefined,
  assetPrefix: isProd ? '/sena-website' : undefined,

  // Suas outras configurações permanecem aqui
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
