import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { appRoutes } from "./app.router";
import HomeComponent from "./pages/home/home.component";
import { ReactiveFormsModule } from "@angular/forms";
import RegisterComponent from "./pages/register/register.component";
import { HttpModule } from "@angular/http";
import LoginComponent from "./pages/login/login.component";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import KorpaComponent from "./pages/korpa/korpa.component";
import AdminPanelComponent from "./pages/adminPanel/adminpanel.component";
import ONamaComponent from "./pages/onama/onama.component";
import ProizvodiComponent from "./pages/proizvodi/proizvodi.component";
import ReceptiComponent from "./pages/recepti/recepti.component";
import KontaktComponent from "./pages/kontakt/kontakt.component";
import ProdavniceComponent from "./pages/prodavnice/prodavnice.component";
import ProductService from "./services/proizvodi.service";
import ProdavniceService from"./services/prodavnice.service";
import {KorpaService} from "./services/korpa.service";
import {SharedService} from "./services/shared.service";
import {UserService} from "./services/user.service";
import {AdminService} from "./services/admin.service";


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    KorpaComponent,
    AdminPanelComponent,
    ONamaComponent,
    ProizvodiComponent,
    ReceptiComponent,
    KontaktComponent,
    ProdavniceComponent
  ],

  providers: [
    RegisterService,
    LoginService,
    ProductService,
    ProdavniceService,
    KorpaService,
    SharedService,
    UserService,
    AdminService,
  ],

  bootstrap:    [
      AppComponent
  ]
})

export class AppModule {


}
