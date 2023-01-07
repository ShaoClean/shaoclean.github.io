import fs from 'fs'

export function getFiles(path: string) {
  const filesArr = fs.readdirSync(process.cwd() + path);
  const arr: string[] = []
  for (let file of filesArr) {
    if (file.indexOf('.md') === -1) continue
    if (file.match(/README.md/i)) {
      arr.push("")
    } else {
      arr.push(file.replace('.md', ''))
    }
  }
  return arr
}