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
  name: string;
  checkadd: boolean = false;
  search: string = "";
  channelList: any;
  reg:string='';
  searchkey= new RegExp(this.reg,'i')

  constructor(private apihit: ApiHitService, private myserve: MyserviceService, private routes: Router) {

    this.name = this.apihit.UserData.name;
  }
  creatReg(){
   this.searchkey = new RegExp(this.reg,'i')
  
  }
  getlist(){
    this.channelList.forEach(element => {
     // console.log(element)
      this.apihit.getmember(element.links.members).subscribe(res=>{
       // console.log(res)
        res.members.forEach(item => {
       // console.log(item.identity)
        if(this.apihit.UserData.id === item.identity)
        {
        //  console.log(element.unique_name)
        }
        });
      });
      
    });
  }
  showList() {
    this.apihit.getChannel().subscribe(data => {
    this.channelList = data.channels
      this.getlist();
    })
  }
  ngOnInit() {
    this.showList();
  }
  add() {
    this.checkadd = true;
  }
  Create(event: any) {
    //console.log(this.search)
    if (event.keyCode == 13) {
      if (this.search != "") {
        var channelDetail = this.apihit.createChannel(this.search);
        channelDetail.subscribe(data => {//console.log(data,"channel"
          this.showList();
          alert("Channel Created")
        });
      }
      this.checkadd = false;
    }

  }
  showMessage(member) {
    this.myserve.channelid = member;
    this.myserve.navbar = member.unique_name;
    var getmessage = this.apihit.getMessage(member)
    getmessage.subscribe(data => {
      this.myserve.showmessage = data
      //  console.log(this.myserve.showmessage,'data');
    });

  }
  join(member) {
    var store = this.apihit.joinMember(member);
    store.subscribe(data => { 
      console.log(data)
    alert("Joined Successfully")
    });
  }
}
