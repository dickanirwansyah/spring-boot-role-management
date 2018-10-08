import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from "./scheduler.component";
import { ModuleWithProviders } from "@angular/core";

export const SchedulerRoutes: Routes = [
    {
        path: '',
        component: SchedulerComponent,
        data: {
            pageTitle: 'Scheduler'
        }
    }
];

export const SchedulerRouting:ModuleWithProviders = RouterModule.forChild(SchedulerRoutes);

