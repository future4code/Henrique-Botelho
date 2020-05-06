var post = {
    titulo: "",
    autor: "",
    conteudo: "",
};

let postagens = []

function postar(){
    let titulo =  document.getElementById("titulo")
    let novoTitulo = titulo.value
    let autor =  document.getElementById("autor")
    let novoAutor = autor.value
    let conteudo =  document.getElementById("conteudo")
    let novoConteudo = conteudo.value
    let novoPost = {
        ...post,
        titulo: novoTitulo,
        autor: novoAutor,
        conteudo: novoConteudo, 
    }
    postagens.push(novoPost)
    document.getElementById("titulo").value = ""
    document.getElementById("autor").value = ""
    document.getElementById("conteudo").value = ""

    inserirPostagens(postagens)
}

function inserirPostagens(postagens){
    document.getElementById("lista").innerHTML = ""
    for (const elemento of postagens) {
        document.getElementById("lista").innerHTML += `<p> ${elemento.conteudo} </p>`
    }
}

