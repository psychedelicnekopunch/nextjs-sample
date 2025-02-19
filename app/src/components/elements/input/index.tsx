"use client"

// import { useEffect as UseEffect } from "react"
import { useId } from "react"
import styles from "./styles.module.scss"

type Props = {
	value: string
	type?: Type
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	// onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	// onCancel?: (e: React.CancelEvent<HTMLInputElement>) => void
	// onCancel?: (e: Event) => void
}

type Type = "text" | "file"

export default function Input({ value, type = "text", onChange = () => {} }: Props) {
	const id: string = useId()

	// function init() {
	// 	const target = document.getElementById(id)
	// 	if (target) {
	// 		target.addEventListener("cancel", onCancel)
	// 	}
	// }

	// UseEffect(() => {
	// 	init()
	// }, [id])

	return (
		<>
			{type == "file" && (
				<label htmlFor={id} data-testid="label" className={styles["label-upload"]}>
					ファイルを選択
				</label>
			)}
			<input id={id} data-testid="input" className={styles.input} type={type} value={value} onChange={onChange} />
		</>
	)
}
