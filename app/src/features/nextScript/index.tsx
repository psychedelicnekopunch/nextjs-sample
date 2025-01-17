"use client"

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
			<canvas id="chart"></canvas>
		</>
	)
}
