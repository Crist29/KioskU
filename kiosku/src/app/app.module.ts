import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import "@angular/compiler";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RestablecerContrasenaComponent } from './restablecer-contrasena/restablecer-contrasena.component';

import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './productos/productos.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';

// Formulario
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

//Rutas
import { RouterModule } from '@angular/router';

//Firebase

import { Storage } from '@angular/fire/storage';
import { DataServices } from './data.service';
import { AddProductoComponent } from './add-producto/add-producto.component';
//import { FireModule } from '@angular/fire';



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
    HttpClientModule,
    // Rutas
    RouterModule.forRoot([
      { path: 'header', component: HeaderComponent },
      { path: 'login', component: LoginComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'restablecer-contrasena', component: RestablecerContrasenaComponent },
      { path: 'footer', component: FooterComponent },
    ]),
    //FireModule.initializeApp(environment.firebaseConfig),
    //FirestoreModule,
    
    
  ],
  providers: [
    {provide: DataServices}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

