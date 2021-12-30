import { DaoInterface } from "./dao-interface";
import Dealer from "./dealer";

export class ConcessionariaDao implements DaoInterface {
  nomeTabela: string = "tb_concessionaria";
  inserir(object: Dealer): boolean {
    console.log("inserir");
    return true;
  }
  atualizar(object: Dealer): boolean {
    console.log("atualizar");
    return false;
  }
  remover(id: number): Dealer {
    console.log("remover");
    return new Dealer("Rua dois", []);
  }
  selecionar(id: number): Dealer {
    console.log("selecionar");
    return new Dealer("", []);
  }
  selecionarTodos(): any[] {
    console.log("selecionar todos");
    return [new Dealer("", [])];
  }
}
