/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["imgur.com", "localhost"],
  },
};

module.exports = nextConfig;
