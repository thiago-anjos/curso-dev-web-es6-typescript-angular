import { Component, OnInit } from '@angular/core';
import { debounceTime, Observable, Subject } from 'rxjs';
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

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      switchMap((termo: string) => {
        return this.ofertasService.pesquisaOfertas(termo);
      })
    );

    this.ofertas.subscribe((oferta: OfertasModel[]) =>
      console.log('retorno 1 segundo depois', oferta)
    );
  }

  public pesquisa(termoDaBusca: string): void {
    //para unir o termo da pesquisa e disparar depois de um tempo, parecido com o debounce
    console.log('evento keyup acontecendo', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
