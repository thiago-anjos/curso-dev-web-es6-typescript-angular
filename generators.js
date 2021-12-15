//são funções especiais que podem ser executadas, pausadas ou continuadas com uso de palavras reservadas

function* testGenerator() {
  yield "test 1";
  yield "test 2"; // o primeiro next pára aqui
  yield "test 3";
  return "test 4";
}

let myGeneragtor = testGenerator(); //objeto iterator
console.log(myGeneragtor);

console.log(myGeneragtor.next());
console.log("-------------");
console.log(myGeneragtor.next());
console.log("-------------");
console.log(myGeneragtor.next());
console.log("-------------");
console.log(myGeneragtor.next());
