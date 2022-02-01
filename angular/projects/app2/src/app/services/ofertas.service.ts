import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertasModel } from '../shared/models/ofertas-model';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  public ofertas: Array<OfertasModel> = [];

  constructor(public Http: HttpClient) {}

  getOfertas(): Observable<Array<OfertasModel>> {
    //efetuar uma requisição http e retornar uma promessa contendo um array de ofertas
    return this.Http.get<OfertasModel[]>('http://localhost:3000/ofertas');
  }

  getOfertaPorCategoria(categoria: string): Observable<Array<OfertasModel>> {
    return this.Http.get<OfertasModel[]>(
      `http://localhost:3000/ofertas?categoria=${categoria}`
    );
  }
}
