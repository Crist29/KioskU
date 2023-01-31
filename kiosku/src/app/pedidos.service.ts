import { Pedido } from './pedido.model '; 
import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './LogginService.service';
import { DataServices } from './data.service';

@Injectable()
export class PedidosService{
    pedidos: Pedido[] = [];

    constructor(private dataServices: DataServices){}

    setProductos(pedidos: Pedido[]){
        this.pedidos = pedidos;
    }

    obtenerPedidos(){
        return this.dataServices.cargarProductos();
    }

    agregarPedido(pedido: Pedido){
        if(this.pedidos == null){
            this.pedidos = [];
        }
        this.pedidos.push(pedido);
        this.dataServices.guardarPedidos(this.pedidos);
    }

    encontrarPedido(index: number){
        let pedido: Pedido = this.pedidos[index];
        return pedido;
    }

    modificarPedido(index:number, pedido: Pedido){
        let pedido1 = this.pedidos[index];
        pedido1.productos = pedido.productos;
        pedido1.correo = pedido.correo;
        pedido1.estado = pedido.estado;
        pedido1.tiempoEspero = pedido.tiempoEspero;
        this.dataServices.modificarPedido(index, pedido);
    }

    eliminarPedido(index:number){
        this.pedidos.splice(index,1);     
        this.dataServices.eliminarPedido(index);
        this.modificarPedidos();
    }

    modificarPedidos(){
        if(this.pedidos!=null){
            this.dataServices.guardarPedidos(this.pedidos);
        }
    }
}