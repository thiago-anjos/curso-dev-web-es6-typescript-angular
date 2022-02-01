import { Component, OnChanges, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
})
export class RestaurantesComponent implements OnInit {
  public ofertasRestaurantes: OfertasModel[] = [];

  constructor(private ofertasServices: OfertasService) {}

  ngOnInit(): void {
    this.ofertasServices
      .getOfertaPorCategoria('restaurante')
      .subscribe((item) => {
        this.ofertasRestaurantes = item;
      });
  }
}
