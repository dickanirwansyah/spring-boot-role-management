import { Routes, RouterModule } from '@angular/router';
import { UserSlikComponent } from "./user-slik.component";
import { ModuleWithProviders } from "@angular/core";

export const UserSlikRoutes: Routes = [
    {
        path: '',
        component: UserSlikComponent,
        data: {
            pageTitle: 'User Slik'
        }
    }
];

export const UserSlikRouting:ModuleWithProviders = RouterModule.forChild(UserSlikRoutes);

