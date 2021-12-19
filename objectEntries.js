let objectPerson = {
  name: "Thiago dos Anjos",
  age: 35,
  hobbies: [{ sport: "run" }, { sport: "baseball" }],
};

// retorna um array de elementos baseados aos pares de propriedades do objeto [chave, valor]

console.log(objectPerson);
console.log("-----------");
console.log(Object.entries(objectPerson));
