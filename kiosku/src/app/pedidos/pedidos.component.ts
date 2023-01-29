import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  isLogged = this.loginService.isLoged();

  constructor(
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    if(!this.isLogged){
      this.router.navigate(['login']);
    }
  }

}
