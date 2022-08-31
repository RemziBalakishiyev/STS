import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './feature/login/login.component';
import { RegisterComponent } from './feature/register/register.component';
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AccountRoutingModule,
    SharedModule,
    CommonModule
  ],
  exports:[
    LoginComponent,
    RegisterComponent
  ]
})
export class AccountModule { }
