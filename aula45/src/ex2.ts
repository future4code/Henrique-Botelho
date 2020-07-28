import * as fs from 'fs';

const fileData: any = fs.readFileSync("./users.json")


console.log(fileData);
