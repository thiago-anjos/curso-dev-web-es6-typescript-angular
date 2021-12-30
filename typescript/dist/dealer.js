"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dealer {
    constructor(address, carList) {
        this.address = address;
        this.carList = carList;
    }
    getAddress() {
        return this.address;
    }
    getCarList() {
        return this.carList;
    }
    opening() {
        return "08:00";
    }
}
exports.default = Dealer;
