import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'app/services/producto.service';
import { Producto } from 'app/model/producto.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ProductosComponent implements OnInit {


  private productsUrl = 'api/products';

  constructor(
    private productoService : ProductoService,
    private http: HttpClient

  ) {}

  products : Producto[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productsUrl);
  }

}
