import { Component, OnInit } from '@angular/core';
import { EmailsService } from '../services/emails.service';
import { AuthGuardsService } from '../services/auth-guards.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  constructor(private emailsService:EmailsService,private authGuardService:AuthGuardsService) { }

  emails=new Array()
  ngOnInit(): void {
    this.emailsService.getAllEmails(this.authGuardService.id)
      .then((r:any)=>{
        this.emails=r
      })
  }

}
