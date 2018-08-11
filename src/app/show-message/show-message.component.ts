import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ApiHitService } from '../api-hit.service';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})
export class ShowMessageComponent implements OnInit {
  show;
  id;
  constructor(private mysevice: MyserviceService, private api: ApiHitService) {

    this.id = api.UserData.id;
  }
  showdata() {
    if (this.mysevice.channelid != undefined) {
      this.api.getMessage(this.mysevice.channelid)
        .subscribe(data => {this.show = data.messages
       // console.log(data)
        });
    }
  }
  ngOnInit() {

    // setInterval(() => {
    //   this.showdata()
    // }, 600);
  }

}
