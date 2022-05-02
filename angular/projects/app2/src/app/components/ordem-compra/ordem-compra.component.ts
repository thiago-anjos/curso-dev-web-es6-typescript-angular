import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { Pedido } from 'src/app/shared/models/pedido-compra';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
})
export class OrdemCompraComponent implements OnInit {
  constructor(public ordemCompraService: OrdemCompraService) {}

  @ViewChild('formulario') public formulario!: NgForm;

  ngOnInit(): void {}

  idPedidoCompra: number = -1;

  enviarDados(): void {
    let pedido: Pedido = {
      complemento: this.formulario.value.complemento,
      endereco: this.formulario.value.endereco,
      formaPagamento: this.formulario.value.formaPagamento,
      numero: this.formulario.value.numero,
    };

    this.ordemCompraService.efetivarCompra(pedido).subscribe((item: Pedido) => {
      this.idPedidoCompra = item.id;
    });
  }
}
