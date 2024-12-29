
import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function ESLint() {
  return (
    <main className={styles.main}>
      <div>
        <h1>ESLint</h1>
        <h2>for TypeScript</h2>
        <Card>
          <p><a href="https://typescript-eslint.io/" target="_blank">typescript-eslint <Ungroup/></a></p>
          <Code
            lang="json"
            name=".eslintrc.json"
            value={
`{
  "extends": ["next/core-web-vitals", "next/typescript"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", {
      "args": "all",
      "argsIgnorePattern": "^_",
      "caughtErrors": "all",
      "caughtErrorsIgnorePattern": "^_",
      "destructuredArrayIgnorePattern": "^_",
      "varsIgnorePattern": "^_",
      "ignoreRestSiblings": true
    }],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"]
  }
}`
          }
          />
          <Code
            lang="bash"
            name="package.json"
            value={
`{
  "scripts": {
    "lint": "next lint --no-cache"
  }
}`
            }
          />


          <Code
            lang="bash"
            value={`$ npm run lint`}
          />
        </Card>
      </div>
    </main>
  );
}
