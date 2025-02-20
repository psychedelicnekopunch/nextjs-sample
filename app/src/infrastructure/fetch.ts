"use server"

enum Method {
	Get = "GET",
	Post = "POST",
	Patch = "PATCH",
	Put = "PUT",
	Delete = "DELETE",
}

export type ApiResult<T> = {
	statusCode: number
	error: boolean
	message: string
	data: T
}

type FetchRequest<T> = {
	url: string
	params: T
	headers?: HeadersInit
}

export async function api(endpoint?: string): Promise<string> {
	const ep = endpoint ? endpoint : ""
	const url = process.env.API_URL
	return await `${url}${ep}`
}

export async function apiResult<T>(response?: Response): Promise<ApiResult<T>> {
	const body = response ? await response.json() : null
	return {
		statusCode: response ? response.status : 500,
		error: isErrorForApiResult(response),
		message: response ? "success" : "failed",
		data: body,
	}
}

function isErrorForApiResult(response?: Response) {
	if (response) {
		if (200 <= response.status && response.status < 400) {
			return false
		}
	}
	return true
}

export async function get<T>({ url, params, headers = {} }: FetchRequest<T>): Promise<Response> {
	return await client<T>(Method.Get, url, params, headers)
}

export async function post<T>({ url, params, headers = {} }: FetchRequest<T>): Promise<Response> {
	return await client<T>(Method.Post, url, params, headers)
}

export async function patch<T>({ url, params, headers = {} }: FetchRequest<T>): Promise<Response> {
	return await client<T>(Method.Patch, url, params, headers)
}

export async function put<T>({ url, params, headers = {} }: FetchRequest<T>): Promise<Response> {
	return await client<T>(Method.Put, url, params, headers)
}

export async function remove<T>({ url, params, headers = {} }: FetchRequest<T>): Promise<Response> {
	return await client<T>(Method.Delete, url, params, headers)
}

async function client<T>(method: Method, url: string, params: T, headers: HeadersInit): Promise<Response> {
	if (method == Method.Get) {
		return await fetch(`${url}?${createData<T, URLSearchParams>(params, new URLSearchParams()).toString()}`, {
			method: method,
			mode: "cors",
			headers: headers,
		})
	}
	return await fetch(url, {
		body: createData<T, FormData>(params, new FormData()),
		method: method,
		// cache: "no-store",
		mode: "cors",
		headers: headers,
		// headers: {
		// 	// "Content-Type": "application/json",
		// 	// "Content-Type": "application/x-www-form-urlencoded",
		// 	// "Content-Type": "multipart/form-data",
		// },
	})
}

function createData<T, U>(params: T, webApi: U): U {
	const query: object = params && typeof params == "object" ? params : {}
	for (const [key, value] of Object.entries(query)) {
		if (Array.isArray(value)) {
			for (const [_, v] of value.entries()) {
				if (webApi instanceof URLSearchParams || webApi instanceof FormData) {
					webApi.append(key, v)
				}
			}
			continue
		}
		if (webApi instanceof URLSearchParams || webApi instanceof FormData) {
			webApi.append(key, value)
		}
	}
	return webApi
}

export async function exportedForTesting() {
	return {
		Method,
		isErrorForApiResult,
		// client,
		createData,
	}
}
