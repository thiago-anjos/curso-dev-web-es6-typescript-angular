import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Bd } from 'src/app/services/bd.service';
import { PublicacoesModel } from './publicacoes-model';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss'],
})
export class PublicacoesComponent implements OnInit {
  public email: string = '';
  public publicacoes: Array<PublicacoesModel> = [];

  constructor(private bd: Bd) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user?.email) return;
      this.email = user.email ? user.email : '';
      this.atualizarTimeline();
    });
  }

  atualizarTimeline(): void {
    this.bd
      .consultaPublicacoes(this.email)
      .then((res: Array<PublicacoesModel>) => {
        console.log(res);
        this.publicacoes = res;
      });
  }
}
