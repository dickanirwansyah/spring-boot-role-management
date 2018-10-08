import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobManagementRouting } from './job-management.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { JobManagementComponent } from "./job-management.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonSubmitModule } from '../../component/button-submit.module';
import {DropzoneModule} from "../../shared/forms/dropzone/dropzone.module";

@NgModule({
  imports: [
    CommonModule,
    JobManagementRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonSubmitModule,
    DropzoneModule
  ],
  declarations: [JobManagementComponent]
})
export class JobManagementModule { }
