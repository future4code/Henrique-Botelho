//1
// arrays são vetores que servem para colocar elementos dentro. Objetos são conjuntos de chaves e valores.



// 2
function criaRetangulo(lado1, lado2){
    let retangulo = {
        largura: lado1,
        altura: lado2,
        perimentro: 2 * (lado1 + lado2),
        area: lado1 * lado2
    }
}

//3
filmeFavorito = {
    titulo: "Um filme legal",
    ano: "2022",
    diretor: "Henrique",
    atores: "Alice, Bob"    
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}`)


//4
let pessoa = {
    nome: "Henrique",
    idade: 23,
    email: "henriquemartinsbotelho@gmail.com",
    endereco: "Rua aaa"
}

let novaPessoa = {
    ...pessoa,
    nome: "Anônimo"
}

console.log(novaPessoa.nome)