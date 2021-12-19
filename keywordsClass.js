class Person {
  #name = "";
  #age = 0;
  constructor(name = "thiago", age = 36) {
    this.#name = name;
    this.#age = age;
  }
  say() {
    console.log(`Hello, my name is ${this.#name} and my age is ${this.#age} `);
  }
  static shouldNotBeVisibleOnInstance() {
    console.log("se fudeuu");
  }
}

let person = new Person();
person.say();

// herança
class Student extends Person {
  constructor() {
    super("Luiz", 22);
    this.notas = {
      math: 7,
      portuguese: 8,
      work: 5,
    };
  }

  mediaFinal() {
    let result =
      (this.notas.math + this.notas.portuguese + this.notas.work) / 3;
    return console.log(result);
  }
}

let student = new Student();
student.mediaFinal();
student.say();
