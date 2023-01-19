import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Producto } from "./producto.model";

@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient){}
        
    //Metodo para guardar producto
    guardarProducto(productos:Producto[]){
        this.httpClient.put('https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos.json',productos).subscribe(
            response => console.log("Resultado de guardar los productos: " + response.toString),
            error => console.log("Error al guardar productos: " + error)
        );
    };
}