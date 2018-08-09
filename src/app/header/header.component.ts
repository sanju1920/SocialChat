import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
navbar:string="";
  constructor(private service:MyserviceService) { 
  
  }

  ngOnInit() {
    
    setInterval(() => {
      this.navbar= this.service.navbar;
      }, 1000);
  }


}
