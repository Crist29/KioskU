import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ProductosService } from 'app/productos.service';
import { Producto } from 'app/producto.model';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/login.service';



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
  isLoged = this.loginService.isLoged();
  isAdmin= this.loginService.isAdmin();

  // userPriv?: number;
  constructor(
    private loginService: LoginService,
    private productosService : ProductosService,
    private router:Router

  ) {}

  ngOnInit(): void {
    if(!this.isLoged || !this.isAdmin){
      this.router.navigate(['login'])
    }else{ 
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

  eliminarProducto(index: number){
    if(typeof index !== 'undefined' != null){
      if(typeof index !== 'undefined'){
      this.productosService.eliminarProducto(index);
      }
    }
    this.router.navigate(['/productos'])
  }

}


