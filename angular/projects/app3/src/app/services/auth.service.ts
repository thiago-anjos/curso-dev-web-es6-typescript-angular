import * as firebase from 'firebase';
import { User } from '../models/user.model';

export class Auth {
  public registerUser(user: Partial<Pick<User, 'password' | 'email'>>): void {
    if (!user.password || !user.email) return;
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resolve: any) => {
        //remover atributo de um objeto
        delete user.password;
        //btoa função nativa do javascript que converte uma string em base 64
        //atob função nativa do javascript que descriptograda um base64
        if (!user.email) return;
        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(user.email)}`)
          .set(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  public auth(email: string, password: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resolve) => {
        console.log(resolve);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
