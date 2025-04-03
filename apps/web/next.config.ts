const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "*"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kr.object.ncloudstorage.com",
        pathname: "/kok-bucket/profile_default/**",
      },
    ],
  },
  transpilePackages: ["@repo/ui"],
  experimental: {
    reactCompiler: true,
  },
};

const config = withVanillaExtract(nextConfig);

export default config;
