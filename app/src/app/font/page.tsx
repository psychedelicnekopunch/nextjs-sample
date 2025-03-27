import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

import { Meow_Script } from "next/font/google"
import { DotGothic16 } from "next/font/google"
import localFont from "next/font/local"

const meowScript = Meow_Script({
	weight: "400",
	subsets: ["latin"],
})

const dotGothic16 = DotGothic16({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dot-gothic16",
})

const bestTenCrt = localFont({
	src: "./BestTen-CRT.otf",
	variable: "--font-best-ten-crt",
})

const bestTenDot = localFont({
	src: "./BestTen-DOT.otf",
	variable: "--font-best-ten-dot",
})

export default function Font() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Font</h1>
				<h2>Google Fonts, Adobe Fonts, フリーフォント</h2>
				<Card>
					<div className={`${meowScript.className} ${styles["google-fonts01"]}`}>
						<List>
							<li>
								<a href="https://fonts.google.com/specimen/Meow+Script?categoryFilters=Feeling:%2FExpressive%2FCute" target="_blank">
									Meow Script - Google Fonts <Ungroup />
								</a>
							</li>
							<li>
								<a href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#google-fonts" target="_blank">
									Google Fonts - Font Optimization - Next.js <Ungroup />
								</a>
							</li>
							<p>
								Google Fonts
								<br />
								Sample Text
								<br />
								日本語には対応していないフォントです。
							</p>
						</List>
					</div>
					<Code
						lang="ts"
						name="/src/app/font/page.tsx"
						value={`import { Meow_Script } from "next/font/google"

const meowScript = Meow_Script({
	weight: "400",
	subsets: ["latin"],
})

export default function Page() {
	return (
		<main className={meowScript.className}>
			Sample
		</main>
	)
}`}
					/>
					<div className={`${dotGothic16.variable} ${styles["google-fonts02"]}`}>
						<List>
							<li>
								<a href="https://fonts.google.com/specimen/DotGothic16?lang=ja_Jpan" target="_blank">
									DotGothic16 - Google Fonts <Ungroup />
								</a>
							</li>
							<li>
								<a href="https://nextjs.org/docs/app/api-reference/components/font#css-variables" target="_blank">
									CSS Variables - Font Module - Next.js <Ungroup />
								</a>
							</li>
							<p>
								Google Fonts
								<br />
								Sample Text
								<br />
								ドットフォントが楽しめます。
							</p>
						</List>
					</div>
					<Code
						lang="ts"
						name="/src/app/font/page.tsx"
						value={`import styles from "./page.module.scss"
import { DotGothic16 } from "next/font/google"

const dotGothic16 = DotGothic16({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-dot-gothic16",
})

export default function Page() {
	return (
		<main className={dotGothic16.variable}>
			<div className={styles.font}>
				サンプル
			</div>
		</main>
	)
}`}
					/>
					<Code
						lang="scss"
						name="/src/app/font/page.module.scss"
						value={`.font {
	font-family: var(--font-dot-gothic16);
}`}
					/>
				</Card>

				<Card>
					<div className={styles["adobe-fonts01"]}>
						<List>
							<li>
								<a href="https://fonts.adobe.com/fonts/ab-shonen-oto" target="_blank">
									AB-ショウネン オト - Adobe Fonts <Ungroup />
								</a>
							</li>
							<li>
								<a href="https://nextjs.org/docs/app/building-your-application/optimizing/scripts#inline-scripts" target="_blank">
									Inline Scripts - Script Optimization - Next.js <Ungroup />
								</a>
							</li>
						</List>
						<p>
							Adobe Fonts
							<br />
							にほんごフォント
							<br />
							コードはコピペ
						</p>
						<p>
							ゴゴゴゴゴゴゴ
							<br />
							ドドドドドドド
						</p>
					</div>
					<Code
						lang="ts"
						name="/src/app/layout.tsx"
						value={`import { useId } from "react"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const adobeFontsId = useId()

	return (
		<html lang="ja">
			<Script id={adobeFontsId}>
				{\`
					(function(d) {
						var config = {
							kitId: 'xxxxxxx',
							scriptTimeout: 3000,
							async: true
						},
						h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
					})(document);
				\`}
			</Script>
			<body>{children}</body>
		</html>
	)
}`}
					/>
					<Code
						lang="scss"
						name="/src/app/font/page.module.scss"
						value={`.font {
	font-family: "ab-shonen-oto", sans-serif;
	font-weight: 400;
	font-style: normal;
}`}
					/>
					<Code
						lang="ts"
						name="/src/app/font/page.tsx"
						value={`import styles from "./page.module.scss"

export default function Page() {
	return (
		<main className={styles.font}>
			サンプル
		</main>
	)
}`}
					/>
					<div className={styles["adobe-fonts02"]}>
						<List>
							<li>
								<a href="https://fonts.adobe.com/fonts/alternate-gothic" target="_blank">
									Alternate Gothic - Adobe Fonts <Ungroup />
								</a>
							</li>
							<li>
								<a href="https://github.com/vercel/next.js/blob/canary/packages/next/src/client/script.tsx#L20" target="_blank">
									script.tsx - vercel/next.js - GitHub <Ungroup />
								</a>
							</li>
						</List>

						<p>
							Adobe Fonts
							<br />
							Sample Text.
						</p>
					</div>
					<Code
						lang="ts"
						name="/src/app/layout.tsx"
						value={`import { useId } from "react"

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const adobeFontsId = useId()

	return (
		<html lang="ja">
			<Script id={adobeFontsId} stylesheets={["https://use.typekit.net/xxxxxxx.css"]}></Script>
			<body>{children}</body>
		</html>
	)
}`}
					/>
					<Code
						lang="scss"
						name="/src/app/font/page.module.scss"
						value={`.font {
	font-family: "alternate-gothic-no-1-d", sans-serif;
	font-weight: 400;
	font-style: normal;
}`}
					/>
					<Code
						lang="ts"
						name="/src/app/font/page.tsx"
						value={`import styles from "./page.module.scss"

export default function Page() {
	return (
		<main className={styles.font}>
			Sample
		</main>
	)
}`}
					/>
				</Card>

				<Card>
					<div className={`${bestTenCrt.variable} ${bestTenDot.variable} ${styles["local-fonts"]}`}>
						<List>
							<li>
								<a href="https://booth.pm/ja/items/2747965" target="_blank">
									ベストテンFONT - BOOTH <Ungroup />
								</a>
							</li>
							<li>
								<a href="https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#local-fonts" target="_blank">
									Local Fonts - Font Optimization - Next.js <Ungroup />
								</a>
							</li>
						</List>

						<p>
							フリーフォント
							<br />
							フォントをダウンロードして同じ階層に置きます。
						</p>
						<p>ドットが好きです。</p>
					</div>
					<Code
						lang="ts"
						name="/src/app/font/page.tsx"
						value={`import styles from "./page.module.scss"
import localFont from "next/font/local"

const bestTenCrt = localFont({
	src: "./BestTen-CRT.otf",
	variable: "--font-best-ten-crt",
})

const bestTenDot = localFont({
	src: "./BestTen-DOT.otf",
	variable: "--font-best-ten-dot",
})

export default function Page() {
	return (
		<main className={\`\${bestTenCrt.variable} \${bestTenDot.variable}\`}>
			<div className={styles.font}>
				サンプル
			</div>
		</main>
	)
}`}
					/>
					<Code
						lang="scss"
						name="/src/app/font/page.module.scss"
						value={`.font {
	font-family: var(--font-best-ten-crt);
	// font-family: var(--font-best-ten-dot);
}`}
					/>
				</Card>
			</div>
		</main>
	)
}
