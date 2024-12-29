import type { NextConfig } from "next"

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
    // config.module.rules.push({
    //   test: /\.svg$/i,
    //   issuer: /\.[jt]sx?$/,
    //   use: ["@svgr/webpack"],
    // })


    // https://github.com/vercel/next.js/issues/48177
    //
    // Grab the existing rule that handles SVG imports
    // @ts-ignore - rules is a private property that is not typed
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )


    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
}

export default nextConfig
