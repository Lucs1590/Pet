import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlimentacaoComponent } from './alimentacao/alimentacao.component';
import { HigieneVermesComponent } from './higiene-vermes/higiene-vermes.component';
import { HomeComponent } from './home/home.component';
import { PasseioComponent } from './passeio/passeio.component';
import { CadastroPetComponent } from './cadastro-pet/cadastro-pet.component';
import { CadastroDonoComponent } from './cadastro-dono/cadastro-dono.component';
import { PerfilDonoComponent } from './perfil-dono/perfil-dono.component';
import { LoginComponent } from './login/login.component';
import { RelatorioAlimentacaoComponent } from './relatorio-alimentacao/relatorio-alimentacao.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'alimentacao', component: AlimentacaoComponent },
  { path: 'higiene-verme', component: HigieneVermesComponent },
  { path: 'passeio', component: PasseioComponent },
  { path: 'new-pet', component: CadastroPetComponent },
  { path: 'new-dono', component: CadastroDonoComponent},
  { path: 'perfil', component: PerfilDonoComponent},
  { path: 'login', component: LoginComponent},
  { path: 'relatorio-alimentacao', component: RelatorioAlimentacaoComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
