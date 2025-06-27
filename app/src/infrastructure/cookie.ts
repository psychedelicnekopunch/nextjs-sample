"use server"

import { cookies } from "next/headers"

// https://nextjs.org/docs/app/api-reference/functions/cookies#options
// You can use the (await cookies()).set(name, value, options) method in a Server Action or Route Handler to set a cookie.
//
export async function create(name: string, value: string) {
	;(await cookies()).set(name, value, {
		path: "/",
		maxAge: 60 * 5,
	})
}

export async function remove(name: string) {
	;(await cookies()).delete(name)
}
