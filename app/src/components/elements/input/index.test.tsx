import { describe, jest, expect, test } from "@jest/globals"
import "@testing-library/jest-dom"
import { render, fireEvent, screen } from "@testing-library/react"
import Input from "./index"

const value = ""
const onChange = jest.fn()

describe("/components › /elements › <Input>", () => {
	test("type チェック", () => {
		const types: string[] = ["text", "file"]
		for (const [_, type] of types.entries()) {
			render(<Input type={type} value={value} onChange={onChange} />)
		}
	})

	test("onChange() が呼ばれるかどうか", () => {
		render(<Input value={value} onChange={onChange} />)
		fireEvent.change(screen.getByTestId("input"), { target: { value: "v" } })
		expect(onChange).toBeCalled()
	})

	// test("ファイルアップロード →  onChange()", () => {

	// 	const value = ""
	// 	const onChange = jest.fn()
	// 	render(<Input type="file" value={value} onChange={onChange} />)
	// 	fireEvent.click(screen.getByTestId("input"), { dataTransfer: {
	// 		files: [
	// 			new File(["(⌐□_□)"], "chucknorris.png", {type: "image/png"})
	// 		],
	// 	}})
	// // 	console.log(getByTestId("input").style.display)
	// 	expect(onChange).toBeCalled()
	// })

	// test("onCancel() が呼ばれるかどうか", () => {
	// })

	test("type が file の場合 label が存在しているか、input の id と label の htmlFor が一致しているかチェックする", () => {
		render(<Input type="file" value={value} onChange={onChange} />)
		expect(screen.getByTestId("label")).toBeVisible()
		// expect(screen.getByTestId("label")).toBeTruthy()
		// expect(screen.getByTestId("input")).not.toBeVisible()
		expect(screen.getByTestId("label").htmlFor).toBe(screen.getByTestId("input").id)
	})
})
