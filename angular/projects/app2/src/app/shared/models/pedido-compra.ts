// export class Pedido {
//   constructor(
//     public endereco: string,
//     public id: any,
//     public numero: string,
//     public complemento: string,
//     public formaPagamento: string
//   ) {}
// }

export interface Pedido {
  endereco: string;
  id?: any;
  numero: string;
  complemento: string;
  formaPagamento: string;
}
