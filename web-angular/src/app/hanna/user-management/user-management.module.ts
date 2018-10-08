import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRouting } from './user-management.routing';
import { SmartadminModule } from "../../shared/smartadmin.module";
import { UserManagementComponent } from "./user-management.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../../shared/ui/datatable/smartadmin-datatable.module";
import { ControlMessagesComponentModule } from '../../validation/validation.module';
import { ButtonSimpanModule } from '../../component/button-simpan.module';
import { ButtonDeleteModule } from '../../component/button-delete.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule,
    ControlMessagesComponentModule,
    ButtonSimpanModule,
    ButtonDeleteModule
  ],
  declarations: [UserManagementComponent]
})
export class UserManagementModule { }
