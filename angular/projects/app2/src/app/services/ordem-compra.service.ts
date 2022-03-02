import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../shared/models/pedido-compra';

@Injectable({
  providedIn: 'root',
})
export class OrdemCompraService {
  constructor(private httpClient: HttpClient) {}

  efetivarCompra(pedido: Pedido): void {
    console.log(pedido);
  }
}
