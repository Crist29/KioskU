import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosService } from 'app/productos.service';



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
    private productosService : ProductosService,
    private http: HttpClient

  ) {}

  ngOnInit(): void {
  }

}


