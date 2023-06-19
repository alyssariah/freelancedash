/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: []
  },
  webpack: (config, { isServer }) => {
    return config;
  },

};

module.exports = nextConfig;
