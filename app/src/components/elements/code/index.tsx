
import styles from "./styles.module.scss"
import hljs from "highlight.js/lib/core"

import bash from "highlight.js/lib/languages/bash"
import javascript from "highlight.js/lib/languages/javascript"
import json from "highlight.js/lib/languages/json"
import typescript from "highlight.js/lib/languages/typescript"
import plaintext from "highlight.js/lib/languages/plaintext"

import "highlight.js/styles/monokai.css"


type Props = {
	lang: string,
	name?: string,
	value: string
}

export default function Code({ lang, name, value }: Props) {

	hljs.registerLanguage('bash', bash)
	hljs.registerLanguage('javascript', javascript)
	hljs.registerLanguage('json', json)
	hljs.registerLanguage('typescript', typescript)
	hljs.registerLanguage('plaintext', plaintext)

	const str = (name) ? `\n\n${value}` : value

	const highlightedCode = hljs.highlight(
		str,
		{ language: lang }
	).value

	return (
		<div className={styles.code}>
			{ name &&
				<div className={styles.name}>{name}</div>
			}
			<pre><code
				className={`hljs language-bash`}
				dangerouslySetInnerHTML={{ __html: highlightedCode }}
			></code></pre>
		</div>
	)
}
