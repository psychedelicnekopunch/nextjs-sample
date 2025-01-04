import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default async function DynamicRoutes({ params }: { params: Promise<{ id: string }> }) {
	const id = (await params).id
	console.log(`id<${typeof id}> is ${id}`)
	// const p = await params
	// console.log(p)
	return (
		<main className={styles.main}>
			<div>
				<h1>Dynamic Routes</h1>
				<h2>/dynamic_routes/:id</h2>
				<Card>
					<p>
						<a href="https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes" target="_blank">
							Dynamic Routes - Next.js <Ungroup />
						</a>
					</p>
					<Code
						lang="ts"
						name="page.tsx"
						value={`export default async function DynamicRoutes({
	params
}: {
	params: Promise<{id: string}>
}) {
	const id = (await params).id
	return <>id: {id}</>
}`}
					/>
					<p>id: {id}</p>
				</Card>
			</div>
		</main>
	)
}
