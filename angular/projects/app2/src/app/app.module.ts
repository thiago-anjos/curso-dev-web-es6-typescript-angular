import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

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
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
