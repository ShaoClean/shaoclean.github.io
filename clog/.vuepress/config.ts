import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
	lang: "zh-CN",
	title: "clog",
	description: "clean's blog",
	base: "/",
	theme,
	head: [
		["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
		[
			"link",
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossorigin: "",
			},
		],
		[
			"link",
			{
				href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
				rel: "stylesheet",
			},
		],
	],
	plugins: [
		docsearchPlugin({
			appId: "NR7AZKYE74",

			apiKey: "597ac4cae55a9398570abc4462e65823",

			indexName: "hiclean",
		}),
		
		
	],
});
