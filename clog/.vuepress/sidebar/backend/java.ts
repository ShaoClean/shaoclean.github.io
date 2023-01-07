import { HopeThemeSidebarGroupItem } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";

// 前置路径 /study/backend
export const javaSidebar:HopeThemeSidebarGroupItem = {
  text:"java",
  icon:"java",
  prefix:"java/",
  collapsable: true,
  children:getFiles('/clog/study/backend/java')
}