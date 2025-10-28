"use client"

import { useState as UseState, useEffect as UseEffect } from "react"

import { Thumbmark } from "@thumbmarkjs/thumbmarkjs"
// import Script from "next/script"

// import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
// import List from "@/components/layouts/list"
// import Ungroup from "@/assets/icon/ungroup.svg"

export default function Fingerprinter() {
	const [fp, setFp] = UseState("")
	const initialized = 0

	// function init() {
	// 	const tm = new Thumbmark()
	// 	tm.get().then((res) => {
	// 		setFp(res.thumbmark)
	// 	})
	// }

	async function init() {
		const tm = new Thumbmark()
		const res = await tm.get()
		console.log(res)
		setFp(res.thumbmark)
	}

	UseEffect(() => {
		init()
	}, [initialized])

	return (
		<>
			<Code
				lang="ts"
				value={`import { Thumbmark } from "@thumbmarkjs/thumbmarkjs"

const [fp, setFp] = UseState("")

async function getFp() {
	const tm = new Thumbmark()
	const res = await tm.get()
	setFp(res.thumbmark)
}`}
			/>
			<p>your fingerprint is {fp}</p>
		</>
	)
}
