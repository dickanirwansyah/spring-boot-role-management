import { Routes, RouterModule } from '@angular/router';
import { JobDashboardComponent } from "./job-dashboard.component";
import { ModuleWithProviders } from "@angular/core";

export const JobDashboardRoutes: Routes = [
    {
        path: '',
        component: JobDashboardComponent,
        data: {
            pageTitle: 'Job Dashboard'
        }
    }
];

export const JobDashboardRouting:ModuleWithProviders = RouterModule.forChild(JobDashboardRoutes);

