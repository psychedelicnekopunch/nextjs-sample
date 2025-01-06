"use client"

import { useState as UseState, useEffect as UseEffect } from "react"

import styles from "./styles.module.scss"
import CompA from "./compA"
import type { Methods } from "./compB"
import CompB from "./compB"

type Props = {
	children: React.ReactNode
}
export default function CompParent({ children }: Props) {
	const [initialized, setInitialized] = UseState(false)
	const [text, setText] = UseState("")
	const [reactiveText, setReactiveText] = UseState("")
	const [methods, setMethods] = UseState<Methods>({
		doSomething: (): void => {},
	})

	function initA(): void {
		// console.log("initA")
		// console.log(initialized)
		if (initialized) {
			return
		}
		setInitialized(true)
		setReactiveText("")
		setText("from Comp Parent: initialized")
		// console.log("initialized")
	}

	function initB(): void {
		console.log("initB")
	}

	function initMethods(methods: Methods): void {
		setMethods(methods)
	}

	function onChange(str: string): void {
		setReactiveText(str)
	}

	function onClick(str: string): void {
		setText(str)
	}

	function onInitialized(): void {
		setInitialized(!initialized)
	}

	function doSomething(): void {
		// console.log(methods)
		methods.doSomething()
	}

	UseEffect(() => {
		initA()
	}, [initialized])

	UseEffect(() => {
		initB()
	}, [text])

	return (
		<div className={styles["comp-parent"]}>
			<p>Comp Parent</p>
			<div className={styles.section}>
				<CompA onInitialized={onInitialized} onChange={onChange} onClick={onClick} reactiveText={reactiveText} />
			</div>
			<div className={styles.section}>
				<CompB initialized={initialized} text={text} reactiveText={reactiveText} methods={initMethods} />
			</div>
			<div className={styles.section}>
				<button className={styles.primary} onClick={doSomething}>
					Do Something
				</button>
			</div>
			<div className={styles.section}>{children}</div>
		</div>
	)
}
