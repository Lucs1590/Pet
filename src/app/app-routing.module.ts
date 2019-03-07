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
import { AuthGuard } from './auth.guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'alimentacao', component: AlimentacaoComponent, canActivate: [AuthGuard] },
  { path: 'higiene-verme', component: HigieneVermesComponent, canActivate: [AuthGuard] },
  { path: 'passeio', component: PasseioComponent, canActivate: [AuthGuard] },
  { path: 'new-pet', component: CadastroPetComponent, canActivate: [AuthGuard] },
  { path: 'new-dono', component: CadastroDonoComponent, canActivate: [AuthGuard] },
  { path: 'perfil', component: PerfilDonoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'relatorio-alimentacao', component: RelatorioAlimentacaoComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
