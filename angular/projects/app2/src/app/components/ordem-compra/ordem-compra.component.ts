import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrdemCompraService } from 'src/app/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.scss'],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    endereco: new FormControl(null),
    numero: new FormControl(null),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null),
  });

  constructor(private ordemCompraService: OrdemCompraService) {}

  ngOnInit() {}

  public confirmarCompra(): void {}
}
