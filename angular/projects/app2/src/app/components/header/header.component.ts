import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public ofertas: Observable<OfertasModel[]> | undefined;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {}

  public pesquisa(termoDaBusca: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaBusca);
    this.ofertas.subscribe((item) => console.log(item));
  }
}
