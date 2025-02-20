"use server"

// import type { ApiResult } from "@/infrastructure/fetch"
import type { UploadTestParams } from "@/database/testRepository"
import { uploadTest } from "@/database/testRepository"

export async function upload(params: UploadTestParams): Promise<object> {
	return await uploadTest(params)
}
