import { Component, OnInit } from '@angular/core';
import { CartService } from 'app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cartService:CartService,
    ) { }

  ngOnInit(): void {
  }

  itemCount(){
    return this.cartService.itemsCount();
  }

}
