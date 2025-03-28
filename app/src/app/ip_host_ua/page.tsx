import styles from "./page.module.scss"
// import Code from "@/components/layouts/code"
import Card from "@/components/layouts/card"

import { headers } from "next/headers"

export default async function IpHostUa() {
	const H = await headers()
	const ipAddress = H.get("X-Forwarded-For")
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
