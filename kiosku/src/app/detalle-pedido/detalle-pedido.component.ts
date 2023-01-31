import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { Pedido } from 'app/pedido.model ';
import { PedidosService } from 'app/pedidos.service';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.css']
})
export class DetallePedidoComponent implements OnInit {

  pediddo?: Pedido;
  index = 0;

  colorControl = new FormControl('primary' as ThemePalette);

  constructor(
    private pedidosService: PedidosService,
    private route: ActivatedRoute
      ) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['id'];
    this.pediddo = this.pedidosService.encontrarPedido(this.index);
    if(typeof this.index != 'undefined'){
      this.pediddo = this.pedidosService.encontrarPedido(this.index);
    }
  }

}
