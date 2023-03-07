import { viteBundler } from "@vuepress/bundler-vite";
import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
export default defineUserConfig({
	bundler: viteBundler({
		viteOptions: {
			build: {
				cssCodeSplit: true,
				// cssTarget:string | string[],
				dynamicImportVarsOptions: {},
			},
		},
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
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
			// locales:{
      //   '/': {
      //     placeholder: 'Search Documentation',
      //     translations: {
      //       button: {
      //         buttonText: 'Search Documentation',
      //       },
      //     },
      //   },
			//   '/zh/': {
			//     placeholder: '搜索内容',
			//     translations: {
			//       button: {
			//         buttonText: 'Search Documentation',
			//       },
			//     },
			//   },
			// }
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
