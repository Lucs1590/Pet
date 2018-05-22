import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import { PasseioComponent } from './passeio/passeio.component';
import { HigieneVermesComponent } from './higiene-vermes/higiene-vermes.component';

@NgModule({
  declarations: [
    AppComponent,
    AlimentacaoComponent,
    PasseioComponent,
    HigieneVermesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
