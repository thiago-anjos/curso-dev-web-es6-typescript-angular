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

  rotataImages(): void {
    let counter: number = 0;
    setInterval(() => {
      if (counter < this.images.length) {
        this.images[counter].state = 'visible';
        counter++;
      } else {
        this.images.map((item) => (item.state = 'hidden'));
        counter = 0;
        this.images[counter].state = 'visible';
      }
    }, 3000);
  }

  ngOnInit(): void {
    this.rotataImages();
  }
}
