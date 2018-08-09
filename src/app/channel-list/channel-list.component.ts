import { Component, OnInit } from '@angular/core';
import { ApiHitService } from '../api-hit.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  checkadd: boolean = false;
  search: string = "";
  constructor(private apihit:ApiHitService) { }

  ngOnInit() {
  }
  add() {
    this.checkadd = true;
  }
  Create(){
    //console.log(this.search)
   var channelDetail = this.apihit.createChannel(this.search);
        channelDetail.subscribe(data=>console.log(data,"channel"));
    this.checkadd=false;
  }
}
