import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
import { OfertasService } from 'src/app/services/ofertas.service';
import { of } from 'rxjs';

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
    const id = this.route.snapshot.params['id'];
    // console.log(id);

    // const idSubscribe = this.route.params.subscribe((params: any) => {
    //   console.log('paramns', params);
    // });

    this.ofertaService.getOfertaPorId(id).subscribe((oferta) => {
      this.ofertaSelecionada = oferta.shift();
    });
  }
}
