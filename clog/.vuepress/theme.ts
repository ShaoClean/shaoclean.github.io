import { hopeTheme } from "vuepress-theme-hope";
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

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "PageView", "Word"],

  blog: {
    description: "一个前端开发者",
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
  //加密文档
  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
