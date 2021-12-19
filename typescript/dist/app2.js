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
console.log(carA);
carA.speed();
carA.speed();
carA.speed();
console.log("current speed", carA.currentSpeed());
class DealerShip {
    constructor(address) {
        this.address = "";
        this.carLists = [""];
        this.address = address;
    }
    supplierAddress() {
        return this.address;
    }
    showCarLists() {
        return this.carLists;
    }
}
let dealer = new DealerShip("Rua domingo");
console.log(dealer);
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
        return `My favorite car is ${this.favoriteCar}`;
    }
    buyCar() {
        return `I want do buy ${this.car}`;
    }
    myCar() {
        return `My car is ${this.car}`;
    }
}
//Criar carross
