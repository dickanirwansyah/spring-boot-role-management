import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reportRouting } from './report.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {ReportComponent} from "./report.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";
import {ChartJsModule} from "../shared/graphs/chart-js/chart-js.module";

@NgModule({
  imports: [
    CommonModule,
    reportRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    ChartJsModule
  ],
  declarations: [ReportComponent]
})
export class ReportModule { }
