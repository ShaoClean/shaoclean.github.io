import { getFiles } from "./getFiles";
import fs from 'fs'

export function encryptEssayConfig(){
    let res = {}
    let psw = ['sczscz']

    function getYears(){
        let res = fs.readdirSync(process.cwd() + '/clog/essay')
        return res.filter(item=>item !== 'README.md')
    }

    let years = getYears();

    years.forEach(year=>{
        let filesArr = getFiles(`/clog/essay/${year}`)
        filesArr.forEach(eassy=>{
            let key = `/essay/${year}/${eassy}.html`
            res[key] = psw
        })
    })

    return res;
}

