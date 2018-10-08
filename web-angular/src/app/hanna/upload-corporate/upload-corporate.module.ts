import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadCorporateRouting } from './upload-corporate.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { UploadCorporateComponent } from "./upload-corporate.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonDeleteModule } from '../../component/button-delete.module';

@NgModule({
  imports: [
    CommonModule,
    UploadCorporateRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonDeleteModule
  ],
  declarations: [UploadCorporateComponent]
})
export class UploadCorporateModule { }
