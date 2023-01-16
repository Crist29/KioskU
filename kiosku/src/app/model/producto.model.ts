import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore";

export class Producto {
    id?:string;
    nombre?:string;
    precio?:number;
  
    constructor(data:any){
        
        
        this.nombre = data.nombre;
        this.precio = data.precio;
       
    }

    static fromFirestore(doc:QueryDocumentSnapshot<DocumentData>){
        
        const data:any = doc.data();
        const prod = new Producto(data);
        prod.id =doc.id;
        
        return prod;
    }


    toJson(){
        return Object.assign({},this);
    }

}
