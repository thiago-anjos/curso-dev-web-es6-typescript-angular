import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
})
export class DiversaoComponent implements OnInit {
  public ofertasDiversao: OfertasModel[] = [];

  constructor(public ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertaPorCategoria('diversao')
      .subscribe((oferta) => {
        this.ofertasDiversao = oferta;
      });
  }
}
