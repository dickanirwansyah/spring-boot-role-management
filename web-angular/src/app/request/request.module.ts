import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { requestRouting } from './request.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {RequestComponent} from "./request.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";

@NgModule({
  imports: [
    CommonModule,
    requestRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }
