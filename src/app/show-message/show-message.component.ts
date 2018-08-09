import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  show;
  constructor(private mysevice: MyserviceService) {
    

  }
  showdata() {
    if (this.mysevice.showmessage != undefined) {
      this.show = this.mysevice.showmessage.messages;
      console.log(this.show, "show");
    }
  }

  ngOnInit() {
    this.showdata()
  }

}
