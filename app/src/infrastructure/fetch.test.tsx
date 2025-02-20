// import { describe, jest, expect, test } from "@jest/globals"
import { get, post, patch, put, remove } from "./fetch"
import { describe, expect, test } from "@jest/globals"
import { api, apiResult } from "./fetch"
import { exportedForTesting } from "./fetch"

const apiURL = "http://httpclient-checker.psychedelicnekopunch.com/"

type Params = {
	test: string
	tests: string[]
}

const params: Params = {
	test: "test1",
	tests: ["test1", "test2", "test3"],
}

describe("/infrastructure › fetch.ts", () => {
	test("get() チェック", async () => {
		const response = await get<Params>({
			url: await api(),
			params: params,
		})
		const result = await apiResult(response)
		expect(result.data.test).toBe(params.test)
		expect(result.data.tests).toEqual(expect.arrayContaining(params.tests))
	})

	test("post() チェック", async () => {
		const response = await post<Params>({
			url: await api(),
			params: params,
		})
		const result = await apiResult(response)
		expect(result.data.test).toBe(params.test)
		expect(result.data.tests).toEqual(expect.arrayContaining(params.tests))
	})

	test("patch() チェック", async () => {
		const response = await patch<Params>({
			url: await api(),
			params, params,
		})
		const result = await apiResult(response)
		expect(result.data.test).toBe(params.test)
		expect(result.data.tests).toEqual(expect.arrayContaining(params.tests))
	})

	test("put() チェック", async () => {
		const response = await put<Params>({
			url: await api(),
			params, params,
		})
		const result = await apiResult(response)
		expect(result.data.test).toBe(params.test)
		expect(result.data.tests).toEqual(expect.arrayContaining(params.tests))
	})

	test("remove() チェック", async () => {
		const response = await remove<Params>({
			url: await api(),
			params, params,
		})
		const result = await apiResult(response)
		expect(result.data.test).toBe(params.test)
		expect(result.data.tests).toEqual(expect.arrayContaining(params.tests))
	})

	test("Method チェック", async () => {
		const { Method } = await exportedForTesting()
		const methods = ["GET", "POST", "PATCH", "PUT", "DELETE"]
		expect(Object.values(Method)).toEqual(expect.arrayContaining(methods))
	})

	test("api() の URL チェック", async () => {
		expect(await api("test")).toBe(`${apiURL}test`)
	})

	test("isErrorForApiResult() if 判定チェック", async () => {
		const { isErrorForApiResult } = await exportedForTesting()
		const response200 = new Response(new FormData(), { status: 200 })
		const response201 = new Response(new FormData(), { status: 201 })
		const response303 = new Response(new FormData(), { status: 303 })
		const response400 = new Response(new FormData(), { status: 400 })
		const response500 = new Response(new FormData(), { status: 500 })
		expect(isErrorForApiResult(null)).toBe(true)
		expect(isErrorForApiResult(response200)).toBe(false)
		expect(isErrorForApiResult(response201)).toBe(false)
		expect(isErrorForApiResult(response303)).toBe(false)
		expect(isErrorForApiResult(response400)).toBe(true)
		expect(isErrorForApiResult(response500)).toBe(true)
	})


	test("apiResult() の if 失敗判定チェック", async () => {
		// const formData = new FormData()
		// formData.append("test", "test1")
		// const response200 = new Response(formData, { status: 200 })
		// const successResult = apiResult(response200)
		const failedResult = await apiResult()
		expect(failedResult.statusCode).toBe(500)
		expect(failedResult.message).toBe("failed")
		expect(failedResult.data).toBe(null)
	})


	test("createData() の if 判定チェック", async () => {

		// URLSearchParams で使用した関数を用意
		class Test {

			#str = ""

			append(key: string, value: string) {
				this.#str = (this.#str) ? `${this.#str}&${key}=${value}` : `${key}=${value}`
			}

			toString(): string {
				return this.#str
			}
		}

		const { createData } = await exportedForTesting()
		const successData = createData<Params, URLSearchParams>(params, new URLSearchParams())
		const failedData1 = createData<String, URLSearchParams>("params", new URLSearchParams())
		const failedData2 = createData<Params, Test>(params, new Test())
		expect(successData.toString()).toBe("test=test1&tests=test1&tests=test2&tests=test3")
		expect(failedData1.toString()).toBe("")
		expect(failedData2.toString()).toBe("")
	})
})
