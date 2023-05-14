import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }
  email={id:'fdsfd',avatar:'email.png',email:'zifzfkzpofpzef',message:'grthtrhtrhtrhtrh',reply:true}

  ngOnInit(): void {
  }

}
