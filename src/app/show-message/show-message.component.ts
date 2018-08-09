import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  show;
  constructor(private mysevice :MyserviceService) {
    this.show=mysevice.showmessage;
    console.log(this.show,"show");
   }

  ngOnInit() {
  }

}
