import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { roleRouting } from './role.routing';
import { SmartadminModule } from "../shared/smartadmin.module";
import { RoleComponent } from "./role.component";
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { SmartadminInputModule } from "../shared/forms/input/smartadmin-input.module";
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

@NgModule({
  imports: [
    CommonModule,
    roleRouting,
    SmartadminModule,
    ReactiveFormsModule,
    FormsModule,
    SmartadminInputModule,
    SmartadminDatatableModule
  ],
  declarations: [RoleComponent],
  exports: [RoleComponent],
})
export class RoleModule { }
