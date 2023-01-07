export function getFiles(filesArr) {
  const arr: string[] = []
  for (let file of filesArr) {
    if(file.match(/README.md/i)){
      arr.push("")
    }else{
      arr.push(file.replace('.md', ''))
    }
  }
  return arr
}