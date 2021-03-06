import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfertasModel } from '../shared/models/ofertas-model';
import { Observable } from 'rxjs';
import { baseUrl } from '../shared/app.api';
import { OfertasComoUsar } from '../shared/models/ofertas-como-usar';
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfertasService {
  public ofertas: Array<OfertasModel> = [];

  constructor(public http: HttpClient) {}

  getOfertas(): Observable<Array<OfertasModel>> {
    //efetuar uma requisição http e retornar uma promessa contendo um array de ofertas
    return this.http.get<OfertasModel[]>(`${baseUrl}/ofertas`);
  }

  getOfertaPorCategoria(categoria: string): Observable<Array<OfertasModel>> {
    return this.http.get<OfertasModel[]>(
      `${baseUrl}/ofertas?categoria=${categoria}`
    );
  }

  getOfertaPorId(id: number): Observable<OfertasModel[]> {
    return this.http.get<OfertasModel[]>(`${baseUrl}/ofertas?id=${id}`);
  }

  getComoUsarOfertaPorId(id: number): Observable<OfertasComoUsar[]> {
    return this.http.get<OfertasComoUsar[]>(`${baseUrl}/como-usar?id=${id}`);
  }

  getOndeFica(id: number): Observable<OfertasComoUsar[]> {
    return this.http.get<OfertasComoUsar[]>(`${baseUrl}/onde-fica?id=${id}`);
  }

  pesquisaOfertas(termo: string): Observable<OfertasModel[]> {
    return this.http
      .get<OfertasModel[]>(`${baseUrl}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(retry(2));
  }
}
