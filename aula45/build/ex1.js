"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const idade2 = idade + 7;
console.log(`Olá, ${nome} Você tem ${idade} anos.`);
console.log(`Olá, (Nome)! Você tem ${idade} anos. Em sete anos você terá ${idade2}`);
