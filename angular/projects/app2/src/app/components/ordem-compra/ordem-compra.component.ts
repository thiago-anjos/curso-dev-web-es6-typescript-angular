import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';
import { Pedido } from 'src/app/shared/models/pedido-compra';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public idPedidoCompra: number = -1;

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

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {}

  public confirmarCompra(): void {
    if (this.form.valid) {
      console.log('olá');
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
          console.log(this.idPedidoCompra);
        });
    }
  }
}
