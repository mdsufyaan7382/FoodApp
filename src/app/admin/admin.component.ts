import { Component } from '@angular/core';
import { AdminserviceService } from '../adminservice.service';
import {Admin} from '../admin';
import { Router } from '@angular/router';
import { NextObserver } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  service:AdminserviceService;
   admin: Admin;
   redirectView: string;
   response : string;
   constructor(service:AdminserviceService,private router:Router){
    this.service = service;
     this.admin = new Admin();
     this.redirectView = "";
     this.response = "";
   }

   checkAdminLogin(){
    this.service.adminLogin(this.admin).subscribe((data) =>{      
      if(data == true){
        this.redirectToView("adminLoginHomePage");
      }
      else{
        alert('Invalid credentials!');
        this.redirectToView("admin");
      }
    });
    //this.service.adminLogin(this.admin).subscribe((data)=> data == "Successful Login"? this.redirectView = "adminLoginHomePage" : this.redirectView = "");  
    
  }

  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }

}
