import styles from "./styles.module.scss"

type Props = {
	color?: Color
	hasShadow?: boolean
	children: React.ReactNode
}

type Color = "white" | "superlight-gray"

export default function Card({ color = "white", hasShadow = true, children }: Props) {
	return <div className={`${styles.card} ${styles[color]} ${hasShadow && styles["has-shadow"]}`}>{children}</div>
}
