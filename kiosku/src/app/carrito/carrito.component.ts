import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { LoginService } from 'app/login/login.service';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  correo = localStorage.getItem('email');
  isLogged = this.loginService.isLoged();;
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private route: Router,
    private loginService: LoginService,
    private pedidosService: PedidosService,
  ) { }


  ngOnInit(): void {
    if(!this.isLogged){
      this.route.navigate(['login']);
    }
  }

  realizarPedido(){
    window.alert('Tu pedido ha sido enviado al KioskU');
    this.cartService.clearCart();

    if(this.correo == null){
      this.correo = '';
    }

    let pedido1 = new Pedido(
      this.items,
      this.correo,
      'Pendiente',
      '10',
    );
    
    this.pedidosService.agregarPedido(pedido1);
    this.route.navigate(['/show-products']);
  }

  eliminarProducto(index: number){
    window.alert('¿Éste producto se eliminara definitivamente de tu pedido?');
    this.cartService.deleteItem(index);
    this.route.navigate(['carrito']);
    window.alert("El producto fue eliminado con exito del pedido");
  }

}
