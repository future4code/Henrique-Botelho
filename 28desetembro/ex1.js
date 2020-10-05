function oneedit(s, s2) {
    let alteracoes = 0
    //checa se houve substituições
    if (s.length === s2.length) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== s2[i]) {
                alteracoes++;
            }
        }
    }
    //chega se houve remoções ou adições
    let copyOfs = ""
    if (s2.length < s.length) {
        for (let i = 0; i < s2.length; i++) {
            if (s[i] !== s2[i]) {
                copyOfs = s.slice(0, i) + s.slice(i + 1, s.length)
                if (copyOfs === s2) {
                    alteracoes++;
                }
            }
        }
    }

    return alteracoes === 1

}

let s = "Henrique"
let s2 = "Henrikue"
let s3 = "Henique"
console.log(oneedit(s, s2))
console.log(oneedit(s, s3))