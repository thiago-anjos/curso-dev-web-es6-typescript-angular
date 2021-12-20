let vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];

//find, espera uma funcao de callback
let findElement = vegetais.find((item) => item == "Repolho");
// ele retorna o valor e não um true or false, diferente do includes
//console.log(findElement);

//includes
//ele é case sensitive
function upperFirstChart(vegetais) {
  const firstLetter = vegetais.charAt().toUpperCase() + vegetais.slice(1);
  // const subString = vegetais.substring(1, vegetais.length);
  //return firstLetter + subString;
  return firstLetter;
}
let findIncludes = vegetais.includes(upperFirstChart("repolho"));
console.log(findIncludes);
