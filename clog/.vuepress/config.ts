import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
export default defineUserConfig({
  lang: "zh-CN",
  title: "clog",
  description: "clean's blog",
  base: "/",
  theme,
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
