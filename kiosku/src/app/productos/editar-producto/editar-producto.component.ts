import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from 'app/productos.service';
import { Producto } from 'app/producto.model';


@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  //Variables para ingresar datos (input)
  nombreInput?:string;
  precioInput?:string;
  cantidadInput?: string;
  precioVentaInput?:string;
  descripcionProdInput?:string;

  producto?: Producto;
  index = 0;
  
 
 constructor(private productosService: ProductosService,
              private router: Router,
              private route: ActivatedRoute
              ) { 
                this.productosService.saludar.subscribe(
                  (indice: number) => alert("El indice es: " + indice)
                )
              }
  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.producto = this.productosService.encontrarProducto(this.index);
    if(typeof this.index != 'undefined'){
      let producto: Producto = this.productosService.encontrarProducto(this.index);
      this.nombreInput = producto.nombre;
      this.precioInput = producto.precio;
      this.cantidadInput = producto.cantidad;
      this.precioVentaInput = producto.precioVenta;
      this.descripcionProdInput = producto.descripcionProd;
    }
  }


  editarProducto(){
    if(typeof this.nombreInput !== 'undefined' && 
       typeof this.precioInput != 'undefined' &&
       typeof this.cantidadInput !== 'undefined'&&
       typeof this.precioVentaInput !== 'undefined'&&
       typeof this.descripcionProdInput !== 'undefined'&&
       typeof this.index !== 'undefined' ){
      let producto1 = new Producto(this.nombreInput, 
                                   this.precioInput, 
                                   this.cantidadInput, 
                                   this.precioVentaInput, 
                                   this.descripcionProdInput,);
      this.productosService.modificarProducto(this.index, producto1);
      this.router.navigate(['/productos']);
    }
  }

  // eliminarProducto(){
  //   if(typeof this.index !== 'undefined' != null){
  //     if(typeof this.index !== 'undefined'){
  //     this.productosService.eliminarProducto(this.index);
  //     }
  //   }
  //   this.router.navigate(['/productos'])
  // }

  
}

