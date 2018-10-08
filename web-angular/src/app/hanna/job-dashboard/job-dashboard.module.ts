import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobDashboardRouting } from './job-dashboard.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { JobDashboardComponent } from "./job-dashboard.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonSubmitModule } from '../../component/button-submit.module';
import { FlotChartModule } from '../../shared/graphs/flot-chart/flot-chart.module';

@NgModule({
  imports: [
    CommonModule,
    JobDashboardRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonSubmitModule,
    FlotChartModule
  ],
  declarations: [JobDashboardComponent]
})
export class JobDashboardModule { }
