//testando com o operador lógico OR
let test1 = null || "Valor a direita"; // o OR vai entender que null não é um valor utilizavel e vai retornar o valor da direita
let test2 = 0 || "Valor a direita"; // o OR vai entender que zero não é um valor utilizavel e vai retornar o valor da direita
let test3 = undefined || "Valor a direita"; // undefined tbm será entendido como um valor não utilizavel e vai retornar o valor da direita
let test4 = "" || "Valor a direita"; // string vazia tbm será entendido como um valor não utilizavel e vai retornar o valor da direita
let test5 = "Valor util" || "Valor a direita";

console.log("teste1", test1);
console.log("teste2", test2);
console.log("teste3", test3);
console.log("teste4", test4);
console.log("teste5", test5);

// O operador lógico nullishCoalescing foi introduzido justamente para resolver esse problema porque o ZERO ou uma String vazia possa ser o retorno de alguma coisa
console.log("==========================================================");

test1 = null ?? "Valor a direita";
test2 = 0 ?? "Valor a direita"; // valor utilizavel
test3 = undefined ?? "Valor a direita";
test4 = "" ?? "Valor a direita"; // valor utilizavel
test5 = "Valor util" ?? "Valor a direita"; // valor utilizavel

console.log("teste1", test1);
console.log("teste2", test2);
console.log("teste3", test3);
console.log("teste4", test4);
console.log("teste5", test5);
