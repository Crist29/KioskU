import { Component, OnInit , Input} from '@angular/core';
import { Producto } from 'app/producto.model';
import { ProductosService } from 'app/productos.service';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() producto?: Producto;
  @Input() indice?: number;


  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.productosService.saludar.emit(this.indice);
  }

}
