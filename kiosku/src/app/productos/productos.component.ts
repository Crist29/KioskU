import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProductosService } from 'app/productos.service';
import { Producto } from 'app/producto.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ProductosComponent implements OnInit {


  productos: Producto[] = [];

  constructor(
    private productosService : ProductosService,
    private router:Router

  ) {}

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

  agregar(){
    this.router.navigate(['productos/agregar'])
  }

}


