import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { CartserviceService } from '../cartservice.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  service: CartserviceService;
  cart : Cart[];

  constructor(service: CartserviceService){
    this.service = service;
    this.cart = [];
  }
  ngOnInit(): void {
    this.service.viewCartItems().subscribe((data) => (this.cart = data));
  }
  deleteCartItems(id:number):void{
    this.service.deleteCartItems(id).subscribe();
    window.location.reload();
  }
}
