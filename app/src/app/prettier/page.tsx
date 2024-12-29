
import styles from "./page.module.scss"
import Card from "@/components/layouts/card"
import Code from "@/components/elements/code"
import Ungroup from "@/assets/icon/ungroup.svg"

export default function Prettier() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Prettier</h1>
        <h2>コードフォーマッター</h2>
        <Card>
          <p><a href="https://prettier.io/" target="_blank">Prettier <Ungroup/></a></p>
          <Code
            lang="bash"
            value={
`$ npm install eslint-config-prettier --save-dev
$ npm install prettier --save-dev --save-exact`
            }
          />
          <Code
            lang="json"
            name=".eslintrc.json"
            value={
`{
  "extends": ["next/core-web-vitals", "next/typescript", "prettier"]
}`
            }
          />
          <Code
            lang="txt"
            name=".prettierignore"
            value={
`.git
.next

node_modules

*.md`
            }
          />
          <p><a href="https://prettier.io/docs/en/options" target="_blank">Options - Prettier <Ungroup/></a></p>
          <Code
            lang="json"
            name=".prettierrc.json"
            value={
`{
    "printWidth": 1000,
    "tabWidth": 4,
    "useTabs": true,
    "semi": false,
    "singleQuote": false,
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "bracketSameLine": false,
    "arrowParens": "always",
    "vueIndentScriptAndStyle": true,
    "endOfLine": "lf"
}`
            }
          />
          <Code
            lang="bash"
            name="package.json"
            value={
`{
  "scripts": {
    "prettier": "npx prettier './**/*.{ts,tsx,json,scss}'",
    "format": "npx prettier --write './**/*.{ts,tsx,json,scss}' && next lint",
    "format:check": "npx prettier --check './**/*.{ts,tsx,json,scss}' && next lint"
  }
}`
            }
          />
          <Code
            lang="bash"
            value={
 `$ npm run prettier
$ npm run format
$ npm run format:check`
            }
          />
        </Card>
      </div>
    </main>
  );
}
