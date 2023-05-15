import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmailsComponent } from './emails/emails.component';
import { EmailComponent } from './email/email.component';
import { AuthGuardsService } from './services/auth-guards.service';

const routes: Routes = [
  {path:'',redirectTo:'emails',pathMatch:'full'},
  {path:'emails',component:EmailsComponent,canActivate:[AuthGuardsService]},
  {path:'emails/:id',component:EmailComponent,canActivate:[AuthGuardsService]},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'emails'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
