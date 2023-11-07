import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Quiosco } from './Interfaces/quiosco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuioscoService {
  //private apiUrl = 'https://localhost:7209/api/Quiosco/listar';

  private endpoint:string = environment.endPoint;
  private apiUrl:string = this.endpoint + "Quiosco/";

  constructor(private http: HttpClient) { }

  //listar quiosco
  getList():Observable<Quiosco[]>{
    return this.http.get<Quiosco[]>(`${this.apiUrl}listarQuiosco`);
  }

  //Agregar quiosco
  add(request:Quiosco):Observable<Quiosco[]>{
    return this.http.post<Quiosco[]>(`${this.apiUrl}agregarQuiosco`,request);
  }

  //Eliminar quiosco
  delete(id_quiosco:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}eliminarQuiosco/${id_quiosco}`);
  }

  // getQuioscos(): Observable<any> {
  //   return this.http.get<any>(this.apiUrl);
  // }
}
