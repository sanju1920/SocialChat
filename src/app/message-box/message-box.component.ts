import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ApiHitService } from '../api-hit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messageurl: string = "https://chat.twilio.com/v2/Services/IScf713e81084f479691f0b349a69cbfd0/Channels/"
  message: string;

  SelectedFile: File = null;
  constructor(private myserviec: MyserviceService, private apihit: ApiHitService, private routes: Router) {

  }

  ngOnInit() {
  }
  send(event: any) {
    // console.log(this.myserviec.channelid,"ok")
    if (event.keyCode == 13) {
      if (this.message != undefined || this.SelectedFile != null) {
        var id = this.myserviec.channelid.sid;
        var url = this.messageurl + id + "/Messages/"
        this.apihit.sendMessage(url, this.message, this.myserviec.channelid, this.SelectedFile)
          .subscribe(data => {
            console.log(data, "message send")
            this.message = ""
            this.SelectedFile = null
            this.apihit.getMessage(this.myserviec.channelid)
              .subscribe(mes => {
                this.myserviec.showmessage = mes
                console.log(mes)
              });
          });

      }
    }

  }
  onSelectFile(event) {
    this.SelectedFile = <File>event.target.files[0];
  }

}
