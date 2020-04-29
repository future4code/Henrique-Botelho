// ============================ Exercício 1 =====================

// Imprime a soma dos números de 1 a 15 que é 115

// ============================ Exercício 2 =====================

// a) coloca um item no final da nova lista
// b) [10, 15, 25, 30]
// c) [12, 15, 18, 21, 27, 30] e [12]

// ============================ Exercício 3 =====================

// A)

let numeros = [10, 30, 20, 40, 15]

let maior = numeros[0]
let menor = numeros[0]
for (const numero of numeros) {
    if(numero > maior){
        maior = numero
    }
    if(numero < menor){
        menor = numero
    }
}
console.log(maior)
console.log(menor)

// B)

let novoArray = []
for (const numero of numeros){
    novoArray.push(numero/10)
}

console.log(novoArray)

// C)

let pares = []
for (const numero of numeros){
    if (numero % 2 == 0){
        pares.push(numero)
    }
}

console.log(pares)

// D

for (let i = 0; i < numeros.length; i++) {
    let mensagem = "O elemento de índice " + i + " é " + numeros[i]
    console.log(mensagem)
}