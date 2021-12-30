"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor() {
        this.model = "";
        this.speed = 0;
    }
    speedAction() {
        this.speed = this.speed + 10;
    }
    stop() {
        this.speed = 0;
    }
    currentSpeed() {
        return this.speed;
    }
}
exports.default = Vehicle;
