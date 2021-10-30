import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './inicio/inicio.component';
import { ServicioClienteComponent } from './servicio-cliente/servicio-cliente.component';

import {ReactiveFormsModule} from '@angular/forms';
import { NoticiaDestacada1Component } from './noticiaDestacada1/noticia-destacada1.component';
import { DatosExitososComponent } from './datos-exitosos/datos-exitosos.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ServicioClienteComponent,
    NoticiaDestacada1Component,
    DatosExitososComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
