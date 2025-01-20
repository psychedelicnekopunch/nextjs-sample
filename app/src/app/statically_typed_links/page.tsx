import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function StaticallyTypedLinks() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Statically Typed Links</h1>
				<h2>Using next/link, improving type safety when navigating between pages.</h2>
				<Card>
					<p>
						<a href="https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links" target="_blank">
							Statically Typed Links - Next.js <Ungroup />
						</a>
					</p>
					<Code
						lang="ts"
						name="next.config.ts"
						value={`import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		typedRoutes: true,
	},
}

export default nextConfig
`}
					/>
					<p>
						Turbopack では対応してないらしいので使えない。
					</p>
					<Code
						lang="bash"
						value={`supported by Next.js with Turbopack:
- Unsupported Next.js configuration option(s)
To use Turbopack, remove the following configuration options:
- experimental.typedRoutes`}
					/>
				</Card>
			</div>
		</main>
	)
}
