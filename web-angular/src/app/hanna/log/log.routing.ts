import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from "./log.component";
import { ModuleWithProviders } from "@angular/core";

export const LogRoutes: Routes = [
    {
        path: '',
        component: LogComponent,
        data: {
            pageTitle: 'Log'
        }
    }
];

export const LogRouting:ModuleWithProviders = RouterModule.forChild(LogRoutes);

