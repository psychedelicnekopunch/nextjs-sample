import Cookie from "@/infrastructure/js-cookie"

export type Result<T> = {
	result: "success" | "failed"
	error: true | false
	message: string
	data: T
}

type RepositoryInterface = {
	// readonly cookie: Cookie
	get: () => Promise<Result<string>>
	save: (value: string) => Promise<Result<null>>
	delete: () => Promise<Result<null>>
}

export default class Repository implements RepositoryInterface {
	private cookie: Cookie

	constructor() {
		this.cookie = new Cookie()
	}

	get(): Promise<Result<string>> {
		return new Promise((resolve) => {
			resolve({
				result: "success",
				error: false,
				message: "成功しました",
				data: this.cookie.get("test"),
			})
		})
	}

	save(value: string): Promise<Result<null>> {
		return new Promise((resolve) => {
			this.cookie.set("test", value)
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
			this.cookie.remove("test")
			resolve({
				result: "success",
				error: false,
				message: "成功しました",
				data: null,
			})
		})
	}
}
