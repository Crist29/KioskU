import { Producto } from './producto.model'; 
import { Injectable, EventEmitter } from '@angular/core';
//import { DataServices } from './data.service';
import { LoggingService } from './LogginService.service';
import { DataServices } from './data.service';

@Injectable()
export class ProductosService{
    productos: Producto[] = [
        // new Producto("Pan","1500"), 
        // new Producto("Bebida","800")
    ];

    saludar = new EventEmitter<number>();

    constructor(private dataServices: DataServices, private loggingService: LoggingService){}

    agregarProducto(producto: Producto){
        this.loggingService.enviaMensajeAConsola("agregamos producto:" + producto.nombre)
        this.productos.push(producto);
        this.dataServices.guardarProducto(this.productos);
    }

    encontrarProducto(index: number){
        let producto: Producto = this.productos[index];
        return producto;
    }

    modificarProducto(index:number, producto:Producto){
        let producto1 = this.productos[index];
        producto1.nombre = producto.nombre;
        producto1.precio = producto.precio;
    }

    eliminarProducto(index:number){
        this.productos.splice(index,1);
    }
}