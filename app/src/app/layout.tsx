import type { Metadata } from "next"
import { useId } from "react"
import Script from "next/script"
import { Inter } from "next/font/google"
import VisibilitychangeReloader from "@/components/elements/visibilitychangeReloader"
import "the-new-css-reset/css/reset.css"
import "./globals.scss"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const adobeFontsId1 = useId()
	const adobeFontsId2 = useId()

	return (
		<html lang="ja">
			{/* Adobe Fonts 英字 */}
			<Script id={adobeFontsId1} stylesheets={["https://use.typekit.net/yqm0glq.css"]}></Script>
			{/* Adobe Fonts 日本語 */}
			<Script id={adobeFontsId2}>
				{`
					(function(d) {
						var config = {
							kitId: 'zop7zxx',
							scriptTimeout: 3000,
							async: true
						},
						h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
					})(document);
				`}
			</Script>
			<body className={inter.className}>
				<VisibilitychangeReloader />
				{children}
			</body>
		</html>
	)
}
