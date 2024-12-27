
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1><a href="https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables" target="_blank">Environment Variables</a></h1>
        <h2><a href="https://github.com/vercel/next.js/tree/canary/examples/environment-variables" target="_blank">Environment Variables Example</a></h2>
        <div>
          サーバーレンダリングのみ使用可能<br/>
          process.env.TEST: { process.env.TEST }
        </div>
        <div>
          "use client" で使用する場合、先頭に NEXT_PUBLIC_ をつける。<br/>
          process.env.NEXT_PUBLIC_TEST: { process.env.NEXT_PUBLIC_TEST }
        </div>
      </div>
    </main>
  );
}
