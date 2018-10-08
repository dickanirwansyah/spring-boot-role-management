import { Routes, RouterModule } from '@angular/router';
import { IndividualComponent } from "./individual.component";
import { ModuleWithProviders } from "@angular/core";

export const IndividualRoutes: Routes = [
    {
        path: '',
        component: IndividualComponent,
        data: {
            pageTitle: 'Individual'
        }
    }
];

export const IndividualRouting:ModuleWithProviders = RouterModule.forChild(IndividualRoutes);

