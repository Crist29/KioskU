import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "@angular/compiler";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { AddProductoComponent } from './productos/add-producto/add-producto.component';
import { ProductoComponent } from './productos/producto/producto.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { LoggingService} from './LogginService.service';

// Formulario
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';

//Rutas
import { RouterModule } from '@angular/router';
import { DataServices } from './data.service';
import { ProductosService } from './productos.service';
import { LoginService } from './login/login.service';
import { ClientProductsComponent } from './productos/client-products.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { DetallePedidoComponent } from './detalle-pedido/detalle-pedido.component';
import { DetalleProductoComponent } from './productos/detalle-producto/detalle-producto.component';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HeaderComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    RestablecerContrasenaComponent,
    FooterComponent,
    AddProductoComponent,
    ProductoComponent,
    ClientProductsComponent,
    PedidosComponent,
    CarritoComponent,
    DetallePedidoComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatOptionModule,
    MatBadgeModule,

    // Rutas
    RouterModule.forRoot([
      { path: 'header', component: HeaderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'add-producto', component: AddProductoComponent},
      { path: 'editar-producto', component: EditarProductoComponent},
    ]),
    
    
  ],
  providers: [
    {provide: DataServices},LoggingService,ProductosService, LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

