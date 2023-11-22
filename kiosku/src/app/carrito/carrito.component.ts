import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { LoginService } from 'app/login/login.service';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';
import { HttpClient } from '@angular/common/http';

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
  redirectUrl!: string;
  token!: string;
  url_parametro! : string;
  url_transbank! : string;

  hours: number[] = Array.from({ length: 24 }, (_, index) => index); // Genera un array de 0 a 23
  selectedHour: number = 0; // Valor seleccionado por defecto (puedes inicializarlo con el valor que desees)

  constructor(
    private cartService: CartService,
    private route: Router,
    private loginService: LoginService,
    private pedidosService: PedidosService,
    private http : HttpClient,
    ) { }


  ngOnInit(): void {

    //this.cargarWebpay();

    if(!this.isLogged){
      this.route.navigate(['login']);
    }
  }

  cargarWebpay(){
    // Realizar la solicitud HTTP al backend (Transbank)
    this.http.post<any>('https://localhost:7209/api/Tbk/llamadaWebpay', {}).subscribe(
      response => {
        this.redirectUrl = response.url;
        this.token = response.token;
        this.redirigirTransbank();

      },
      error => {
        console.error('Error al llamar a la función en el backend:', error);
      }
    );
  }

  redirigirTransbank(){

    console.log("viene");
    //const token_ws = this.token;
    //this.route.navigate([this.redirectUrl,token_ws]);

    //const lang = 'es';
    const lang = this.token;
    //const url = `https://www.google.cl?lang=${lang}`;
    const url = `${this.redirectUrl}?token_ws=${lang}`;
    window.location.href = url;
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
    console.log(this.items);
    this.pedidosService.agregarPedido(pedido1);

    // Realizar la solicitud HTTP al backend (Transbank)
    this.http.post<any>('https://localhost:7209/api/Tbk/llamadaWebpay', {}).subscribe(
      response => {
        console.log('Respuesta del backend:', response);

        this.redirectUrl = response.url;
        this.token = response.token;

      },
      error => {
        console.error('Error al llamar a la función en el backend:', error);
      }
    );


    // Mostrar SweetAlert después de agregar el pedido
    // Swal.fire('Tu pedido ha sido enviado al KioskU').then(() => {
    //   this.route.navigate(['/show-products']);
    // });
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
