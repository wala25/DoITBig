import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  constructor(private http:HttpClient) { }
  apiAdress=environment.Api
  getAllEmails(id:any){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiAdress+'emails/'+id).subscribe({
        next:(res)=>{
          resolve(res)
        },
        error:(e)=>{
          console.log(e)
          reject(e.error.message)
        }
      })
    })
  }

  getOneEmail(userId:any,emailId:any){
    return new Promise((resolve,reject)=>{
      this.http.get(this.apiAdress+'emails/'+`${userId}/${emailId}`).subscribe({
        next:(res)=>{
          resolve(res)
        },
        error:(e)=>{
          console.log(e.error.message)
          reject(e.error.message)
        }
      })
    })

  }

  submitResponse(body:any){
    return new Promise((resolve,reject)=>{
      this.http.post(this.apiAdress+'emails/reply',body).subscribe({
        next:(res)=>{
          resolve(res)
        },
        error:(e)=>{
          console.log(e)
          reject(e.error.message)
        }
      })
    })
  }
}


