export class Pedido {
  constructor(
    public endereco: string,
    public numero: string,
    public complemento: string,
    public formaPagamento: string,
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
