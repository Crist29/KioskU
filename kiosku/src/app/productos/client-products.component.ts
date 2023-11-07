import { Component, OnInit, ViewChild } from '@angular/core';
import { Producto } from 'app/producto.model';
import { ProductosService } from 'app/productos.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-client-products',
  templateUrl: './client-products.component.html',
  styleUrls: ['./client-products.component.css']
})
export class ClientProductsComponent implements OnInit {
  productos: Producto[] = [];
  dataSource!: MatTableDataSource<Producto>; // Usa el operador de no nulo (!)
  @ViewChild(MatPaginator) paginator!: MatPaginator; // Usa el operador de no nulo (!)
  page: number = 1; // Declara e inicializa la propiedad 'page'
  i: number = 0; // Declara e inicializa la propiedad 'i'

  constructor(private productosService: ProductosService) {}

  ngOnInit(): void {
    this.productosService.obtenerProductos().subscribe(
      res => {
        this.productos = <Producto[]>res;
        this.dataSource = new MatTableDataSource(this.productos); // Inicializa dataSource aquí
        this.dataSource.paginator = this.paginator; // Asigna el paginador
      },
      err => {
        console.log('Error de la bd: ' + err);
      }
    );
  }
}


