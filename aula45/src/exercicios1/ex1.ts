import * as fs from 'fs';

const nome: string = process.argv[2];
const idade: number = Number(process.argv[3]);

const idade2: number = idade + 7;


console.log(`Olá, ${nome} Você tem ${idade} anos.`)
console.log(`Olá, (Nome)! Você tem ${idade} anos. Em sete anos você terá ${idade2}`)
