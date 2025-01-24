import styles from "./styles.module.scss"

type Props = {
	value: string
	type?: Type
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

type Type = "text"

export default function Input({ value, type = "text", onChange }: Props) {
	return <input data-testid="input" className={styles.input} type={type} value={value} onChange={onChange} />
}
