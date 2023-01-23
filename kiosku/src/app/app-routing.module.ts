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

const routes: Routes = [          // Rutas a cada componente
  { path: 'header', component: HeaderComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'show-products', component: ClientProductsComponent },
  { path: 'add-producto', component: AddProductoComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'producto/:id', component: EditarProductoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}, // Redirección a "login" previniendo doble componente
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
