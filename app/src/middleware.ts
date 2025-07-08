import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getTest } from "@/database/testRepository"

function findClientIPAddress(str: string | null): string {
	let res = ""
	if (typeof str == "string") {
		let arr: string[] = str.split(", ")
		if (arr.length > 0) {
			res = arr[0]
			arr = res.split(":")
			if (arr.length > 0) {
				res = arr[arr.length - 1]
			}
		}
	}
	return res
}


async function fetchTest(): Promise<object> {
	return await getTest({ test: "middleware", tests: ["this", "is", "middleware"]})
}


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {

	const ft = await fetchTest()
	console.log(ft)

	const response = NextResponse.next()

	let ipAddress = "unknown"
	let userAgent = "unknown"
	console.log("======== headers ==========")
	if (request.headers.get("X-Forwarded-For")) {
		ipAddress = findClientIPAddress(request.headers.get("X-Forwarded-For"))
	}
	if (request.headers.get("user-agent")) {
		const ua: string | null = request.headers.get("user-agent")
		userAgent = typeof ua == "string" ? ua : ""
	}
	response.cookies.set({
		name: "ipAddress",
		value: ipAddress,
		path: "/",
		maxAge: 60 * 5, // 5分,
	})
	response.cookies.set({
		name: "userAgent",
		value: userAgent,
		path: "/",
		maxAge: 60 * 5, // 5分,
	})
	console.log(ipAddress)
	console.log(userAgent)

	// Cookie
	//
	// const cookies = request.cookies.getAll()
	const cookie = request.cookies.get("test3")
	console.log("==================")
	console.log(`middleware ( ${request.url} )`)
	// console.log("middleware ( " + request.url + " )")
	console.log("==================")
	if (cookie) {
		console.log(`cookie["test3"] is ${cookie.value}`)
		return response
	}
	response.cookies.set({
		name: "test3",
		value: "test3 in middleware",
		path: "/",
		maxAge: 60 * 5, // 5分,
	})
	console.log(`response.cookies.set()`)
	return response
}

// See "Matching Paths" below to learn more
export const config = {
	// matcher: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
	// matcher: "/((?!api|assets|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	matcher: ["/cookie", "/middleware", "/ip_host_ua"],
	// matcher: "/middleware",
}

export const exportedForTesting = {
	findClientIPAddress,
}
