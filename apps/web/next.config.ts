const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kok-2025-dev.s3.ap-northeast-2.amazonaws.com",
        pathname: "/profile_default/**",
      },
    ],
  },
  transpilePackages: ["@repo/ui"],
};

const config = withVanillaExtract(nextConfig);

export default config;
