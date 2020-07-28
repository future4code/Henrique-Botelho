// Type 2 is no assignable to string
// var minhaString: string = 2

// Podemos colocar um | string
// var meuNumero: number = 2;

type pessoa = {
    nome : string,
    idade : number,
    corFavorita: string
};

export const objeto: pessoa = {
    nome: "Henrique",
    idade: 24,
    corFavorita: "azul"
};

console.log(objeto) 