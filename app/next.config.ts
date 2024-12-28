import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // https://psychedelicnekopunch.com/archives/3655
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  // SVG ( https://github.com/vercel/next.js/tree/canary/examples/svg-components )
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    })
    return config
  },
};

export default nextConfig;
