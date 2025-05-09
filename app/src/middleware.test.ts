import { unstable_doesMiddlewareMatch } from "next/experimental/testing/server"
import { describe, expect, test } from "@jest/globals"
// import type { NextRequest } from "next/server"
import { NextRequest } from "next/server"
import { middleware, config, exportedForTesting } from "./middleware"
import nextConfig from "./../next.config"

describe("Middleware.ts", () => {
	test("matcher のテスト", () => {
		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/",
			}),
		).toEqual(false)

		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/favicon.ico",
			}),
		).toEqual(false)

		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/test",
			}),
		).toEqual(false)

		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/cookie",
			}),
		).toEqual(true)

		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/middleware",
			}),
		).toEqual(true)

		expect(
			unstable_doesMiddlewareMatch({
				config,
				nextConfig,
				url: "/ip_host_ua",
			}),
		).toEqual(true)
	})

	test("findClientIPAddress()", () => {
		const { findClientIPAddress } = exportedForTesting
		expect(findClientIPAddress("1::192.168.1.1, 2::192.168.1.2, 3::192.168.1.3")).toEqual("192.168.1.1")
	})

	test("Cookie に IP アドレスと userAgent が入っているかどうか", async () => {
		const request = new NextRequest("http://localhost:8080", {
			headers: {
				"X-Forwarded-For": "1::192.168.1.1, 2::192.168.1.2, 3::192.168.1.3",
				"user-agent": "userAgent",
			},
		})
		const response = await middleware(request)
		// console.log(request)
		// console.log(response.cookies.get("ipAddress"))
		expect(response.cookies.get("ipAddress").value).toEqual("192.168.1.1")
		expect(response.cookies.get("userAgent").value).toEqual("userAgent")
	})
})
