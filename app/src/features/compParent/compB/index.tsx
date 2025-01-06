"use client"

import { useState as UseState, useEffect as UseEffect } from "react"
import CheckCircle from "@/assets/icon/check_circle.svg"
import List from "@/components/layouts/list"
import styles from "./styles.module.scss"

type Props = {
	initialized: boolean
	text: string
	reactiveText: string
	methods: (obj: Methods) => void
}

export type Methods = {
	doSomething: () => void
}

enum StyleEnum {
	Success = "success",
	SuccessActive = "success-active",
}

export default function CompB({ initialized, text, reactiveText, methods }: Props) {
	const [initializedMethods, setInitializedMethods] = UseState(false)
	const [initializedStyle, setInitializedStyle] = UseState(StyleEnum.Success)
	const [receivedTextStyle, setReceivedTextStyle] = UseState(StyleEnum.Success)
	const [doSomethingStyle, setDoSomethingStyle] = UseState(StyleEnum.Success)

	function init(): void {
		if (initialized) {
			return
		}
		setInitializedStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setInitializedStyle(StyleEnum.Success)
		}, 600)
	}

	function initMethods(): void {
		if (initializedMethods) {
			return
		}
		setInitializedMethods(true)
		methods({
			doSomething: doSomething,
		})
	}

	function receivedText(): void {
		setReceivedTextStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setReceivedTextStyle(StyleEnum.Success)
		}, 600)
	}

	function doSomething(): void {
		setDoSomethingStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setDoSomethingStyle(StyleEnum.Success)
		}, 600)
	}

	UseEffect(() => {
		init()
	}, [initialized])

	UseEffect(() => {
		initMethods()
	}, [initializedMethods])

	UseEffect(() => {
		receivedText()
	}, [text])

	return (
		<div className={styles["comp-b"]}>
			<p>Comp B</p>
			<List type="border">
				<li>
					<span className={styles.var}>initialized</span>
					<span>{initialized ? "true" : "false"}</span>
					<span className={styles[initializedStyle]}>
						<CheckCircle /> initialized!
					</span>
				</li>
				<li>
					<span className={styles.var}>text</span>
					<span>{text}</span>
					<span className={styles[receivedTextStyle]}>
						<CheckCircle /> received!
					</span>
				</li>
				<li>
					<span className={styles.var}>reactiveText</span>
					<span>{reactiveText}</span>
				</li>
				<li>
					<span className={styles.var}>methods</span>
					<span className={styles[doSomethingStyle]}>
						<CheckCircle /> Do Something!
					</span>
				</li>
			</List>
		</div>
	)
}
