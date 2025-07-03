/** @type {import('next').NextConfig} */

// Esta linha detecta se estamos em produção (no GitHub) ou desenvolvimento (na sua máquina)
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  // 👇 AQUI ESTÁ A MUDANÇA
  // Só aplica o prefixo e o caminho base quando for para produção
  assetPrefix: isProd ? '/sena-engenharia/' : undefined,
  basePath: isProd ? '/sena-engenharia/' : undefined,

  // Suas outras configurações
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
}

export default nextConfig