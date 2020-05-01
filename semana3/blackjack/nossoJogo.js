/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

if(confirm("pergunta de sim ou não")) {
   let sorteios = 0
   let totalComp = 0
   let totalUser = 0
   while(totalUser <= 21 || totalComp <= 21){
      const carta = comprarCarta(); 
      if (sorteios % 2 == 0){
         totalUser += carta.valor
      }else{
         totalComp += carta.valor
      }
   }
   if(totalUser > totalComp){
      console.log("Usuário ganhou")
   }
   else{
      console.log("O computador ganhou")
   }
} else {
   console.log("O jogo acabou")
}