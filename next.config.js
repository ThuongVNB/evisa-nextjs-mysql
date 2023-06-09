/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
    serverComponentsExternalPackages: ["mariadb"],
  },
};

module.exports = nextConfig;
