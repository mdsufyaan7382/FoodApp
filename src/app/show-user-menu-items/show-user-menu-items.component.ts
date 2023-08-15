import { Component, OnInit } from '@angular/core';
import { Cart } from '../cart';
import { Menu } from '../menu';
import { MenuserviceService } from '../menuservice.service';
import { CartserviceService } from '../cartservice.service';
import { User } from '../user';

@Component({
  selector: 'app-show-user-menu-items',
  templateUrl: './show-user-menu-items.component.html',
  styleUrls: ['./show-user-menu-items.component.css']
})
export class ShowUserMenuItemsComponent implements OnInit {
  service: MenuserviceService;
  menu : Menu[];
  cart : Cart;

  constructor(service: MenuserviceService){
    this.service = service;
    this.menu = [];
    this.cart = new Cart();

  }
  ngOnInit(): void {
    this.service.viewAllMenuItems().subscribe((data) => (this.menu = data));
  }
  addtocart(menu : Menu):void{
    let strUser = sessionStorage.getItem("User"); 
    let user = JSON.parse(strUser != null? strUser : "");
    this.cart.userid = user.userid;
    this.cart.quantity = 1;
    this.cart.itemname = menu.itemname;
    this.cart.itemprice = menu.itemprice;
    this.cart.subtotal = menu.itemprice*1;

    this.service.addCartItem(this.cart).subscribe();
    this.cart = new Cart();
    alert('Item Added Successfully!!!');
  }
 
}
