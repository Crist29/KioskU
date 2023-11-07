import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductoComponent } from './productos/add-producto/add-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { ClientProductsComponent } from './productos/client-products.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import { QuioscoComponent } from './quiosco/quiosco.component';

const routes: Routes = [// Rutas a cada componente
  { path: 'header', component: HeaderComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'show-products', component: ClientProductsComponent },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'editar-producto/:id', component: EditarProductoComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'pedido/:id', component: DetallePedidoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}, // Redirección a "login" previniendo doble componente
  { path: 'login', component: LoginComponent},
  { path: 'pedidos', component: PedidosComponent},
  { path: 'detalle-pedido', component: DetallePedidoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'quiosco', component : QuioscoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
