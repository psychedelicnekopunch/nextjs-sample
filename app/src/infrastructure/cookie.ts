"use server"

import { cookies } from "next/headers"

export async function create(name: string, value: string) {
	;(await cookies()).set(name, value, {
		path: "/",
		maxAge: 60 * 5,
	})
}

export async function remove(name: string) {
	;(await cookies()).delete(name)
}
