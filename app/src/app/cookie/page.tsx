import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

// import { cookies } from 'next/headers'

import CookieForClient from "@/features/cookieForClient"

export default function CookiePage() {
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
			</div>
		</main>
	)
}
