import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertasComponent } from './oferta/ofertas.component';
import { OfertasRoutingModule } from './ofertas-routing.module';

@NgModule({
  declarations: [OfertasComponent],
  imports: [CommonModule, OfertasRoutingModule],
})
export class OfertasModule {}
