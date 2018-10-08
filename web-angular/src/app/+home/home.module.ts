import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {HomeComponent} from "./home.component";
import {TextboxModule} from "../component/textbox/textbox.module";

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
      SmartadminModule,
      TextboxModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
