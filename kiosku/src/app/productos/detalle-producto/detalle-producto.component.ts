import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { Producto } from 'app/producto.model';
import { ProductosService } from 'app/productos.service';
import { DataServices } from 'app/data.service';
//sweetAlert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: Producto | undefined; // Definir producto como opcional

  index = 0;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private productosService: ProductosService,
    private router: Router,
    private dataServices : DataServices,
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    console.log(this.index);
    this.dataServices.cargarProductosID(this.index).subscribe(
      res => {
        this.producto = <Producto>res;
      },
      err => {
        console.log('Error de la bd: ' + err);
      }
    );
    // this.producto = this.dataServices.cargarProductosID(this.index);
    // console.log('producto: ', this.producto);
    // if (this.producto) {
    //   // Realizar operaciones solo si producto está definido
    //   console.log('producto: ', this.producto);
    // } else {
    //   // Producto no encontrado, redirigir a una página de error o manejar de acuerdo a tu lógica
    //   this.router.navigate(['/error']); // Reemplaza 'error' con la ruta a tu página de error
    // }
      
  }

  mostrarAlerta() {
    Swal.fire('Tu producto ha sido agregado al carrito');
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    console.log('producto'+ this.producto);
    
    Swal.fire('Tu producto ha sido agregado al carrito').then(() => {
      this.router.navigate(['show-products']);
    });
  }
}
