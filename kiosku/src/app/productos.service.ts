import { Producto } from './producto.model'; 
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './LogginService.service';
import { DataServices } from './data.service';

@Injectable()
export class ProductosService{
    productos: Producto[] = [];

    saludar = new EventEmitter<number>();

    constructor(private dataServices: DataServices, private loggingService: LoggingService){}

    setProductos(productos: Producto[]){
        this.productos = productos;
    }

    obtenerProductos(){
        return this.dataServices.cargarProductos();
    }

    agregarProducto(producto: Producto){
        if(this.productos == null){
            this.productos = [];
        }
        this.productos.push(producto);
        this.dataServices.guardarProductos(this.productos);
    }

    encontrarProducto(index: number){
        let producto: Producto = this.productos[index];
        return producto;
    }

    modificarProducto(index:number, producto:Producto){
        let producto1 = this.productos[index];
        producto1.nombre = producto.nombre;
        producto1.precio = producto.precio;
        producto1.cantidad = producto.cantidad;
        producto1.precioVenta = producto.precioVenta;
        producto1.descripcionProd = producto.descripcionProd;
        this.dataServices.modificarProducto(index, producto);
    }

    eliminarProducto(index:number){
        this.productos.splice(index,1);     
        this.dataServices.eliminarProducto(index);
        this.modificarProductos();
    }

    modificarProductos(){
        if(this.productos!=null){
            this.dataServices.guardarProductos(this.productos);
        }
    }
}