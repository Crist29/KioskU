import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    HeaderComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    RestablecerContrasenaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
