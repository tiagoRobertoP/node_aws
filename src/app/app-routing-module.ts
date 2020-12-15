import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component' ;
import { ClienteInserirComponent } from './cliente-inserir/cliente-inserir.component'

const routes: Routes =[
  {path: '', component: ClientesListaComponent},
  {path: 'criar', component: ClienteInserirComponent} ,
  {path: 'editar/:idCliente', component: ClienteInserirComponent}
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})

export class AppRoutingModule{

}
