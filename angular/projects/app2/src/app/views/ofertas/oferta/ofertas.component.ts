import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
import { OfertasService } from 'src/app/services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  public ofertaSelecionada: OfertasModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros: any) => {
      this.ofertaService.getOfertaPorId(parametros.id).subscribe((item) => {
        console.log(item);
        console.log(item.shift());
        this.ofertaSelecionada = item.shift();
      });
    });
  }
}
