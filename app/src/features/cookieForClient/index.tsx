"use client"

import { useState as UseState, useEffect as UseEffect } from "react"

import CheckCircle from "@/assets/icon/check_circle.svg"
import styles from "./styles.module.scss"
import { Result } from "./repository"
import Repository from "./repository"

const repo = new Repository()

enum ClassValueEnum {
	Success = "success",
	SuccessActive = "success-active",
}

export default function cookieForClient() {
	const [inputValue, setInputValue] = UseState("")
	const [defaultInputValue, setDefaultInputValue] = UseState("")
	const [resultValue, setResultValue] = UseState("")
	const [classValue, setClassValue] = UseState(ClassValueEnum.Success)

	async function initCookie() {
		const res: Result<string> = await repo.get()
		setDefaultInputValue(res.data)
		setResultValue(res.data)
	}

	function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	async function clickSaveButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		const v: string = inputValue ? inputValue : defaultInputValue
		const res: Result<null> = await repo.save(v)

		setResultValue(v)

		if (!res.error) setClassValue(ClassValueEnum.SuccessActive)
		setTimeout(() => {
			setClassValue(ClassValueEnum.Success)
		}, 2000)
	}

	async function clickDeleteButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		const res: Result<null> = await repo.delete()

		setResultValue("")

		if (!res.error) setClassValue(ClassValueEnum.SuccessActive)
		setTimeout(() => {
			setClassValue(ClassValueEnum.Success)
		}, 2000)
	}

	UseEffect(() => {
		initCookie()
	})

	return (
		<form className={styles["cookie-for-client"]}>
			<p>cookie.get(&quot;test&quot;) is {resultValue}</p>
			<input type="text" defaultValue={defaultInputValue} onChange={changeValue} />
			<span className={styles[classValue]}>
				<CheckCircle />
			</span>
			<br />
			<button className={styles.primary} onClick={clickSaveButton}>
				save in 5min
			</button>
			<button className={styles.light} onClick={clickDeleteButton}>
				delete
			</button>
		</form>
	)
}
