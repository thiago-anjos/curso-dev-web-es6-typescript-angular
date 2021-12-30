"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const car_1 = __importDefault(require("./car"));
const dealer_1 = __importDefault(require("./dealer"));
const motorcicle_1 = __importDefault(require("./motorcicle"));
let car01 = new car_1.default("Veloster", 4);
let motorCycle01 = new motorcicle_1.default("Ducati");
console.log(car01);
console.log(motorCycle01);
motorCycle01.speedAction();
console.log(motorCycle01);
let dealer = new dealer_1.default("Rua dois", [car01]);
console.log(dealer.opening());
