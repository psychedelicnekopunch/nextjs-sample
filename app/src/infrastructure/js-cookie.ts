import Cookies from "js-cookie"

type CookieInterface = {
	// readonly path: "/"
	get: (name: CookieName) => string
	set: (name: CookieName, value: string) => void
	remove: (name: CookieName) => void
}

export type CookieName = "test"

export default class Cookie implements CookieInterface {
	private path = "/"

	constructor() {}

	get(name: CookieName): string {
		// return Cookies.get(name) ? Cookies.get(name) : ""
		const value: string | undefined = Cookies.get(name)
		return value ? value : ""
	}

	set(name: CookieName, value: string): void {
		Cookies.set(name, value, {
			expires: (1 / 24 / 60) * 5, // 5分
			path: this.path,
		})
	}

	remove(name: CookieName): void {
		Cookies.remove(name, { path: this.path })
	}
}
