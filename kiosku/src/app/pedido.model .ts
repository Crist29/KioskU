import { Producto } from "./producto.model";

export class Pedido{
    constructor(
        public productos: Producto[],
        public correo?:string, 
        public estado?:string, 
        public tiempoEspero?:string,
        ){}
}