import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.css']
})
export class RestablecerContrasenaComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  restablecer(){
    window.alert('Hemos enviado el enlace para restablecer tu contraseña a tu correo electronico');
    this.route.navigate(['/login']);
  }

}
