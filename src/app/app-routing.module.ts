import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SyntaxeComponent} from "./pages/syntaxe/syntaxe.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {CommunicationComponent} from "./pages/communication/communication.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {FormulairesComponent} from "./pages/formulaires/formulaires.component";
import {FormulairesReactifsComponent} from "./pages/formulaires-reactifs/formulaires-reactifs.component";

const routes: Routes = [
  {path: 'syntaxe', component: SyntaxeComponent},
  {path: 'communication', component: CommunicationComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'form', component: FormulairesComponent},
  {path: 'reactive-form', component: FormulairesReactifsComponent},

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
