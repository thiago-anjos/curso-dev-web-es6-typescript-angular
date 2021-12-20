// REST NO CONTEXTO SPREAD

// expandir string
// let titulo = "Como utilizar o operador rest spread";
// let tituloArray = [];
// console.log(...titulo);
// tituloArray.push(...titulo);
// console.log(tituloArray);
// console.log({ ...tituloArray });

//expandir arrays
let listaCursos = ["JS", "NodeJs", "HTML"];
let listaCursosPremium = ["AWS"];
let listaCursosTop = ["FullStack"];
let listaTotal = [...listaCursos, ...listaCursosPremium, listaCursosTop];
console.log(listaTotal);

//expandir objeto
let person = { name: "thiago", age: "32" };
let fullProfile = {
  ...person,
  address: "Rua dois",
  number: 78,
};

console.log(fullProfile);
