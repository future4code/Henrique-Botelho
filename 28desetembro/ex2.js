function comprime(s) {
    let letras = {}
    for (let c of s) {
        if (letras[c]) {
            letras[c] += 1;
        }
        else {
            letras[c] = 1;
        }
    }

    comprimida = ""
    for (const letra in letras) {
        comprimida += (letra + letras[letra])
    }

    if (comprimida < s) {
        return comprimida
    }
    else {
        return s
    }

}

s = "Henrique"
console.log(comprime("aabbb"))
console.log(comprime("aabcccccaaa"))
console.log(comprime("accurate"))
console.log(comprime("escola"))
console.log(comprime("accuraaaaaaaaaate"))