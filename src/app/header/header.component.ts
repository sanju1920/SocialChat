import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ApiHitService } from '../api-hit.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navbar:string="";
image;
  constructor(private service:MyserviceService,private api :ApiHitService,private routes:Router) { 
    this.image= api.UserData.image;
  }

  ngOnInit() {
    
    setInterval(() => {
      this.navbar= this.service.navbar;
      }, 1000);
  }
logout(){
  sessionStorage.removeItem('Userdata')
  this.routes.navigate(['/login'])
}

}
