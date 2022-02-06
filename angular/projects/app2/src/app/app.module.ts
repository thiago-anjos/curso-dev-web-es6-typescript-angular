import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RestaurantesComponent } from './views/restaurantes/restaurantes.component';
import { DiversaoComponent } from './views/diversao/diversao.component';
import { ComoUsarComponent } from './views/ofertas/components/como-usar/como-usar.component';
import { OndeFicaComponent } from './views/ofertas/components/onde-fica/onde-fica.component';
import { OfertasModule } from './views/ofertas/ofertas.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantesComponent,
    DiversaoComponent,
    ComoUsarComponent,
    OndeFicaComponent,
  ],
  imports: [BrowserModule, HttpClientModule, OfertasModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
