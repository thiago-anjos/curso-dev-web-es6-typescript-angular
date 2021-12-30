"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = __importDefault(require("./vehicle"));
class MotorCycle extends vehicle_1.default {
    constructor(model) {
        super();
        this.model = model;
    }
}
exports.default = MotorCycle;
