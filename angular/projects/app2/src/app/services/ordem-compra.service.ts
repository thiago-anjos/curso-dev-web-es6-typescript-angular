import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app.api';
import { Pedido } from '../shared/models/pedido-compra';

@Injectable({
  providedIn: 'root',
})
export class OrdemCompraService {
  constructor(private httpClient: HttpClient) {}

  efetivarCompra(pedido: Pedido): Observable<any> {
    return this.httpClient.post(`${baseUrl}/pedidos`, JSON.stringify(pedido), {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    });
  }
}
