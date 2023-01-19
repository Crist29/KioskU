import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { FooterComponent } from './footer/footer.component';
import { AddProductoComponent } from './productos/add-producto/add-producto.component';


const routes: Routes = [          // Rutas a cada componente
  { path: 'header', component: HeaderComponent },
  { path: 'login', component: LoginComponent, children: [] },
  { path: 'productos', component: ProductosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'productos/:id', component: AddProductoComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}, // Redirección a "login" previniendo doble componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
