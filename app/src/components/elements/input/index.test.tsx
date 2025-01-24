import { describe, jest, expect, test } from "@jest/globals"
import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Input from "./index"

describe("/components › /elements › <Input>", () => {
	test("type チェック", () => {
		const types: string[] = ["text"]

		const value = ""
		const onChange = (_: React.MouseEvent<HTMLInputElement>) => {}

		for (const [_, type] of types.entries()) {
			render(<Input type={type} value={value} onChange={onChange} />)
		}
	})

	test("onChange() が呼ばれるかどうか", () => {
		const onChange = jest.fn()

		let value = ""
		const { getByTestId } = render(<Input value={value} onChange={onChange} />)
		fireEvent.change(getByTestId("input"), { target: { value: "v" } })
		expect(onChange).toBeCalled()
	})
})
