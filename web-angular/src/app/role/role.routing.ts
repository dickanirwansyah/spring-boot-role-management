import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from "./role.component";
import { ModuleWithProviders } from "@angular/core";

export const roleRoutes: Routes = [
    {
        path: '',
        component: RoleComponent,
        data: {
            pageTitle: 'Role'
        }
    }
];

export const roleRouting:ModuleWithProviders = RouterModule.forChild(roleRoutes);

