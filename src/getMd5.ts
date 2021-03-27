import fs from "fs"
import md5 from "md5"


const readFile = "data/ly.txt"
let writeFile = "data/fly.txt"

async function main() {
    let count = 0
    let countFile = 1
    const data = fs.readFileSync(readFile, "utf-8")
    const lines = data.split(/\r?\n/)
    lines.forEach((line) => {
        const li = line.replace("\"", "").replace("\"", "").trim()
        console.log(li);
        const ali = md5(li)
        // console.log("after md5 ="+ali)
        // console.log(`length =${ali.length}`)
        ali.concat("/r/n").concat("/r/n")
        console.log("ali =" + ali)
        if(count < 70000){
            count ++
            fs.appendFileSync(writeFile, `${ali}\r\n`)
        }else{
            count = 0
            countFile++
            writeFile=`data/fly-${countFile}.txt`
            fs.appendFileSync(writeFile, `${ali}\r\n`)
        }
        console.log("count = "+count)
    });
}

main()