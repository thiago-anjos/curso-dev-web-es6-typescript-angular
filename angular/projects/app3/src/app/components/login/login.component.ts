import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  //event emitter
  public exibirPainelCadastro(): void {
    this.exibirPainel.emit('cadastro');
  }
}
