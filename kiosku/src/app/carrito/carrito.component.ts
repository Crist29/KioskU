import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { LoginService } from 'app/login/login.service';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';
//sweetAlert
import Swal from 'sweetalert2';


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

  mostrarAlerta() {
    Swal.fire('Tu pedido ha sido enviado al KioskU');
  }

  realizarPedido(){
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
    // Mostrar SweetAlert después de agregar el pedido
    Swal.fire('Tu pedido ha sido enviado al KioskU').then(() => {
      this.route.navigate(['/show-products']);
    });
  }

  eliminarProducto(index: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Este producto se eliminará definitivamente de tu pedido.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteItem(index);
        this.route.navigate(['carrito']);
        Swal.fire('Producto eliminado', 'El producto fue eliminado con éxito del pedido', 'success');
      }
    });
  }
  

}
