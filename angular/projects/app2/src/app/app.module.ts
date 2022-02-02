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
import { OfertasComponent } from './views/ofertas/ofertas.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, RestaurantesComponent, DiversaoComponent, OfertasComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
