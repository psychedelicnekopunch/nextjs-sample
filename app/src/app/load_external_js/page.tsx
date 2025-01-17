import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import NextScript from "@/features/nextScript"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function LoadExternalJS() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Load External JS</h1>
				<h2>外部 JS の読み込み</h2>
				<Card>
					<List>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/components/script" target="_blank">
								Script - Next.js <Ungroup />
							</a>
						</li>
						<li>
							<a href="https://www.chartjs.org/docs/latest/getting-started/" target="_blank">
								Getting Started - Chart.js
								<Ungroup />
							</a>
						</li>
					</List>
					<NextScript />
				</Card>
			</div>
		</main>
	)
}
