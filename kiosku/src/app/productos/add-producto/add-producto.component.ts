import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'app/productos.service';
import { Producto } from 'app/producto.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LoggingService } from 'app/LogginService.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  nombreInput?:string;
  precioInput?:string;
  index?: number;
  modoEdicion?:number;

  constructor(private loggingService: LoggingService,
              private productosService: ProductosService,
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
    if(this.modoEdicion != null && this.modoEdicion ===1 && typeof this.index !== 'undefined'){
      let producto: Producto = this.productosService.encontrarProducto(this.index);
      this.nombreInput = producto.nombre;
      this.precioInput = producto.precio;
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
  
  onGuardarProducto(){
    if(typeof this.nombreInput !== 'undefined' && typeof this.precioInput !== 'undefined'){
      let producto1 = new Producto(this.nombreInput, this.precioInput);
      if(this.modoEdicion !== null && this.modoEdicion ===1 && typeof this.index !== 'undefined'){
        this.productosService.modificarProducto(this.index, producto1);
      }else{
        this.productosService.agregarProducto(producto1);
      }
      this.router.navigate(['productos']);
    }
  }

  eliminarProducto(){
    if(typeof this.index !== 'undefined' != null){
      if(typeof this.index !== 'undefined'){
      this.productosService.eliminarProducto(this.index);}
    }
  }

  
}
