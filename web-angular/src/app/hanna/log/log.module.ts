import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogRouting } from './log.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { LogComponent } from "./log.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonSubmitModule } from '../../component/button-submit.module';

@NgModule({
  imports: [
    CommonModule,
    LogRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonSubmitModule
  ],
  declarations: [LogComponent]
})
export class LogModule { }
