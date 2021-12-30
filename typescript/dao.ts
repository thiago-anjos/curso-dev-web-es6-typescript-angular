import { DaoInterface } from "./dao-interface";

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string = "tb_concessionaria";
  inserir(object: T): boolean {
    console.log("inserir");
    return true;
  }
  atualizar(object: T): boolean {
    console.log("atualizar");
    return false;
  }
  remover(id: number): T {
    console.log("remover");
    return Object();
  }
  selecionar(id: number): T {
    console.log("selecionar");
    return Object();
  }
  selecionarTodos(): any[T] {
    console.log("selecionar todos");
    return [{}];
  }
}
