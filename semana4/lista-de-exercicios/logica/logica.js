// 1
// Podemos usar o for foreach e for of


// 2
// a) false
// b) false
// c) true
// d) true
// e) true


// 3
// precisamos fazer com que quatidade de pares tenha um valor ou criar uma outra lógica difirete


// 4
function quantidadeDeLadosIguais(a,b,c){
    if (a === b && b === c){
        console.log("equilatero")
    }
    else if(a === b || a === c || b === c){
        console.log("isoceles")
    }
    else{
        console.log("escaleno")
    } 
}

//5 
function numeros(a,b){
    if(a == b){
        console.log("são iguais")
    }
    else if(a < b){
        console.log("a é menor do que b")
    }
    else{
        console.log("b é menor do que a")
    }
    if(a % b === 0){
        console.log("a divide b")
    }
    if(b % a === 0){
        console.log("b divide a")
    }
    if (a - b >= 0){
        console.log("A diferença entre eles é ", a - b)
    }
    else{
        console.log("A diferença entre eles é ", b - a)
    }

}