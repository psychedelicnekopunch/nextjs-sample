import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Middleware() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Middleware</h1>
				<h2>ミドルウェア</h2>
				<Card>
					<List>
						<li>
							<a href="https://nextjs.org/docs/app/building-your-application/routing/middleware" target="_blank">
								Middleware - Next.js <Ungroup />
							</a>
						</li>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/functions/next-request" target="_blank">
								NextRequest - Next.js <Ungroup />
							</a>

						</li>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/functions/next-response" target="_blank">
								NextResponse - Next.js <Ungroup />
							</a>
						</li>
					</List>
					<p>
						/src 直下に middleware.ts を追加。<br/>
						/src 直下以外の場所だと動かない。
					</p>
					<Code
						lang="ts"
						value={
`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked 'async' if using 'await' inside
export function middleware(request: NextRequest) {
	const response = NextResponse.next()
	console.log("==================")
	console.log("middleware")
	console.log("==================")
	return response
}

// See "Matching Paths" below to learn more
export const config = {
	/*
	 * Match all request paths except for the ones starting with:
	 * - api (API routes)
	 * - _next/static (static files)
	 * - _next/image (image optimization files)
	 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
	 */
	matcher: '/((?!api|assets|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}`
					} />
				</Card>
			</div>
		</main>
	)
}
