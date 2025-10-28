import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

import Fingerprinter from "@/features/fingerprinter"

export default async function Fingerprinting() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Fingerprinting</h1>
				<h2>with ThumbmarkJS</h2>
				<Card>
					<List>
						<li>
							<a href="https://developer.mozilla.org/ja/docs/Glossary/Fingerprinting" target="_blank">
								Fingerprinting - mdn <Ungroup />
							</a>
						</li>
						<li>
							<a href="https://github.com/thumbmarkjs/thumbmarkjs" target="_blank">
								thumbmarkjs/thumbmarkjs - GitHub <Ungroup />
							</a>
						</li>
					</List>
					<Code lang="bash" value={`$ npm install @thumbmarkjs/thumbmarkjs --save`} />
					<Fingerprinter />
				</Card>
			</div>
		</main>
	)
}
