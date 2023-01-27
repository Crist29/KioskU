import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'app/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  items = this.cartService.getItems();
  constructor(
    private cartService: CartService,
    private route: Router
  ) { }
  

  ngOnInit(): void {

  }

  realizarPedido(){
    window.alert('Tu pedido ha sido enviado al KioskU');
    this.cartService.clearCart();
    this.route.navigate(['/show-products']);
  }

}
