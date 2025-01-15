import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import List from "@/components/layouts/list"
import ReactHooks from "@/features/reactHooks"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Hooks() {
	return (
		<main className={styles.main}>
			<div>
				<h1>Hooks</h1>
				<h2>React Hooks</h2>
				<Card>
					<p>
						<a href="https://ja.react.dev/reference/react/hooks" target="_blank">
							Built-in React Hooks - React <Ungroup />
						</a>
					</p>
					<List>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#state-hooks">
								State Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useState</li>
								<li>useReducer</li>
							</List>
						</li>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#context-hooks">
								Context Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useContext</li>
							</List>
						</li>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#ref-hooks">
								Ref Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useRef</li>
								<li>useImperativeHandle</li>
							</List>
						</li>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#effect-hooks">
								Effect Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useEffect</li>
							</List>
						</li>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#performance-hooks">
								Performance Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useMemo</li>
								<li>useCallback</li>
							</List>
						</li>
						<li>
							<a href="https://ja.react.dev/reference/react/hooks#other-hooks">
								Other Hooks - React <Ungroup />
							</a>
							<List type="-">
								<li>useDebugValue</li>
								<li>useId</li>
								<li>useSyncExternalStore</li>
								<li>useActionState</li>
							</List>
						</li>
					</List>
				</Card>
				<ReactHooks />
			</div>
		</main>
	)
}
