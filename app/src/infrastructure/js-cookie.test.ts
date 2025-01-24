import { describe, expect, test } from "@jest/globals"
import Cookie from "./js-cookie"

const key = "jest"
const value = "value"

describe("/infrastructure › js-cookie.ts", () => {
	test("get(), set(), remove() 動作チェック", () => {
		const cookie = new Cookie()
		cookie.remove(key)
		expect(cookie.get(key)).toBe("")
		cookie.set(key, value)
		expect(cookie.get(key)).toBe(value)
		cookie.remove(key)
		expect(cookie.get(key)).toBe("")
	})
})
