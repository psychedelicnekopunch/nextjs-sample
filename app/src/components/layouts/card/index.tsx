// import { ReactNode } from "react"
import styles from "./styles.module.scss";

type Props = {
	children: React.ReactNode;
};

export default function Card({ children }: Props) {
	return <div className={styles.card}>{children}</div>;
}
