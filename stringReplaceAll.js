let text =
  "O joão está trabalhando no código fonte antes de fazer a alteração é bom validar com o João";

let text2 = text.replaceAll("João", "Thiago");

let text3 = text.replace(/joão/gi, "antonieta");

console.log(text);
console.log(text2);
console.log(text3);
