import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService) { }
  
  notif=""
  login=new FormGroup({
    username:new FormControl('',{nonNullable:true,validators:[Validators.required, Validators.minLength(4)]}),
    password:new FormControl('',{nonNullable:true,validators:[Validators.required, Validators.minLength(4)]})  
  })

  loading=false
  submit(){
      
      this.notif="";
      if (this.login.valid){
        console.log(this.login.value)
        this.loading=true
        this.loginService.login(this.login.value)
          .catch((e)=>{
            this.notif=e;
            this.loading=false
          })
      }
      else{
        this.notif="All Fields Should be Filled and Min length is 4"
      }
  }

  ngOnInit(): void {
  }

}
