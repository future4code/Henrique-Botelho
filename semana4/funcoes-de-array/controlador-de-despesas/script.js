let listaDeDespesas = []

function salvar(){
    let ivalor = document.getElementById("valor").value
    var e = document.getElementById("tipo");
    var itipo = e.options[e.selectedIndex].value;
    let idescricao = document.getElementById("descricao").value
    let despesas = {
        valor: ivalor,
        tipo: itipo,
        descricao: idescricao
    }
    listaDeDespesas.push(despesas) 
} 

function detalha(){
    let min = document.getElementById("minimo").value
    let max = document.getElementById("maximo").value
    let filtro = listaDeDespesas.filter((elemento, idx, arr) => {
        if(elemento.valor >= min && elemento.valor <= max){
            return true
        }
        else{
            return false
        }
    })
    console.log(filtro)
}