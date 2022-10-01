import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";

// 前置路径 /study/backend
export const nodeSidebar:HopeThemeSidebarGroupItem = {
  text:"node",
  icon:"java",
  prefix:"nodeJS/",
  collapsable: true,
  children:[
    "",
    "init",
    "set-cookie"
  ]
}