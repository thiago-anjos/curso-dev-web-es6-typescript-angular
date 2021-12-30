"use strict";
class Car {
    constructor(model, ports) {
        this.model = "";
        this.ports = 0;
        this.velocity = 0;
        this.model = model;
        this.ports = ports;
    }
    speed() {
        this.velocity += 10;
    }
    stop() {
        this.velocity = 0;
    }
    currentSpeed() {
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
    constructor(address, carLists) {
        this.address = "";
        this.address = address;
        this.carLists = carLists;
    }
    supplierAddress() {
        return this.address;
    }
    showCarLists() {
        return this.carLists;
    }
}
let dealer = new DealerShip("Rua domingo", []);
// console.log(dealer);
class Person {
    constructor(name, favoriteCar, car) {
        this.name = "";
        this.favoriteCar = "";
        this.car = "";
        this.name = name;
        this.favoriteCar = favoriteCar;
        this.car = car;
    }
    saynName() {
        return `Hello, my name is ${this.name}`;
    }
    sayFavoriteCar() {
        return this.favoriteCar;
    }
    buyCar() {
        return `I want do buy ${this.car}`;
    }
    myCar() {
        return `My car is ${this.car}`;
    }
}
//Criar carros
let carB = new Car("veloster", 4);
let carC = new Car("HB20", 4);
let carD = new Car("Santa Cruz", 4);
// lista de carros
let carLists = [carA, carB, carC, carD];
let dealer2 = new DealerShip("Avenida Salgado Filho", carLists);
//console.log(dealer2.showCarLists());
// comprar o carro ----
let realPerson = new Person("Rosineide", "HB20", "none");
dealer2.showCarLists().map((car) => {
    if (car["model"] === realPerson.sayFavoriteCar()) {
        console.log("comprar carro");
    }
});
