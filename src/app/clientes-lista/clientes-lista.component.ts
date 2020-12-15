import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { Cliente } from '../clientes/cliente.model';
import { ClienteService } from '../clientes/cliente.service';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes: Cliente[] = [];
  private clienteSubscription: Subscription;
  public estaCarregando = false;

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.estaCarregando = true;
    this.clienteService.getClientes();
    this.clienteSubscription = this.clienteService.getListaClientesAtualizada().subscribe(
      (clientes: Cliente[]) => {
        this.estaCarregando = false;
        this.clientes = clientes;
      }
    );
  }

  ngOnDestroy(){
    this.clienteSubscription.unsubscribe();
  }

  onDelete(id:string){
    this.clienteService.removerCliente(id);
  }

}
