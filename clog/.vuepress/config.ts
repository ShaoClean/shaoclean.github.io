import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "clog",
  description: "clean's blog",
  base: "/",
  theme,
  head:[
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
        rel: "stylesheet",
      },
    ],
  ],
  plugins:[
    searchPlugin({
      locales: {
        "/zh/": {
          placeholder: "搜点什么东西吧...",
        },
      },
      hotKeys:[
        {
          key:'k',
          ctrl:true
        }
      ]
       
    }),
    // 幻灯片支持
    // mdEnhancePlugin({
    //   presentation:true
    // })
  ]
});
