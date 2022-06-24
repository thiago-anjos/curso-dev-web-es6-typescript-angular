import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Image } from './img.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state('hidden', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('hidden <=> visible', animate('2s ease-in')),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  public state: string = 'visible';

  public images: Array<Image> = [
    {
      state: 'visible',
      url: '/assets/banner-acesso/img_1.png',
    },
    {
      state: 'hidden',
      url: '/assets/banner-acesso/img_2.png',
    },
    {
      state: 'hidden',
      url: '/assets/banner-acesso/img_3.png',
    },
    {
      state: 'hidden',
      url: '/assets/banner-acesso/img_4.png',
    },
    {
      state: 'hidden',
      url: '/assets/banner-acesso/img_5.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.logicaRotacao();
  }

  public logicaRotacao(): void {
    //auxilia na exibição da imagem seguinte
    let idx: number = 0;

    //ocultar imagem
    for (let i: number = 0; i <= this.images.length - 1; i++) {
      if (this.images[i].state === 'visible') {
        this.images[i].state = 'hidden';
        //próximo indice i+1
        idx = i === 4 ? 0 : i + 1;
        //assim que ele encontrar um estado === visible, o for pára a iteração por causa do break
        break;
      }
    }

    //exibir próxima imagem
    this.images[idx].state = 'visible';

    setTimeout(() => {
      this.logicaRotacao();
    }, 3000);
  }
}
