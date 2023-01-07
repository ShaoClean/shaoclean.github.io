import { arraySidebar } from "vuepress-theme-hope";
import fs from 'fs'
import { getFiles } from "../../getFiles";

const filesArr = fs.readdirSync(process.cwd() + '/clog/study/frontend/ts');

export const tsSidebar = arraySidebar(getFiles(filesArr))