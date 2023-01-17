import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';

//Firebase

import { FirestoreModule } from '@angular/fire/firestore';
import { Storage } from '@angular/fire/storage';
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
    ProductosComponent,
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
    Storage,
    
  
  ],
  providers: [
    {provide: Storage, useValue:'gs://kiosku-b5ebc.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

