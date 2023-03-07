import { SidebarItem } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";

// 前置路径 /study/backend
export const javaSidebar:SidebarItem = {
  text:"java",
  icon:"java",
  prefix:"java/",
  collapsible: true,
  children:getFiles('/clog/study/backend/java')
}