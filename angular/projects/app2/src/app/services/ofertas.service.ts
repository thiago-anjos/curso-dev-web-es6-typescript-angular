import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertasModel } from '../shared/models/ofertas-model';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  public ofertas: Array<OfertasModel> = [];

  private baseUrl = 'http://localhost:3000/ofertas';

  constructor(public Http: HttpClient) {}

  getOfertas(): Observable<Array<OfertasModel>> {
    //efetuar uma requisição http e retornar uma promessa contendo um array de ofertas
    return this.Http.get<OfertasModel[]>(this.baseUrl);
  }

  getOfertaPorCategoria(categoria: string): Observable<Array<OfertasModel>> {
    return this.Http.get<OfertasModel[]>(
      `${this.baseUrl}?categoria=${categoria}`
    );
  }

  getOfertaPorId(id: number): Observable<OfertasModel[]> {
    return this.Http.get<OfertasModel[]>(`${this.baseUrl}?id=${id}`);
  }
}
