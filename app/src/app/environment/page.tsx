import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Environment() {
	return (
		<main className={styles.main}>
			<div>
				<h1>
					<a href="https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables" target="_blank">
						Environment Variables <Ungroup />
					</a>
				</h1>
				<h2>
					<a href="https://github.com/vercel/next.js/tree/canary/examples/environment-variables" target="_blank">
						Environment Variables Example <Ungroup />
					</a>
				</h2>
				<Card>
					<Code
						lang="bash"
						name=".env.dev"
						value={`TEST=dev
NEXT_PUBLIC_TEST=dev`}
					/>
					<Code
						lang="bash"
						name=".env.stg"
						value={`TEST=stg
NEXT_PUBLIC_TEST=stg`}
					/>
					<Code
						lang="bash"
						name=".env.prod"
						value={`TEST=prod
NEXT_PUBLIC_TEST=prod`}
					/>
					<Code
						lang="bash"
						name=".gitignore"
						value={`# env files (can opt-in for commiting if needed)
.env*
!.env.dev
!.env.stg
!.env.prod`}
					/>
					<Code
						lang="json"
						name="package.json"
						value={`{
	"scripts": {
		"dev": "rm -f .env.local && cp .env.dev .env.local && next dev --turbopack",
		"dev:stg": "rm -f .env.local && cp .env.stg .env.local && next dev --turbopack",
		"build": "next build",
		"build:dev": "rm -f .env.local && cp .env.dev .env.local && next build",
		"build:stg": "rm -f .env.local && cp .env.stg .env.local && next build",
		"build:prod": "rm -f .env.local && cp .env.prod .env.local && next build"
	}
}`}
					/>
				</Card>
				<Card>
					<p>Server Components</p>
					<Code
						lang="ts"
						value={`return (
	<>
		process.env.TEST: { process.env.TEST }
		process.env.NEXT_PUBLIC_TEST: { process.env.NEXT_PUBLIC_TEST }
	</>
)`}
					/>
					<p>
						process.env.TEST: {process.env.TEST}
						<br />
						process.env.NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}
					</p>
				</Card>
				<Card>
					<p>Client Components で使用する場合、先頭に NEXT_PUBLIC_ をつける。</p>
					<Code
						lang="ts"
						value={`"use client"

return (
	<>
		process.env.TEST: { process.env.TEST }
		process.env.NEXT_PUBLIC_TEST: { process.env.NEXT_PUBLIC_TEST }
	</>
)`}
					/>
					<p>
						process.env.TEST: <br />
						process.env.NEXT_PUBLIC_TEST: {process.env.NEXT_PUBLIC_TEST}
					</p>
				</Card>
			</div>
		</main>
	)
}
