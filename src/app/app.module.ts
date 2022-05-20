import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { SyntaxeComponent } from './pages/syntaxe/syntaxe.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommunicationComponent } from './pages/communication/communication.component';
import { CardComponent } from './components/card/card.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RainbowPipe } from './utils/pipes/rainbow.pipe';
import { FormulairesComponent } from './pages/formulaires/formulaires.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormulairesReactifsComponent } from './pages/formulaires-reactifs/formulaires-reactifs.component';
import { ObservablesComponent } from './pages/observables/observables.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { HttpComponent } from './pages/http/http.component';
import {HttpClientModule} from "@angular/common/http";
import { ObservableBisComponent } from './pages/observable-bis/observable-bis.component';
import { PostDetailComponent } from './pages/post-detail/post-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { SecretComponent } from './pages/secret/secret.component';

@NgModule({
  declarations: [
    AppComponent,
    EnfantComponent,
    SyntaxeComponent,
    NavigationComponent,
    PageNotFoundComponent,
    CommunicationComponent,
    CardComponent,
    PipesComponent,
    RainbowPipe,
    FormulairesComponent,
    FormulairesReactifsComponent,
    ObservablesComponent,
    LifecycleComponent,
    HttpComponent,
    ObservableBisComponent,
    PostDetailComponent,
    LoginComponent,
    SecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
