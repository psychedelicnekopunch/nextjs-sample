// "use server"

// import { cookies } from "next/headers"

// export async function create(value: string) {
// 	;(await cookies()).set("test2", value, {
// 		path: "/",
// 		maxAge: 60 * 5,
// 	})
// }

// export async function remove() {
// 	;(await cookies()).delete("test2")
// }

import { create, remove } from "@/infrastructure/cookie"

export type Result<T> = {
	result: "success" | "failed"
	error: true | false
	message: string
	data: T
}

type RepositoryInterface = {
	save: (value: string) => Promise<Result<null>>
	delete: () => Promise<Result<null>>
}

export default class Repository implements RepositoryInterface {
	constructor() {}

	save(value: string): Promise<Result<null>> {
		return new Promise((resolve) => {
			create("test2", value)
			resolve({
				result: "success",
				error: false,
				message: "成功しました",
				data: null,
			})
		})
	}

	delete(): Promise<Result<null>> {
		return new Promise((resolve) => {
			remove("test2")
			resolve({
				result: "success",
				error: false,
				message: "成功しました",
				data: null,
			})
		})
	}
}
