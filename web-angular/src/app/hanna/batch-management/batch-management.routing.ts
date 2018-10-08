import { Routes, RouterModule } from '@angular/router';
import { BatchManagementComponent } from "./batch-management.component";
import { ModuleWithProviders } from "@angular/core";

export const BatchManagementRoutes: Routes = [
    {
        path: '',
        component: BatchManagementComponent,
        data: {
            pageTitle: 'Batch Management'
        }
    }
];

export const BatchManagementRouting:ModuleWithProviders = RouterModule.forChild(BatchManagementRoutes);

