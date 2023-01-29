import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login/login.service";
import { Producto } from "./producto.model";

@Injectable()
export class DataServices {
    constructor(private httpClient:HttpClient, 
                private loginService: LoginService
            ){}
        
    //Metodo para guardar producto
    guardarProductos(productos:Producto[]){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos.json?auth='+token;
        this.httpClient.put(url, productos).subscribe(
            response => console.log("Resultado de guardar los productos: " + response),
            error => console.log("Error al guardar productos: " + error)
        )
        this.cargarProductos();
    };
    cargarProductos(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos.json?auth='+token);
    }

    modificarProducto(indice:number, producto: Producto){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos/' +indice +'.json?auth='+token;
        this.httpClient.put(url, producto)
        .subscribe(
            res => console.log('Resultado de modificar Producto: '+ res),
            err => console.log('Error en modificar Producto: '+err)
        )
    }

    eliminarProducto(indice:number){
        let url: string;
        const token = this.loginService.getIdToken();
        url = 'https://kiosku-b5ebc-default-rtdb.firebaseio.com/productos/' +indice +'.json?auth='+token;
        this.httpClient.delete(url)
        .subscribe(
            res => console.log('Resultado de eliminar Producto: '+ res),
            err => console.log('Error en eliminar Producto: '+err)
        )
    }
}