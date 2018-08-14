import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';

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
  reg: string = '';
  searchkey = new RegExp(this.reg, 'i')

  constructor(private apihit: ApiHitService, private myserve: MyserviceService, private routes: Router) {

    this.name =JSON.parse(sessionStorage.getItem('Userdata')).name
  }
  creatReg() {
    this.searchkey = new RegExp(this.reg, 'i')

  }
  temp = [];
  getlist() {

    this.channelList.forEach(element => {
      // console.log(element)
      this.apihit.getmember(element.links.members).subscribe(res => {
        //   console.log(res)
        res.members.forEach(item => {
          // console.log(item.identity)
          if (JSON.parse(sessionStorage.getItem('Userdata')).id === item.identity) {
            //  console.log(element.unique_name)
            this.temp.push(item)
            //  console.log(this.temp,"data")
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
          this.temp = [];
          this.showList();
          alert("Channel Created")
        },err =>{
          alert("Already Created")
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
      //  console.log(data)
      this.temp = [];
      this.showList();
      alert("Joined Successfully")
    },err =>{
      alert("Already Joined")
    })
  }
}
