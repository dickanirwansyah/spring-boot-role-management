import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SmartadminInputModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
