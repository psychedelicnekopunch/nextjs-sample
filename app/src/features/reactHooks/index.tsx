"use client"

import { useState as UseState, useEffect as UseEffect, useContext, createContext } from "react"

import Button from "@/components/layouts/button"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import List from "@/components/layouts/list"
import ReactHooksChild from "@/features/reactHooks/child"
import styles from "./styles.module.scss"
import Ungroup from "@/assets/icon/ungroup.svg"

const SomeValueContext = createContext(0)

function CountUp(): React.ReactNode {
	const [counter, setCounter] = UseState(0)
	const [clicked, setClicked] = UseState(false)

	function countUp() {
		// const newCounter = counter + 1
		// setCounter(newCounter)
		setCounter((v) => v + 1)
	}

	function onClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setClicked(!clicked)
	}

	UseEffect(() => {
		countUp()
	}, [clicked])

	return (
		<form>
			<p>UseEffect が呼ばれた回数{counter}回</p>
			<Button color="primary" onClick={onClick}>
				call UseEffect()
			</Button>
		</form>
	)
}

function CountUpWithContext(): React.ReactNode {
	const [counter, setCounter] = UseState(0)

	function onClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setCounter((v) => v + 1)
	}

	return (
		<form>
			<SomeValueContext.Provider value={counter}>
				<ReactHooksChild />
			</SomeValueContext.Provider>
			<Button color="primary" onClick={onClick}>
				count up
			</Button>
		</form>
	)
}

export function useSomeValueContext(): number {
	return useContext(SomeValueContext)
}

export default function ReactHooks(): React.ReactNode {
	return (
		<div className={styles["react-hooks"]}>
			<Card>
				<List>
					<li>
						<a href="https://ja.react.dev/reference/react/useState">
							const [state, setState] = useState(initialState) <Ungroup />
						</a>
					</li>
					<li>
						<a href="https://ja.react.dev/reference/react/useEffect">
							useEffect(setup, dependencies?) <Ungroup />
						</a>
						<List type="-">
							<li>
								dependencies
								<br />
								リアクティブな値のリスト。
								<br />
								リアクティブな値には、props、state、コンポーネント本体に直接宣言されたすべての変数および関数が含まれます。
								<br />
								この引数を省略すると、エフェクトはコンポーネントの毎回のレンダー後に再実行されます。
							</li>
						</List>
					</li>
				</List>
				<Code
					lang="ts"
					value={`"use client"

import {
	useState as UseState,
	useEffect as UseEffect,
} from "react"

export default function Comp() {

	const [counter, setCounter] = UseState(0)
	const [clicked, setClicked] = UseState(false)

	function countUp(): void {
		setCounter((v) => v + 1)
	}

	function onClick(e: React.MouseEventM<HTMLButtonElement>) {
		e.preventDefault()
		setClicked(!clicked)
	}

	UseEffect(() => {
		countUp()
	}, [clicked])

	return (
		<form>
			<p>UseEffect が呼ばれた回数{ counter }回</p>
			<Button color="primary" onClick={onClick}>
				call UseEffect()
			</Button>
		</form>
	)
}`}
				/>
				<CountUp />
			</Card>
			<Card>
				<List>
					<li>
						<a href="https://ja.react.dev/reference/react/createContext">
							const SomeContext = createContext(defaultValue) <Ungroup />
						</a>
					</li>
					<li>
						<a href="https://ja.react.dev/reference/react/useContext">
							const value = useContext(SomeContext) <Ungroup />
						</a>
					</li>
				</List>
				<Code
					lang="ts"
					name="comp.tsx"
					value={`"use client"

import {
	useState as UseState,
	useContext,
	createContext,
} from "react"

import CompChild from "./compChild"

const SomeValueContext = createContext(0)

export function useSomeValueContext() {
	return useContext(SomeValueContext)
}

export default function Comp() {

	const [counter, setCounter] = UseState(0)

	function onClick(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setCounter((v) =>  v + 1)
	}

	return (
		<form>
			<SomeValueContext.Provider value={ counter }>
				<CompChild/>
			</SomeValueContext.Provider>
			<Button color="primary" onClick={onClick}>
				count up
			</Button>
		</form>
	)
}`}
				/>
				<Code
					lang="ts"
					name="compChild.tsx"
					value={`"use client"

import { useSomeValueContext } from "@/features/reactHooks"

export default function CompChild() {
	const value = useSomeValueContext()
	return <p>{value}</p>
}`}
				/>
				<CountUpWithContext />
			</Card>
		</div>
	)
}
