"use client"

import { useSomeValueContext } from "@/features/reactHooks"

export default function ReactHooksChild(): React.ReactNode {
	const value = useSomeValueContext()
	return <p>{value}</p>
}
