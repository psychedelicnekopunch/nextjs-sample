import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
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
					<List type="none">
						<li>
							<NextScript />
						</li>
						<li>
							<Code
								lang="ts"
								value={`"use client"

import Script from "next/script"

declare class Chart {
	constructor(target: HTMLElement, option: object)
}

export default function NextScript(): React.ReactNode {
	function onLoad() {
		console.log("onLoad")
	}

	function onReady() {
		console.log("onReady")
		const ctx = document.getElementById("chart")
		if (!ctx) {
			console.error(\`not found <canvas id="chart"></canvas>\`)
			return
		}
		new Chart(ctx, {
			type: "bar",
			data: {
				labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
				datasets: [
					{
						label: "# of Votes",
						data: [12, 19, 3, 5, 2, 3],
						borderWidth: 1,
					},
				],
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		})
	}

	function onError(e: Error) {
		console.log("onError")
		console.error(e)
	}

	return (
		<>
			<Script
				src="http://cdn.jsdelivr.net/npm/chart.js"
				strategy="afterInteractive"
				onLoad={onLoad}
				onReady={onReady}
				onError={onError}
			/>
			<canvas id="chart"></canvas>
		</>
	)
}`}
							/>
						</li>
					</List>
				</Card>
			</div>
		</main>
	)
}
