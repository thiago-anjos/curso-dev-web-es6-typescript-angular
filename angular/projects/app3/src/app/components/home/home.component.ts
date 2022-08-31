import { Component, OnInit, ViewChild } from '@angular/core';
import { Auth } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('publicacoes') public publicacoes: any;

  constructor(private auth: Auth) {}

  ngOnInit(): void {}

  public logout(): void {
    this.auth.logout();
  }

  public atualizarTimelineEmitter(event: Event): void {
    // instanciamos o filho usando o viewChild e ai podemos utilizar o metodo que está no filho, atraves do pai
    this.publicacoes.atualizarTimeline();
  }
}
