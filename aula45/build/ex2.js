"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const op = process.argv[2];
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);
switch (op) {
    case "add":
        console.log("Reposta: ", n1 + n2);
        break;
    case "sub":
        console.log("Reposta: ", n1 - n2);
    case "mult":
        console.log("Reposta: ", n1 * n2);
    case "div":
        console.log("Reposta: ", n1 / n2);
    default:
        break;
}
