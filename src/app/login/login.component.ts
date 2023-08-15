import { Component } from '@angular/core';
import { Login } from '../login';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  service:LoginserviceService;
   login: Login;
   redirectView: string;
   response : string;
   constructor(service:LoginserviceService,private router:Router){
    this.service = service;
     this.login = new Login();
     this.redirectView = "";
     this.response = "";
   }
   checkLogin(){
    this.service.Login(this.login).subscribe((data) =>{      
      if(data.userid>0)
      {
        sessionStorage.setItem("User", JSON.stringify(data));
        this.redirectToView("userLoginHomePage");
      }
      else{
        alert('Invalid credentials!');
        this.redirectToView("login");
      }
    });
  }

  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }
}
