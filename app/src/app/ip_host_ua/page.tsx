import styles from "./page.module.scss"
// import Code from "@/components/layouts/code"
import Card from "@/components/layouts/card"

import { headers } from "next/headers"


function getIpAddress(str: string): string {
	let arr: string[] = str.split(", ")
	let res = ""
	if (arr.length > 0) {
		res = arr[0]
		arr = res.split(":")
		if (arr.length > 0) {
			res = arr[arr.length - 1]
		}
	}
	return res
}


export default async function IpHostUa() {
	const H = await headers()
	const ipAddress = getIpAddress(H.get("X-Forwarded-For"))
	// REMOTE HOST は Javascript では取得できないらしい
	const host = H.get("X-Forwarded-Host")
	const userAgent = H.get("user-agent")
	return (
		<main className={styles.main}>
			<div>
				<h1>IP HOST UA</h1>
				<h2>IPアドレス, HOSTネーム, UserAgent</h2>
				<Card>
					{ipAddress}
					<br />
					{host}
					<br />
					{userAgent}
					<br />
				</Card>
			</div>
		</main>
	)
}
