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
console.log(carA);
carA.speed();
carA.speed();
carA.speed();
console.log("current speed", carA.currentSpeed());

class DealerShip {
  private address: string = "";
  private carLists: Array<string> = [""];

  constructor(address: string) {
    this.address = address;
  }

  supplierAddress(): string {
    return this.address;
  }

  showCarLists(): Array<string> {
    return this.carLists;
  }
}

let dealer = new DealerShip("Rua domingo");
console.log(dealer);

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
    return `My favorite car is ${this.favoriteCar}`;
  }

  buyCar(): string {
    return `I want do buy ${this.car}`;
  }

  myCar(): string {
    return `My car is ${this.car}`;
  }
}

//Criar carross
