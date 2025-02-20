"use client"

import { useState as UseState } from "react"
import Image from "next/image"

import { upload } from "./repository"

import Input from "@/components/elements/input"
import Button from "@/components/layouts/button"
// import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
// import CheckCircle from "@/assets/icon/check_circle.svg"
import styles from "./styles.module.scss"

export default function FileUploader() {
	const [inputFileSrc, setInputFileSrc] = UseState("")
	// const [inputFile, setInputFile] = UseState<File[]>([])
	const [inputFile, setInputFile] = UseState<File>(new File([], ""))

	// const [imageWidth, setImageWidth] = UseState(0)
	// const [imageHeight, setImageHeight] = UseState(0)

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		e.preventDefault()

		if (e.target.files == null) return

		const files: FileList = e.target.files

		if (files.length == 0) {
			return
		}

		const file: File = files[0]
		const reader: FileReader = new FileReader()

		switch (file.type) {
			case "image/webp":
			case "image/jpeg":
			case "image/gif":
			case "image/png":
				break
			default:
				alert(`画像ファイルを選択してください（${file.type}）`)
				return
		}

		reader.onload = (_: ProgressEvent) => {
			if (reader.result == null) return
			// setInputFile(files)
			setInputFile(file)
			// setInputFileSrc(e.target.result)
			// console.log(reader)
			if (typeof reader.result == "string") {
				setInputFileSrc(reader.result)
			}
		}
		reader.onerror = (e: ProgressEvent) => {
			console.log(e)
		}
		reader.readAsDataURL(file)
		e.target.value = ""
	}

	// function onCancel(_: React.CancelEvent<HTMLInputElement>) {
	// 	// console.log(e)
	// 	console.log("cancel")
	// 	// setInputFileSrc("")
	// }

	// function onLoad(e: React.LoadEvent<HTMLImageElement>) {
	// 	// console.log(e.target)
	// 	// console.log(e.target.naturalWidth)
	// 	// console.log(e.target.naturalHeight)
	// 	// const size = resizeImageSize(e.target.naturalWidth, e.target.naturalHeight)
	// 	// setImageWidth(size.width)
	// 	// setImageHeight(size.height)
	// }

	// function onError(_: React.ErrorEvent<HTMLImageElement>) {
	// 	// console.log(e)
	// 	setInputFileSrc("")
	// }

	async function onClick(e: React.MouseEvent<HTMLButtonElement>): Promise<void> {
		e.preventDefault()
		if (inputFile && inputFileSrc) {
			const res = await upload({ test: inputFile })
			console.log(res)
		}
	}

	function onClickClear(e: React.MouseEvent<HTMLButtonElement>) {
		e.preventDefault()
		setInputFileSrc("")
	}

	// function resizeImageSize(width: int, height: int): {width: int, height: int} {
	// 	const resizedWidth = 300
	// 	const percent = resizedWidth / width
	// 	return {
	// 		width: resizedWidth,
	// 		height: height * percent
	// 	}
	// }

	return (
		<>
			<p>画像アップロード</p>
			{inputFileSrc && <Image width={0} height={0} src={inputFileSrc} alt="upload file" className={styles.image} />}

			<form>
				<List type="none">
					<li>
						<Input type="file" onChange={onChange} value="" />
					</li>
					<li>
						<Button color="primary" onClick={onClick}>
							send
						</Button>
						<Button color="light" onClick={onClickClear}>
							clear
						</Button>
					</li>
				</List>
			</form>
		</>
	)
}
