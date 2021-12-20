//contexto rest () -> utilizado para condensar parametros em função ou metodos

//funcao

function sum(...args) {
  let result = 0;
  args.forEach((value) => {
    console.log("value from forEach", value);
  });

  args.forEach((value) => (result += value));

  return result;
}

let results = sum(5, 7, 49, 12, 56, { name: "thiago" });

console.log("call sum", results);
