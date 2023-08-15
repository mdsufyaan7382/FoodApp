import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {User} from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  service: UserserviceService;
   user: User;
   redirectView: string;
   response : string;
   emailPattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   passwordPattern = new RegExp(/(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}/);
   constructor(service:UserserviceService,private router:Router){
    this.service = service;
     this.user = new User();
     this.redirectView = "";
     this.response = "";
   }
   updatedUserValue(){
    this.service.Signup(this.user).subscribe((data) =>{       
      this.redirectToView("home");
    });   
  }

  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }
}
