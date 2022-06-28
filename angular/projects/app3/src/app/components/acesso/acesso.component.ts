import {
  style,
  trigger,
  state,
  animate,
  transition,
  keyframes,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animacao-banner', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      //void state
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-100px, 0)' }),
        animate('500ms 0s ease-in-out'),
      ]),
    ]),
    trigger('animacao-painel', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({
          opacity: 0,
          transform: 'translate(50px,0)',
        }),
        animate(
          '1500ms 0s ease-in-out',
          keyframes([
            style({ offset: 0.15, opacity: 1, transform: 'translateX(0)' }),
            style({ offset: 0.86, opacity: 1, transform: 'translateX(0)' }),
            style({ offset: 0.87, opacity: 1, transform: 'translateY(-10px)' }),
            style({ offset: 0.9, opacity: 1, transform: 'translateY(10px)' }),
            style({ offset: 1, opacity: 1, transform: 'translateX(0)' }),
          ])
        ),
      ]),
    ]),
  ],
})
export class AcessoComponent implements OnInit {
  public estadoBanner: string = 'criado';
  public estadoPainel: string = 'criado';

  public cadastro: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public exibirPainel(event: string): void {
    this.cadastro = event === 'cadastro' ? true : false;
  }
  public inicioDaAnimacao(): void {
    console.log('início da animação');
  }
  public fimDaAnimacao(): void {
    console.log('fim da animação');
  }
}
