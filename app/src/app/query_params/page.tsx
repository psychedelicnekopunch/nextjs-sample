import { Suspense } from "react"

import styles from "./page.module.scss"
import Code from "@/components/elements/code"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import Ungroup from "@/assets/icon/ungroup.svg"
import URLsQueryStrings from "@/features/urlsQueryStrings"

export default async function QueryParams() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Query Params</h1>
				<h2>クエリ文字列</h2>
				<Card>
					<List>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/functions/use-search-params" target="_blank">
								useSearchParams - Next.js <Ungroup />
							</a>
							<List type="-">
								<li>読み取り専用バージョンの URLSearchParams インスタンスを返す。</li>
								<li>
									<a href="https://developer.mozilla.org/ja/docs/Web/API/URLSearchParams" target="_blank">
										URLSearchParams - MDN Web Docs <Ungroup />
									</a>
								</li>
							</List>
						</li>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/functions/use-pathname" target="_blank">
								usePathname - Next.js <Ungroup />
							</a>
						</li>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/functions/use-router" target="_blank">
								useRouter - Next.js <Ungroup />
							</a>
						</li>
					</List>
					<Code
						lang="ts"
						value={`"use client"

// Client Component hook
// "use client" 内でしか使えない。
//
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Comp() {

	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()
	const queryString = searchParams.toString()

	return <>Query Params</>
}`}
					/>
					<Suspense fallback={<>wait a minute</>}>
						<URLsQueryStrings />
					</Suspense>
				</Card>
			</div>
		</main>
	)
}
