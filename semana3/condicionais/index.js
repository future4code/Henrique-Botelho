// ======================= 1 ==========================

// Verifica se o número é par ou ímpar

// ========================= 2 =====================

/**
 * (A) Para retornar o preço das frutas
 * (B) O preço da fruta Maça é  R$ 2.25
 * (C) 24.25 reais
 * (D) O preço da fruta pera é  R$ 5.5
 */

// ====================== 3 ======================

// mensagem is not defined


// ==================  Exercício 4 ======================

// A
let numero1 = prompt("Digite um número")
let numero2 = prompt("Digite outro número")

if (numero1 > numero2){
    console.log(numero1, numero2)
}
else{
    console.log(numero2, numero1)
}

// B

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
let numero3 = Number(prompt("Digite mais outro número"))

let numeros = [numero1, numero2, numero3]
numeros.sort(function(a, b) {
    return a - b
})

console.log(numeros[2])
console.log(numeros[1])
console.log(numeros[0])

// C

let numero1 = Number(prompt("Digite um número"))
let numero2 = Number(prompt("Digite outro número"))
let numero3 = Number(prompt("Digite mais outro número"))

let numeros = [numero1, numero2, numero3]
numeros.sort(function(a, b) {
    return a - b
})

if (numero1 === numero2 === numero3){
    console.log("Digite três números diferentes")
}

console.log(numeros[2])
console.log(numeros[1])
console.log(numeros[0])


//=============================  5 ===================================

// Link imagem https://drive.google.com/file/d/1fetcHLD40mvaoXymWUoIocpEjcT5qsWZ/view?usp=sharing

let ossos = prompt("Possui ossos")
let pelos = prompt("Possui pelos")
let racional = prompt("Racional?")
let terrestre = prompt("Terrestre?")

if(ossos == true){
    if(pelos == true){
        if(racional == true){
            console.log("Humano")
        }
        else{
            if(terrestre == true){
                console.log("Animal Terrestre")
            }
            else{
                console.log("Peixe")
            }
        }
    }
}
else{
    console.log("Só queremos classificar animais com ossos")
}