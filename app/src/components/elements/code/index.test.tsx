import { describe, expect, test } from "@jest/globals"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Code from "./index"
import { registeredLangs } from "./index"

import hljs from "highlight.js/lib/core"
import typescript from "highlight.js/lib/languages/typescript"
import xml from "highlight.js/lib/languages/xml"

const lang = "ts"
const text = "test.ts"
const value = `function test(): string {
	return "value"
}`

hljs.registerLanguage("typescript", typescript)
hljs.registerLanguage("xml", xml)

describe("/components › /elements › <Code>", () => {
	test("lang チェック", () => {
		const langs: string[] = ["bash", "js", "json", "ts", "txt"]
		for (const [_, v] of langs.entries()) {
			render(<Code lang={v} name={text} value={value} />)
		}
	})

	test("name?: string が表示されているか", () => {
		render(<Code lang={lang} name={text} value={value} />)
		expect(screen.getByText(text)).toBeVisible()
	})

	test("value が highlight.js によってハイライトされているか ", () => {
		const convertedValue = hljs.highlight(value, { language: lang }).value
		const { container } = render(<Code lang={lang} value={value} />)
		expect(container).toContainHTML(convertedValue)
	})

	test("hljs.registerLanguage() チェック", () => {
		const langs: string[] = ["bash", "javascript", "json", "typescript", "plaintext", "xml"]
		expect(registeredLangs()).toEqual(expect.arrayContaining(langs))
	})
})
