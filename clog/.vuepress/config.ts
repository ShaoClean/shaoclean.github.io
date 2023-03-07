import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
	bundler: viteBundler({
		viteOptions: {},
		vuePluginOptions: {},
	  }),
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

		// searchPlugin({
		//   locales: {
		//     "/zh/": {
		//       placeholder: "搜点什么东西吧...",
		//     },
		//   },
		//   hotKeys:[
		//     {
		//       key:'k',
		//       ctrl:true
		//     }
		//   ]

		// })
		// 幻灯片支持
		// mdEnhancePlugin({
		//   presentation:true
		// })
	],
});
