import { itemCarrinho } from './item-carrinho';

export class Pedido {
  constructor(
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaPagamento: string,
    public items: Array<itemCarrinho>,
    public id?: any
  ) {}
}

// export interface Pedido {
//   endereco: string;
//   id?: any;
//   numero: string;
//   complemento: string;
//   formaPagamento: string;
//   type: 'Pedido';
// }
