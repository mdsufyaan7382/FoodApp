import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  service: MenuserviceService;
  menu : Menu[];

  constructor(service: MenuserviceService){
    this.service = service;
    this.menu = [];
  }
  ngOnInit(): void {
    this.service.viewAllMenuItems().subscribe((data) => (this.menu = data));
  }
delete(id:number):void{
  this.service.deleteItem(id).subscribe();
  window.location.reload();
}
}
