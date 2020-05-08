// 1

let array = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

let adultos = array.filter((elemento) => elemento.idade > 20)
let criancas = array.filter((elemento) => elemento.idade < 20)

console.log(adultos)
console.log(criancas)

//2 a

const numeros = [1,2,3,4,5,6]
function dobra(numeros) {
    let x = numeros.map(numero => numero * 2)
    return x
}
console.log(dobra(numeros))

// 2 b
function triplica(numeros) {
    let x = numeros.map(numero => numero * 3)
    return x
}
console.log(triplica(numeros))

