import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component'
import {ServicioClienteComponent} from './servicio-cliente/servicio-cliente.component'
import {NoticiaDestacada1Component} from './noticiaDestacada1/noticia-destacada1.component'
import {DatosExitososComponent} from './datos-exitosos/datos-exitosos.component'

const routes: Routes = [
  {path:"", component:InicioComponent},
  {path:"servicioCliente", component:ServicioClienteComponent},
  {path:"noticiaDestacada1", component:NoticiaDestacada1Component},
  {path:"datosExitosos", component:DatosExitososComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
