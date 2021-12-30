import { Dao } from "./dao";
import { ConcessionariaDao } from "./dao-concessionaria";
import Dealer from "./dealer";

let concessionariaDao = new ConcessionariaDao();
let concessionaria = new Dealer("", []);

// console.log(concessionariaDao.atualizar(concessionaria));
// console.log(concessionariaDao.selecionar(1));

// utilizar a classe generica
let concessionariaGenerica: Dao<typeof concessionaria> = new Dao<
  typeof concessionaria
>();

concessionariaGenerica.inserir(concessionaria);
