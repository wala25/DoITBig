import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor() { }

  id=''
  canActivate(){
    if(this.id){
      return true
    }
    else{
      return false
    }
    
  }
}
