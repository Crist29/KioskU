import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'app/productos.service';
import { Producto } from 'app/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from 'app/LogginService.service';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  //Variables para ingresar datos (input)
  nombreInput?:string;
  precioInput?:string;
  cantidadInput?: string;
  precioVentaInput?:string;
  descripcionProdInput?:string;

  index?: number;
  modoEdicion?:number;

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
    this.modoEdicion = this.route.snapshot.queryParams['modoEdicion'];

    // if(this.modoEdicion != null && this.modoEdicion ===1){
    //   let producto: Producto = this.productosService.encontrarProducto(this.index);
    //   this.nombreInput = producto.nombre;
    //   this.precioInput = producto.precio;
    // }

    //alternativa de solucion
    if(this.modoEdicion != null && this.modoEdicion ==1 && typeof this.index != 'undefined'){
      let producto: Producto = this.productosService.encontrarProducto(this.index);
      this.nombreInput = producto.nombre;
      this.precioInput = producto.precio;
      this.cantidadInput = producto.cantidad;
      this.precioVentaInput = producto.precioVenta;
      this.descripcionProdInput = producto.descripcionProd;
    }
  }

  // onGuardarProducto(){
  //   let producto1 = new Producto(this.nombreInput, this.precioInput);
  //   if(this.modoEdicion =! null && this.modoEdicion ===1){
  //     this.productosService.modificarProducto(this.index, producto1);
  //   }else{
  //     this.productosService.agregarProducto(producto1);
  //   }
  //   this.router.navigate(['productos']);
  // }

  //alternativa de solucion
  
  guardarProducto(){
    if(typeof this.nombreInput !== 'undefined' && 
      typeof this.precioInput != 'undefined' &&
      typeof this.cantidadInput != 'undefined' &&
      typeof this.precioVentaInput != 'undefined' &&
      typeof this.descripcionProdInput != 'undefined' ){
      let producto1 = new Producto(this.nombreInput, 
                                   this.precioInput, 
                                   this.cantidadInput, 
                                   this.precioVentaInput, 
                                   this.descripcionProdInput,);
      this.productosService.agregarProducto(producto1);
      this.router.navigate(['/productos']);
    }
  }

  
}
