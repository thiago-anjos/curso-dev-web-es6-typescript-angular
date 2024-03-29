import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Auth } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //criar um atributo com a instancia event emitter
  //expor esse evento emitter para fora da classe, para o pai @outpu
  @Output() public exibirPainel: EventEmitter<string> =
    new EventEmitter<string>();

  public form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  public message: string = '';

  constructor(public auth: Auth) {}

  ngOnInit(): void {
    this.form.statusChanges.subscribe((val) => {
      //console.log(this.form.valid);
    });
  }

  //event emitter
  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }

  public authenticate(): void {
    this.auth
      .auth(this.form.value.email, this.form.value.password)
      .then((res) => {
        this.message = res;
      });
  }
}
