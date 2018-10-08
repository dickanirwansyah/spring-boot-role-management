import { Routes, RouterModule } from '@angular/router';
import {RequestComponent} from "./request.component";
import {ModuleWithProviders} from "@angular/core";

export const requestRoutes: Routes = [
    {
        path: '',
        component: RequestComponent,
        data: {
            pageTitle: 'Request'
        }
    }
];

export const requestRouting:ModuleWithProviders = RouterModule.forChild(requestRoutes);

