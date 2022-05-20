import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SyntaxeComponent} from "./pages/syntaxe/syntaxe.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {FormulairesReactifsComponent} from "./pages/formulaires-reactifs/formulaires-reactifs.component";
import {ObservablesComponent} from "./pages/observables/observables.component";
import {LifecycleComponent} from "./pages/lifecycle/lifecycle.component";
import {HttpComponent} from "./pages/http/http.component";
import {ObservableBisComponent} from "./pages/observable-bis/observable-bis.component";
import {PostDetailComponent} from "./pages/post-detail/post-detail.component";
import {LoginComponent} from "./pages/login/login.component";
import {SecretComponent} from "./pages/secret/secret.component";
import {UserGuard} from "./utils/guards/user.guard";
import {CancelGuard} from "./utils/guards/cancel.guard";

const routes: Routes = [
  {path: 'syntaxe', component: SyntaxeComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'form', component: FormulairesComponent},
  {path: 'reactive-form', component: FormulairesReactifsComponent},
  {path: 'observables', component: ObservablesComponent},
  {path: 'lifecycle', component: LifecycleComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observables-bis', component: ObservableBisComponent},
  {path: 'details/:id', component: PostDetailComponent},
  {path: 'login', component: LoginComponent},
  {
    path: 'secret',
    component: SecretComponent,
    canActivate: [UserGuard],
    canDeactivate: [CancelGuard]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },


  // Cas particuliers
  {path: '', pathMatch: 'full', redirectTo: '/syntaxe'},
  {path: 'accueil', redirectTo: '/syntaxe'},
  {path: 'acceuil', redirectTo: '/accueil'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
