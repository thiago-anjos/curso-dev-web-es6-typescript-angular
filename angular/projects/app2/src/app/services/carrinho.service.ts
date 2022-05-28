import { Injectable } from '@angular/core';
import { itemCarrinho } from '../shared/models/item-carrinho';
import { OfertasModel } from '../shared/models/ofertas-model';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor() {}

  public itens: itemCarrinho[] = [];

  public exibirItem(): itemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: OfertasModel) {
    /*
    DETALHE: O model ofertasModule contém muitas info's que não serão utilizadas no objeto que precisa ir para o carrinho
    que é o item carrinho, para resolver esse problema
    cria-se uma nova instancia do itemCarrinho e popula essa instancia com algumas info's que vem do item oferta
    */

    let itemCarrinhoCustomizado: itemCarrinho = new itemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );

    //verificar se o item que está sendo adicionado, se ele não já existe
    let itemCarrinhoEncontrado = this.itens.find(
      (item: itemCarrinho) => item.id === itemCarrinhoCustomizado.id
    );

    if (itemCarrinhoEncontrado) {
      itemCarrinhoEncontrado.quantidade += 1;
    } else {
      this.itens.push(itemCarrinhoCustomizado);
    }

    this.exibirItem();
  }

  public aumentarQuantidade(item: itemCarrinho) {
    this.itens.find((itemStore: itemCarrinho) => {
      if (itemStore.id === item.id) {
        itemStore.quantidade += 1;
      }
    });
  }

  public diminuirQuantidade(item: itemCarrinho) {
    this.itens.find((itemStore: itemCarrinho) => {
      if (itemStore.id === item.id) {
        if (itemStore.quantidade > 0) {
          itemStore.quantidade -= 1;
        }
        if (itemStore.quantidade === 0) {
          this.itens = this.itens.filter(
            (itemS: itemCarrinho) => itemS.id !== item.id
          );
        }
      }
    });
  }
}
