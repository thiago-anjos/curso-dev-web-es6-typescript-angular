import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { itemCarrinho } from 'src/app/shared/models/item-carrinho';
import { Pedido } from 'src/app/shared/models/pedido-compra';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number = -1;
  public itenscarrinho: itemCarrinho[] = [];
  public totalPedido: number = 0;

  public form: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [Validators.required]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.itenscarrinho = this.carrinhoService.exibirItem();
    this.CalculoPedido();
  }

  public CalculoPedido(): void {
    if (this.itenscarrinho.length === 0) return;
    let total = 0;

    this.itenscarrinho.map((item: itemCarrinho) => {
      return (total += total + item.valor * item.quantidade);
    });

    if (total > 0) {
      this.totalPedido = total;
    }
  }

  public confirmarCompra(): void {
    if (this.form.valid) {
      let pedido: Pedido = new Pedido(
        this.form.value.endereco,
        this.form.value.numero,
        this.form.value.complemento,
        this.form.value.formaPagamento
      );
      this.ordemCompraService
        .efetivarCompra(pedido)
        .subscribe((pedido: Pedido) => {
          this.idPedidoCompra = pedido.id;
          //console.log(this.idPedidoCompra);
        });
    }
  }

  public aumentarQuantidade(item: itemCarrinho): void {
    this.carrinhoService.aumentarQuantidade(item);
    this.CalculoPedido();
  }

  public diminuirQuantidade(item: itemCarrinho): void {
    this.carrinhoService.diminuirQuantidade(item);
    this.CalculoPedido();
  }
}
