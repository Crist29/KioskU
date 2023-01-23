import { Component, OnInit } from '@angular/core';
import { Producto } from 'app/producto.model';
import { ProductosService } from 'app/productos.service';

@Component({
  selector: 'app-client-products',
  templateUrl: './client-products.component.html',
  styleUrls: ['./client-products.component.css']
})
export class ClientProductsComponent implements OnInit {

  productos: Producto[] = [];
  
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerProductos()
    .subscribe(
      res => {
        console.log('Respuesta de la bd: '+res)
        this.productos = <Producto[]>res;
        this.productosService.setProductos(<Producto[]>res);
      },
      err => {
        console.log('Error de la bd: '+err)
      }
    );
  }

  

}
