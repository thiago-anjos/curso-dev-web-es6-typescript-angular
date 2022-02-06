import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
})
export class OndeFicaComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //recuperar parametro da rota parament
    const params = this.route.parent?.snapshot.params['id'];
    console.log('id da rota pai onde fica', params);
  }
}
