import Link from "next/link"
import styles from "./styles.module.scss"

type Props = {
	type?: "button" | "link" | "a"
	href?: string
	color: Color
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
	children: React.ReactNode
}

type Color = "primary" | "light"

export default function Button({ type = "button", href = "", color, onClick, children }: Props) {
	if (type == "link") {
		return (
			<Link href={href} className={`${styles.button} ${styles[color]}`}>
				{children}
			</Link>
		)
	}
	if (type == "a") {
		return (
			<a href={href} className={`${styles.button} ${styles[color]}`}>
				{children}
			</a>
		)
	}
	if (type == "button") {
		return (
			<button onClick={onClick} className={`${styles.button} ${styles[color]}`}>
				{children}
			</button>
		)
	}
	return ""
}
