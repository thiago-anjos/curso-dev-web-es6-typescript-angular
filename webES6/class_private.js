class Person {
  #dayToday = new Date().toLocaleDateString();

  constructor(name) {
    this.name = name;
    this.#privateMethod();
  }

  say() {
    return `Hello my name is ${this.name}`;
  }

  getDate() {
    return console.log(this.#dayToday);
  }

  #privateMethod() {
    return console.log("just visible to this class");
  }
}

let person1 = new Person("João");
console.log(person1.say());
person1.getDate();
