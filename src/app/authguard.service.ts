import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
  auth:boolean=false;
  constructor() { }
  canActivate(){
    return this.auth;
  }
}
