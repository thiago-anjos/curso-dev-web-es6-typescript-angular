import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasComoUsar } from 'src/app/shared/models/ofertas-como-usar';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    const params = this.route.parent?.snapshot.params['id'];
    this.ofertasService
      .getOndeFica(params)
      .subscribe((oferta: OfertasComoUsar[]) => {
        this.ondeFica = oferta[0].descricao;
      });
  }
}
