// array destructuring assignment o token usado é o mesmo do array

let fruits = ["abacaxi", "limão", "laranja", "uva"];
// qdo utilizamos os colchetes do lado esquerdo, isso é um destructuring
let [a = "Abacaxi Rei", l, , u, index = "default"] = fruits;
console.log(a, l, u, index);

// array multidimensional
// atribuição via desestruturação
let stufs = [
  ["abacaxi", "limão", "laranja", "uva"],
  ["ana", "joão", "miguel", "clara"],
];

let [, [pessoa1]] = stufs;
console.log(pessoa1);

// Objetos
let product = {
  description: "Notebook",
  price: 100,
  details: {
    fab: "dell",
    year: 200,
  },
};

let { description: desc, details: det, price: p } = product;
console.log(desc);

//extrair atributos de objetos, que pertencem a objetos internos
let {
  details: { fab, year },
} = product;
console.log(fab);

// FUNÇÕES
let names = ["joão", "magnolia", "pedro"];

function namesTest([person1, person2]) {
  console.log(person1);
}

namesTest(names);

let objPerson = {
  name: "thiago",
  age: 36,
  sex: "male",
};

function nameTestObj({ name, age }) {
  console.log(name, age);
}

nameTestObj(objPerson);

// array condensar os valores restantes

let fruits2 = ["melão", "limão", "uva"];
let [me, ...fruitsRest] = fruits2;
console.log("valores restantes", fruitsRest);

//mesma coisa com objetos
let objPerson2 = {
  name: "Thiaguinho",
  age: 100,
  sex: "malezinho",
  skill: "run",
};

let { name: nome, sex, ...rest } = objPerson2;
console.log(rest);
