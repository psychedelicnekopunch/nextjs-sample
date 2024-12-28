
import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import SentimentSatisfied from "@/assets/icon/sentiment_satisfied.svg"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>SVG</h1>
        <h2><SentimentSatisfied/></h2>

        <Card>
          <p><a href="https://fonts.google.com/icons">Material Symbols - Google Fonts <Ungroup/></a></p>
          <Code
            lang="bash"
            value={`$ npm install @svgr/webpack --save-dev`}
          />
          <Code
            lang="ts"
            name="next.config.ts"
            value={
`import type { NextConfig } from "next"

const nextConfig: NextConfig = {
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
}

export default nextConfig`
          }
        />
          <Code
            lang="tsx"
            name="page.tsx"
            value={
`import SentimentSatisfied from "@/assets/icon/sentiment_satisfied.svg"

export default function Home() {
  return (
    <>
      <SentimentSatisfied/>
    </>
  )
}`
            }
          />
        </Card>
      </div>
    </main>
  );
}
