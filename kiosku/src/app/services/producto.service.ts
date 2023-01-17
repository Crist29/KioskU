import { Injectable } from '@angular/core';
//import { addDoc, collection, deleteDoc, doc, Firestore, setDoc } from '@angular/fire/firestore';
//import { getDocs } from 'firebase/firestore';
//import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // constructor(public firestore:Firestore) { }


  // public async getProducts():Promise<Producto[]>{
  //   const ref = collection(this.firestore,'productos');
  //   const resp = await getDocs(ref);
  //   return resp.docs.map((p)=>Producto.fromFirestore(p));
  // }


  // public saveProducto(producto:Producto){
  //   const ref = collection(this.firestore,'productos');
  //   return addDoc(ref,producto.toJson());
  // }

  // public deleteProduct(proucto:Producto){
  //   const ref = doc(this.firestore, `/productos/${proucto.id}`);
  //   return deleteDoc(ref);
  // }
}
