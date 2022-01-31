import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  constructor(private ofertaService: OfertasService) {}

  public ofertas: OfertasModel[] = [];

  ngOnInit(): void {
    // this.ofertas = this.ofertaService.getOfertas();
    //consumindo a promessa
    this.ofertaService.getOfertas().subscribe((response) => {
      const destaqueFalse = response.filter((item) => item.destaque === false);
      this.ofertas = destaqueFalse;
    });
  }
}
