import { EmConstrucaoComponent } from './construcao/emConstrucao.component';
import { PrincipalComponent } from './principal/principal.component';
import { ContatoComponentComponent } from './contato/contato-component.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'contato', component: ContatoComponentComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
