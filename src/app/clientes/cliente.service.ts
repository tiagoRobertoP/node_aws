import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';

import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { _DisposeViewRepeaterStrategy } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Injectable({providedIn:'root'})
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClienteAtualizado = new Subject<Cliente[]>();

  constructor(private httpClient: HttpClient, private router: Router){}

  getCliente(idCliente: string){
    return this.httpClient.get<{_id: string, nome: string, fone: string, email:
      string}>(`http://localhost:3000/api/clientes/${idCliente}`);
    }

  getClientes(): void{
    this.httpClient.get<{mensagem:string , clientes:any}> ('http://localhost:3000/api/clientes')
    .pipe(map((dados) => {
      return dados.clientes.map(cliente =>{
        return{
          id:cliente._id,
          nome:cliente.nome,
          fone:cliente.fone,
          email:cliente.email
        }
      })
    }))
    .subscribe(
      (clientes) =>{
      this.clientes = clientes;
      this.listaClienteAtualizado.next([...this.clientes]);
      }
    )
  }

  adicionarCliente (nome:string, fone:string, email:string): void{
    const cliente : Cliente = {
      id:null,
      nome: nome,
      fone:fone,
      email: email
    }
    this.httpClient.post<{mensagem:string, id:string}>('http://localhost:3000/api/clientes' , cliente).subscribe(
      (dados) =>{
        cliente.id=dados.id;
        this.clientes.push(cliente);
        this.listaClienteAtualizado.next([...this.clientes]);
        this.router.navigate(['/']);
      }
    )
  }

  getListaClientesAtualizada(){
    return this.listaClienteAtualizado.asObservable();
  }

  removerCliente(id:string): void{
    this.httpClient.delete(`http://localhost:3000/api/clientes/${id}`).subscribe(() =>{
      this.clientes=this.clientes.filter((cli) =>{
        return cli.id !==id
      });
      this.listaClienteAtualizado.next([...this.clientes]);
    })
  }

  atualizarCliente (id: string, nome: string, fone: string, email: string){
    const cliente: Cliente = { id, nome, fone, email};
    this.httpClient.put(`http://localhost:3000/api/clientes/${id}`, cliente)
    .subscribe((res => {
      const copia = [...this.clientes];
      const indice = copia.findIndex (cli => cli.id === cliente.id);
      copia[indice] = cliente;
      this.clientes = copia;
      this.listaClienteAtualizado.next([...this.clientes]);
      this.router.navigate(['/']);
      }));
}

}
