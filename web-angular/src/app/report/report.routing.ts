import { Routes, RouterModule } from '@angular/router';
import {ReportComponent} from "./report.component";
import {ModuleWithProviders} from "@angular/core";

export const reportRoutes: Routes = [
    {
        path: '',
        component: ReportComponent,
        data: {
            pageTitle: 'Report'
        }
    }
];

export const reportRouting:ModuleWithProviders = RouterModule.forChild(reportRoutes);

