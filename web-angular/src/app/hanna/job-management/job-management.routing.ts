import { Routes, RouterModule } from '@angular/router';
import { JobManagementComponent } from "./job-management.component";
import { ModuleWithProviders } from "@angular/core";

export const JobManagementRoutes: Routes = [
    {
        path: '',
        component: JobManagementComponent,
        data: {
            pageTitle: 'Job Management'
        }
    }
];

export const JobManagementRouting:ModuleWithProviders = RouterModule.forChild(JobManagementRoutes);

