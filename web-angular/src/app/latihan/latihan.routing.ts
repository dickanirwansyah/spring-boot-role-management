import { Routes, RouterModule } from '@angular/router';
import {LatihanComponent} from "./latihan.component";
import {ModuleWithProviders} from "@angular/core";

export const latihanRoutes: Routes = [
    {
        path: '',
        component: LatihanComponent,
        data: {
            //pageTitle: 'Task List1'
        }
    }
];

export const latihanRouting:ModuleWithProviders = RouterModule.forChild(latihanRoutes);

