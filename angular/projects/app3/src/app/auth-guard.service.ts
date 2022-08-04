import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authentication: Auth) {}

  canActivate(): boolean {
    return this.authentication.isLogIn();
  }
}
