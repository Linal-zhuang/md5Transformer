// import fs from "fs-extra"
import fs from "fs"
import readline from "readline"
import md5 from "md5"


const readFile = "data/ly.txt"
const writeFile = "data/lyf.txt"

async function main() {
    const data = fs.readFileSync(readFile, "utf-8")
    const lines = data.split(/\r?\n/)
    lines.forEach((line) => {
        const li = line.replace("\"","").replace("\"","").trim()
        console.log(li);
        const ali = md5(li)
        // console.log("after md5 ="+ali)
        // console.log(`length =${ali.length}`)
        ali.concat("/r/n").concat("/r/n")
        console.log("ali ="+ ali)
        fs.appendFileSync(writeFile,`${ali}\r\n`)
    });
}

main()