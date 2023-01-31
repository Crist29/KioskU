import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/login.service';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];
  isLoged = this.loginService.isLoged();
  isAdmin= this.loginService.isAdmin();

  constructor(
    private pedidoService: PedidosService,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.isLoged || !this.isAdmin){
      this.router.navigate(['login'])
    }else{
      this.pedidoService.obtenerPedidos()
      .subscribe(
        res => {
          console.log('Respuesta de la bd: '+res)
          this.pedidos = <Pedido[]>res;
          this.pedidoService.setPedidos(<Pedido[]>res);
          console.log(this.pedidos);
        },
        err => {
          console.log('Error de la bd: '+err)
        }
      );

    }
  }

  eliminarPedido(index: number){
    window.alert('¿Éste pedido se eliminara definitivamente');
    if(typeof index !== 'undefined' != null){
      if(typeof index !== 'undefined'){
      this.pedidoService.eliminarPedido(index);
      }
    }
    this.router.navigate(['/pedidos'])
    window.alert("El pedido fue eliminado con exito");
  }

  pedidosRefresh(){
    if(!this.isLoged || !this.isAdmin){
      this.router.navigate(['login'])
    }else{
      this.pedidoService.obtenerPedidos()
      .subscribe(
        res => {
          console.log('Respuesta de la bd: '+res)
          this.pedidos = <Pedido[]>res;
          this.pedidoService.setPedidos(<Pedido[]>res);
        },
        err => {
          console.log('Error de la bd: '+err)
        }
      );
    }
  }


}
