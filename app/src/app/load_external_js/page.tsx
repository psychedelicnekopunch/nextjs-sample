import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import NextScript from "@/features/nextScript"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function LoadExternalJS() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Load External JS</h1>
				<h2>外部 JS の読み込み</h2>
				<Card>
					<List>
						<li>
							<a href="https://nextjs.org/docs/app/api-reference/components/script" target="_blank">
								Script - Next.js <Ungroup />
							</a>
							<List type="-">
								<li>基本的には Client Components で使った方が機能が充実しているので推奨。</li>
							</List>
						</li>
					</List>
				</Card>
				<NextScript />
			</div>
		</main>
	)
}
