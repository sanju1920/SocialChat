import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  auth:boolean=false;
  constructor() { }
  canActivate(){
    if(JSON.parse(sessionStorage.getItem('Userdata'))!=undefined){
    return true;
    }else {
      return false;
    }
  }
}
