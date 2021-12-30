"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dao_1 = require("./dao");
const dao_concessionaria_1 = require("./dao-concessionaria");
const dealer_1 = __importDefault(require("./dealer"));
let concessionariaDao = new dao_concessionaria_1.ConcessionariaDao();
let concessionaria = new dealer_1.default("", []);
// console.log(concessionariaDao.atualizar(concessionaria));
// console.log(concessionariaDao.selecionar(1));
// utilizar a classe generica
let concessionariaGenerica = new dao_1.Dao();
concessionariaGenerica.inserir(concessionaria);
