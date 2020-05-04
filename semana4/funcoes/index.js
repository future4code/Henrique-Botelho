// Exercício 1

/**
 * a) []
 * b) [0,1,0,1,2,3]
 * c) [0,1,0,1,2,3,0,1,2,3,4,5]
 */

 // Exercício 2

 /**
  * a) 0; 2 e undefined
  * b) É preciso fazer casting
  * 
  */

  // Exercício 3

  /**
   * O nome pode ser SomaMultiplica
   * A função soma todos os número depois múltiploca todos os números
   * e depois concatena tudo em um array
   */

function idadeDeCachorro(i){
    return i * 7
}

function pessoa(nome, idade, endereco, estudante){
    let sn
    if(estudante === true){
        sn = "sou"
    }
    else{
        sn = "não sou"
    }
    mensagem = "Eu sou " + nome + " tenho " + idade +
    " anos " + " moro em " + endereco + " e " + sn + " estudante "
    console.log(mensagem)
}

// console.log(idadeDeCachorro(2))
pessoa("Goli", 23, "Rua Guarapari 190", true)


function seculo(ano){
    return Math.ceil(ano/100);
}

// console.log(seculo(2001))

function aArray(array){
    return array.length 
}

function paridade(n){
    if(n % 2 == 0){
        return true
    }
    else{
        return false
    }
}

function qntPares(array){
    let count = 0
    for (const elemento of array) {
        if(elemento % 2 == 0){
            count++
        }
    }
    return count
}

function qntPares2(array){
    let count = 0
    for (const elemento of array) {
        if(paridade(elemento)){
            count++
        }
    }
    return count
}

console.log(qntPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))
console.log(qntPares2([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))
