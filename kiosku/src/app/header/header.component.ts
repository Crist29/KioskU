import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/cart.service';
import { LoginService } from 'app/login/login.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cartService:CartService,
    private loginService:LoginService
    ) { }

  ngOnInit(): void {
  }

  itemCount(){
    return this.cartService.itemsCount();
  }

}
