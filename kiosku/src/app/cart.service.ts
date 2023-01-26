import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Producto[] = [];
  constructor() { }

  addToCart(product: Producto){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  itemsCount(){
    return this.items.length;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

}
