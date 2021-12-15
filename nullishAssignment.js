// faz um teste prévio em relação ao valor da variável que está recebendo um valor
// ele checa se a variavel representa um valor nulo ou undefined
// porem se ela não representar um valor nulo, então o processo de atribuição não acontece

let v1 = 10;
let v2 = null; // nula -> null ou undefined

//nesse caso a atribuição não vai acontecer porque a v1 não é nula ou undefined
v1 ??= 50;

// nesse caso a atribuição acontecerá
v2 ??= 1000;

console.log(v1);
console.log(v2);

// outro exemplo

let arr = ["uva", "maçã", null, undefined, 5];

arr.forEach((item, indice) => {
  arr[indice] ??= "Não informado";
});

console.log(arr);
