"use client"

import { useState as UseState, useEffect as UseEffect } from "react"

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

const repo = new Repository()

export default function cookieForClient() {
	// const [didChange, setDidChange] = UseState(false)
	// const [defaultInputValue, setDefaultInputValue] = UseState("")
	const [inputValue, setInputValue] = UseState("")
	const [resultValue, setResultValue] = UseState("")
	const [style, setStyle] = UseState(StyleEnum.Success)

	async function initCookie() {
		const res: Result<string> = await repo.get()
		// setDefaultInputValue(res.data)
		setInputValue(res.data)
		setResultValue(res.data)
		// console.log("init")
		// console.log(res.data)
	}

	function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value)
		// setDidChange(true)
	}

	async function clickSaveButton(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()

		// const v: string = didChange ? inputValue : defaultInputValue
		// const res: Result<null> = await repo.save(v)
		// setResultValue(v)

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

	// useEffect(setup, dependencies?)
	//
	// - dependencies
	// リアクティブな値のリスト。
	// リアクティブな値には、props、state、コンポーネント本体に直接宣言されたすべての変数および関数が含まれます。
	// この引数を省略すると、エフェクトはコンポーネントの毎回のレンダー後に再実行されます。
	//
	UseEffect(() => {
		initCookie()
	}, [resultValue])

	return (
		<form className={styles["cookie-for-client"]}>
			<p>cookie.get(&quot;test&quot;) is {resultValue}</p>
			{/*<input type="text" defaultValue={defaultInputValue} onChange={changeValue} />*/}
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
