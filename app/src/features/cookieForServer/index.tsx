"use client"

import { useState as UseState } from "react"

import CheckCircle from "@/assets/icon/check_circle.svg"
import styles from "./styles.module.scss"
import { Result } from "./repository"
import Repository from "./repository"

const repo = new Repository()

enum ClassValueEnum {
	Success = "success",
	SuccessActive = "success-active",
}

type Props = {
	value: string
}

export default function cookieForServer({ value }: Props) {
	const [inputValue, setInputValue] = UseState(value)
	const [resultValue, setResultValue] = UseState(value)
	const [classValue, setClassValue] = UseState(ClassValueEnum.Success)

	function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
	}

	async function clickSaveButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		const res: Result<null> = await repo.save(inputValue)
		setResultValue(inputValue)
		if (!res.error) setClassValue(ClassValueEnum.SuccessActive)
		setTimeout(() => {
			setClassValue(ClassValueEnum.Success)
		}, 2000)
	}

	async function clickDeleteButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		const res: Result<null> = await repo.delete()
		setResultValue("")
		setInputValue("")
		if (!res.error) setClassValue(ClassValueEnum.SuccessActive)
		setTimeout(() => {
			setClassValue(ClassValueEnum.Success)
		}, 2000)
	}

	return (
		<form className={styles["cookie-for-server"]}>
			<p>cookie.get(&quot;test2&quot;) is {resultValue}</p>
			<input type="text" value={inputValue} onChange={changeValue} />
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
