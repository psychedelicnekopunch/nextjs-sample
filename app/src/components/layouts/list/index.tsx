import styles from "./styles.module.scss"

type Props = {
	type?: "border" | "disc" | "number" | "none" | "-" | "hyphen"
	children: React.ReactNode
}

export default function List({ type = "disc", children }: Props) {
	const t = type == "-" ? "hyphen" : type
	return <ul className={`${styles.list} ${styles[t]}`}>{children}</ul>
}
