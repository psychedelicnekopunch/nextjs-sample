import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.scss"

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.description}>
				<p>
					Get started by editing&nbsp;
					<code className={styles.code}>src/app/page.tsx</code>
				</p>
				<div>
					<a href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
						By <Image src="/assets/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
					</a>
				</div>
			</div>

			<div className={styles.center}>
				<Image className={styles.logo} src="/assets/next.svg" alt="Next.js Logo" width={180} height={37} priority />
			</div>

			<div className={styles.grid}>
				<a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
					<h2>
						Docs <span>-&gt;</span>
					</h2>
					<p>Find in-depth information about Next.js features and API.</p>
				</a>

				<a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
					<h2>
						Learn <span>-&gt;</span>
					</h2>
					<p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
				</a>

				<a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
					<h2>
						Templates <span>-&gt;</span>
					</h2>
					<p>Explore starter templates for Next.js.</p>
				</a>

				<a href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" className={styles.card} target="_blank" rel="noopener noreferrer">
					<h2>
						Deploy <span>-&gt;</span>
					</h2>
					<p>Instantly deploy your Next.js site to a shareable URL with Vercel.</p>
				</a>

				<Link href="/comp_to_comp" className={styles.card} rel="noopener noreferrer">
					<h2>
						Comp to Comp <span>-&gt;</span>
					</h2>
					<p>コンポーネント間でのやりとり</p>
				</Link>

				<Link href="/cookie" className={styles.card} rel="noopener noreferrer">
					<h2>
						Cookie <span>-&gt;</span>
					</h2>
					<p>for use client, Server Component, Server Actions, Middleware</p>
				</Link>

				<Link href="/dynamic_routes/123" className={styles.card} rel="noopener noreferrer">
					<h2>
						Dynamic Routes <span>-&gt;</span>
					</h2>
					<p>/dynamic_routes/:id</p>
				</Link>

				<Link href="/environment" className={styles.card} rel="noopener noreferrer">
					<h2>
						Environment <span>-&gt;</span>
					</h2>
					<p>環境変数の取り扱い</p>
				</Link>

				<Link href="/eslint" className={styles.card} rel="noopener noreferrer">
					<h2>
						ESLint <span>-&gt;</span>
					</h2>
					<p>
						静的コード解析用ツール
						<br />
						for TypeScript
					</p>
				</Link>

				<Link href="/hooks" className={styles.card} rel="noopener noreferrer">
					<h2>
						Hooks <span>-&gt;</span>
					</h2>
					<p>React Hooks</p>
				</Link>

				<Link href="/http_client" className={styles.card} rel="noopener noreferrer">
					<h2>
						HTTP Client <span>-&gt;</span>
					</h2>
					<p>fetch()</p>
				</Link>

				<Link href="/load_external_js" className={styles.card} rel="noopener noreferrer">
					<h2>
						Load External JS <span>-&gt;</span>
					</h2>
					<p>外部 JS の読み込み</p>
				</Link>

				<Link href="/middleware" className={styles.card} rel="noopener noreferrer">
					<h2>
						Middleware <span>-&gt;</span>
					</h2>
					<p>ミドルウェア</p>
				</Link>

				<Link href="/prettier" className={styles.card} rel="noopener noreferrer">
					<h2>
						Prettier <span>-&gt;</span>
					</h2>
					<p>コードフォーマッター</p>
				</Link>

				<Link href="/statically_typed_links" className={styles.card} rel="noopener noreferrer">
					<h2>
						Statically Typed Links <span>-&gt;</span>
					</h2>
					<p>Using next/link, improving type safety when navigating between pages.</p>
				</Link>

				<Link href="/query_params?a=1&a=2&b=3&b=4" className={styles.card} rel="noopener noreferrer">
					<h2>
						Query Params <span>-&gt;</span>
					</h2>
					<p>クエリ文字列</p>
				</Link>

				<Link href="/stylelint" className={styles.card} rel="noopener noreferrer">
					<h2>
						Stylelint <span>-&gt;</span>
					</h2>
					<p>CSS コードフォーマッター</p>
				</Link>

				<Link href="/svg" className={styles.card} rel="noopener noreferrer">
					<h2>
						SVG <span>-&gt;</span>
					</h2>
					<p>SVG ファイルの取り扱い</p>
				</Link>
			</div>
		</main>
	)
}
