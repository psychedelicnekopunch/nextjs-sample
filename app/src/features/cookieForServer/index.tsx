"use client"

import { useState as UseState } from "react"

import type { Result } from "./repository"
import Repository from "./repository"
import Input from "@/components/elements/input"
import Button from "@/components/layouts/button"
import CheckCircle from "@/assets/icon/check_circle.svg"
import styles from "./styles.module.scss"

enum StyleEnum {
	Success = "success",
	SuccessActive = "success-active",
}

type Props = {
	value: string
}

const repo = new Repository()

export default function CookieForServer({ value }: Props) {
	const [inputValue, setInputValue] = UseState(value)
	const [resultValue, setResultValue] = UseState(value)
	const [style, setStyle] = UseState(StyleEnum.Success)

	function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	async function clickSaveButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		const res: Result<null> = await repo.save(inputValue)
		setResultValue(inputValue)
		if (!res.error) setStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setStyle(StyleEnum.Success)
		}, 2000)
	}

	async function clickDeleteButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		const res: Result<null> = await repo.delete()
		setResultValue("")
		setInputValue("")
		if (!res.error) setStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setStyle(StyleEnum.Success)
		}, 2000)
	}

	return (
		<form className={styles["cookie-for-server"]}>
			<p>cookie.get(&quot;test2&quot;) is {resultValue}</p>
			<Input type="text" value={inputValue} onChange={changeValue} />
			<span className={styles[style]}>
				<CheckCircle />
			</span>
			<br />
			<Button color="primary" onClick={clickSaveButton}>
				save in 5min
			</Button>
			<Button color="light" onClick={clickDeleteButton}>
				delete
			</Button>
		</form>
	)
}
