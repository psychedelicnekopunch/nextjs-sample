import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"
import CookieForClient from "@/features/cookieForClient"
import CookieForServer from "@/features/cookieForServer"
import { cookies } from "next/headers"

export default async function Cookie() {
	const cookieStore = await cookies()
	// const test2 = cookieStore.get('test')
	const test2 = cookieStore.get("test2")
	const test3 = cookieStore.get("test3")
	// console.log(test2)
	// console.log(test3)
	return (
		<main className={styles.main}>
			<div>
				<h1>Cookie</h1>
				<h2>for use client</h2>
				<Card>
					<p>
						<a href="https://github.com/js-cookie/js-cookie" target="_blank">
							js-cookie/js-cookie - GitHub <Ungroup />
						</a>
					</p>
					<Code lang="bash" value={`$ npm install js-cookie @types/js-cookie --save`} />
					<CookieForClient />
				</Card>
				<h2>Route Handlers, Server Actions</h2>
				<Card>
					<p>
						<a href="https://nextjs.org/docs/app/api-reference/functions/cookies" target="_blank">
							cookies - Next.js <Ungroup />
						</a>
					</p>
					<p>get()</p>
					<Code
						lang="ts"
						name="page.tsx"
						value={`import { cookies } from "next/headers"

export default async function Page() {
	const cookieStore = await cookies()
	const test2 = cookieStore.get("test2")
	return <>{test2 && test2.value}</>
}`}
					/>
					<p>set(), delete()</p>
					<Code
						lang="jsx"
						name="repository.ts"
						value={`"use server"

import { cookies } from "next/headers"

export async function create(value: string) {
	(await cookies()).set("test2", value, {
		path: "/",
		maxAge: 60 * 5,
	})
}

export async function remove() {
	(await cookies()).delete("test2")
}`}
					/>
					<Code
						lang="jsx"
						name="someComponent.tsx"
						value={`"use client"

import { create, remove } from "./repository"

export default function someComponent() {

	function clickSaveButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		create("test")
	}

	function clickDeleteButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		remove()
	}

	return (
		<button onClick={clickSaveButton}>save</button>
		<button onClick={clickDeleteButton}>delete</button>
	)
}`}
					/>
					<CookieForServer value={test2 ? test2.value : ""} />
				</Card>
				<h2>Middleware</h2>
				<Card>
					<List>
						<li>
							<a href="https://nextjs.org/docs/app/building-your-application/routing/middleware#using-cookies" target="_blank">
								Using Cookies - Middleware - Next.js <Ungroup />
							</a>
						</li>
						<li>
							<a href="https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Set-Cookie" target="_blank">
								Set-Cookie - MDN Web Docs <Ungroup />
							</a>
						</li>
					</List>
					<Code
						lang="jsx"
						name="middleware.ts"
						value={`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
	const cookie = request.cookies.get("test3")
	const response = NextResponse.next()
	if (cookie) {
		return response
	}
	response.cookies.set({
		name: "test3",
		value: "in middleware",
		path: "/",
		maxAge: 60 * 5, // 5分,
	})
	return response
}

export const config = {
	matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}
`}
					/>
					<p>cookie.get(&quot;test3&quot;) is {test3 && test3.value}</p>
				</Card>
			</div>
		</main>
	)
}
