import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { BannerComponent } from './components/banner/banner.component';
import { LoginComponent } from './components/login/login.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Auth } from './services/auth.service';
import { HomeComponent } from './components/home/home.component';
import { PublicacoesComponent } from './components/home/publicacoes/publicacoes.component';
import { AuthGuard } from './auth-guard.service';
import { IncluirPublicacaoComponent } from './components/home/incluir-publicacao/incluir-publicacao.component';
import { Bd } from './services/bd.service';
import { Progress } from './services/progress.service';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [Auth, AuthGuard, Bd, Progress],
  bootstrap: [AppComponent],
})
export class AppModule {}
