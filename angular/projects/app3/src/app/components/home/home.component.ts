import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: Auth) {}

  ngOnInit(): void {}

  public logout(): void {
    this.auth.logout();
  }
}
