import { arraySidebar } from "vuepress-theme-hope";
import { javaSidebar } from "./java";
import { nodeSidebar } from "./node";

export const backendSidebar = arraySidebar([
  javaSidebar,
  nodeSidebar
])