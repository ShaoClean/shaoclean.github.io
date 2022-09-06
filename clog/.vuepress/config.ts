import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "clog",
  description: "clean's blog",

  base: "/",

  theme,
});
