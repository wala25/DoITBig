import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailsService } from '../services/emails.service';
import { AuthGuardsService } from '../services/auth-guards.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private emailService:EmailsService, private authGuardService:AuthGuardsService) { }
  
  email:any
  message=new FormControl('',{nonNullable:true,validators:[Validators.required]})
  loading=false
  error=""
  submit(){
     
    if(this.message.valid){
      let body={msg:this.message.value,emailId:this.email.id,userId:this.authGuardService.id}
      this.loading=true
      this.emailService.submitResponse(body)
         .then((r)=>{
          this.loading=false
          this.email=r
         })
         .catch((e)=>{
          this.loading=false
         })
    }
  }

  ngOnInit(): void {

    this.route.params.subscribe((params:any)=>{
      let emailId=params['id'];
      this.emailService.getOneEmail(this.authGuardService.id,emailId)
          .then((r:any)=>{
            this.email=r
          })
          .catch((e)=>{
              console.log(e)
              this.error=e
          })

    })
    
  }

}
