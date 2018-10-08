import { Routes, RouterModule } from '@angular/router';
import { ParameterComponent } from "./parameter.component";
import { ModuleWithProviders } from "@angular/core";

export const ParameterRoutes: Routes = [
    {
        path: '',
        component: ParameterComponent,
        data: {
            pageTitle: 'Parameter'
        }
    }
];

export const ParameterRouting:ModuleWithProviders = RouterModule.forChild(ParameterRoutes);

