import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class Auth {
  public token_id: string = '';

  constructor(private route: Router) {}

  public async registerUser(
    user: Partial<Pick<User, 'password' | 'email'>>
  ): Promise<string> {
    if (!user.password && !user.email) Promise.reject('error');
    let message = '';
    await firebase
      .auth()
      .createUserWithEmailAndPassword(
        user.email as string,
        user.password as string
      )
      .then((resolve: any) => {
        //remover atributo de um objeto
        delete user.password;
        //btoa função nativa do javascript que converte uma string em base 64
        //atob função nativa do javascript que descriptograda um base64
        if (!user.email) return;
        message = resolve;
        console.log(resolve);
        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(user.email)}`)
          .set(user);
      })
      .catch((err) => {
        message = `error, ${err.message}`;
      });
    return message;
  }

  public async auth(email: string, password: string): Promise<string> {
    let message = '';
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .auth()
          .currentUser?.getIdToken()
          .then((resolve) => {
            message = resolve;
            this.token_id = resolve;
            localStorage.setItem('idToken', this.token_id);
            this.route.navigate(['/home']);
          });
      })
      .catch((error) => {
        message = error.message;
      });
    return message;
  }

  public isLogIn(): boolean {
    if (this.token_id === '' && localStorage.getItem('idToken') !== null) {
      this.token_id = localStorage.getItem('idToken') as string;
    }

    if (this.token_id === '') {
      this.route.navigate(['/']);
    }

    return this.token_id === '' ? false : true;
  }

  public logout(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem('idToken');
        this.token_id = '';
        this.route.navigate(['/']);
      });
  }
}
