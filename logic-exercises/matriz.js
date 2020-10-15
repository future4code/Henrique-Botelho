
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
