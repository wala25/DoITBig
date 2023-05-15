import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate {

  constructor(private router: Router) { }

  id=null
  canActivate(){
    if(this.id){
      return true
    }
    else{
      this.router.navigate(['login'])
      return false
    }
    
  }
}
