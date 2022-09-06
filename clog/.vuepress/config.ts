import { searchPlugin } from "@vuepress/plugin-search";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
          placeholder: "搜索",
        },
      },

    })
  ]
});
