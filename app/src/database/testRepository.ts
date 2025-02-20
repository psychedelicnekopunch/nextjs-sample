"use server"

import type { ApiResult } from "@/infrastructure/fetch"
import { api, apiResult, get, post, put, patch, remove } from "@/infrastructure/fetch"

export type TestParams = {
	test: string
	tests: string[]
}

export async function getTest(params: TestParams): Promise<object> {
	try {
		const response: Response = await get<TestParams>({ url: await api(), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}

export async function createTest(params: TestParams): Promise<object> {
	try {
		const response: Response = await post<TestParams>({ url: await api(), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}

export async function saveTest(params: TestParams): Promise<object> {
	try {
		const response: Response = await patch<TestParams>({ url: await api(), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}

export async function setTest(params: TestParams): Promise<object> {
	try {
		const response: Response = await put<TestParams>({ url: await api(), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}

export async function deleteTest(params: TestParams): Promise<object> {
	try {
		const response: Response = await remove<TestParams>({ url: await api(), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}

export type UploadTestParams = {
	test: File
}

export async function uploadTest(params: UploadTestParams): Promise<object> {
	try {
		const response: Response = await post<UploadTestParams>({ url: await api("uploads"), params: params })
		const result: ApiResult<object> = await apiResult<object>(response)
		return result.data
	} catch (e) {
		console.log(e)
		return {}
	}
}
