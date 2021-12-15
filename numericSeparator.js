//recurso para facilitar a leitura dos números dentro do nosso código

let num1 = 1000000000000;
console.log(num1);

let num2 = 1_000_000_000_000;
console.log(num2);

//podemos usar essa notação para valores decimais
let num3 = 1_575_720.25;
console.log(num3);

//casos binários
let b = 0b1010_1010_1010;
console.log("b", b);

//hexadecima
let h = 0xa_b_c_d_e_f;
console.log("h", h);

//restrições
//não pode ser utilizado duas vezes seguidas 100__000
// não pode ser utilizado logo após o ZERO 0_00
// não pode finalizar com o numeric separator 1_000_
