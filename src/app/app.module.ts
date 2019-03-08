import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import { PasseioComponent } from './passeio/passeio.component';
import { HigieneVermesComponent } from './higiene-vermes/higiene-vermes.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { CadastroPetComponent } from './cadastro-pet/cadastro-pet.component';
import { CadastroDonoComponent } from './cadastro-dono/cadastro-dono.component';
import { PerfilDonoComponent } from './perfil-dono/perfil-dono.component';
import { LoginComponent } from './login/login.component';
import { RelatorioAlimentacaoComponent } from './relatorio-alimentacao/relatorio-alimentacao.component';
import { AuthGuard } from './auth.guard.service';
import { AnimaisComponent } from './animais/animais.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentacaoComponent,
    PasseioComponent,
    HigieneVermesComponent,
    HomeComponent,
    CadastroPetComponent,
    CadastroDonoComponent,
    PerfilDonoComponent,
    LoginComponent,
    RelatorioAlimentacaoComponent,
    AnimaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
