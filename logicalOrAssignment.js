//verifica se uma variável é false, para ai sim continuar com o valor de atribuição

let v1 = 10;
let v2 = undefined;
let v3 = null;
let v4 = 0;
let v5 = "";
let v6 = "qualquer";

v1 ||= 9999;
v2 ||= 9999;
v3 ||= 9999;
v4 ||= 9999;
v5 ||= 9999;
v6 ||= 9999;

console.log(v1);
console.log(v2);
console.log(v3);
console.log(v4);
console.log(v5);
console.log(v6);
