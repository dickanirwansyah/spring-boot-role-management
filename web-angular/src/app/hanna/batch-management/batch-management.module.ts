import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BatchManagementRouting } from './batch-management.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { BatchManagementComponent } from "./batch-management.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonDeleteModule } from '../../component/button-delete.module';
import {DropzoneModule} from "../../shared/forms/dropzone/dropzone.module";

@NgModule({
  imports: [
    CommonModule,
    BatchManagementRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonDeleteModule,
    DropzoneModule
  ],
  declarations: [BatchManagementComponent]
})
export class BatchManagementModule { }
