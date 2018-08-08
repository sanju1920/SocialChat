import { Injectable } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ApiHitService {
  url:string="https://chat.twilio.com/v2/Services"
  
 

  constructor(private http :HttpClient) { 
  
  }
  getData():Observable<any>{
    const body = new HttpParams().set('FriendlyName','Chat');
     return this.http.post(this.url,body.toString(),httpOptions)
    
  } 
}
 const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic QUNjZmY0ZTAxZTJhOTdjZTRhYTE4ZDE0ZGY2MGMyYzM4ZjowYjkyODU5NDU5N2IxY2NkMzQ5M2ViYjE3NTgyZDQ0YQ=='
  })
};


