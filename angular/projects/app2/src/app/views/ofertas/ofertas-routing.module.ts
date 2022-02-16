import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/components/home/home.component';
import { OfertasComponent } from './oferta/ofertas.component';
import { ComoUsarComponent } from './components/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/onde-fica/onde-fica.component';

const routes: Routes = [
  {
    path: 'oferta/:id',
    component: OfertasComponent,
    children: [
      {
        path: '',
        component: ComoUsarComponent,
      },
      {
        path: 'como-usar',
        component: ComoUsarComponent,
      },
      {
        path: 'onde-fica',
        component: OndeFicaComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfertasRoutingModule {}
