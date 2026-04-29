import { hopeTheme } from "vuepress-theme-hope";
import { encryptEssayConfig } from "./encryptEssay.js";
import navbar from "./navbar/index.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
	hostname: "https://doc.shaoclean.top",

	author: {
		name: "ShaoClean",
		url: "https://weibo.com/u/5550001595",
	},
	//简洁模式
	// pure: true,
	iconAssets: "iconfont",

	logo: "/logo.svg",

	repo: "https://github.com/ShaoClean/shaoclean.github.io",

	docsDir: "clog",

	docsBranch: "main",

	docsRepo: "https://github.com/ShaoClean/shaoclean.github.io",
	// navbar
	navbar: navbar,

	// sidebar
	sidebar: sidebar,

	footer: "浙ICP备2022003815号-1",

	displayFooter: true,

	pageInfo: [
		"Author",
		"Original",
		"Date",
		"Category",
		"Tag",
		"PageView",
		"Word",
	],

	blog: {
		description:
			"一个前端开发者，努力成为全栈开发💪<br>浙江最后一杯深情冰美式",
		intro: "/intro.html",
		medias: {
			Email: "1518136109@qq.com",
			GitHub: "https://github.com/ShaoClean",
			Gitee: "https://gitee.com/shaoclean",
			QQ: "1518136109",
			Wechat: "ShaoClean",
			Weibo: "邵Clean",
		},
	},
	encrypt: {
		config: {
			...encryptEssayConfig(),
			"/project/clean-vite-cli.html": ["sczscz"],
			"/project/cyou-js.html": ["sczscz"],
			"/project/CYOU.html": ["sczscz"],
			"/demo/water.html": ["sczscz"],
		},
	},

	plugins: {
		blog: {
			// 摘要长度
			excerptLength: 50,
		},
		// 代码主题
		prismjs: {
			light: "one-dark",
		},
		// 如果你不需要评论，可以直接删除 comment 配置，
		// 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
		// 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
		// comment: {
		// 	/**
		// 	 * Using Waline
		// 	 */
		// 	provider: "Waline",
		// 	// serverURL: "https://clog-97ba6egp4-shaoclean.vercel.app/",
		// 	serverURL: "https://doc.shaoclean.top/",
		// },
		mdEnhance: {
			presentation: {
				plugins: ["highlight", "math", "search", "notes", "zoom"],
			},
		},
	},
});

