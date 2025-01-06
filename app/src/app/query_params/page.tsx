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

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Comp() {

	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()
	const queryString = searchParams.toString()

	return <>Query Params</>
}`}
					/>
					<URLsQueryStrings />
				</Card>
			</div>
		</main>
	)
}
