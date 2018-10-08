import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { latihanRouting } from './latihan.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {LatihanComponent} from "./latihan.component";


import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";


@NgModule({
  imports: [
    CommonModule,
    latihanRouting,
    SmartadminModule,
    SmartadminDatatableModule
  ],
  declarations: [LatihanComponent]
})
export class LatihanModule { }
