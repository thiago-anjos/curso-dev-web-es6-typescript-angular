let multiple = function () {
  return 5 * 5;
};

console.log(multiple);
console.log(multiple());

// arrow function
let multipleArrow = () => {
  return 5 * 5;
};

console.log(multipleArrow());

let parImpar = (n) => (n % 2 === 0 ? "par" : "impar");
console.log(parImpar(90));
