import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Stylelint() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Stylelint</h1>
				<h2>CSS コードフォーマッター</h2>
				<Card>
					<p>
						<a href="https://stylelint.io/" target="_blank">
							Stylelint <Ungroup />
						</a>
					</p>
					<Code lang="bash" value={`$ npm install --save-dev stylelint stylelint-config-recommended-scss`} />
					<p>
						Next.js のビルドする際に出る{" "}
						<a href="https://sass-lang.com/documentation/breaking-changes/mixed-decls/" target="_blank">
							Warning: & &#123;&#125; <Ungroup />
						</a>{" "}
						と、
						<br />
						Stylelint の{" "}
						<a href="https://stylelint.io/user-guide/rules/no-duplicate-selectors/" target="_blank">
							no-duplicate-selectors <Ungroup />
						</a>{" "}
						がバッティングするので一旦無視させる。
					</p>
					<Code
						lang="json"
						name=".stylelintrc.json"
						value={`{
	"extends": "stylelint-config-recommended-scss",
	"rules": {
		"no-duplicate-selectors": [null]
	}
}`}
					/>
					<Code
						lang="bash"
						name="package.json"
						value={`{
	"scripts": {
		"lint:style": "stylelint \\"**/*.scss\\" --color",
	}
}`}
					/>
					<Code lang="bash" value={`$ npm run lint:style`} />
				</Card>
			</div>
		</main>
	)
}
