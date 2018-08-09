import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  name:string;
  checkadd: boolean = false;
  search: string = "";
  channelList:any;
  constructor(private apihit:ApiHitService,private myserve:MyserviceService,private routes:Router) {
    this.channelList=myserve.AllchannelDetail;
   // console.log(this.channelList)
   this.name=this.apihit.UserData.name;
   }

  ngOnInit() {
  }
  add() {
    this.checkadd = true;
  }
  Create(){
    //console.log(this.search)
    if(this.search !=""){
   var channelDetail = this.apihit.createChannel(this.search);
        channelDetail.subscribe(data=>{//console.log(data,"channel"
      }
      );
        this.checkadd=false;
        this.routes.navigate(['/ChatRoom'])
    }
  }
  showMessage(member){
    console.log(member)
    this.myserve.channelid = member
    var getmessage=this.apihit.getMessage(member)
      getmessage.subscribe(data=>{this.myserve.showmessage=data
        console.log(this.myserve.showmessage,'data');
      this.routes.navigate['/ChatRoom']
      });
  
  }
  join(member){
     var  store= this.apihit.joinMember(member);
   store.subscribe(data=>{console.log(data)});
  }
}
