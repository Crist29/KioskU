import { Component, OnInit } from '@angular/core';
import { Producto } from './model/producto.model';
import { ProductoService } from './services/producto.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'kiosku';

  constructor(public productService:ProductoService){
    productService.getProducts().then((prods)=>{
      console.log(prods);
    })
  }
  ngOnInit(): void {
    //this.saveProduct();
  }




  saveProduct(){
    const prod = new Producto({nombre:'bebida',precio:2000});
    this.productService.saveProducto(prod).then((resp)=>{
      console.log(resp);
    })
  }
}
