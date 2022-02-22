import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasComoUsar } from 'src/app/shared/models/ofertas-como-usar';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) {}

  ngOnInit(): void {
    const params = this.route.parent?.params.subscribe((item: any) => {
      this.ofertasService
        .getComoUsarOfertaPorId(item.id)
        .subscribe((oferta: OfertasComoUsar[]) => {
          this.comoUsar = oferta[0].descricao;
        });
    });
  }
}
