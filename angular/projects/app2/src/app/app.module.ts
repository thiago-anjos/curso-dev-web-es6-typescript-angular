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
import { DescricaResumidaPipe } from './pipes/descrica-resumida.pipe';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './components/ordem-compra-sucesso/ordem-compra-sucesso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarrinhoService } from './services/carrinho.service';

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
    DescricaResumidaPipe,
    DescricaResumidaPipe,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OfertasModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CarrinhoService, { provide: LOCALE_ID, useValue: 'pt' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
