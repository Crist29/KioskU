import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { LoginService } from 'app/login/login.service'; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  isLogged = this.loginService.isLoged();;
  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private route: Router,
    private loginService: LoginService,
  ) { }
  

  ngOnInit(): void {
    if(!this.isLogged){
      this.route.navigate(['login']);
    }
  }

  realizarPedido(){
    window.alert('Tu pedido ha sido enviado al KioskU');
    this.cartService.clearCart();
    this.route.navigate(['/show-products']);
    console.log(this.items);
  }

  eliminarProducto(index: number){
    this.cartService.deleteItem(index);
    this.route.navigate(['carrito']);
    window.alert("El producto fue eliminado con exito");
  }

}
