import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";

// 前置路径 /study/backend
export const nodeSidebar:HopeThemeSidebarGroupItem = {
  text:"node",
  icon:"nodeJS",
  prefix:"nodeJS/",
  collapsable: true,
  children:[
    "",
    "init",
    "set-cookie",
    "upload"
  ]
}