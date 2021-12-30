"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const dealer_1 = __importDefault(require("./dealer"));
class ConcessionariaDao {
    constructor() {
        this.nomeTabela = "tb_concessionaria";
    }
    inserir(object) {
        console.log("inserir");
        return true;
    }
    atualizar(object) {
        console.log("atualizar");
        return false;
    }
    remover(id) {
        console.log("remover");
        return new dealer_1.default("Rua dois", []);
    }
    selecionar(id) {
        console.log("selecionar");
        return new dealer_1.default("", []);
    }
    selecionarTodos() {
        console.log("selecionar todos");
        return [new dealer_1.default("", [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
