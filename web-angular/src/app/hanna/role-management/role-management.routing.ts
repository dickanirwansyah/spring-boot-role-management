import { Routes, RouterModule } from '@angular/router';
import { RoleManagementComponent } from "./role-management.component";
import { ModuleWithProviders } from "@angular/core";

export const RoleManagementRoutes: Routes = [
    {
        path: '',
        component: RoleManagementComponent,
        data: {
            pageTitle: 'Role Management'
        }
    }
];

export const RoleManagementRouting:ModuleWithProviders = RouterModule.forChild(RoleManagementRoutes);

