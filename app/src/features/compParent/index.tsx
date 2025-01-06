"use client"

import { useState as UseState, useEffect as UseEffect } from "react"
import Button from "@/components/layouts/button"
import Card from "@/components/layouts/card"
import CompA from "./compA"
import type { Methods } from "./compB"
import CompB from "./compB"
import styles from "./styles.module.scss"

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

	function doSomething(_: React.MouseEvent<HTMLButtonElement>): void {
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
			<Card color="superlight-gray" hasShadow={false}>
				<p>Comp Parent</p>
				<div className={styles.section}>
					<Card hasShadow={false}>
						<CompA onInitialized={onInitialized} onChange={onChange} onClick={onClick} reactiveText={reactiveText} />
					</Card>
				</div>
				<div className={styles.section}>
					<Card hasShadow={false}>
						<CompB initialized={initialized} text={text} reactiveText={reactiveText} methods={initMethods} />
					</Card>
				</div>
				<div className={styles.section}>
					<Button color="primary" onClick={doSomething}>
						Do Something
					</Button>
				</div>
				<div className={`${styles.section} ${styles.hr}`}>
					<p>children</p>
					{children}
				</div>
			</Card>
		</div>
	)
}
