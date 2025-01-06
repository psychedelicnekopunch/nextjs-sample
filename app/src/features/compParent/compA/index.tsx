"use client"

// import { useState as UseState, useEffect as UseEffect } from "react"
import Input from "@/components/elements/input"
import Button from "@/components/layouts/button"
import styles from "./styles.module.scss"

type Props = {
	onInitialized: () => void
	onChange: (str: string) => void
	onClick: (str: string) => void
	reactiveText: string
}

export default function CompA({ onInitialized, onChange, onClick, reactiveText }: Props) {
	// const [value, setValue] = UseState("")

	function onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
		// console.log(e.target.value)
		// setValue(e.target.value)
		onChange(e.target.value)
	}

	function clickButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()
		onClick(`from Comp A: ${reactiveText}`)
	}

	function clickInitializedButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()
		onInitialized()
	}

	return (
		<form className={styles["comp-a"]}>
			<p>Comp A</p>
			<Input type="text" value={reactiveText} onChange={onChangeValue} />
			<br />
			<Button color="primary" onClick={clickButton}>
				send to Comp B
			</Button>
			<Button color="light" onClick={clickInitializedButton}>
				initialized
			</Button>
		</form>
	)
}
