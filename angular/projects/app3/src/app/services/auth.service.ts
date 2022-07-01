import { User } from '../models/user.model';

export class Auth {
  public registerUser(user: User): void {
    console.log('Chegamos até o serviço', user);
  }
}
