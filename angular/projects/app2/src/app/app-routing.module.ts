import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiversaoComponent } from './views/diversao/diversao.component';
import { OfertasComponent } from './views/ofertas/ofertas.component';
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
    path: 'oferta',
    component: HomeComponent,
  },
  {
    path: 'oferta/:id',
    component: OfertasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
