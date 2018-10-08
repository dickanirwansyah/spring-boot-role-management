import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchedulerRouting } from './scheduler.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { SchedulerComponent } from "./scheduler.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonDeleteModule } from '../../component/button-delete.module';

@NgModule({
  imports: [
    CommonModule,
    SchedulerRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonDeleteModule
  ],
  declarations: [SchedulerComponent]
})
export class SchedulerModule { }
