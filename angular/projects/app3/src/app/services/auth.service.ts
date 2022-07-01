import * as firebase from 'firebase';
import { User } from '../models/user.model';

export class Auth {
  public registerUser(user: User): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((resolve: any) => {
        console.log(resolve);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
