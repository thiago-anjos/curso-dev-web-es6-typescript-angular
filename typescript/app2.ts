class Car {
  private model: string = "";
  private ports: number = 0;
  private velocity: number = 0;

  constructor(model: string, ports: number) {
    this.model = model;
    this.ports = ports;
  }

  public speed() {
    this.velocity += 10;
  }

  public stop() {
    this.velocity = 0;
  }

  public currentSpeed(): number {
    return this.velocity;
  }
}

let carA = new Car("HB20", 4);
// console.log(carA);
// carA.speed();
// carA.speed();
// carA.speed();
// console.log("current speed", carA.currentSpeed());

class DealerShip {
  private address: string = "";
  private carLists: Array<Car>;

  constructor(address: string, carLists: Array<Car>) {
    this.address = address;
    this.carLists = carLists;
  }

  supplierAddress(): string {
    return this.address;
  }

  showCarLists(): Array<Car> {
    return this.carLists;
  }
}

let dealer = new DealerShip("Rua domingo", []);
// console.log(dealer);

class Person {
  private name: string = "";
  private favoriteCar: string = "";
  private car: string = "";

  constructor(name: string, favoriteCar: string, car: string) {
    this.name = name;
    this.favoriteCar = favoriteCar;
    this.car = car;
  }

  saynName(): string {
    return `Hello, my name is ${this.name}`;
  }

  sayFavoriteCar(): string {
    return this.favoriteCar;
  }

  buyCar(): string {
    return `I want do buy ${this.car}`;
  }

  myCar(): string {
    return `My car is ${this.car}`;
  }
}

//Criar carros
let carB = new Car("veloster", 4);
let carC = new Car("HB20", 4);
let carD = new Car("Santa Cruz", 4);

// lista de carros
let carLists: Array<Car> = [carA, carB, carC, carD];

let dealer2 = new DealerShip("Avenida Salgado Filho", carLists);

//console.log(dealer2.showCarLists());

// comprar o carro ----
let realPerson = new Person("Rosineide", "HB20", "none");

dealer2.showCarLists().map((car: Car) => {
  if (car["model"] === realPerson.sayFavoriteCar()) {
    console.log("comprar carro");
  }
});
