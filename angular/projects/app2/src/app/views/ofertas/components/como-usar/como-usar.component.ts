import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
})
export class ComoUsarComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //recuperar parametro da rota parament
    const params = this.route.parent?.snapshot.params['id'];
    console.log('id da rota pai como usar', params);
  }
}
