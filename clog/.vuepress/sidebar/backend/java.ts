import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";

// 前置路径 /study/backend
export const javaSidebar:HopeThemeSidebarGroupItem = {
  text:"java",
  icon:"java",
  prefix:"java/",
  collapsable: true,
  children:[
    "",
    "JavaSE",
  ]
}