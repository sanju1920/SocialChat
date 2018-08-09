import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { ApiHitService } from '../api-hit.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  messageurl:string ="https://chat.twilio.com/v2/Services/IScf713e81084f479691f0b349a69cbfd0/Channels/"
  message:string;
  constructor(private myserviec:MyserviceService,private apihit:ApiHitService) { 
    
  }

  ngOnInit() {
  }
  send(){
    console.log(this.myserviec.channelid,"ok")
    var id=this.myserviec.channelid.sid;
    this.messageurl =this.messageurl +id +"/Messages/"
    this.apihit.sendMessage(this.messageurl,this.message,this.myserviec.channelid)
    .subscribe(data=>console.log(data))

  }

}
