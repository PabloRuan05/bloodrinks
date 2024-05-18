import { Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SecaoComponent } from './secao/secao.component';
import { FooterComponent } from './footer/footer.component';
import { ListcervejasComponent } from './listcervejas/listcervejas.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import path from 'path';
import { AppComponent } from './app.component';
import { Spaten350Component } from './spaten350/spaten350.component';
import { Spaten600Component } from './spaten600/spaten600.component';
import { Spaten355Component } from './spaten355/spaten355.component';
import { Spaten269Component } from './spaten269/spaten269.component';


export const routes: Routes = [
    {path:'', component: MainComponent},
    {path:'login', component: LoginComponent},
    {path:'cadastro', component: CadastroComponent},
    {path:'inicio', component: MainComponent},
    {path:'list', component: ListcervejasComponent},
    {path:'spaten350', component: Spaten350Component},
    {path:'spaten600', component: Spaten600Component},
    {path:'spaten355', component: Spaten355Component},
    {path:'spaten269', component: Spaten269Component}
];
