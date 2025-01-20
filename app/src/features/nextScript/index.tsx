"use client"

import { useState as UseState } from "react"
import Script from "next/script"

import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import List from "@/components/layouts/list"
import Ungroup from "@/assets/icon/ungroup.svg"

// declare class Chart {
// 	constructor(target: HTMLElement, option: object)
// }

function ChartJS(): React.ReactNode {
	function onLoad() {
		console.log("onLoad")
	}

	function onReady() {
		console.log("onReady")
		// console.log(document)
		// console.log(document.getElementById("chart"))
		// console.log(Chart)
		const ctx = document.getElementById("chart")
		if (!ctx) {
			console.error(`not found <canvas id="chart"></canvas>`)
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
			<Script src="http://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" onLoad={onLoad} onReady={onReady} onError={onError} />
			<List type="none">
				<li>
					<a href="https://www.chartjs.org/docs/latest/getting-started/" target="_blank">
						Getting Started - Chart.js <Ungroup />
					</a>
				</li>
				<li>
					<canvas id="chart"></canvas>
				</li>
				<li>
					<Code
						lang="ts"
						value={`"use client"

import Script from "next/script"

declare class Chart {
	constructor(target: HTMLElement, option: object)
}

export default function Comp(): React.ReactNode {
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
				src="https://cdn.jsdelivr.net/npm/chart.js"
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
		</>
	)
}

// declare function dayjs(): {
// 	format: () => string
// }

function DayJS(): React.ReactNode {
	const [value, setValue] = UseState("")

	function onLoad() {
		console.log("onLoad")
	}

	function onReady() {
		console.log("onReady")
		// console.log(dayjs().format())
		setValue(dayjs().format())
	}

	function onError(e: Error) {
		console.log("onError")
		console.error(e)
	}

	return (
		<>
			<Script src="http://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js" strategy="afterInteractive" onLoad={onLoad} onReady={onReady} onError={onError} />
			<List type="none">
				<li>
					<a href="https://day.js.org/docs/en/installation/browser" target="_blank">
						Browser - Day.js <Ungroup />
					</a>
				</li>
				<li>{value}</li>
				<li>
					<Code
						lang="ts"
						value={`"use client"

import { useState as UseState } from "react"
import Script from "next/script"

declare function dayjs(): {
	format: () => string
}

function Comp(): React.ReactNode {
	const [value, setValue] = UseState("")

	function onLoad() {
		console.log("onLoad")
	}

	function onReady() {
		console.log("onReady")
		setValue(dayjs().format())
	}

	function onError(e: Error) {
		console.log("onError")
		console.error(e)
	}

	return (
		<>
			<Script
				src="https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js"
				strategy="afterInteractive"
				onLoad={onLoad}
				onReady={onReady}
				onError={onError}
			/>
			<div>{value}</div>
		</>
	)
}`}
					/>
				</li>
			</List>
		</>
	)
}

function AmbientDeclarations(): React.ReactNode {
	return (
		<>
			<p>型定義ファイルにまとめる方が良いかもしれない。</p>
			<List>
				<li>
					<a href="https://typescript-jp.gitbook.io/deep-dive/type-system/intro" target="_blank">
						アンビエント宣言(declare) - TypeScript Deep Dive 日本語版 <Ungroup />
					</a>
				</li>
			</List>
			<Code
				lang="ts"
				name="/src/types/globals.d.ts"
				value={`declare class Chart {
	constructor(target: HTMLElement, option: object)
}

type DayJS = {
	format: () => string
}

declare function dayjs(): DayJS`}
			/>
		</>
	)
}

export default function NextScript(): React.ReactNode {
	return (
		<>
			<Card>
				<ChartJS />
			</Card>
			<Card>
				<DayJS />
			</Card>
			<Card>
				<AmbientDeclarations />
			</Card>
		</>
	)
}
