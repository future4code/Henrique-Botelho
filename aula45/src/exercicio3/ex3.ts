import * as fs from "fs"

const fileName: string = process.argv[2]
const texto: string = process.argv[3]

try {
    fs.appendFileSync(fileName, texto);
} catch (error) {
  console.log("Erro", error)  
}
 