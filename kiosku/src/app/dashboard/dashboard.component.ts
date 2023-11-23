import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  view: [number, number] = [700, 400];
  gradient = true;
  colorScheme: Color = {
    name: 'cool', // Puedes ajustar esta propiedad según tus necesidades
    selectable: true, // Puedes ajustar esta propiedad según tus necesidades
    group: ScaleType.Ordinal, // Usa ScaleType.Ordinal en lugar de 'Ordinal'
    domain: ['#BCF8F9', '#FABD7F', '#FDB6CF', '#D3FDE6'] // Puedes ajustar esta propiedad según tus necesidades
  };
  //producto mas vendido
  mostSoldProduct = [
    {
      name: 'Fajita pollo',
      value: 50
    },
    {
      name: 'Jugo de naranja',
      value: 20
    },
    {
      name: 'Pan aliado',
      value: 10
    },
    {
      name: 'Pan',
      value: 40
    }
    // Agrega más datos según sea necesario
  ];
  //producto menos vendido
  leastSoldProduct = [
    {
      name: 'Producto C',
      value: 10
    },
    {
      name: 'Producto D',
      value: 5
    },
    // Agrega más datos según sea necesario
  ];

  //Productos vendidos en un día
  vendidosEnUnDia = [
    {
      name: '1',
      value: 50
    },
    {
      name: '2',
      value: 20
    },
    {
      name: '3',
      value: 50
    }
  ];

  //Cantidad de productos vendidos
  productosVendidos = [
    {
      name: '1',
      value: 50
    },
    {
      name: '2',
      value: 20
    },
    {
      name: '3',
      value: 50
    }
  ]

  //Productos vendidos en un mes
  productosVendidosEnMes = [
    {
      name: '1',
      value: 50
    },
    {
      name: '2',
      value: 20
    },
    {
      name: '3',
      value: 50
    }
  ]

  // Añade más variables según sea necesario para los otros gráficos

  ngOnInit(): void {
    // Añade la lógica de inicialización según sea necesario
  }

  onSelect(event: any) {
    // Manejar eventos de selección si es necesario
    console.log(event);
  }
}
