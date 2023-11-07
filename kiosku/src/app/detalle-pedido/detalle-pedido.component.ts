import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';
import { Producto } from 'app/producto.model';
import { of } from 'rxjs';

//sweetAlert
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pedido?: Pedido;
  index = 0;
  total = 0;
  tiempoEspera?:string;
  tiempoDeEspera? = '';
  estado = '';
  productos: Producto[] = [];

  colorControl = new FormControl('primary' as ThemePalette);

  constructor(
    private pedidosService: PedidosService,
    private router: Router,
    private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.pedido = this.pedidosService.encontrarPedido(this.index);
    if(typeof this.index != 'undefined'){
      this.pedido = this.pedidosService.encontrarPedido(this.index);
      this.productos = this.pedido.productos;
      for (let index = 0; index < this.pedido.productos.length; index++) {
        this.total += parseInt(this.pedido.productos[index].precio);
      }
    }
  }


  editarPedido(f: boolean){

    if(this.pedido?.estado == 'Pendiente'){
      this.estado = 'En Preparacion';
    }else if(this.pedido?.estado == 'En Preparacion'){
      this.estado = 'Listo para Retirar';
    }else if(this.pedido?.estado == 'Listo para Retirar'){
      this.estado = 'Entregado';
    }else{
      this.estado = 'Entregado';
    }
    
    if(this.pedido?.estado != 'Pendiente'){
      this.tiempoDeEspera = this.pedido?.tiempoEspera;
    }else{
      this.tiempoDeEspera = this.tiempoEspera
    }

    let pedido1 = new Pedido(this.productos, this.pedido?.correo, this.estado, this.tiempoDeEspera);
      this.pedidosService.modificarPedido(this.index, pedido1);
      if(f){
        //window.alert('Notificacion enviada al alumno');
        Swal.fire('Notificacion enviada al alumno');
      }else{
        //window.alert('Pedido actualizado correctamente');
        Swal.fire('Pedido actualizado correctamente');
      }
      this.router.navigate(['/pedidos']);
    }

}
