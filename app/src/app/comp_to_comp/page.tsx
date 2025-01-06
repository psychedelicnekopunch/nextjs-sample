import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import CompParent from "@/features/compParent"

export default function CompToComp() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Comp to Comp</h1>
				<h2>コンポーネント間でのやりとり</h2>
				<Card>
					<CompParent>
						<List>
							<li>子A → 親 → 子B で値を横断して管理する場合は、親のみで状態を持つ。</li>
							<li>子から親に onXxxx のような関数を渡す場合、親は use client でなくてはならない。</li>
							<li>親に子のメソッドを持たせて、親から子のメソッドを呼び出すより、 initialized や isXxxx のような Boolean 変数を親の方で用意し、子に渡して管理した方が良い気がする。</li>
						</List>
					</CompParent>
				</Card>
			</div>
		</main>
	)
}
