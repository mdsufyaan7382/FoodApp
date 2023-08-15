import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  service: UserserviceService;
  user : User[];

    constructor(service: UserserviceService){
      this.service = service;
      this.user = [];
    }
    ngOnInit(): void {
      this.service.viewUsers().subscribe((data) => (this.user = data));
    }
    deleteUser(id:Number):void{
      this.service.deleteUser(id).subscribe();
      window.location.reload();
    }
}
