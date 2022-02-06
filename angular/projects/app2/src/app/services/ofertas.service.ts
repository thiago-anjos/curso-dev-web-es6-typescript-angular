import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertasModel } from '../shared/models/ofertas-model';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app.api';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  public ofertas: Array<OfertasModel> = [];

  constructor(public Http: HttpClient) {}

  getOfertas(): Observable<Array<OfertasModel>> {
    //efetuar uma requisição http e retornar uma promessa contendo um array de ofertas
    return this.Http.get<OfertasModel[]>(baseUrl);
  }

  getOfertaPorCategoria(categoria: string): Observable<Array<OfertasModel>> {
    return this.Http.get<OfertasModel[]>(`${baseUrl}?categoria=${categoria}`);
  }

  getOfertaPorId(id: number): Observable<OfertasModel[]> {
    return this.Http.get<OfertasModel[]>(`${baseUrl}?id=${id}`);
  }
}
