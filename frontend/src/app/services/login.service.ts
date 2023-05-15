import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthGuardsService } from './auth-guards.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient, private authGuardService:AuthGuardsService,
    private router:Router) { }
  apiAdress=environment.Api
  login(usr:any){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiAdress+'login',usr).subscribe({
        next:(res:any)=>{
          this.authGuardService.id=res.id
          this.router.navigate(['emails'])
          console.log(this.authGuardService.id)},
        error:(e)=>{
          reject(e.error.message)
          console.log(e)
        }
      })
    })
  }
}
