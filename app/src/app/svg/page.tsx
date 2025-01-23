import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import SentimentSatisfied from "@/assets/icon/sentiment_satisfied.svg"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Svg() {
	return (
		<main className={styles.main}>
			<div>
				<h1>SVG</h1>
				<h2>
					<SentimentSatisfied />
				</h2>

				<Card>
					<p>
						<a href="https://fonts.google.com/icons">
							Material Symbols - Google Fonts <Ungroup />
						</a>
					</p>
					<Code lang="bash" value={`$ npm install @svgr/webpack --save-dev`} />
					<Code
						lang="ts"
						name="next.config.ts"
						value={`import type { NextConfig } from "next"

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
		// https://github.com/vercel/next.js/blob/canary/examples/svg-components/next.config.js
		//
		// config.module.rules.push({
		//   test: /\.svg$/i,
		//   issuer: /\.[jt]sx?$/,
		//   use: ["@svgr/webpack"],
		// })


		// https://github.com/vercel/next.js/issues/48177
		//
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

export default nextConfig`}
					/>
					<Code
						lang="ts"
						name="page.tsx"
						value={`import SentimentSatisfied from "@/assets/icon/sentiment_satisfied.svg"

export default function Home() {
	return (
		<>
			<SentimentSatisfied/>
		</>
	)
}`}
					/>
				</Card>
			</div>
		</main>
	)
}
