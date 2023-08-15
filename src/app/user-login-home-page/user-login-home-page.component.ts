import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-login-home-page',
  templateUrl: './user-login-home-page.component.html',
  styleUrls: ['./user-login-home-page.component.css']
})
export class UserLoginHomePageComponent {

  user : User;

  /**
   *
   */
  constructor(private router:Router) {
   this.user = new User();    
  }

  ngOnInit(): void {
    let strUser = sessionStorage.getItem("User"); 
    this.user = JSON.parse(strUser != null? strUser : "");
  }

  logout(){
    sessionStorage.clear();
    this.redirectToView("home");
  }

  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }
}
