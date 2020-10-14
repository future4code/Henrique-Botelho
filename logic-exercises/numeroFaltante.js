/*
### Exercício do dia - Número Faltante

Implemente uma função que receba um array (ordenado ou não) com números de 1 a 100. Você sabe que, nesse array, está faltando apenas **um** número dentro desse intervalo. A sua função deve retornar o número faltante. 
Há dois exemplos abaixo com o array ordenado para facilitar o entendimento da questão. Entretanto, não assuma que ele esteja ordenado para implementar a função!

- Para a entrada `[1, 2, 3, ... , 45, 46, 48, 49, ... , 100]`, o retorno deve ser `47`
- Para a entrada `[1, 2, 3, ... , 69, 71, 72, ... , 100]`, o retorno deve ser `70`

Solução 1

export const findMissingNumber = (arr: number[]): number => {
  const expectedSum = 5050;
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return expectedSum - sum;
};

Solução alternativa

*/
function numeroFaltante(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] !== i + 1) {
      return i + 1;
    }
  }
}

numeros = [1, 2, 4, 5, 6];
numeros = numeros.sort((a, b) => a - b);

console.log(numeroFaltante(numeros));
