import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadRouting } from './upload.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { UploadComponent } from "./upload.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonDeleteModule } from '../../component/button-delete.module';

@NgModule({
  imports: [
    CommonModule,
    UploadRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonDeleteModule
  ],
  declarations: [UploadComponent]
})
export class UploadModule { }
