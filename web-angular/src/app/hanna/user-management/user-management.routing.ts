import { Routes, RouterModule } from '@angular/router';
import { UserManagementComponent } from "./user-management.component";
import { ModuleWithProviders } from "@angular/core";

export const UserManagementRoutes: Routes = [
    {
        path: '',
        component: UserManagementComponent,
        data: {
            pageTitle: 'User Management'
        }
    }
];

export const UserManagementRouting:ModuleWithProviders = RouterModule.forChild(UserManagementRoutes);

