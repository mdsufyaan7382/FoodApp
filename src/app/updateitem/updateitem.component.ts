import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from '../menu';
import { MenuserviceService } from '../menuservice.service';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent {
  service:MenuserviceService;
  menu: Menu;
  constructor(service:MenuserviceService,private router:Router,private route: ActivatedRoute){
    this.service = service;
    this.menu = new Menu();
  }

  ngOnInit(): void {
    this.getItemDetails();
  }

  updateItemDetails(){
    this.service.updateItem(this.menu).subscribe();
    this.menu = new Menu();
    this.redirectToView();
  }


  getItemDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.service.getItem(id)
      .subscribe(menu => this.menu = menu);
  }
  redirectToView(){
    this.router.navigate(['view']).then(()=>{
      window.location.reload();
    });
  }

}
