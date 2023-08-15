import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {
  service:MenuserviceService;
  menu: Menu;
  constructor(service:MenuserviceService,private router:Router){
    this.service = service;
    this.menu = new Menu();
  }
  getMenuItemDetails(){
    this.service.addItem(this.menu).subscribe();
    this.menu = new Menu();
    this.redirectToView();
  }
  redirectToView(){
    this.router.navigate(['view']).then(()=>{
      window.location.reload();
    });
  }

}
