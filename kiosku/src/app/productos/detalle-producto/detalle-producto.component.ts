import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from 'app/cart.service';
import { Producto } from 'app/producto.model';
import { ProductosService } from 'app/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  
  producto?: Producto;
  index = 0;

  constructor(
    private cartService:CartService, 
    private route: ActivatedRoute, 
    private productosService:ProductosService, 
    private router: Router
    ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.producto = this.productosService.encontrarProducto(this.index);
    if(typeof this.index != 'undefined'){
      this.producto = this.productosService.encontrarProducto(this.index);
    }
  }

  addToCart(product: any){
    this.cartService.addToCart(product);
    window.alert('Tu producto ha sido agregado al carrito');
    this.router.navigate(['show-products'])
  }

}
