import { Routes, RouterModule } from '@angular/router';
import {TaskListComponent} from "./tasklist.component";
import {ModuleWithProviders} from "@angular/core";

export const taskListRoutes: Routes = [
    {
        path: '',
        component: TaskListComponent,
        data: {
            //pageTitle: 'Task List1'
        }
    }
];

export const taskListRouting:ModuleWithProviders = RouterModule.forChild(taskListRoutes);

