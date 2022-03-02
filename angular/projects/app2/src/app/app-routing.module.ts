import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { DiversaoComponent } from './views/diversao/diversao.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'restaurantes',
    component: RestaurantesComponent,
  },
  {
    path: 'diversao',
    component: DiversaoComponent,
  },
  {
    path: 'ofertas',
    component: HomeComponent,
    loadChildren: () =>
      import('./views/ofertas/ofertas.module').then((m) => m.OfertasModule),
  },
  {
    path: 'ordem-compra',
    component: OrdemCompraComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
