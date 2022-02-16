import { Component, OnDestroy, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/services/ofertas.service';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private ofertaService: OfertasService) {}

  public ofertas: OfertasModel[] = [];

  //unsubscribe
  private tempoObservableSub: Subscription = new Subscription();

  ngOnInit(): void {
    // this.ofertas = this.ofertaService.getOfertas();
    //consumindo a promessa
    this.ofertaService.getOfertas().subscribe((response) => {
      const destaqueFalse = response.filter((item) => item.destaque === false);
      this.ofertas = response;
    });

    let tempo = interval(1000);
    let time = 4;
    this.tempoObservableSub = tempo.subscribe((intervalo: number) => {
      time = time + intervalo;
      console.log('interval', intervalo);
    });
  }

  ngOnDestroy(): void {
    this.tempoObservableSub.unsubscribe();
  }
}
