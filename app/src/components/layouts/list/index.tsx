import styles from "./styles.module.scss"

type Props = {
	type?: "disc" | "number"
	children: React.ReactNode
}

export default function List({ type = "disc", children }: Props) {
	return <ul className={`${styles.list} ${styles[type]}`}>{children}</ul>
}
