import styles from "./styles.module.scss"
import hljs from "highlight.js/lib/core"

import bash from "highlight.js/lib/languages/bash"
import javascript from "highlight.js/lib/languages/javascript"
import json from "highlight.js/lib/languages/json"
import scss from "highlight.js/lib/languages/scss"
import typescript from "highlight.js/lib/languages/typescript"
import plaintext from "highlight.js/lib/languages/plaintext"
import xml from "highlight.js/lib/languages/xml"

import "highlight.js/styles/monokai.css"

hljs.registerLanguage("bash", bash)
hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("json", json)
hljs.registerLanguage("scss", scss)
hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("plaintext", plaintext)
hljs.registerLanguage("xml", xml)

type Props = {
	lang: "bash" | "js" | "json" | "scss" | "ts" | "txt"
	name?: string
	value: string
}

// テスト用
function registeredLangs(): string[] {
	return hljs.listLanguages()
}

export const exportedForTesting = {
	registeredLangs,
}

export default function Code({ lang, name, value }: Props) {
	const str = name ? `\n\n${value}` : value
	const highlightedCode = hljs.highlight(str, { language: lang }).value

	return (
		<div className={styles.code}>
			{name && <div className={styles.name}>{name}</div>}
			<pre>
				<code className={`hljs`} dangerouslySetInnerHTML={{ __html: highlightedCode }}></code>
			</pre>
		</div>
	)
}
