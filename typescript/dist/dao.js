"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
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
        return Object();
    }
    selecionar(id) {
        console.log("selecionar");
        return Object();
    }
    selecionarTodos() {
        console.log("selecionar todos");
        return [{}];
    }
}
exports.Dao = Dao;
