import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input' ;
import { MatCardModule } from '@angular/material/card' ;
import { MatButtonModule } from '@angular/material/button' ;
import { MatToolbarModule } from '@angular/material/toolbar' ;
import { MatExpansionModule } from '@angular/material/expansion' ;
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

import { AppComponent } from './app.component';
import { ClienteInserirComponent } from './cliente-inserir/cliente-inserir.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { ClienteService } from './clientes/cliente.service';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing-module';

@NgModule({
  declarations: [
    AppComponent,
    ClienteInserirComponent,
    CabecalhoComponent,
    ClientesListaComponent
  ],
  imports: [
    BrowserModule ,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    MatInputModule ,
    MatCardModule ,
    MatButtonModule ,
    MatToolbarModule ,
    MatExpansionModule ,
    HttpClientModule,
    AppRoutingModule ,
    MatProgressSpinnerModule
  ],
  providers: [ ClienteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
