import { Routes, RouterModule } from '@angular/router';
import { CorporateComponent } from "./corporate.component";
import { ModuleWithProviders } from "@angular/core";

export const CorporateRoutes: Routes = [
    {
        path: '',
        component: CorporateComponent,
        data: {
            pageTitle: 'Corporate'
        }
    }
];

export const CorporateRouting:ModuleWithProviders = RouterModule.forChild(CorporateRoutes);

