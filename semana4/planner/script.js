function addTarefa(){
    const texto = document.getElementById("tarefa").value;
    const diaEscolhido = document.getElementById("dia").value;
    document.getElementById(diaEscolhido).innerHTML += "<li>"+ texto +"</li>";
}   