import JSDOMEnvironment from "jest-environment-jsdom"

// https://qiita.com/takano-h/items/506fa48493873bf7af41
// https://github.com/jsdom/jsdom/issues/1724#issuecomment-1446858041
// https://github.com/facebook/jest/blob/v29.4.3/website/versioned_docs/version-29.4/Configuration.md#testenvironment-string
export default class CustomJSDOMEnvironment extends JSDOMEnvironment {
	constructor(...args: ConstructorParameters<typeof JSDOMEnvironment>) {
		super(...args)

		// https://github.com/mswjs/jest-fixed-jsdom/blob/main/index.js
		// this.customExportConditions = args.customExportConditions || [""]

		this.global.TextDecoder = TextDecoder
		this.global.TextEncoder = TextEncoder
		this.global.TextDecoderStream = TextDecoderStream
		this.global.TextEncoderStream = TextEncoderStream
		this.global.ReadableStream = ReadableStream

		// FIXME https://github.com/jsdom/jsdom/issues/1724
		if (!this.global.fetch) {
			this.global.fetch = fetch
			this.global.Headers = Headers
			this.global.Request = Request
			this.global.Response = Response
		}
	}
}
