import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Auth } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  //criar instancia do event emmiter e já expor ele
  @Output() public exibirPainel: EventEmitter<string> =
    new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    email: new FormControl(null),
    complete_name: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private auth: Auth) {}

  ngOnInit(): void {}

  public exibirPainelLogin(): void {
    this.exibirPainel.emit('login');
  }

  public registerUser(): void {
    //console.log(this.form);
    let user: User = new User(
      this.form.value.email,
      this.form.value.complete_name,
      this.form.value.username,
      this.form.value.password
    );
    //console.log(user);
    this.auth.registerUser(user).then(() => this.exibirPainelLogin());
  }
}
