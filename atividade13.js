/*
Questão 13: Como você pode verificar se um valor está contido em um array 
em JavaScript?
*/

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((elemento) => elemento > 10);

console.log(found);
// Expected output: 12
