"use client"

import { useState as UseState, useEffect as UseEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import Input from "@/components/elements/input"
import Button from "@/components/layouts/button"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import CheckCircle from "@/assets/icon/check_circle.svg"
import styles from "./styles.module.scss"

enum StyleEnum {
	Success = "success",
	SuccessActive = "success-active",
}

export default function URLsQueryStrings() {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()
	const queryString = searchParams ? searchParams.toString() : ""

	const [lists, setLists] = UseState<string[]>([])
	const [inputKey, setInputKey] = UseState("")
	const [inputValue, setInputValue] = UseState("")
	const [style, setStyle] = UseState(StyleEnum.Success)

	function init(): void {
		const params = new URLSearchParams(queryString)
		const arr: string[] = []
		// searchParams.forEach((value, key) => {
		// 	arr.push(`${key}: ${value}`)
		// })
		for (const [key, value] of params.entries()) {
			// arr = [...arr, `${key}: ${value}`]
			arr.push(`${key}: ${value}`)
		}
		setLists(arr)
	}

	function changeKey(e: React.ChangeEvent<HTMLInputElement>): void {
		setInputKey(e.target.value)
	}

	function changeValue(e: React.ChangeEvent<HTMLInputElement>): void {
		setInputValue(e.target.value)
	}

	function clickAppendButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()

		if (!inputKey && inputValue) {
			return
		}

		// Error: Method unavailable on `ReadonlyURLSearchParams`.
		// Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
		// searchParams.append(inputKey, inputValue)

		const params = new URLSearchParams(searchParams.toString())
		params.append(inputKey, inputValue)
		// params.set(inputKey, inputValue)

		setStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setStyle(StyleEnum.Success)
		}, 2000)

		router.push(`${pathname}?${params.toString()}`)
	}

	function clickDeleteButton(e: React.MouseEvent<HTMLButtonElement>): void {
		e.preventDefault()

		// Error: Method unavailable on `ReadonlyURLSearchParams`.
		// Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams
		// searchParams.delete(inputKey)

		let path = pathname

		if (inputKey) {
			const params = new URLSearchParams(searchParams.toString())
			params.delete(inputKey)
			path = `${path}?${params.toString()}`
		}

		setStyle(StyleEnum.SuccessActive)
		setTimeout(() => {
			setStyle(StyleEnum.Success)
		}, 2000)

		router.push(path)
	}

	UseEffect(() => {
		init()
	}, [queryString])

	return (
		<div className={styles["urls-query-strings"]}>
			<p>searchParams.getAll(&quot;a&quot;) - Array</p>
			<Card color="superlight-gray" hasShadow={false}>
				<List type="border">
					{searchParams.getAll("a").map((value, key) => {
						return <li key={key}>{value}</li>
					})}
				</List>
			</Card>
			<p>searchParams.get(&quot;a&quot;) - String | Null</p>
			<Card color="superlight-gray" hasShadow={false}>
				{searchParams.get("a") ? searchParams.get("a") : "null"}
			</Card>
			<p>searchParams.has(&quot;a&quot;) - Boolean</p>
			<Card color="superlight-gray" hasShadow={false}>
				{searchParams.has("a") ? "true" : "false"}
			</Card>
			<List>
				<li>searchParams.forEach(callback, thisArg?)</li>
				<li>for (const [key, value] of searchParams.entries())</li>
			</List>
			<Card color="superlight-gray" hasShadow={false}>
				<List type="border">
					{lists.map((value, key) => {
						return <li key={key}>{value}</li>
					})}
				</List>
			</Card>
			<form>
				<List type="none">
					<li>
						key: <Input type="text" value={inputKey} onChange={changeKey} />
					</li>
					<li>
						value: <Input type="text" value={inputValue} onChange={changeValue} />
					</li>
				</List>
				<span className={styles[style]}>
					<CheckCircle />
				</span>
				<br />
				<Button color="primary" onClick={clickAppendButton}>
					append
				</Button>
				<Button color="light" onClick={clickDeleteButton}>
					delete
				</Button>
			</form>
		</div>
	)
}
