import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiHitService {
   url:string="https://chat.twilio.com/v2/Services"
  channelUrl:string="https://chat.twilio.com/v2/Services/IScf713e81084f479691f0b349a69cbfd0/Channels";
 UserData:any;

  constructor(private http :HttpClient) { 
  
  }
  getChannel():Observable<any>{
    // const body = new HttpParams().set('FriendlyName','ChatRoom');
     return this.http.get(this.channelUrl,httpOptions)
    
  } 
  createChannel(search):Observable<any>{
    console.log(this.channelUrl);
    const body = new HttpParams()
    .set('UniqueName',search);
     return this.http.post(this.channelUrl,body.toString(),httpOptions)
    
  } 
  getmember(memberurl):Observable<any>{
        return this.http.get(memberurl,httpOptions)
  }
  
  joinMember(member):Observable<any>{
    //console.log(this.channelUrl);
    const body = new HttpParams()
    .set('ChannelSid',member.service_sid)
    .set('ServiceSid',member.sid)
    .set('Identity',this.UserData.id)
     return this.http.post(member.links.members,body.toString(),httpOptions)
    
  } 
  sendMessage(messageurl,message,member,image):Observable<any>{
    //console.log(message)
    if(image != null){
      console.log(image)
    const body = new HttpParams()
    .set('ChannelSid',member.service_sid)
    .set('ServiceSid',member.sid)
    .set('From',this.UserData.id)
    .set('content',image)
    .set('data-binary',image)
    
    
     return this.http.post(messageurl,body.toString,httpOptions)
    }
    else {
      console.log(message)
      const body = new HttpParams()
      .set('ChannelSid',member.service_sid)
      .set('ServiceSid',member.sid)
      .set('Body',message)
      .set('From',this.UserData.id)
     return this.http.post(messageurl,body.toString(),httpOptions)
    }
  }
  getMessage(channel):Observable<any>{
    // const body = new HttpParams().set('FriendlyName','ChatRoom');
     return this.http.get(channel.links.messages,httpOptions)
    
  } 
}
 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic your auth token'
  })
};


