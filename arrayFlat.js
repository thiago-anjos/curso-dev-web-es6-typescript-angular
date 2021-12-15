let vegetables = [
  "laranja",
  "uva",
  "banana",
  "melão",
  ["morango", "kiwi", ["brocolis", ["feijão", "arroz"]]],
];
console.log(vegetables);
let flatVegetables = vegetables.flat();
console.log(flatVegetables);
let flatVegetablesNivel1 = vegetables.flat(2);
console.log("nivel 1", flatVegetablesNivel1);
