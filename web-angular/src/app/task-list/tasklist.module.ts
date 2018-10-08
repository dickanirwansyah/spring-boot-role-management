import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { taskListRouting } from './tasklist.routing';
import {SmartadminModule} from "../shared/smartadmin.module";
import {TaskListComponent} from "./tasklist.component";


import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";


@NgModule({
  imports: [
    CommonModule,
    taskListRouting,
    SmartadminModule,
    SmartadminDatatableModule
  ],
  declarations: [TaskListComponent]
})
export class TaskListModule { }
