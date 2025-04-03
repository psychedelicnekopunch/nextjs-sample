import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	// const cookies = request.cookies.getAll()
	const cookie = request.cookies.get("test3")
	const response = NextResponse.next()
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
		value: "in middleware",
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
