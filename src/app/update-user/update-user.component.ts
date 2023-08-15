import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import {User} from '../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  service: UserserviceService;
   user: User;
   redirectView: string;
   response : string;
   constructor(service:UserserviceService,private router:Router,private route: ActivatedRoute){
    this.service = service;
     this.user = new User();
     this.redirectView = "";
     this.response = "";
   }
   ngOnInit(): void {
    this.updateUserdetais();
  }
   updatedUserValue(){
    this.service.updateUser(this.user).subscribe();
    this.user=new User();
      this.redirectToView("viewUser");     
  }
  updateUserdetais(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.service.getUser(id)
      .subscribe(user => this.user = user);
  }
  redirectToView(view : string){
    this.router.navigate([view]).then(()=>{
      window.location.reload();
    });
  }
}
