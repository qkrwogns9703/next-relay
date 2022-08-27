/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      // This should match relay.config.js
      src: ".",
      language: "typescript",
    },
  },
};

module.exports = nextConfig;
