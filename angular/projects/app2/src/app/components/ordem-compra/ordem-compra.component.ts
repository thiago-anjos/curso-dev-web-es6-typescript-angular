import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { Pedido } from 'src/app/shared/models/pedido-compra';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent implements OnInit {
  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  //controles de validação dos campos

  public enderecoValido: boolean = false;
  public numeroValido: boolean = false;
  public complementoValido: boolean = false;
  public formaPagamentoValido: boolean = false;

  // estados primitivos dos campos (pristine)

  public enderecoPrimitivo: boolean = true;
  public numeroPrimitivo: boolean = true;
  public complementoPrimitivo: boolean = true;
  public formaPagamentoPrimitivo: boolean = true;

  // controlar botão confirmar compra
  public formEstado: boolean = true;

  // instancia de um novo pedido
  public pedido: Pedido = new Pedido('', '', '', '');

  constructor(public ordemCompraService: OrdemCompraService) {}

  ngOnInit(): void {}

  atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoPrimitivo = false;
    this.endereco.length > 3
      ? (this.enderecoValido = true)
      : (this.enderecoValido = false);
    this.habilitaForm();
  }
  atualizaNumero(numero: string): void {
    this.numero = numero;
    this.numeroPrimitivo = false;
    this.numero.length > 0
      ? (this.numeroValido = true)
      : (this.numeroValido = false);
    this.habilitaForm();
  }
  atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoPrimitivo = false;
    this.complemento.length > 0
      ? (this.complementoValido = true)
      : (this.complementoValido = false);
    this.habilitaForm();
  }
  atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoPrimitivo = false;
    this.formaPagamento !== ' '
      ? (this.formaPagamentoValido = true)
      : (this.formaPagamentoValido = false);
    this.habilitaForm();
  }

  habilitaForm(): void {
    if (
      this.enderecoValido === true &&
      this.numeroValido === true &&
      this.formaPagamentoValido === true
    ) {
      this.formEstado = false;
    } else {
      this.formEstado = true;
    }
  }

  confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;
    this.ordemCompraService.efetivarCompra(this.pedido);
  }
}
