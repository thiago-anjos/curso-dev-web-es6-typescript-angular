import { Component, OnInit } from '@angular/core';
import {
  debounceTime,
  Observable,
  Subject,
  of,
  distinctUntilChanged,
  catchError,
} from 'rxjs';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public ofertas!: Observable<OfertasModel[]>;
  private subjectPesquisa: Subject<string> = new Subject();
  public listaOfertas!: OfertasModel[];
  public dateTest: any = new Date();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        if (termo.trim() === '') return of<OfertasModel[]>([]);
        return this.ofertasService.pesquisaOfertas(termo);
      })
    );
    catchError((err: any) => {
      console.log('ERRO', err);
      return of<OfertasModel[]>([]);
    });
    this.ofertas.subscribe((oferta: OfertasModel[]) => {
      console.log(oferta);
      this.listaOfertas = oferta;
    });
  }

  public pesquisa(termoDaBusca: string): void {
    //para unir o termo da pesquisa e disparar depois de um tempo, parecido com o debounce
    console.log('evento keyup acontecendo', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
