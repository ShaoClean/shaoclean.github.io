import { arraySidebar } from "vuepress-theme-hope";
import { getFiles } from "../../getFiles";

export const demoSidebar = arraySidebar(getFiles('/clog/demo'))