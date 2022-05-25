import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasModel } from 'src/app/shared/models/ofertas-model';
import { OfertasService } from 'src/app/services/ofertas.service';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
})
export class OfertasComponent implements OnInit {
  public ofertaSelecionada: OfertasModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parametros: any) => {
      this.ofertaService.getOfertaPorId(parametros.id).subscribe((item) => {
        // console.log(item);
        // console.log(item.shift());
        this.ofertaSelecionada = item.shift();
      });
    });
    //console.log('Oferta component', this.carrinhoService.exibirItem());
  }

  adicionarItemCarrinho(): void {
    if (!this.ofertaSelecionada) return;
    this.carrinhoService.incluirItem(this.ofertaSelecionada);
  }
}
