export interface OfertasModel {
  anunciante: string;
  categoria: string;
  descricao_oferta: string;
  destaque: boolean;
  id: number;
  imagens: Array<{ url: string }>;
  titulo: string;
  valor: number;
}
