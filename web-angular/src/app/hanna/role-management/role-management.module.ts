import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleManagementRouting } from './role-management.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { RoleManagementComponent } from "./role-management.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonSubmitModule } from '../../component/button-submit.module';
import { ButtonSaveModule } from '../../component/button-save.module';

@NgModule({
  imports: [
    CommonModule,
    RoleManagementRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonSubmitModule,
    ButtonSaveModule
  ],
  declarations: [RoleManagementComponent]
})
export class RoleManagementModule { }
