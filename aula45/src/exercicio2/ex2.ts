import * as fs from 'fs';

const op: string = process.argv[2]
const n1: number = Number(process.argv[3]);
const n2: number = Number(process.argv[4]);

switch (op) {
    case "add":
        console.log("Reposta: ", n1 + n2)
        break;
    case "sub":
        console.log("Reposta: ", n1 - n2)
    case "mult":
        console.log("Reposta: ", n1 * n2)
    case "div":
        console.log("Reposta: ", n1 / n2)
    default:
        break;
}