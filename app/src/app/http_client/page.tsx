import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
// import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

import type { TestParams } from "@/database/testRepository"
import { getTest, createTest, saveTest, setTest, deleteTest } from "@/database/testRepository"

import FileUploader from "@/features/fileUploader"

export default async function HTTPClient() {
	const params: TestParams = {
		test: "hello",
		tests: ["hello", "a", "b"],
	}

	const fetchGet = await getTest(params)
	const fetchPost = await createTest(params)
	const fetchPatch = await saveTest(params)
	const fetchPut = await setTest(params)
	const fetchDelete = await deleteTest(params)

	console.log(fetchGet)
	console.log(fetchPost)
	console.log(fetchPatch)
	console.log(fetchPut)
	console.log(fetchDelete)
	// console.log(process.env.API_URL)

	return (
		<main className={styles.main}>
			<div>
				<h1>HTTP Client</h1>
				<h2>fetch()</h2>
				<Card>
					<p>
						<a href="https://nextjs.org/docs/app/api-reference/functions/fetch" target="_blank">
							fetch - Next.js <Ungroup />
						</a>
					</p>
					<FileUploader />
				</Card>
			</div>
		</main>
	)
}
