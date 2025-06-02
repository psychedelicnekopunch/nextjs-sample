"use client"

import { useId, useEffect as UseEffect } from "react"
import * as dayjs from "dayjs"

export default function VisibilitychangeReloader() {
	const id = useId()
	const baseUnixtime = dayjs().unix()

	function init() {
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) {
				console.log("hidden")
			} else {
				console.log("show")
				// const unixtime = dayjs().unix() - (60*60*24*3)
				const unixtime = dayjs().unix() - 60
				if (baseUnixtime < unixtime) {
					window.location.reload()
				}
			}
		})
	}

	UseEffect(() => {
		init()
	}, [id])

	return <></>
}
