import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "./producto.model";

@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient){}
        
    //Metodo para guardar producto
    guardarProductos(productos:Producto[]){
        this.httpClient.put('https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos.json',productos).subscribe(
            response => console.log("Resultado de guardar los productos: " + response.toString),
            error => console.log("Error al guardar productos: " + error)
        );
    };
    cargarProductos(){
        return this.httpClient.get('https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos.json');
    }

    modificarProducto(indice:number, producto: Producto){
        let url: string;
        url = 'https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos' +indice +'.json';
        this.httpClient.post(url, producto)
        .subscribe(
            res => console.log('Resultado de modificar Producto: '+ res),
            err => console.log('Error en modificar Producto: '+err)
        )
    }

    eliminarPersona(indice:number){
        let url: string;
        url = 'https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos' +indice +'.json';
        this.httpClient.delete(url)
        .subscribe(
            res => console.log('Resultado de eliminar Producto: '+ res),
            err => console.log('Error en eliminar Producto: '+err)
        )
    }
}