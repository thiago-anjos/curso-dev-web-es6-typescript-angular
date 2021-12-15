let obj = {
  2021: {
    jan: {
      personal: 2000,
      hobbies: 1000,
      house: 3000,
    },
    feb: {
      personal: 562,
      hobbies: 125,
      house: 4500,
    },
  },
};

console.log(obj[2021].feb.personal);
//retorna undefined ao invés de lançar uma excessão
console.log(obj[2021].marco?.personal);
